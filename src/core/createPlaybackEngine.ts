import { ChatActor } from "../actors/ChatActor";
import { CursorActor } from "../actors/CursorActor";
import type { BuilderStory } from "../builder/draftTypes";
import { createStoriesFromBuilderDraft } from "../builder/storyRuntimeAdapter";
import { defaultStories } from "../stories";
import { StoryController } from "./StoryController";
import { TargetResolver } from "./TargetResolver";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";
import { loadRuntimeDraftStories } from "./loadRuntimeDraftStories";
import { renderPlaybackMarkup } from "./renderPlaybackMarkup";

export function createPlaybackEngine(root: HTMLElement, config: ChatbotStoriesConfig = {}): ChatbotStoriesInstance {
  renderPlaybackMarkup(root);

  const stories = config.stories?.length ? config.stories : defaultStories;
  const draftEndpoint = config.builderDraftEndpoint ?? "/api/story-draft";
  const reducedMotion =
    config.reducedMotion ??
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
    false;
  const resolver = new TargetResolver(root);
  const chat = new ChatActor(root);
  const cursor = new CursorActor(root, resolver, { reducedMotion });
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

  controller.mount();
  if (draftEndpoint) void loadRuntimeDraftStories(draftEndpoint, applyBuilderStories);

  return {
    play: controller.play.bind(controller),
    pause: controller.pause.bind(controller),
    next: controller.next.bind(controller),
    previous: controller.previous.bind(controller),
    goTo: controller.goTo.bind(controller),
    getState: controller.getState.bind(controller),
    destroy: () => {
      controller.destroy();
      chat.destroy();
      cursor.destroy();
    },
  };
}
