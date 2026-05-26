import { ChatActor } from "../actors/ChatActor";
import { CursorActor } from "../actors/CursorActor";
import type { BuilderStory } from "../builder/draftTypes";
import { createStoriesFromBuilderDraft } from "../builder/storyRuntimeAdapter";
import { defaultStories } from "../stories";
import { applyRuntimeAssetUrls, createAssetUrlResolver } from "./assetUrls";
import { StoryController } from "./StoryController";
import { TargetResolver } from "./TargetResolver";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance, StoryDefinition } from "./types";

type ApplyBuilderStoriesOptions = {
  source?: "load" | "edit";
};

type StoryRuntime = {
  stories: StoryDefinition[];
  draftEndpoint: string | false;
  controller: StoryController;
  chat: ChatActor;
  cursor: CursorActor;
  applyBuilderStories: (builderStories: BuilderStory[], options?: ApplyBuilderStoriesOptions) => void;
  toInstance: (onDestroy?: () => void) => ChatbotStoriesInstance;
};

export function createStoryRuntime(root: HTMLElement, config: ChatbotStoriesConfig = {}): StoryRuntime {
  const stories = config.stories?.length ? config.stories : defaultStories;
  const draftEndpoint = config.builderDraftEndpoint ?? "/api/story-draft";
  const resolveAssetUrl = createAssetUrlResolver(config);
  applyRuntimeAssetUrls(root, resolveAssetUrl);
  const reducedMotion =
    config.reducedMotion ??
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
    false;
  const resolver = new TargetResolver(root);
  const chat = new ChatActor(root, { resolveAssetUrl });
  const cursor = new CursorActor(root, resolver, { reducedMotion });
  const controller = new StoryController(root, stories, resolver, cursor, chat, {
    autoplay: config.autoplay ?? true,
    loop: config.loop ?? true,
    autoAdvanceDelay: config.autoAdvanceDelay ?? 3.2,
    initialStory: config.initialStory ?? 0,
    onStoryChange: config.onStoryChange,
    resolveAssetUrl,
  });
  const applyBuilderStories = (builderStories: BuilderStory[], options: ApplyBuilderStoriesOptions = {}) => {
    controller.updateStories(createStoriesFromBuilderDraft(builderStories, stories), {
      restartActive: options.source === "load",
    });
  };

  return {
    stories,
    draftEndpoint,
    controller,
    chat,
    cursor,
    applyBuilderStories,
    toInstance: (onDestroy) => ({
      play: controller.play.bind(controller),
      pause: controller.pause.bind(controller),
      next: controller.next.bind(controller),
      previous: controller.previous.bind(controller),
      goTo: controller.goTo.bind(controller),
      getState: controller.getState.bind(controller),
      destroy: () => {
        onDestroy?.();
        controller.destroy();
        chat.destroy();
        cursor.destroy();
      },
    }),
  };
}
