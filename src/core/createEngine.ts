import { StoryBuilder } from "../builder/StoryBuilder";
import { createStoryRuntime } from "./createStoryRuntime";
import { loadRuntimeDraftStories } from "./loadRuntimeDraftStories";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";
import { renderDefaultMarkup } from "./renderDefaultMarkup";

export function createEngine(root: HTMLElement, config: ChatbotStoriesConfig = {}): ChatbotStoriesInstance {
  renderDefaultMarkup(root, { showBuilder: config.showBuilder !== false });

  const runtime = createStoryRuntime(root, config);
  const builder =
    config.showBuilder === false
      ? null
      : new StoryBuilder(root, runtime.stories, {
          onStorySelect: (storyId) => runtime.controller.goTo(storyId),
          onStoriesChange: runtime.applyBuilderStories,
          draftEndpoint: runtime.draftEndpoint,
          draftAutoSave: config.builderDraftAutoSave,
        });

  runtime.controller.mount();
  builder?.mount();
  if (!builder && runtime.draftEndpoint) {
    void loadRuntimeDraftStories(runtime.draftEndpoint, runtime.applyBuilderStories);
  }

  return runtime.toInstance(() => builder?.destroy());
}
