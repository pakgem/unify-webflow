import { createStoryRuntime } from "./createStoryRuntime";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";
import {
  getRuntimeDraftStories,
  getRuntimeDraftStoriesFromScript,
  loadRuntimeDraftStories,
} from "./loadRuntimeDraftStories";
import { renderPlaybackMarkup } from "./renderPlaybackMarkup";

export function createPlaybackEngine(root: HTMLElement, config: ChatbotStoriesConfig = {}): ChatbotStoriesInstance {
  renderPlaybackMarkup(root);

  const runtime = createStoryRuntime(root, config);
  const initialDraftStories =
    getRuntimeDraftStories(config.builderDraft) ??
    getRuntimeDraftStoriesFromScript(config.builderDraftScriptId);

  if (initialDraftStories) {
    runtime.applyBuilderStories(initialDraftStories);
  }

  runtime.controller.mount();
  if (runtime.draftEndpoint) void loadRuntimeDraftStories(runtime.draftEndpoint, runtime.applyBuilderStories);

  return runtime.toInstance();
}
