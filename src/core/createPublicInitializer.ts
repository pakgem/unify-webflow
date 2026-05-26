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
    roots.forEach((root) => init(root, { ...readRootDatasetConfig(root), injectStyles: false }));
  }

  return { autoInit, init };
}

function readRootDatasetConfig(root: HTMLElement): ChatbotStoriesConfig {
  const config: ChatbotStoriesConfig = {};
  const dataset = root.dataset;

  config.autoplay = parseBooleanDatasetValue(dataset.autoplay);
  config.loop = parseBooleanDatasetValue(dataset.loop);
  config.reducedMotion = parseBooleanDatasetValue(dataset.reducedMotion);

  if (dataset.autoAdvanceDelay) {
    const autoAdvanceDelay = Number(dataset.autoAdvanceDelay);
    if (Number.isFinite(autoAdvanceDelay)) config.autoAdvanceDelay = autoAdvanceDelay;
  }

  if (dataset.initialStory) {
    const initialStory = Number(dataset.initialStory);
    config.initialStory = Number.isFinite(initialStory) ? initialStory : dataset.initialStory;
  }

  if (dataset.assetBaseUrl) config.assetBaseUrl = dataset.assetBaseUrl;
  if (dataset.builderDraftScriptId) {
    config.builderDraftScriptId = dataset.builderDraftScriptId === "false" ? false : dataset.builderDraftScriptId;
  }

  if (dataset.assetUrlMap) {
    const assetUrlMap = parseAssetUrlMap(dataset.assetUrlMap);
    if (assetUrlMap) config.assetUrlMap = assetUrlMap;
  }

  if (dataset.builderDraftEndpoint) {
    config.builderDraftEndpoint = dataset.builderDraftEndpoint === "false" ? false : dataset.builderDraftEndpoint;
  }

  return removeUndefinedConfigValues(config);
}

function parseBooleanDatasetValue(value: string | undefined): boolean | undefined {
  if (value === undefined) return undefined;
  if (value === "true" || value === "") return true;
  if (value === "false") return false;

  return undefined;
}

function parseAssetUrlMap(value: string): Record<string, string> | undefined {
  try {
    const parsed = JSON.parse(value);

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return undefined;

    return Object.fromEntries(
      Object.entries(parsed).filter(
        (entry): entry is [string, string] => typeof entry[0] === "string" && typeof entry[1] === "string",
      ),
    );
  } catch {
    return undefined;
  }
}

function removeUndefinedConfigValues(config: ChatbotStoriesConfig): ChatbotStoriesConfig {
  return Object.fromEntries(Object.entries(config).filter(([, value]) => value !== undefined)) as ChatbotStoriesConfig;
}
