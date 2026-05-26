import { execFileSync } from "node:child_process";
import { copyFile, cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(repoRoot, "dist");
const exportDir = path.join(repoRoot, "webflow-export");
const exportAssetsDir = path.join(exportDir, "assets");
const bundleFile = "chatbot-stories.js";
const npmBin = process.platform === "win32" ? "npm.cmd" : "npm";

execFileSync(npmBin, ["run", "build"], {
  cwd: repoRoot,
  stdio: "inherit",
});

await rm(exportDir, { recursive: true, force: true });
await mkdir(exportAssetsDir, { recursive: true });

await copyFile(path.join(distDir, bundleFile), path.join(exportDir, bundleFile));
await cp(path.join(distDir, "media"), path.join(exportAssetsDir, "media"), { recursive: true });
await cp(path.join(distDir, "data-logos"), path.join(exportAssetsDir, "data-logos"), { recursive: true });

const bundleStats = await stat(path.join(exportDir, bundleFile));
const assetEntries = await collectAssetEntries(exportAssetsDir);
const generatedAt = new Date().toISOString();

await writeFile(
  path.join(exportDir, "asset-manifest.json"),
  `${JSON.stringify(
    {
      generatedAt,
      bundle: {
        file: bundleFile,
        bytes: bundleStats.size,
      },
      assetBasePath: "assets",
      assets: assetEntries,
    },
    null,
    2,
  )}\n`,
  "utf8",
);

await writeFile(path.join(exportDir, "embed-element.html"), getEmbedElementHtml(), "utf8");
await writeFile(path.join(exportDir, "before-body-code.html"), getBeforeBodyCodeHtml(), "utf8");
await writeFile(path.join(exportDir, "asset-url-map.template.html"), getAssetUrlMapTemplate(assetEntries), "utf8");
await writeFile(path.join(exportDir, "cms-json-script.template.html"), getCmsJsonScriptTemplate(), "utf8");
await writeFile(path.join(exportDir, "cms-collection-list-adapter.template.html"), getCmsCollectionListAdapterTemplate(), "utf8");
await writeFile(path.join(exportDir, "cms-draft.example.json"), await getMinifiedCmsDraftExample(), "utf8");
await copyFile(path.join(repoRoot, "docs", "webflow-cms.md"), path.join(exportDir, "webflow-cms.md"));
await writeFile(path.join(exportDir, "README.md"), getReadme(assetEntries, bundleStats.size, generatedAt), "utf8");

console.log(`Webflow export written to ${path.relative(repoRoot, exportDir)}`);

async function collectAssetEntries(rootDir) {
  const files = [];

  await walk(rootDir, files);

  return files.sort((a, b) => a.localeCompare(b)).map((file) => ({
    file,
    runtimePath: toRuntimePath(file),
  }));
}

async function walk(currentDir, files) {
  const entries = await readdir(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      await walk(absolutePath, files);
      continue;
    }

    if (!entry.isFile()) continue;

    files.push(toPosix(path.relative(exportAssetsDir, absolutePath)));
  }
}

