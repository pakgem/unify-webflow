import {
  BUILDER_DRAFT_SCHEMA_VERSION,
  normalizeBuilderDraftPayload,
  type BuilderStory,
} from "../builder/draftTypes";

export function getRuntimeDraftStories(payload: unknown): BuilderStory[] | null {
  const draft = normalizeBuilderDraftPayload(payload);

  if (!draft || draft.schemaVersion !== BUILDER_DRAFT_SCHEMA_VERSION) return null;

  return draft.stories;
}

export function getRuntimeDraftStoriesFromScript(scriptId: string | false | undefined): BuilderStory[] | null {
  if (!scriptId || typeof document === "undefined") return null;

  const script = document.getElementById(scriptId);

  if (!script?.textContent?.trim()) return null;

  try {
    return getRuntimeDraftStories(JSON.parse(script.textContent));
  } catch {
    return null;
  }
}

export async function loadRuntimeDraftStories(
  draftEndpoint: string,
  onLoad: (stories: BuilderStory[], options: { source: "load" }) => void,
): Promise<void> {
  try {
    const response = await fetch(draftEndpoint, {
      method: "GET",
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) return;

    const stories = getRuntimeDraftStories(await response.json() as unknown);
    if (!stories) return;

    onLoad(stories, { source: "load" });
  } catch {
    // The static story bundle remains the fallback when the editable draft endpoint is unavailable.
  }
}
