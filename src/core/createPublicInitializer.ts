import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";

type InstanceFactory = (root: HTMLElement, config: ChatbotStoriesConfig) => ChatbotStoriesInstance;

type PublicInitializerOptions = {
  autoInitSelector?: string;
  defaultTarget?: string;
  injectStyles?: () => void;
};

const DEFAULT_TARGET = "[data-chatbot-stories]";
const DEFAULT_AUTO_INIT_SELECTOR = "[data-chatbot-stories][data-auto-init]";

export function createPublicInitializer(
  createInstance: InstanceFactory,
  {
    autoInitSelector = DEFAULT_AUTO_INIT_SELECTOR,
    defaultTarget = DEFAULT_TARGET,
    injectStyles,
  }: PublicInitializerOptions = {},
): {
  autoInit: () => void;
  init: (target?: string | HTMLElement, config?: ChatbotStoriesConfig) => ChatbotStoriesInstance;
} {
  const mountedInstances = new WeakMap<HTMLElement, ChatbotStoriesInstance>();

  function resolveRoot(target: string | HTMLElement = defaultTarget): HTMLElement {
    if (target instanceof HTMLElement) return target;

    const root = document.querySelector<HTMLElement>(target);

    if (!root) {
      throw new Error(`ChatbotStories: root element not found for selector "${target}"`);
    }

    return root;
  }

  function init(
    target: string | HTMLElement = defaultTarget,
    config: ChatbotStoriesConfig = {},
  ): ChatbotStoriesInstance {
    const root = resolveRoot(target);
    const mountedInstance = mountedInstances.get(root);

    if (mountedInstance) return mountedInstance;
    if (config.injectStyles !== false) injectStyles?.();

    const instance = createInstance(root, config);
    const destroyInstance = instance.destroy.bind(instance);
    let destroyed = false;

    const wrappedInstance: ChatbotStoriesInstance = {
      ...instance,
      destroy: () => {
        if (destroyed) return;
        destroyed = true;
        mountedInstances.delete(root);
        delete root.dataset.chatbotStoriesMounted;
        destroyInstance();
      },
    };

    mountedInstances.set(root, wrappedInstance);
    root.dataset.chatbotStoriesMounted = "true";

    return wrappedInstance;
  }

  function autoInit(): void {
    const roots = document.querySelectorAll<HTMLElement>(autoInitSelector);

    if (!roots.length) return;

    injectStyles?.();
    roots.forEach((root) => init(root, { injectStyles: false }));
  }

  return { autoInit, init };
}
