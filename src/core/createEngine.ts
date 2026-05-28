import { StoryBuilder } from "../builder/StoryBuilder";
import { createStoryRuntime } from "./createStoryRuntime";
import {
  getRuntimeDraftStories,
  getRuntimeDraftStoriesFromScript,
  loadRuntimeDraftStories,
} from "./loadRuntimeDraftStories";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";
import { renderDefaultMarkup } from "./renderDefaultMarkup";

export function createEngine(root: HTMLElement, config: ChatbotStoriesConfig = {}): ChatbotStoriesInstance {
  const shouldShowBuilder = config.showBuilder === true;

  renderDefaultMarkup(root, { showBuilder: shouldShowBuilder });

  const runtime = createStoryRuntime(root, config);
  const initialDraftStories =
    getRuntimeDraftStories(config.builderDraft) ??
    getRuntimeDraftStoriesFromScript(config.builderDraftScriptId);

  if (initialDraftStories) {
    runtime.applyBuilderStories(initialDraftStories);
  }

  const builder =
    shouldShowBuilder
      ? new StoryBuilder(root, runtime.stories, {
          onStorySelect: (storyId) => runtime.controller.goTo(storyId),
          onStoriesChange: runtime.applyBuilderStories,
          draftEndpoint: runtime.draftEndpoint,
          draftAutoSave: config.builderDraftAutoSave,
        })
      : null;

  runtime.controller.mount();
  builder?.mount();
  if (!builder && runtime.draftEndpoint) {
    void loadRuntimeDraftStories(runtime.draftEndpoint, runtime.applyBuilderStories);
  }

  return runtime.toInstance(() => builder?.destroy());
}
