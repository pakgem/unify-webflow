# Webflow Handoff

Generate the Webflow package:

```bash
npm run build:webflow
```

This writes `webflow-export/`, which is the folder to give to the Webflow developer. It includes:

- `chatbot-stories.js`: the production playback runtime.
- `assets/media/chat-background.png`: the background image used by the stage.
- `assets/data-logos/*`: vendor logos used by the data marketplace story.
- `embed-element.html`: Webflow HTML Embed snippet.
- `before-body-code.html`: Webflow page/project custom code snippet.
- `asset-url-map.template.html`: fallback for Webflow Asset uploads with generated CDN URLs.
- `webflow-cms.md`: instructions for replacing the local draft data with Webflow CMS.
- `cms-collection-list-adapter.template.html`: builds the story draft from hidden CMS Collection Lists.
- `cms-json-script.template.html`: simpler one-item CMS JSON setup.
- `cms-draft.example.json`: minified copy of the current draft, useful for seeding CMS.
- `asset-manifest.json`: runtime paths and asset filenames.

## Preferred Install

Use this when the dev can host `webflow-export/` on a CDN or static host while preserving the `assets/` folder.

1. Upload `webflow-export/chatbot-stories.js`.
2. Upload the complete `webflow-export/assets/` folder.
3. Paste `webflow-export/embed-element.html` into a Webflow HTML Embed where the animation should render.
4. Replace `data-asset-base-url` with the hosted `/assets` URL.
5. Paste `webflow-export/before-body-code.html` before `</body>`.
6. Replace the script `src` with the hosted `chatbot-stories.js` URL.

Example embed:

```html
<section
  data-chatbot-stories
  data-auto-init
  data-theme="light"
  data-builder-draft-endpoint="false"
  data-asset-base-url="https://cdn.example.com/unify-chatbot-stories/assets"
></section>
```

Example script:

```html
<script src="https://cdn.example.com/unify-chatbot-stories/chatbot-stories.js"></script>
```

## Webflow Assets Fallback

If the dev uploads files one-by-one through Webflow Assets, Webflow will produce generated URLs and will not preserve `/media/...` or `/data-logos/...` paths. In that case:

1. Use this root element without `data-auto-init`:

```html
<section data-chatbot-stories data-theme="light"></section>
```

2. Paste `webflow-export/asset-url-map.template.html` before `</body>`.
3. Replace the placeholder URLs in `assetUrlMap` with the actual Webflow asset URLs.
4. Keep the left-side map keys unchanged.

## Runtime Options

The Webflow bundle supports these data attributes on `[data-chatbot-stories]`:

- `data-theme="light"`, `data-theme="dark"`, or `data-theme="system"`.
- `data-asset-base-url="https://.../assets"` for hosted assets that preserve folder paths.
- `data-builder-draft-endpoint="false"` for production Webflow pages.
- `data-builder-draft-script-id="unify-chatbot-stories-cms-draft"` to load CMS-provided draft JSON from a script tag.
- `data-autoplay="false"` to load paused.
- `data-loop="false"` to stop at the final story.
- `data-auto-advance-delay="0.35"` to change story advance timing.
- `data-initial-story="data-marketplace"` or a zero-based index.

Manual initialization is also supported:

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

## Webflow CMS

See `webflow-export/webflow-cms.md` for the CMS migration path. The important rule is that CMS owns content, but the bundle keeps animation choreography. CMS data should be converted to the builder draft schema with `schemaVersion: 3`.

## Notes

The runtime injects its own CSS. Do not paste the JS bundle inline into Webflow custom code; use a hosted script URL. Saans and Feature Text are used automatically if the Webflow site already loads them, with system fallbacks otherwise.
