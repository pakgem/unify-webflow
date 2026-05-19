import { createEngine } from "./core/createEngine";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./core/types";
import { defaultStories } from "./stories";
import styles from "./styles/chatbot-stories.css?inline";

const STYLE_ID = "chatbot-stories-styles";

function injectStyles(): void {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = styles;
  document.head.append(style);
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
  if (config.injectStyles !== false) injectStyles();

  return createEngine(resolveRoot(target), config);
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
