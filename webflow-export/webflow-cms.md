# Webflow CMS Content Source

The animation runtime is still code, but the story copy and component data can come from Webflow CMS.

Important boundary: CMS should own content, ordering, tables, cards, sources, people, and labels. The bundle should keep the choreography, cursor motion, timing rules, layout, and component renderers. The runtime converts CMS content into the existing builder draft schema.

## Runtime Hooks

The Webflow bundle supports three content sources:

1. Built-in stories: default fallback compiled into `chatbot-stories.js`.
2. JSON endpoint: set `builderDraftEndpoint` to a URL that returns the builder draft payload.
3. Inline JSON: pass `builderDraft` in `ChatbotStories.init(...)`, or point `data-builder-draft-script-id` at a JSON script tag.

For Webflow CMS, use option 2 or 3. Do not use the default `/api/story-draft` endpoint in Webflow production.

## Builder Draft Shape

The runtime expects this payload:

```json
{
  "schemaVersion": 3,
  "stories": [
    {
      "id": "data-marketplace",
      "label": "100+ data sources at your fingertips",
      "summary": "Use natural language search to navigate B2B contacts and companies.",
      "steps": [
        {
          "id": "data-marketplace-step-1",
          "kind": "user",
          "text": "Show me new hires at dev-tool companies with 50+ employees.",
          "note": ""
        }
      ]
    }
  ]
}
```

Story IDs must match the built-in base stories, because the CMS payload overrides the content inside those existing animated scenes:

- `hit-ground-running`
- `data-marketplace`
- `crm-update`
- `research-brief`
- `csv-import-cleanup`

Unknown story IDs are ignored by the current runtime.

Supported step kinds:

- `user`
- `assistant`
- `thinking`
- `component`
- `cursor`
- `status`
- `file`

Supported component kinds:

- `table`
- `strategyCards`
- `enrichment`
- `dataSources`
- `uploadedFiles`
- `mailboxConnection`
- `styleProfile`
- `proximityList`
- `personalizationSwipeGame`
- `sequenceEngagement`
- `generic`

## Recommended CMS Model

Use two Webflow Collections:

### Chatbot Animation Stories

Fields:

- `story_id` - Plain text. Must be one of the built-in story IDs above.
- `label` - Plain text.
- `summary` - Plain text or rich text converted to plain text.
- `sort_order` - Number.
- `enabled` - Switch.

### Chatbot Animation Steps

Fields:

- `story` - Reference to Chatbot Animation Stories, or plain text `story_id`.
- `step_id` - Plain text. Stable ID for the step.
- `sort_order` - Number.
- `kind` - Option field using the supported step kinds.
- `text` - Plain text.
- `note` - Plain text.
- `thinking_json` - Plain text or rich text containing JSON. Only used for thinking steps.
- `component_kind` - Option field using the supported component kinds.
- `component_json` - Plain text or rich text containing JSON. Only used for component steps.
- `enabled` - Switch.

This model keeps normal copy editable in Webflow fields and keeps nested structures, like table rows or strategy cards, inside JSON fields. That avoids creating many extra collections for repeated rows inside repeated steps.

## Webflow Page Setup

1. Add the normal animation root without `data-auto-init`:

```html
<section data-chatbot-stories data-theme="light"></section>
```

2. Add hidden Collection Lists for enabled Stories and enabled Steps.
3. Sort Stories by `sort_order` ascending.
4. Sort Steps by Story, then `sort_order` ascending.
5. In each Story Collection Item, add a code embed shaped like:

```html
<script type="application/json" data-wa-cms-story>
{
  "id": "REPLACE_WITH_STORY_ID_FIELD",
  "label": "REPLACE_WITH_LABEL_FIELD",
  "summary": "REPLACE_WITH_SUMMARY_FIELD",
  "sort": 10
}
</script>
```

6. In each Step Collection Item, add a code embed shaped like:

```html
<script type="application/json" data-wa-cms-step>
{
  "storyId": "REPLACE_WITH_STORY_ID_FIELD",
  "id": "REPLACE_WITH_STEP_ID_FIELD",
  "sort": 10,
  "kind": "user",
  "text": "REPLACE_WITH_TEXT_FIELD",
  "note": "",
  "thinking": null,
  "component": null
}
</script>
```

