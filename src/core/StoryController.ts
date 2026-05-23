import { gsap } from "gsap";
import type { ChatActor, DataTablePageRestore } from "../actors/ChatActor";
import type { CursorActor } from "../actors/CursorActor";
import { preloadStoriesAround } from "./assetPreloader";
import { PausedCursorMimic } from "./PausedCursorMimic";
import type {
  ChatbotStoriesConfig,
  ChatbotStoriesInstance,
  StoryContext,
  StoryDefinition,
} from "./types";
import type { TargetResolver } from "./TargetResolver";

type ControllerOptions = Required<Pick<ChatbotStoriesConfig, "autoplay" | "loop" | "autoAdvanceDelay">> &
  Pick<ChatbotStoriesConfig, "initialStory" | "onStoryChange">;
type StoryProgressScrubState = {
  storyIndex: number;
  wasPlaying: boolean;
  pointerId: number;
  marker: HTMLElement;
  trackTop: number;
  trackHeight: number;
  removeListeners: () => void;
};
type StorySwitchOptions = {
  animateExit?: boolean;
};

const CHAT_HISTORY_SCROLL = {
  minPixelDelta: 0.5,
};
const ENABLE_PAUSED_CURSOR_MIMIC = true;

export class StoryController implements ChatbotStoriesInstance {
  private activeIndex = 0;
  private activeTimeline: gsap.core.Timeline | null = null;
  private autoAdvance: gsap.core.Tween | null = null;
  private seekTween: gsap.core.Tween | null = null;
  private resumeRestoreTimeline: gsap.core.Timeline | null = null;
  private storySwitchTimeline: gsap.core.Timeline | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimer = 0;
  private observedWidth = 0;
  private observedHeight = 0;
  private listeners: Array<() => void> = [];
  private storyProgress: number[];
  private historyParkTimeline: gsap.core.Timeline | null = null;
  private pausedCursorMimic: PausedCursorMimic | null = null;
  private storyTabButtons: HTMLButtonElement[] = [];
  private scrubber: HTMLInputElement | null = null;
  private playButton: HTMLButtonElement | null = null;
  private resumeButton: HTMLButtonElement | null = null;
  private playing = false;
  private historyPaused = false;
  private storyTabListeners: Array<() => void> = [];
  private storyProgressScrub: StoryProgressScrubState | null = null;

  constructor(
    private root: HTMLElement,
    private stories: StoryDefinition[],
    private resolver: TargetResolver,
    private cursor: CursorActor,
    private chat: ChatActor,
    private options: ControllerOptions,
  ) {
    this.storyProgress = this.stories.map(() => 0);
    this.pausedCursorMimic = ENABLE_PAUSED_CURSOR_MIMIC
      ? new PausedCursorMimic(this.root, this.cursor, {
          onMimicStart: () => this.cancelHistoryParkMotion(),
        })
      : null;
  }

  mount(): void {
    this.attachControls();
    this.observeLayout();
    this.goTo(this.options.initialStory ?? 0);
  }

  play(): void {
    const shouldRestoreDataTables = this.historyPaused;

    this.setHistoryPaused(false);
    this.chat.scrollToLive();
    this.playing = true;
    this.updatePlayButton();

    if (shouldRestoreDataTables && this.restoreDataTablePagesBeforePlay()) return;

    this.activeTimeline?.play();
  }

  pause(): void {
    this.setHistoryPaused(false);
    this.playing = false;
    this.activeTimeline?.pause();
    this.autoAdvance?.kill();
    this.updatePlayButton();
    this.resumeRestoreTimeline?.kill();
    this.resumeRestoreTimeline = null;
  }

  private restoreDataTablePagesBeforePlay(): boolean {
    if (!this.activeTimeline) return false;

    const restores = this.chat.getDataTablePageRestores();

    if (!restores.length) return false;

    const timeline = gsap.timeline({
      onComplete: () => {
        this.resumeRestoreTimeline = null;
        if (this.playing) this.activeTimeline?.play();
      },
    });

    restores.forEach((restore, index) => {
      const position = index === 0 ? 0 : ">";

      timeline.add(this.buildDataTablePageRestore(restore), position);
    });

    this.resumeRestoreTimeline = timeline;
    return true;
  }

