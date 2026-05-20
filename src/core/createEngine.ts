import { ChatActor } from "../actors/ChatActor";
import { CursorActor } from "../actors/CursorActor";
import { StoryBuilder } from "../builder/StoryBuilder";
import { defaultStories } from "../stories";
import { StoryController } from "./StoryController";
import { TargetResolver } from "./TargetResolver";
import type { ChatbotStoriesConfig, ChatbotStoriesInstance } from "./types";
import { renderDefaultMarkup } from "./renderDefaultMarkup";

export function createEngine(root: HTMLElement, config: ChatbotStoriesConfig = {}): ChatbotStoriesInstance {
  renderDefaultMarkup(root, { showBuilder: config.showBuilder !== false });

  const stories = config.stories?.length ? config.stories : defaultStories;
  const resolver = new TargetResolver(root);
  const chat = new ChatActor(root);
  const cursor = new CursorActor(root, resolver, {
    reducedMotion:
      config.reducedMotion ??
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ??
      false,
  });
  const controller = new StoryController(root, stories, resolver, cursor, chat, {
    autoplay: config.autoplay ?? true,
    loop: config.loop ?? true,
    autoAdvanceDelay: config.autoAdvanceDelay ?? 3.2,
    initialStory: config.initialStory ?? 0,
    onStoryChange: config.onStoryChange,
  });
  const destroy = controller.destroy.bind(controller);
  const builder =
    config.showBuilder === false
      ? null
      : new StoryBuilder(root, stories, {
          onStorySelect: (storyId) => controller.goTo(storyId),
        });

  controller.mount();
  builder?.mount();

  return {
    play: controller.play.bind(controller),
    pause: controller.pause.bind(controller),
    next: controller.next.bind(controller),
    previous: controller.previous.bind(controller),
    goTo: controller.goTo.bind(controller),
    getState: controller.getState.bind(controller),
    destroy: () => {
      builder?.destroy();
      destroy();
      cursor.destroy();
    },
  };
}
