# Vercel database setup

The homepage story draft loads and autosaves through `GET/PUT /api/story-draft`.

## Production

1. Create a Neon Postgres database from the Vercel Marketplace.
2. Add `DATABASE_URL` to the Vercel project environment variables.
3. Deploy normally. `vercel.json` uses `npm run build:app` so the demo page and API route deploy together.

The first time the builder opens, it seeds the database with the current draft if no row exists yet. The API creates this table automatically:

```sql
create table if not exists story_drafts (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);
```

## Local development

`npm run dev` still uses Vite directly. That serves the page but not the Vercel API route, so the builder falls back to the local static draft.

Use `vercel dev` when you want to test persistence locally. Without `DATABASE_URL`, the API writes to `data/story-draft.local.json`, which is ignored by git.