For a thinking step, replace `thinking: null` with the JSON from `thinking_json`.
For a component step, replace `component: null` with the JSON from `component_json`.

7. Paste `cms-collection-list-adapter.template.html` before `</body>` and replace the script and asset URLs.

The adapter reads the hidden CMS JSON scripts, builds the builder draft payload, and calls:

```js
window.ChatbotStories.init("[data-chatbot-stories]", {
  builderDraft: draft,
  builderDraftEndpoint: false,
  assetBaseUrl: "https://cdn.example.com/unify-chatbot-stories/assets"
});
```

## Simpler Single-Item CMS Model

If the dev wants the fastest implementation, create one Webflow Collection named `Chatbot Animation Drafts`:

- `name` - Plain text.
- `slug` - Slug.
- `draft_json` - Plain text or rich text containing minified builder draft JSON.
- `enabled` - Switch.

Then output the active item's JSON into:

```html
<script type="application/json" id="unify-chatbot-stories-cms-draft">
REPLACE_WITH_MINIFIED_DRAFT_JSON_FIELD
</script>

<section
  data-chatbot-stories
  data-auto-init
  data-theme="light"
  data-builder-draft-endpoint="false"
  data-builder-draft-script-id="unify-chatbot-stories-cms-draft"
  data-asset-base-url="https://cdn.example.com/unify-chatbot-stories/assets"
></section>
```

The current local draft is larger than 50 KB when pretty-printed, but under 50 KB when minified. Keep the Webflow field minified if using this route.

## JSON Examples

Strategy cards:

```json
{
  "kind": "strategyCards",
  "title": "Three go-to-market strategies",
  "cards": [
    {
      "label": "Idea one",
      "title": "Target DevOps teams outgrowing AWS complexity",
      "summary": "I’ll find mid-market SaaS companies with heavy AWS footprints.\nI’ll run a 3-step email + LinkedIn sequence."
    }
  ]
}
```

Thinking state:

```json
{
  "title": "Finding connections to Stripe",
  "elapsed": "4m 20s",
  "items": [
    {
      "label": "Mapping Stripe’s people graph",
      "detail": "Surfacing common cap-table connections.",
      "disclosure": "Show more"
    }
  ]
}
```

Table:

```json
{
  "kind": "table",
  "title": "Warmest paths into Stripe",
  "eyebrow": "Natural language search",
  "count": "3 records",
  "columns": ["Name", "Role", "Via connector"],
  "rows": [
    ["Jamie Chen", "VP of Sales at Linear", "Priya Shah - Both at Plaid"],
    ["Andre Park", "Head of Growth at Vercel", "Marco Liu - Stanford GSB"]
  ]
}
```

Data sources:

```json
{
  "kind": "dataSources",
  "title": "Data marketplace",
  "subtitle": "Connected sources",
  "sources": [
    {
      "category": "CRM",
      "name": "HubSpot",
      "detail": "CRM records",
      "logoSrc": "/data-logos/HubSpot.svg"
    }
  ]
}
```

## Server Endpoint Option

If the dev prefers a real endpoint, create a serverless route that calls the Webflow Data API, maps Collection items into the builder draft shape, and returns JSON. The frontend should not call the Webflow API directly because the API token must stay server-side.

The runtime setup is:

```html
<section
  data-chatbot-stories
  data-auto-init
  data-theme="light"
  data-builder-draft-endpoint="https://example.com/api/webflow-chatbot-stories"
  data-asset-base-url="https://cdn.example.com/unify-chatbot-stories/assets"
></section>
```

The endpoint response must be the builder draft payload with `schemaVersion: 3`.

## QA

- Publish the Webflow CMS items before testing on the live domain.
- Confirm the page does not request `/api/story-draft`.
- For manual debugging, store the instance returned by `window.ChatbotStories.init(...)` and call `instance.getState()`.
- Confirm CMS JSON parses cleanly before `ChatbotStories.init` runs.
- Confirm component JSON fields use double quotes, not single quotes.
- Confirm story IDs match the built-in story IDs exactly.
- Confirm logo paths still match the asset strategy: `assetBaseUrl` or `assetUrlMap`.