  private buildDataTablePageRestore(restore: DataTablePageRestore): gsap.core.Timeline {
    const timeline = gsap.timeline();

    timeline
      .add(
        this.cursor.moveTo(
          { target: restore.target, anchor: "center" },
          {
            mode: "pointer",
            intent: "click",
            speed: "quick",
            label: `restore-${restore.tableId}-page-${restore.expectedPage}`,
          },
        ),
      )
      .add(this.cursor.click(), "-=0.02")
      .add(this.chat.dataTablePage(restore.tableId, restore.expectedPage, { updateExpected: false }), "-=0.03");

    return timeline;
  }

  next(): void {
    const nextIndex = this.activeIndex + 1;

    if (nextIndex >= this.stories.length) {
      if (this.options.loop) this.resetStoryProgress();
      this.goTo(this.options.loop ? 0 : this.activeIndex);
      return;
    }

    this.goTo(nextIndex);
  }

  previous(): void {
    const previousIndex = this.activeIndex - 1;

    if (previousIndex < 0) {
      this.goTo(this.options.loop ? this.stories.length - 1 : this.activeIndex);
      return;
    }

    this.goTo(previousIndex);
  }

  updateStories(stories: StoryDefinition[], options: { restartActive?: boolean } = {}): void {
    if (!stories.length) return;

    const activeStoryId = this.stories[this.activeIndex]?.id;
    const previousStories = this.stories;
    const progressByStory = new Map(this.stories.map((story, index) => [story.id, this.storyProgress[index] ?? 0]));
    const startPoint = this.cursor.getPosition();
    const wasPlaying = this.playing;
    const shouldRenderTabs = didStoryTabsChange(previousStories, stories);

    this.stories = stories;
    this.storyProgress = this.stories.map((story) => progressByStory.get(story.id) ?? 0);
    this.activeIndex = Math.max(0, this.resolveStoryIndex(activeStoryId ?? this.stories[0].id));
    if (shouldRenderTabs) this.renderStoryTabs();

    if (options.restartActive) {
      this.stopTimeline();
      this.setHistoryPaused(false);
      this.rebuildActiveStoryTimeline(this.activeIndex, startPoint);
      this.playing = wasPlaying || this.options.autoplay;
      this.updatePlayButton();
      if (this.playing) this.activeTimeline?.play();
      return;
    }

    this.updateStoryMeta();
    this.updateAllTabProgress();
    preloadStoriesAround(this.stories, this.activeIndex);
  }

  goTo(story: number | string, options: StorySwitchOptions = {}): void {
    const nextIndex = this.resolveStoryIndex(story);

    if (nextIndex < 0 || !this.stories[nextIndex]) return;

    this.transitionToStory(nextIndex, options);
  }

  private transitionToStory(nextIndex: number, options: StorySwitchOptions = {}): void {
    const startPoint = this.cursor.getPosition();
    const shouldAnimateCurrentStoryOut = Boolean(options.animateExit && this.activeTimeline);

    this.storyProgress[nextIndex] = 0;
    this.storySwitchTimeline?.kill();
    this.storySwitchTimeline = null;
    this.stopTimeline();
    this.setHistoryPaused(false);

    if (!shouldAnimateCurrentStoryOut) {
      this.activateStory(nextIndex, startPoint);
      return;
    }

    this.playing = false;
    this.updatePlayButton();
    this.storySwitchTimeline = gsap.timeline({
      onComplete: () => {
        this.storySwitchTimeline = null;
        this.activateStory(nextIndex, startPoint);
      },
    });
    this.storySwitchTimeline.add(this.chat.animateStorySwitchExit());
  }

  private activateStory(nextIndex: number, startPoint: ReturnType<CursorActor["getPosition"]>): void {
    this.rebuildActiveStoryTimeline(nextIndex, startPoint);
    this.playing = this.options.autoplay;

    this.updatePlayButton();
    this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex);

