import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { get, put } from "@vercel/blob";

const DRAFT_ID = process.env.STORY_DRAFT_ID || "homepage-story-draft";
const DRAFT_BLOB_PATH = process.env.STORY_DRAFT_BLOB_PATH || `${DRAFT_ID}.json`;
const LOCAL_DRAFT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "story-draft.local.json",
);

export default async function handler(request, response) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method === "OPTIONS") {
    return sendJson(response, 204, {});
  }

  try {
    if (request.method === "GET") {
      const draft = await readDraft();

      if (!draft) return sendJson(response, 404, { error: "not_found" });

      return sendJson(response, 200, draft);
    }

    if (request.method === "PUT" || request.method === "POST" || request.method === "PATCH") {
      if (!isAuthorizedWrite(request)) {
        return sendJson(response, 401, { error: "unauthorized" });
      }

      const body = await readJsonBody(request);

      if (!isDraftPayload(body)) {
        return sendJson(response, 400, { error: "invalid_story_draft" });
      }

      const draft = {
        id: DRAFT_ID,
        stories: body.stories,
        updatedAt: new Date().toISOString(),
      };

      await writeDraft(draft);

      return sendJson(response, 200, draft);
    }

    response.setHeader("Allow", "GET, PUT, POST, PATCH, OPTIONS");
    return sendJson(response, 405, { error: "method_not_allowed" });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown_error";
    const status = message === "blob_not_configured" ? 503 : 500;

    return sendJson(response, status, { error: message });
  }
}

async function readDraft() {
  if (isBlobConfigured()) {
    const result = await get(DRAFT_BLOB_PATH, {
      access: "private",
      useCache: false,
    });

    if (!result?.stream) return null;

    const payload = JSON.parse(await readStreamText(result.stream));

    return isDraftPayload(payload)
      ? {
          id: DRAFT_ID,
          stories: payload.stories,
          updatedAt: payload.updatedAt || result.blob.uploadedAt.toISOString(),
        }
      : null;
  }

  if (process.env.VERCEL) throw new Error("blob_not_configured");

  return readLocalDraft();
}

async function writeDraft(draft) {
  if (isBlobConfigured()) {
    await put(DRAFT_BLOB_PATH, JSON.stringify(draft, null, 2), {
      access: "private",
      allowOverwrite: true,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
    return;
  }

  if (process.env.VERCEL) throw new Error("blob_not_configured");

  await writeLocalDraft(draft);
}

function isBlobConfigured() {
  return Boolean(
    process.env.BLOB_READ_WRITE_TOKEN ||
      (process.env.BLOB_STORE_ID && process.env.VERCEL_OIDC_TOKEN),
  );
}

async function readLocalDraft() {
  try {
    const raw = await readFile(LOCAL_DRAFT_PATH, "utf8");
    const draft = JSON.parse(raw);

    return isDraftPayload(draft) ? {
      id: DRAFT_ID,
      stories: draft.stories,
      updatedAt: draft.updatedAt || null,
    } : null;
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") return null;
    throw error;
  }
}

async function writeLocalDraft(draft) {
  await mkdir(path.dirname(LOCAL_DRAFT_PATH), { recursive: true });
  await writeFile(LOCAL_DRAFT_PATH, `${JSON.stringify(draft, null, 2)}\n`, "utf8");
}

async function readJsonBody(request) {
  if (typeof request.body === "string") {
    return request.body.trim() ? JSON.parse(request.body) : {};
  }

  if (request.body && typeof request.body === "object" && !Buffer.isBuffer(request.body)) {
    return request.body;
  }

  const chunks = [];

  for await (const chunk of request) chunks.push(Buffer.from(chunk));

  const raw = Buffer.concat(chunks).toString("utf8").trim();

  return raw ? JSON.parse(raw) : {};
}

async function readStreamText(stream) {
  return new Response(stream).text();
}

function isDraftPayload(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      Array.isArray(value.stories),
  );
}

function isAuthorizedWrite(request) {
  const token = process.env.STORY_DRAFT_WRITE_TOKEN;

  if (!token) return true;

  const suppliedToken = getHeader(request, "x-story-draft-token");
  const authorization = getHeader(request, "authorization");

  return suppliedToken === token || authorization === `Bearer ${token}`;
}

function getHeader(request, name) {
  if (request.headers?.get) return request.headers.get(name);

  const headers = request.headers || {};
  const exact = headers[name];
  const lower = headers[name.toLowerCase()];

  return Array.isArray(exact) ? exact[0] : exact || (Array.isArray(lower) ? lower[0] : lower);
}

function sendJson(response, status, body) {
  response.statusCode = status;
  if (status !== 204) response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(status === 204 ? "" : JSON.stringify(body));
}
