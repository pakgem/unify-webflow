import {
  BUILDER_DRAFT_SCHEMA_VERSION,
  normalizeBuilderDraftPayload,
  type BuilderStory,
} from "../builder/draftTypes";

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

    const draft = normalizeBuilderDraftPayload(await response.json() as unknown);
    if (!draft || draft.schemaVersion !== BUILDER_DRAFT_SCHEMA_VERSION) return;

    onLoad(draft.stories, { source: "load" });
  } catch {
    // The static story bundle remains the fallback when the editable draft endpoint is unavailable.
  }
}
