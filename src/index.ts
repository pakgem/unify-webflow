import { createEngine } from "./core/createEngine";
import { createPublicInitializer } from "./core/createPublicInitializer";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./core/types";
import { defaultStories } from "./stories";
import builderStyles from "./styles/chatbot-stories.builder.css?inline";
import runtimeStyles from "./styles/chatbot-stories.runtime.css?inline";
import { injectStyleText } from "./styles/injectStyles";

const RUNTIME_STYLE_ID = "chatbot-stories-runtime-styles";
const BUILDER_STYLE_ID = "chatbot-stories-builder-styles";

function injectStyles(): void {
  injectStyleText(RUNTIME_STYLE_ID, runtimeStyles);
  injectStyleText(BUILDER_STYLE_ID, builderStyles);
}

const initializer = createPublicInitializer(createEngine, { injectStyles });

export function init(
  target: string | HTMLElement = "[data-chatbot-stories]",
  config: ChatbotStoriesConfig = {},
): ChatbotStoriesInstance {
  return initializer.init(target, config);
}

export { defaultStories };
export type { ChatbotStoriesConfig, ChatbotStoriesInstance, StoryDefinition } from "./core/types";

const api = {
  init,
  defaultStories,
};

declare global {
  interface Window {
    ChatbotStories?: typeof api;
  }
}

if (typeof window !== "undefined") {
  window.ChatbotStories = api;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializer.autoInit, { once: true });
  } else {
    initializer.autoInit();
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload();
  });
}