function toRuntimePath(file) {
  return `/${file.split("/").map(encodeURIComponent).join("/")}`;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function getEmbedElementHtml() {
  return `<section
  data-chatbot-stories
  data-auto-init
  data-theme="light"
  data-builder-draft-endpoint="false"
  data-asset-base-url="https://cdn.example.com/unify-chatbot-stories/assets"
></section>
`;
}

function getBeforeBodyCodeHtml() {
  return `<script src="https://cdn.example.com/unify-chatbot-stories/chatbot-stories.js"></script>
`;
}

function getAssetUrlMapTemplate(assetEntries) {
  const mapEntries = assetEntries
    .map((asset) => {
      const fileName = asset.file.split("/").pop() ?? asset.file;

      return `        ${JSON.stringify(asset.runtimePath)}: "https://uploads-ssl.webflow.com/YOUR_SITE_ID/${encodeURIComponent(fileName)}",`;
    })
    .join("\n");

  return `<script src="https://uploads-ssl.webflow.com/YOUR_SITE_ID/chatbot-stories.js"></script>
<script>
  window.addEventListener("DOMContentLoaded", function () {
    if (!window.ChatbotStories) return;

    window.ChatbotStories.init("[data-chatbot-stories]", {
      autoplay: true,
      loop: true,
      autoAdvanceDelay: 3.2,
      builderDraftEndpoint: false,
      assetUrlMap: {
${mapEntries}
      }
    });
  });
</script>
`;
}

function getCmsJsonScriptTemplate() {
  return `<script type="application/json" id="unify-chatbot-stories-cms-draft">
REPLACE_WITH_MINIFIED_WEBFLOW_CMS_DRAFT_JSON
</script>

<section
  data-chatbot-stories
  data-auto-init
  data-theme="light"
  data-builder-draft-endpoint="false"
  data-builder-draft-script-id="unify-chatbot-stories-cms-draft"
  data-asset-base-url="https://cdn.example.com/unify-chatbot-stories/assets"
></section>

<script src="https://cdn.example.com/unify-chatbot-stories/chatbot-stories.js"></script>
`;
}

function getCmsCollectionListAdapterTemplate() {
  return `<script src="https://cdn.example.com/unify-chatbot-stories/chatbot-stories.js"></script>
<script>
  (function () {
    function readJsonScript(script) {
      try {
        return JSON.parse(script.textContent || "{}");
      } catch (error) {
        console.warn("Invalid chatbot CMS JSON", script, error);
        return null;
      }
    }

    function cleanStep(step) {
      if (!step.thinking) delete step.thinking;
      if (!step.component) delete step.component;
      delete step.storyId;
      delete step.sort;
      return step;
    }

    function buildDraftFromCms() {
      var stories = new Map();

      document.querySelectorAll('script[type="application/json"][data-wa-cms-story]').forEach(function (script) {
        var story = readJsonScript(script);
        if (!story || !story.id) return;

        stories.set(story.id, {
          id: story.id,
          label: story.label || story.id,
          summary: story.summary || "",
          sort: Number.isFinite(Number(story.sort)) ? Number(story.sort) : 0,
          steps: []
        });
      });

      document.querySelectorAll('script[type="application/json"][data-wa-cms-step]').forEach(function (script) {
        var step = readJsonScript(script);
        if (!step || !step.storyId || !step.kind) return;

        if (!stories.has(step.storyId)) {
          stories.set(step.storyId, {
            id: step.storyId,
            label: step.storyId,
            summary: "",
            sort: 0,
            steps: []
          });
        }

        stories.get(step.storyId).steps.push(step);
      });

      return {
        schemaVersion: 3,
        stories: Array.from(stories.values())
          .sort(function (a, b) { return a.sort - b.sort; })
          .map(function (story) {
            story.steps = story.steps
              .sort(function (a, b) { return Number(a.sort || 0) - Number(b.sort || 0); })
              .map(cleanStep);
            delete story.sort;
            return story;
          })
          .filter(function (story) { return story.steps.length > 0; })
      };
    }

    window.addEventListener("DOMContentLoaded", function () {
      if (!window.ChatbotStories) return;

      window.ChatbotStories.init("[data-chatbot-stories]", {
        builderDraft: buildDraftFromCms(),
        builderDraftEndpoint: false,
        assetBaseUrl: "https://cdn.example.com/unify-chatbot-stories/assets",
        autoplay: true,
        loop: true,
        autoAdvanceDelay: 3.2
      });
    });
  })();
</script>
`;
}

async function getMinifiedCmsDraftExample() {
  const raw = await readFile(path.join(repoRoot, "data", "story-draft.local.json"), "utf8");

  return `${JSON.stringify(JSON.parse(raw))}\n`;
}

function getReadme(assetEntries, bundleBytes, generatedAt) {
  return `# Webflow Export

Generated: ${generatedAt}

This folder is the implementation handoff for the Unify chatbot stories animation in Webflow.

## Files

- \`${bundleFile}\`: production IIFE runtime for Webflow custom code (${formatBytes(bundleBytes)}).
- \`assets/media/chat-background.png\`: media slab background used by the animation.
- \`assets/data-logos/*\`: vendor logos referenced by the data marketplace story.
- \`embed-element.html\`: paste into a Webflow HTML Embed element where the animation should appear.
- \`before-body-code.html\`: paste into the page or project custom code before \`</body>\`.
- \`asset-url-map.template.html\`: fallback template if assets are uploaded one-by-one to Webflow Assets.
- \`webflow-cms.md\`: instructions for replacing the local draft data with Webflow CMS.
- \`cms-collection-list-adapter.template.html\`: script for building the story draft from hidden CMS Collection Lists.
- \`cms-json-script.template.html\`: simpler one-item CMS JSON setup.
- \`cms-draft.example.json\`: minified copy of the current local draft, useful for seeding CMS.
- \`asset-manifest.json\`: machine-readable list of runtime asset paths.

## Preferred Webflow Install

Use this when the dev can host this folder on a CDN or static file host while preserving the \`assets/\` directory structure.

1. Upload \`${bundleFile}\` and the full \`assets/\` folder to the same static host.
2. Paste \`embed-element.html\` into the target Webflow page as an HTML Embed.
3. Replace \`https://cdn.example.com/unify-chatbot-stories/assets\` in the embed with the hosted \`assets\` URL.
4. Paste \`before-body-code.html\` into the page or project custom code before \`</body>\`.
5. Replace \`https://cdn.example.com/unify-chatbot-stories/chatbot-stories.js\` with the hosted runtime URL.

The embed uses \`data-auto-init\`, so the script initializes itself when the page loads.

## Webflow Assets Fallback

Use this when the dev uploads every file through Webflow Assets and receives generated Webflow CDN URLs.

1. Paste an HTML Embed with this root element only:

\`\`\`html
<section data-chatbot-stories data-theme="light"></section>
\`\`\`

2. Paste \`asset-url-map.template.html\` before \`</body>\`.
3. Replace every placeholder URL in \`assetUrlMap\` with the actual Webflow asset URL.
4. Keep the left side of every map entry unchanged. Those are the runtime paths used inside the bundle.

Do not use \`data-auto-init\` with the asset map fallback. The template initializes manually so the map is available before mount.

## Webflow CMS Content

Read \`webflow-cms.md\` when switching the story content from the local draft data to Webflow CMS.

The short version:

- Use \`cms-collection-list-adapter.template.html\` if editors should manage stories and steps as CMS items.
- Use \`cms-json-script.template.html\` if the dev wants one CMS item containing minified builder draft JSON.
- Keep \`builderDraftEndpoint: false\` unless a server route is intentionally providing the draft JSON.
- Keep story IDs unchanged: \`hit-ground-running\`, \`data-marketplace\`, \`crm-update\`, \`research-brief\`, and \`csv-import-cleanup\`.

## Configuration

Useful root attributes:

- \`data-theme="light"\`, \`data-theme="dark"\`, or \`data-theme="system"\`.
- \`data-asset-base-url="https://.../assets"\` when hosted paths preserve \`media/\` and \`data-logos/\`.
- \`data-builder-draft-endpoint="false"\` for Webflow production. This prevents a useless \`/api/story-draft\` request.
- \`data-builder-draft-script-id="unify-chatbot-stories-cms-draft"\` to load CMS-provided draft JSON from a script tag.
- \`data-autoplay="false"\` if the animation should load paused.
- \`data-loop="false"\` if the story sequence should stop at the end.
- \`data-initial-story="data-marketplace"\` or a zero-based index if a specific story should start first.

Manual JS config is also supported:

\`\`\`html
<script>
  window.ChatbotStories.init("[data-chatbot-stories]", {
    assetBaseUrl: "https://cdn.example.com/unify-chatbot-stories/assets",
    builderDraftEndpoint: false,
    autoplay: true,
    loop: true,
    autoAdvanceDelay: 3.2
  });
</script>
\`\`\`

## Implementation Notes

- Do not paste \`${bundleFile}\` inline into Webflow custom code. Use a hosted script URL.
- The bundle injects its own CSS. No separate CSS file is required.
- Saans and Feature Text are used when the Webflow site already loads them; otherwise the runtime falls back to system fonts and Georgia.
- The production bundle contains playback only, not the local story builder UI.
- If the background slab or vendor logos are missing, check \`data-asset-base-url\` or the \`assetUrlMap\` values first.

## QA Checklist

- The animation appears in the intended page section on desktop and mobile.
- No browser console error for \`ChatbotStories: root element not found\`.
- No network request to \`/api/story-draft\` on the Webflow site.
- \`chat-background.png\` loads successfully.
- Vendor logos in the data marketplace story load successfully.
- Story controls work: previous, next, pause/play, and scrubber.

## Asset Count

${assetEntries.length} asset files are included under \`assets/\`.
`;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;

  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
