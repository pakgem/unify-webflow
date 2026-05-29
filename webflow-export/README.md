# Webflow Export

Generated: 2026-05-29T01:38:52.190Z

This folder is the implementation handoff for the Unify chatbot stories animation in Webflow.

## Files

- `chatbot-stories.js`: production IIFE runtime for Webflow custom code (578 KB).
- `assets/media/chat-background.png`: media slab background used by the animation.
- `assets/data-logos/*`: vendor logos referenced by the data marketplace story.
- `embed-element.html`: paste into a Webflow HTML Embed element where the animation should appear.
- `before-body-code.html`: paste into the page or project custom code before `</body>`.
- `asset-url-map.template.html`: fallback template if assets are uploaded one-by-one to Webflow Assets.
- `webflow-cms.md`: instructions for replacing the local draft data with Webflow CMS.
- `cms-collection-list-adapter.template.html`: script for building the story draft from hidden CMS Collection Lists.
- `cms-json-script.template.html`: simpler one-item CMS JSON setup.
- `cms-draft.example.json`: minified copy of the current local draft, useful for seeding CMS.
- `asset-manifest.json`: machine-readable list of runtime asset paths.

## Preferred Webflow Install

Use this when the dev can host this folder on a CDN or static file host while preserving the `assets/` directory structure.

1. Upload `chatbot-stories.js` and the full `assets/` folder to the same static host.
2. Paste `embed-element.html` into the target Webflow page as an HTML Embed.
3. Replace `https://cdn.example.com/unify-chatbot-stories/assets` in the embed with the hosted `assets` URL.
4. Paste `before-body-code.html` into the page or project custom code before `</body>`.
5. Replace `https://cdn.example.com/unify-chatbot-stories/chatbot-stories.js` with the hosted runtime URL.

The embed uses `data-auto-init`, so the script initializes itself when the page loads.

## Webflow Assets Fallback

Use this when the dev uploads every file through Webflow Assets and receives generated Webflow CDN URLs.

1. Paste an HTML Embed with this root element only:

```html
<section data-chatbot-stories data-theme="light"></section>
```

2. Paste `asset-url-map.template.html` before `</body>`.
3. Replace every placeholder URL in `assetUrlMap` with the actual Webflow asset URL.
4. Keep the left side of every map entry unchanged. Those are the runtime paths used inside the bundle.

Do not use `data-auto-init` with the asset map fallback. The template initializes manually so the map is available before mount.

## Webflow CMS Content

Read `webflow-cms.md` when switching the story content from the local draft data to Webflow CMS.

The short version:

- Use `cms-collection-list-adapter.template.html` if editors should manage stories and steps as CMS items.
- Use `cms-json-script.template.html` if the dev wants one CMS item containing minified builder draft JSON.
- Keep `builderDraftEndpoint: false` unless a server route is intentionally providing the draft JSON.
- Keep story IDs unchanged: `hit-ground-running`, `data-marketplace`, `crm-update`, `research-brief`, and `csv-import-cleanup`.

## Configuration

Useful root attributes:

- `data-theme="light"`, `data-theme="dark"`, or `data-theme="system"`.
- `data-asset-base-url="https://.../assets"` when hosted paths preserve `media/` and `data-logos/`.
- `data-builder-draft-endpoint="false"` for Webflow production. This prevents a useless `/api/story-draft` request.
- `data-builder-draft-script-id="unify-chatbot-stories-cms-draft"` to load CMS-provided draft JSON from a script tag.
- `data-autoplay="false"` if the animation should load paused.
- `data-loop="false"` if the story sequence should stop at the end.
- `data-initial-story="data-marketplace"` or a zero-based index if a specific story should start first.

Manual JS config is also supported:

```html
<script>
  window.ChatbotStories.init("[data-chatbot-stories]", {
    assetBaseUrl: "https://cdn.example.com/unify-chatbot-stories/assets",
    builderDraftEndpoint: false,
    autoplay: true,
    loop: true,
    autoAdvanceDelay: 0.35
  });
</script>
```

## Implementation Notes

- Do not paste `chatbot-stories.js` inline into Webflow custom code. Use a hosted script URL.
- The bundle injects its own CSS. No separate CSS file is required.
- Saans and Feature Text are used when the Webflow site already loads them; otherwise the runtime falls back to system fonts and Georgia.
- The production bundle contains playback only, not the local story builder UI.
- If the background slab or vendor logos are missing, check `data-asset-base-url` or the `assetUrlMap` values first.

## QA Checklist

- The animation appears in the intended page section on desktop and mobile.
- No browser console error for `ChatbotStories: root element not found`.
- No network request to `/api/story-draft` on the Webflow site.
- `chat-background.png` loads successfully.
- Vendor logos in the data marketplace story load successfully.
- Story controls work: previous, next, pause/play, and scrubber.

## Asset Count

41 asset files are included under `assets/`.
