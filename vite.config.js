import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "vite";

const LOCAL_DRAFT_PATH = path.resolve(process.cwd(), "data/story-draft.local.json");

export default defineConfig(({ mode }) => ({
  plugins: [localStoryDraftApi()],
  build: mode === "app"
    ? {}
    : {
        lib: {
          entry: "src/runtime.ts",
          name: "ChatbotStories",
          formats: ["iife", "es"],
          fileName: (format) => (format === "iife" ? "chatbot-stories.js" : "chatbot-stories.es.js"),
        },
      },
}));

function localStoryDraftApi() {
  return {
    name: "local-story-draft-api",
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const url = new URL(request.url ?? "/", "http://127.0.0.1");

        if (url.pathname !== "/api/story-draft") {
          next();
          return;
        }

        response.setHeader("Cache-Control", "no-store");

        try {
          if (request.method === "OPTIONS") {
            response.statusCode = 204;
            response.end();
            return;
          }

          if (request.method === "GET") {
            const raw = await readFile(LOCAL_DRAFT_PATH, "utf8");
            sendJson(response, 200, JSON.parse(raw));
            return;
          }

          if (request.method === "PUT" || request.method === "POST" || request.method === "PATCH") {
            const body = await readRequestJson(request);

            if (!body || typeof body !== "object" || !Array.isArray(body.stories)) {
              sendJson(response, 400, { error: "invalid_story_draft" });
              return;
            }

            const draft = {
              id: "homepage-story-draft",
              schemaVersion: typeof body.schemaVersion === "number" ? body.schemaVersion : undefined,
              stories: body.stories,
              updatedAt: new Date().toISOString(),
            };

            await mkdir(path.dirname(LOCAL_DRAFT_PATH), { recursive: true });
            await writeFile(LOCAL_DRAFT_PATH, `${JSON.stringify(draft, null, 2)}\n`, "utf8");
            sendJson(response, 200, draft);
            return;
          }

          response.setHeader("Allow", "GET, PUT, POST, PATCH, OPTIONS");
          sendJson(response, 405, { error: "method_not_allowed" });
        } catch (error) {
          const code = error && typeof error === "object" && "code" in error ? error.code : undefined;

          sendJson(response, code === "ENOENT" ? 404 : 500, {
            error: code === "ENOENT" ? "not_found" : "local_story_draft_error",
          });
        }
      });
    },
  };
}

async function readRequestJson(request) {
  const chunks = [];

  for await (const chunk of request) chunks.push(Buffer.from(chunk));

  const raw = Buffer.concat(chunks).toString("utf8").trim();
  return raw ? JSON.parse(raw) : {};
}

function sendJson(response, status, body) {
  response.statusCode = status;
  if (status !== 204) response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(status === 204 ? "" : JSON.stringify(body));
}