    if (this.options.autoplay) {
      this.activeTimeline?.play();
    }
  }

  destroy(): void {
    this.storySwitchTimeline?.kill();
    this.storySwitchTimeline = null;
    this.stopTimeline();
    this.pausedCursorMimic?.destroy();
    this.resizeObserver?.disconnect();
    window.clearTimeout(this.resizeTimer);
    this.clearStoryTabListeners();

    for (const remove of this.listeners) remove();
    this.listeners = [];
  }

  getState(): ReturnType<ChatbotStoriesInstance["getState"]> {
    return {
      story: this.stories[this.activeIndex],
      index: this.activeIndex,
      progress: this.activeTimeline?.progress() ?? 0,
      playing: this.playing,
    };
  }

  private buildTimeline(index: number, startPoint = this.cursor.getPosition()): gsap.core.Timeline {
    const story = this.stories[index];
    this.root.dataset.activeStory = story.id;
    this.chat.reset();
    this.resolver.refresh();
    this.cursor.beginBuild(startPoint, story.id);

    const ctx: StoryContext = {
      root: this.root,
      story,
      resolver: this.resolver,
      cursor: this.cursor,
      chat: this.chat,
      timeline: () => gsap.timeline(),
    };
    story.prepare?.(ctx);
    this.resolver.refresh();
    const tl = gsap.timeline({
      paused: true,
      onUpdate: () => this.updateProgress(),
      onComplete: () => this.handleComplete(),
    });

    const entryMove = this.cursor.moveTo(story.entry, {
      mode: "text",
      intent: "entry",
      speed: "normal",
      label: "story-entry",
    });
    const storyBody = story.build(ctx);
    const leadTime = story.entryLeadTime ?? 0.24;

    tl.add(entryMove, 0);
    storyBody.pause(0);
    tl.add(storyBody, Math.max(0, entryMove.duration() - leadTime));
    storyBody.paused(false);
    this.chat.prepareStoryStart();

    return tl;
  }

  private rebuildActiveStoryTimeline(
    storyIndex: number,
    startPoint: ReturnType<CursorActor["getPosition"]>,
    progress = 0,
  ): void {
    this.activeIndex = storyIndex;
    preloadStoriesAround(this.stories, this.activeIndex);
    this.activeTimeline = this.buildTimeline(this.activeIndex, startPoint);
    this.activeTimeline.progress(progress).pause();
    this.updateStoryMeta();
    this.updateProgress();
  }

  private stopTimeline(): void {
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.resumeRestoreTimeline?.kill();
    this.resumeRestoreTimeline = null;
    this.cancelHistoryParkMotion();
    this.pausedCursorMimic?.setPaused(false);
    this.activeTimeline?.kill();
    this.activeTimeline = null;
    this.cursor.resetInteraction();
  }

  private handleComplete(): void {
    const shouldAutoAdvance = this.playing;

    this.playing = false;
    this.updatePlayButton();

    if (!this.options.autoplay || !shouldAutoAdvance) return;
    if (!this.options.loop && this.activeIndex === this.stories.length - 1) return;

    this.autoAdvance?.kill();
    this.autoAdvance = gsap.delayedCall(this.options.autoAdvanceDelay, () => {
      const nextIndex = this.activeIndex + 1;

      if (nextIndex >= this.stories.length) {
        if (this.options.loop) this.resetStoryProgress();
        this.goTo(this.options.loop ? 0 : this.activeIndex, { animateExit: true });
        return;
      }

      this.goTo(nextIndex, { animateExit: true });
    });
  }

  private seekTo(progress: number, duration = 0.28): void {
    if (!this.activeTimeline) return;

    const wasPlaying = this.playing;
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.setHistoryPaused(false);
    this.chat.stopScrollMotion();

    const clampedProgress = clampProgress(progress);
    const timelineDuration = this.activeTimeline.duration();
    this.playing = wasPlaying;
    this.seekTween = gsap.to(this.activeTimeline, {
      time: timelineDuration * clampedProgress,
      duration,
      ease: "power2.out",
      overwrite: true,
      onUpdate: () => this.updateProgress(),
      onComplete: () => {
        if (wasPlaying) this.activeTimeline?.play();
        this.updatePlayButton();
      },
    });

    this.activeTimeline.pause();
    this.updatePlayButton();
  }

  private updateStoryMeta(): void {
    const story = this.stories[this.activeIndex];
    this.setText("[data-story-eyebrow]", story.eyebrow);
    this.setText("[data-story-label]", story.label);
    this.setText("[data-story-title]", story.label);
    this.setText("[data-story-summary]", story.summary);

    for (const button of this.storyTabButtons) {
      const active = button.dataset.storyTab === story.id;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    }
  }

  private updateProgress(): void {
    const progress = this.activeTimeline?.progress() ?? 0;

    this.storyProgress[this.activeIndex] = progress;
    this.root.style.setProperty("--wa-story-progress", progress.toFixed(4));
    this.updateTabProgress(this.activeIndex);

    if (this.scrubber && document.activeElement !== this.scrubber) {
      this.scrubber.value = String(Math.round(progress * 1000));
    }
  }

  private updatePlayButton(): void {
    const button = this.playButton;

    if (!button) return;

    button.textContent = this.playing ? "Pause" : "Play";
    button.setAttribute("aria-label", this.playing ? "Pause animation" : "Play animation");
  }

  private attachControls(): void {
    this.renderStoryTabs();

    this.scrubber = this.root.querySelector<HTMLInputElement>("[data-story-scrubber]");
    this.playButton = this.root.querySelector<HTMLButtonElement>("[data-toggle-play]");
    this.resumeButton = this.root.querySelector<HTMLButtonElement>("[data-history-resume]");

    this.on("[data-prev-story]", "click", () => this.previous());
    this.on("[data-next-story]", "click", () => this.next());
    this.on("[data-toggle-play]", "click", () => {
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    });
    this.on("[data-history-resume]", "click", () => this.play());
    this.on("[data-story-scrubber]", "input", (event) => {
      const input = event.currentTarget as HTMLInputElement;
      this.seekTo(Number(input.value) / 1000);
    });
    this.attachChatHistoryScroll();
  }

  private createStoryTab(story: StoryDefinition, index: number): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "wa-story-tab";
    button.type = "button";
    button.dataset.storyTab = story.id;
    button.style.setProperty("--wa-tab-progress", "0");
    button.setAttribute("aria-pressed", "false");
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;

      if (target?.closest(".wa-story-tab__marker")) {
        event.preventDefault();
        return;
      }

      this.goTo(index);
    };
    button.addEventListener("click", handleClick);
    this.storyTabListeners.push(() => button.removeEventListener("click", handleClick));

    const marker = document.createElement("span");
    marker.className = "wa-story-tab__marker";
    marker.setAttribute("aria-hidden", "true");
    const handleMarkerPointerDown = (event: PointerEvent) => this.beginStoryProgressScrub(event, index, marker);
    marker.addEventListener("pointerdown", handleMarkerPointerDown);
    this.storyTabListeners.push(() => marker.removeEventListener("pointerdown", handleMarkerPointerDown));

    const body = document.createElement("span");
    body.className = "wa-story-tab__body";

    const title = document.createElement("span");
    title.className = "wa-story-tab__title";
    title.textContent = story.navLabel ?? story.label;

    body.append(title);

    if (story.navDescription) {
      const description = document.createElement("span");
      description.className = "wa-story-tab__description";
      description.textContent = story.navDescription;
      body.append(description);
    }

    button.append(marker, body);
    return button;
  }

  private renderStoryTabs(): void {
    const tabs = this.root.querySelector<HTMLElement>("[data-story-tabs]");

    this.clearStoryTabListeners();

    if (!tabs) {
      this.storyTabButtons = [];
      return;
    }

    this.storyTabButtons = this.stories.map((story, index) => this.createStoryTab(story, index));
    tabs.replaceChildren(...this.storyTabButtons);
    this.updateAllTabProgress();
  }

  private clearStoryTabListeners(): void {
    this.endStoryProgressScrub(false);
    for (const remove of this.storyTabListeners) remove();
    this.storyTabListeners = [];
  }

  private beginStoryProgressScrub(event: PointerEvent, storyIndex: number, marker: HTMLElement): void {
    event.preventDefault();
    event.stopPropagation();

    this.endStoryProgressScrub(false);

    const wasPlaying = this.playing;
    const handleMove = (moveEvent: PointerEvent) => {
      if (moveEvent.pointerId !== event.pointerId) return;
      moveEvent.preventDefault();
      this.scrubStoryProgress(storyIndex, marker, moveEvent.clientY);
    };
    const handleEnd = (endEvent: PointerEvent) => {
      if (endEvent.pointerId !== event.pointerId) return;
      endEvent.preventDefault();
      this.endStoryProgressScrub(true);
    };
    const removeListeners = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
    };

    const markerRect = marker.getBoundingClientRect();

    this.storyProgressScrub = {
      storyIndex,
      wasPlaying,
      pointerId: event.pointerId,
      marker,
      trackTop: markerRect.top,
      trackHeight: markerRect.height,
      removeListeners,
    };

    marker.dataset.scrubbing = "true";
    window.addEventListener("pointermove", handleMove, { passive: false });
    window.addEventListener("pointerup", handleEnd, { passive: false });
    window.addEventListener("pointercancel", handleEnd, { passive: false });
    this.scrubStoryProgress(storyIndex, marker, event.clientY);
  }

  private scrubStoryProgress(storyIndex: number, marker: HTMLElement, clientY: number): void {
    const progress = this.getMarkerProgress(marker, clientY, this.storyProgressScrub);

    this.activateStoryForProgressScrub(storyIndex);
    this.setActiveTimelineProgress(progress);
  }

  private activateStoryForProgressScrub(storyIndex: number): void {
    if (storyIndex === this.activeIndex && this.activeTimeline) {
      this.prepareActiveTimelineForProgressScrub();
      return;
    }

    const startPoint = this.cursor.getPosition();
    const wasPlaying = this.storyProgressScrub?.wasPlaying ?? this.playing;

    this.stopTimeline();
    this.activeIndex = storyIndex;
    this.activeTimeline = this.buildTimeline(this.activeIndex, startPoint);
    this.playing = wasPlaying;
    this.updateStoryMeta();
    this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex);
    this.prepareActiveTimelineForProgressScrub();
  }

  private prepareActiveTimelineForProgressScrub(): void {
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.resumeRestoreTimeline?.kill();
    this.resumeRestoreTimeline = null;
    this.setHistoryPaused(false);
    this.chat.stopScrollMotion();
    this.activeTimeline?.pause();
    this.updatePlayButton();
  }

  private setActiveTimelineProgress(progress: number): void {
    if (!this.activeTimeline) return;

    this.activeTimeline.progress(clampProgress(progress)).pause();
    this.updateProgress();
  }

  private endStoryProgressScrub(restorePlayback: boolean): void {
    const scrub = this.storyProgressScrub;

    if (!scrub) return;

    scrub.removeListeners();
    scrub.marker.removeAttribute("data-scrubbing");
    this.storyProgressScrub = null;
    this.playing = restorePlayback ? scrub.wasPlaying : this.playing;

    if (restorePlayback && scrub.wasPlaying) {
      this.activeTimeline?.play();
    } else {
      this.activeTimeline?.pause();
    }

    this.updatePlayButton();
  }

  private getMarkerProgress(
    marker: HTMLElement,
    clientY: number,
    scrub: StoryProgressScrubState | null = null,
  ): number {
    if (scrub?.marker === marker && scrub.trackHeight > 0) {
      return clampProgress((clientY - scrub.trackTop) / scrub.trackHeight);
    }

    const rect = marker.getBoundingClientRect();

    if (rect.height <= 0) return 0;
    return clampProgress((clientY - rect.top) / rect.height);
  }

  private attachChatHistoryScroll(): void {
    const el = this.root.querySelector<HTMLElement>("[data-chat-shell]");
    const thread = this.root.querySelector<HTMLElement>("[data-chat-thread]");

    if (!el || !thread) return;

    const handler = (event: WheelEvent) => {
      if (!this.activeTimeline) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

      const pixelDelta = this.getWheelPixelDelta(event);
      if (Math.abs(pixelDelta) < CHAT_HISTORY_SCROLL.minPixelDelta) return;

      const maxScroll = this.getThreadMaxScroll(thread);
      if (maxScroll <= 0) return;

      const wantsHistory = pixelDelta < 0 || this.historyPaused;
      if (!wantsHistory) return;

      const nextScroll = clamp(thread.scrollTop + pixelDelta, 0, maxScroll);
      const canScrollThread = Math.abs(nextScroll - thread.scrollTop) >= 0.5;

      if (!canScrollThread) return;

      const remainingPageDelta = Math.max(0, pixelDelta - (maxScroll - thread.scrollTop));

      event.preventDefault();
      this.pauseForChatHistory();
      thread.scrollTop = nextScroll;

      if (remainingPageDelta >= CHAT_HISTORY_SCROLL.minPixelDelta) {
        window.scrollBy({ top: remainingPageDelta, left: 0, behavior: "auto" });
      }
    };

    el.addEventListener("wheel", handler, { passive: false });
    this.listeners.push(() => el.removeEventListener("wheel", handler));
  }

  private getWheelPixelDelta(event: WheelEvent): number {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 16;
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
    return event.deltaY;
  }

  private pauseForChatHistory(): void {
    if (this.historyPaused) return;

    this.playing = false;
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.activeTimeline?.pause();
    this.chat.stopScrollMotion();
    this.chat.prepareForChatHistoryPause();
    this.cancelHistoryParkMotion();
    this.historyParkTimeline = this.cursor.parkForChatHistory();
    this.setHistoryPaused(true);
    this.updatePlayButton();
  }

  private setHistoryPaused(paused: boolean): void {
    if (!paused) {
      this.pausedCursorMimic?.setPaused(false);
      this.cancelHistoryParkMotion();
    }

    this.historyPaused = paused;
    this.root.dataset.chatHistoryPaused = String(paused);
    this.pausedCursorMimic?.setPaused(paused);

    const resume = this.resumeButton;

    if (!resume) return;

    resume.setAttribute("aria-hidden", String(!paused));
    resume.tabIndex = paused ? 0 : -1;
  }

  private cancelHistoryParkMotion(): void {
    this.historyParkTimeline?.kill();
    this.historyParkTimeline = null;
  }

  private getThreadMaxScroll(thread: HTMLElement): number {
    return Math.max(0, thread.scrollHeight - thread.clientHeight);
  }

  private observeLayout(): void {
    if (!("ResizeObserver" in window)) return;

    const initialRect = this.root.getBoundingClientRect();
    this.observedWidth = initialRect.width;
    this.observedHeight = initialRect.height;

    this.resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;

      if (!rect || !this.didObservedSizeChange(rect.width, rect.height)) return;

      window.clearTimeout(this.resizeTimer);
      this.resizeTimer = window.setTimeout(() => this.rebuildForResize(), 140);
    });
    this.resizeObserver.observe(this.root);
  }

  private didObservedSizeChange(width: number, height: number): boolean {
    const widthChanged = Math.abs(width - this.observedWidth) > 1;
    const heightChanged = Math.abs(height - this.observedHeight) > 1;

    if (!widthChanged && !heightChanged) return false;

    this.observedWidth = width;
    this.observedHeight = height;
    return true;
  }

  private rebuildForResize(): void {
    if (!this.activeTimeline) return;

    const progress = this.activeTimeline.progress();
    const wasPlaying = this.playing;
    const startPoint = this.cursor.getPosition();

    this.stopTimeline();
    this.rebuildActiveStoryTimeline(this.activeIndex, startPoint, progress);

    if (wasPlaying) this.play();
  }

  private updateAllTabProgress(): void {
    this.storyTabButtons.forEach((button, index) => {
      button.style.setProperty("--wa-tab-progress", this.storyProgress[index]?.toFixed(4) ?? "0");
    });
  }

  private updateTabProgress(index: number): void {
    const button = this.storyTabButtons[index];

    if (!button) return;

    button.style.setProperty("--wa-tab-progress", this.storyProgress[index]?.toFixed(4) ?? "0");
  }

  private resetStoryProgress(): void {
    this.storyProgress.fill(0);
    this.updateAllTabProgress();
  }

  private resolveStoryIndex(story: number | string): number {
    if (typeof story === "number") return story;
    return this.stories.findIndex((candidate) => candidate.id === story);
  }

  private setText(selector: string, value: string): void {
    const el = this.root.querySelector<HTMLElement>(selector);
    if (el) el.textContent = value;
  }

  private on(selector: string, eventName: string, handler: EventListener): void {
    const el = this.root.querySelector<HTMLElement>(selector);

    if (!el) return;

    el.addEventListener(eventName, handler);
    this.listeners.push(() => el.removeEventListener(eventName, handler));
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function clampProgress(value: number): number {
  return clamp(value, 0, 1);
}

function didStoryTabsChange(previous: StoryDefinition[], next: StoryDefinition[]): boolean {
  if (previous.length !== next.length) return true;

  return next.some((story, index) => {
    const prior = previous[index];

    return (
      !prior ||
      prior.id !== story.id ||
      prior.label !== story.label ||
      prior.navLabel !== story.navLabel ||
      prior.navDescription !== story.navDescription
    );
  });
}
