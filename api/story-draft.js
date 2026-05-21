import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const DRAFT_ID = process.env.STORY_DRAFT_ID || "homepage-story-draft";
const LOCAL_DRAFT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "story-draft.local.json",
);

let databaseReady = false;

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
    const status = message === "database_not_configured" ? 503 : 500;

    return sendJson(response, status, { error: message });
  }
}

async function readDraft() {
  const sql = getSqlClient();

  if (sql) {
    await ensureDatabase(sql);
    const rows = await sql`
      SELECT payload, updated_at
      FROM story_drafts
      WHERE id = ${DRAFT_ID}
      LIMIT 1
    `;
    const row = rows[0];

    if (!row) return null;

    return {
      id: DRAFT_ID,
      stories: normalizePayload(row.payload).stories,
      updatedAt: row.updated_at instanceof Date ? row.updated_at.toISOString() : row.updated_at,
    };
  }

  if (process.env.VERCEL) throw new Error("database_not_configured");

  return readLocalDraft();
}

async function writeDraft(draft) {
  const sql = getSqlClient();

  if (sql) {
    await ensureDatabase(sql);
    await sql`
      INSERT INTO story_drafts (id, payload, updated_at)
      VALUES (${DRAFT_ID}, ${JSON.stringify({ stories: draft.stories })}::jsonb, now())
      ON CONFLICT (id)
      DO UPDATE SET payload = EXCLUDED.payload, updated_at = now()
    `;
    return;
  }

  if (process.env.VERCEL) throw new Error("database_not_configured");

  await writeLocalDraft(draft);
}

function getSqlClient() {
  const databaseUrl =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.NEON_DATABASE_URL;

  return databaseUrl ? neon(databaseUrl) : null;
}

async function ensureDatabase(sql) {
  if (databaseReady) return;

  await sql`
    CREATE TABLE IF NOT EXISTS story_drafts (
      id text PRIMARY KEY,
      payload jsonb NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  databaseReady = true;
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

function isDraftPayload(value) {
  return Boolean(
    value &&
      typeof value === "object" &&
      Array.isArray(value.stories),
  );
}

function normalizePayload(payload) {
  return typeof payload === "string" ? JSON.parse(payload) : payload;
}

function sendJson(response, status, body) {
  response.statusCode = status;
  if (status !== 204) response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(status === 204 ? "" : JSON.stringify(body));
}
