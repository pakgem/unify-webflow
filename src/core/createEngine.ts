import { ChatActor } from "../actors/ChatActor";
import { CursorActor } from "../actors/CursorActor";
import {
  BUILDER_DRAFT_SCHEMA_VERSION,
  StoryBuilder,
  normalizeBuilderDraftPayload,
  type BuilderStory,
} from "../builder/StoryBuilder";
import { createStoriesFromBuilderDraft } from "../builder/storyRuntimeAdapter";
import { defaultStories } from "../stories";
import { StoryController } from "./StoryController";
import { TargetResolver } from "./TargetResolver";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";
import { renderDefaultMarkup } from "./renderDefaultMarkup";

export function createEngine(root: HTMLElement, config: ChatbotStoriesConfig = {}): ChatbotStoriesInstance {
  renderDefaultMarkup(root, { showBuilder: config.showBuilder !== false });

  const stories = config.stories?.length ? config.stories : defaultStories;
  const draftEndpoint = config.builderDraftEndpoint ?? "/api/story-draft";
  const resolver = new TargetResolver(root);
  const chat = new ChatActor(root);
  const cursor = new CursorActor(root, resolver, {
    reducedMotion:
      config.reducedMotion ??
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
      false,
  });
  const controller = new StoryController(root, stories, resolver, cursor, chat, {
    autoplay: config.autoplay ?? true,
    loop: config.loop ?? true,
    autoAdvanceDelay: config.autoAdvanceDelay ?? 3.2,
    initialStory: config.initialStory ?? 0,
    onStoryChange: config.onStoryChange,
  });
  const applyBuilderStories = (builderStories: BuilderStory[], options: { source?: "load" | "edit" } = {}) => {
    controller.updateStories(createStoriesFromBuilderDraft(builderStories, stories), {
      restartActive: options.source === "load",
    });
  };
  const destroy = controller.destroy.bind(controller);
  const builder =
    config.showBuilder === false
      ? null
      : new StoryBuilder(root, stories, {
          onStorySelect: (storyId) => controller.goTo(storyId),
          onStoriesChange: applyBuilderStories,
          draftEndpoint,
          draftAutoSave: config.builderDraftAutoSave,
        });

  controller.mount();
  builder?.mount();
  if (!builder && draftEndpoint) void loadRuntimeDraftStories(draftEndpoint, applyBuilderStories);

  return {
    play: controller.play.bind(controller),
    pause: controller.pause.bind(controller),
    next: controller.next.bind(controller),
    previous: controller.previous.bind(controller),
    goTo: controller.goTo.bind(controller),
    getState: controller.getState.bind(controller),
    destroy: () => {
      builder?.destroy();
      destroy();
      chat.destroy();
      cursor.destroy();
    },
  };
}

async function loadRuntimeDraftStories(
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
