import { createPlaybackEngine } from "./core/createPlaybackEngine";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./core/types";
import { defaultStories } from "./stories";
import { injectStyleText } from "./styles/injectStyles";
import runtimeStyles from "./styles/chatbot-stories.runtime.css?inline";

const RUNTIME_STYLE_ID = "chatbot-stories-runtime-styles";

function injectRuntimeStyles(): void {
  injectStyleText(RUNTIME_STYLE_ID, runtimeStyles);
}

function resolveRoot(target: string | HTMLElement): HTMLElement {
  if (target instanceof HTMLElement) return target;

  const root = document.querySelector<HTMLElement>(target);

  if (!root) {
    throw new Error(`ChatbotStories: root element not found for selector "${target}"`);
  }

  return root;
}

export function init(
  target: string | HTMLElement = "[data-chatbot-stories]",
  config: ChatbotStoriesConfig = {},
): ChatbotStoriesInstance {
  if (config.injectStyles !== false) injectRuntimeStyles();

  return createPlaybackEngine(resolveRoot(target), config);
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

  const autoInit = () => {
    if (document.querySelector("[data-chatbot-stories][data-auto-init]")) injectRuntimeStyles();

    document.querySelectorAll<HTMLElement>("[data-chatbot-stories][data-auto-init]").forEach((root) => {
      if (root.dataset.chatbotStoriesMounted) return;
      root.dataset.chatbotStoriesMounted = "true";
      init(root);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit, { once: true });
  } else {
    autoInit();
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    window.location.reload();
  });
}
