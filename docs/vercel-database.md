# Vercel Blob draft storage

The homepage story builder loads and autosaves through `GET/PUT /api/story-draft`.

## Production

1. Connect a Vercel Blob store to the project.
2. Make sure Vercel has `BLOB_READ_WRITE_TOKEN` for Production, Preview, and Development. The Blob integration usually adds this automatically.
3. Deploy normally. `vercel.json` uses `npm run build:app` so the demo page and API route deploy together.

The draft is stored as a private JSON blob at `homepage-story-draft.json` by default. You can change that path with `STORY_DRAFT_BLOB_PATH`.

## Write protection

By default, the API accepts builder writes so the deployed editor works immediately. For a public deployment, set `STORY_DRAFT_WRITE_TOKEN` in Vercel. When it is set, `PUT/POST/PATCH /api/story-draft` require the same token in `x-story-draft-token` or `Authorization: Bearer ...`.

For local browser editing against a protected deployment, set this once in devtools:

```js
localStorage.setItem("storyDraftWriteToken", "your-token");
```

## Local development

`npm run dev` still uses Vite directly. That serves the page but not the Vercel API route, so the builder falls back to the bundled story draft.

Use `vercel dev` when you want to test persistence locally. Without Blob env vars, the API writes to `data/story-draft.local.json`, which is ignored by git.
