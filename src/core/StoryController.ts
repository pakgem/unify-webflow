import { gsap } from "gsap";
import { THINKING_INTERACTION_PAUSE_EVENT, type ChatActor, type DataTablePageRestore } from "../actors/ChatActor";
import type { CursorActor } from "../actors/CursorActor";
import type { AssetUrlResolver } from "./assetUrls";
import { preloadStoriesAround } from "./assetPreloader";
import { PausedCursorMimic } from "./PausedCursorMimic";
import type {
  ChatbotStoriesConfig,
  ChatbotStoriesInstance,
  Point,
  StoryContext,
  StoryDefinition,
} from "./types";
import type { TargetResolver } from "./TargetResolver";

type ControllerOptions = Required<Pick<ChatbotStoriesConfig, "autoplay" | "loop" | "autoAdvanceDelay">> &
  Pick<ChatbotStoriesConfig, "initialStory" | "onStoryChange"> & {
    resolveAssetUrl?: AssetUrlResolver;
  };
type StoryProgressScrubState = {
  storyIndex: number;
  wasPlaying: boolean;
  pointerId: number;
  marker: HTMLElement;
  trackAxis: "x" | "y";
  trackStart: number;
  trackLength: number;
  removeListeners: () => void;
};
type StorySwitchOptions = {
  animateExit?: boolean;
  preservePlayback?: boolean;
};
type ThemePreference = "light" | "dark" | "system";
type HistoryPausedOptions = {
  preserveActiveMimic?: boolean;
};

const CHAT_HISTORY_SCROLL = {
  minPixelDelta: 0.5,
};
const SCRUB_SEEK = {
  resumeDelay: 0.08,
};
const RESTORE_PAGE_CURSOR_MOVE = {
  duration: 0.52,
  curve: 0.1,
  ease: "sine.inOut",
  overshoot: false,
  settle: false,
} as const;
const ENABLE_PAUSED_CURSOR_MIMIC = true;
const THEME_STORAGE_KEY = "chatbotStoriesTheme";
const THEME_PREFERENCES = new Set<ThemePreference>(["light", "dark", "system"]);
const PLAYBACK_CLICK_INTERACTIVE_SELECTOR = [
  "a[href]",
  "button",
  "input",
  "select",
  "textarea",
  "summary",
  "[role='button']",
  "[role='link']",
  "[contenteditable='true']",
  "[data-story-scrubber]",
  "[data-story-tab]",
  "[data-history-resume]",
  "[data-toggle-play]",
  ".wa-story-tab__link",
  ".wa-thinking",
  ".wa-research-step__label-row",
  ".wa-research-step__chevron",
].join(",");

export class StoryController implements ChatbotStoriesInstance {
  private activeIndex = 0;
  private activeTimeline: gsap.core.Timeline | null = null;
  private autoAdvance: gsap.core.Tween | null = null;
  private seekTween: gsap.core.Tween | null = null;
  private activeTimelineStartPoint: Point | null = null;
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
  private storyTabButtons: HTMLElement[] = [];
  private scrubber: HTMLInputElement | null = null;
  private playButton: HTMLButtonElement | null = null;
  private resumeButton: HTMLButtonElement | null = null;
  private themePreference: ThemePreference = "system";
  private systemThemeQuery: MediaQueryList | null = null;
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
    const mimicReturnTimeline = this.pausedCursorMimic?.releaseToIdle() ?? null;

    this.seekTween?.kill();
    this.seekTween = null;
    this.setHistoryPaused(false, { preserveActiveMimic: Boolean(mimicReturnTimeline) });
    this.chat.collapsePausedThinkingInteractions();
    this.chat.scrollToLive();
    this.playing = true;
    this.updatePlayButton();

    if (mimicReturnTimeline) {
      this.resumeRestoreTimeline = gsap.timeline({
        onComplete: () => {
          this.resumeRestoreTimeline = null;
          if (this.playing) this.resumePlaybackAfterPlayRequest(shouldRestoreDataTables);
        },
      });
      this.resumeRestoreTimeline.add(mimicReturnTimeline);
      return;
    }

    this.resumePlaybackAfterPlayRequest(shouldRestoreDataTables);
  }

  private resumePlaybackAfterPlayRequest(shouldRestoreDataTables: boolean): void {
    if (shouldRestoreDataTables && this.restoreDataTablePagesBeforePlay()) return;
    this.resumeActiveTimeline();
  }

  pause(): void {
    this.setHistoryPaused(false);
    this.playing = false;
    this.activeTimeline?.pause();
    this.chat.stopScrollMotion();
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.seekTween = null;
    this.parkCursorForPausedPlayback();
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
        if (this.playing) this.resumeActiveTimeline();
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
            ...RESTORE_PAGE_CURSOR_MOVE,
            label: `restore-${restore.tableId}-page-${restore.expectedPage}`,
          },
        ),
      )
      .add(this.cursor.click(), "+=0.04")
      .add(this.chat.dataTablePage(restore.tableId, restore.expectedPage, { updateExpected: false }), "-=0.02");

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
    preloadStoriesAround(this.stories, this.activeIndex, this.options.resolveAssetUrl);
  }

  goTo(story: number | string, options: StorySwitchOptions = {}): void {
    const nextIndex = this.resolveStoryIndex(story);

    if (nextIndex < 0 || !this.stories[nextIndex]) return;

    this.transitionToStory(nextIndex, options);
  }

  private transitionToStory(nextIndex: number, options: StorySwitchOptions = {}): void {
    const startPoint = this.cursor.getPosition();
    const shouldAnimateCurrentStoryOut = Boolean(options.animateExit && this.activeTimeline);
    const shouldPreservePlayback = Boolean(options.preservePlayback && this.playing);

    this.storyProgress[nextIndex] = 0;
    this.storySwitchTimeline?.kill();
    this.storySwitchTimeline = null;
    this.stopTimeline();
    this.setHistoryPaused(false);

    if (!shouldAnimateCurrentStoryOut) {
      this.activateStory(nextIndex, startPoint);
      return;
    }

    this.playing = shouldPreservePlayback;
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
    preloadStoriesAround(this.stories, this.activeIndex, this.options.resolveAssetUrl);
    this.activeTimelineStartPoint = startPoint;
    this.activeTimeline = this.buildTimeline(this.activeIndex, startPoint);
    this.renderActiveTimelineProgress(progress);
    this.updateStoryMeta();
  }

  private stopTimeline(): void {
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.seekTween = null;
    this.resumeRestoreTimeline?.kill();
    this.resumeRestoreTimeline = null;
    this.cancelHistoryParkMotion();
    this.pausedCursorMimic?.setPaused(false);
    this.activeTimeline?.kill();
    this.activeTimeline = null;
    this.cursor.resetInteraction();
  }

  private handleComplete(): void {
    const shouldAutoAdvance =
      this.playing &&
      this.options.autoplay &&
      (this.options.loop || this.activeIndex < this.stories.length - 1);

    if (!shouldAutoAdvance) {
      this.playing = false;
      this.updatePlayButton();
      return;
    }

    this.autoAdvance?.kill();
    this.autoAdvance = gsap.delayedCall(this.options.autoAdvanceDelay, () => {
      const nextIndex = this.activeIndex + 1;

      if (nextIndex >= this.stories.length) {
        if (this.options.loop) this.resetStoryProgress();
        this.goTo(this.options.loop ? 0 : this.activeIndex, { animateExit: true, preservePlayback: true });
        return;
      }

      this.goTo(nextIndex, { animateExit: true, preservePlayback: true });
    });
  }

  private seekTo(progress: number): void {
    if (!this.activeTimeline) return;

    const wasPlaying = this.playing;
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.seekTween = null;
    this.setHistoryPaused(false);
    this.chat.stopScrollMotion();
    this.cursor.clearTransientInteraction();

    this.playing = wasPlaying;
    this.renderActiveTimelineProgress(progress);

    if (wasPlaying) {
      this.seekTween = gsap.delayedCall(SCRUB_SEEK.resumeDelay, () => {
        this.seekTween = null;
        if (this.playing) this.resumeActiveTimeline();
        this.updatePlayButton();
      });
    }

    this.updatePlayButton();
  }

  private updateStoryMeta(): void {
    const story = this.stories[this.activeIndex];
    this.setText("[data-story-eyebrow]", story.eyebrow);
    this.setText("[data-story-label]", story.label);
    this.setText("[data-story-title]", story.label);
    this.setText("[data-story-summary]", story.summary);
    this.setText("[data-story-count]", `${this.activeIndex + 1} / ${this.stories.length}`);

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

    this.root.dataset.storyPaused = String(!this.playing);
    this.syncPausedCursorMimic();
    this.updateResumeButtonVisibility();

    if (!button) return;

    button.textContent = this.playing ? "Pause" : "Play";
    button.setAttribute("aria-label", this.playing ? "Pause animation" : "Play animation");
  }

  private attachControls(): void {
    this.renderStoryTabs();

    this.scrubber = this.root.querySelector<HTMLInputElement>("[data-story-scrubber]");
    this.playButton = this.root.querySelector<HTMLButtonElement>("[data-toggle-play]");
    this.resumeButton = this.root.querySelector<HTMLButtonElement>("[data-history-resume]");
    this.attachTheme();

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
    this.onRoot(THINKING_INTERACTION_PAUSE_EVENT, (event) => {
      event.preventDefault();
      if (this.playing) this.pauseForChatHistory();
    });
    this.onRoot("click", (event) => this.handlePlaybackSurfaceClick(event as MouseEvent));
    this.on("[data-story-scrubber]", "input", (event) => {
      const input = event.currentTarget as HTMLInputElement;
      this.seekTo(Number(input.value) / 1000);
    });
    this.attachChatHistoryScroll();
  }

  private handlePlaybackSurfaceClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) return;
    if (!(event.target instanceof Element)) return;
    if (this.isPlaybackInteractiveClickTarget(event.target)) return;

    if (this.playing) {
      if (this.isFakeBrowserClickTarget(event.target)) this.pause();
      return;
    }

    this.play();
  }

  private isPlaybackInteractiveClickTarget(target: Element): boolean {
    return Boolean(target.closest(PLAYBACK_CLICK_INTERACTIVE_SELECTOR));
  }

  private isFakeBrowserClickTarget(target: Element): boolean {
    return Boolean(target.closest(".wa-window, [data-chat-shell]"));
  }

  private attachTheme(): void {
    this.systemThemeQuery = window.matchMedia?.("(prefers-color-scheme: dark)") ?? null;
    this.themePreference = this.getInitialThemePreference();
    this.applyThemePreference(this.themePreference);

    if (this.systemThemeQuery) {
      const query = this.systemThemeQuery;
      const handleSystemThemeChange = () => this.applyThemePreference(this.themePreference);

      query.addEventListener("change", handleSystemThemeChange);
      this.listeners.push(() => query.removeEventListener("change", handleSystemThemeChange));
    }
  }

  private getInitialThemePreference(): ThemePreference {
    return this.readStoredThemePreference() ?? this.readRootThemePreference() ?? "system";
  }

  private readStoredThemePreference(): ThemePreference | null {
    try {
      const storedPreference = window.localStorage?.getItem(THEME_STORAGE_KEY);

      return this.normalizeThemePreference(storedPreference);
    } catch {
      return null;
    }
  }

  private readRootThemePreference(): ThemePreference | null {
    return this.normalizeThemePreference(this.root.dataset.theme);
  }

  private normalizeThemePreference(value: string | null | undefined): ThemePreference | null {
    return THEME_PREFERENCES.has(value as ThemePreference) ? value as ThemePreference : null;
  }

  private applyThemePreference(preference: ThemePreference): void {
    const resolvedTheme = this.resolveTheme(preference);

    this.root.dataset.theme = preference;
    this.root.dataset.resolvedTheme = resolvedTheme;
    document.documentElement.style.setProperty("--wa-page-bg", resolvedTheme === "dark" ? "#10100d" : "#fffff9");
    document.documentElement.style.colorScheme = resolvedTheme;
  }

  private resolveTheme(preference: ThemePreference): "light" | "dark" {
    if (preference !== "system") return preference;

    return this.systemThemeQuery?.matches ? "dark" : "light";
  }

  private createStoryTab(story: StoryDefinition, index: number): HTMLElement {
    const tab = document.createElement("div");
    tab.className = "wa-story-tab";
    tab.dataset.storyTab = story.id;
    tab.style.setProperty("--wa-tab-progress", "0");
    tab.setAttribute("role", "button");
    tab.setAttribute("tabindex", "0");
    tab.setAttribute("aria-pressed", "false");
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;

      if (target?.closest(".wa-story-tab__link")) return;

      if (target?.closest(".wa-story-tab__marker")) {
        event.preventDefault();
        return;
      }

      this.goTo(index);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target instanceof Element ? event.target : null;

      if (target?.closest(".wa-story-tab__link")) return;
      if (event.key !== "Enter" && event.key !== " ") return;

      event.preventDefault();
      this.goTo(index);
    };
    tab.addEventListener("click", handleClick);
    tab.addEventListener("keydown", handleKeyDown);
    this.storyTabListeners.push(() => tab.removeEventListener("click", handleClick));
    this.storyTabListeners.push(() => tab.removeEventListener("keydown", handleKeyDown));

    const marker = document.createElement("span");
    marker.className = "wa-story-tab__marker";
    marker.setAttribute("aria-hidden", "true");
    const handleMarkerPointerDown = (event: PointerEvent) => this.beginStoryProgressScrub(event, index, marker);
    marker.addEventListener("pointerdown", handleMarkerPointerDown);
    this.storyTabListeners.push(() => marker.removeEventListener("pointerdown", handleMarkerPointerDown));

    const body = document.createElement("span");
    body.className = "wa-story-tab__body";

    const count = document.createElement("span");
    count.className = "wa-story-tab__count";
    count.textContent = `${index + 1} / ${this.stories.length}`;

    const title = document.createElement("span");
    title.className = "wa-story-tab__title";
    title.textContent = story.navLabel ?? story.label;

    body.append(count, title);

    if (story.navDescription || story.summary) {
      const description = document.createElement("span");
      description.className = "wa-story-tab__description";
      this.appendStoryDescriptionContent(description, story);
      body.append(description);
    }

    tab.append(marker, body);
    return tab;
  }

  private appendStoryDescriptionContent(description: HTMLElement, story: StoryDefinition): void {
    const text = story.navDescription ?? story.summary ?? "";
    const link = story.navDescriptionLink;
    const linkIndex = link ? text.indexOf(link.text) : -1;

    if (!link || linkIndex < 0) {
      description.textContent = text;
      return;
    }

    const anchor = document.createElement("a");
    anchor.className = "wa-story-tab__link";
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = link.text;
    anchor.setAttribute("aria-label", link.ariaLabel ?? link.text);

    description.append(
      document.createTextNode(text.slice(0, linkIndex)),
      anchor,
      document.createTextNode(text.slice(linkIndex + link.text.length)),
    );
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
      this.scrubStoryProgress(storyIndex, marker, moveEvent);
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

    const track = this.getMarkerTrack(marker);

    this.storyProgressScrub = {
      storyIndex,
      wasPlaying,
      pointerId: event.pointerId,
      marker,
      ...track,
      removeListeners,
    };

    marker.dataset.scrubbing = "true";
    window.addEventListener("pointermove", handleMove, { passive: false });
    window.addEventListener("pointerup", handleEnd, { passive: false });
    window.addEventListener("pointercancel", handleEnd, { passive: false });
    this.scrubStoryProgress(storyIndex, marker, event);
  }

  private scrubStoryProgress(storyIndex: number, marker: HTMLElement, event: PointerEvent): void {
    const progress = this.getMarkerProgress(marker, event, this.storyProgressScrub);

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
    this.activeTimelineStartPoint = startPoint;
    this.activeTimeline = this.buildTimeline(this.activeIndex, startPoint);
    this.playing = wasPlaying;
    this.updateStoryMeta();
    this.options.onStoryChange?.(this.stories[this.activeIndex], this.activeIndex);
    this.prepareActiveTimelineForProgressScrub();
  }

  private prepareActiveTimelineForProgressScrub(): void {
    this.autoAdvance?.kill();
    this.seekTween?.kill();
    this.seekTween = null;
    this.resumeRestoreTimeline?.kill();
    this.resumeRestoreTimeline = null;
    this.setHistoryPaused(false);
    this.chat.stopScrollMotion();
    this.cursor.clearTransientInteraction();
    this.activeTimeline?.pause();
    this.updatePlayButton();
  }

  private setActiveTimelineProgress(progress: number): void {
    if (!this.activeTimeline) return;

    this.renderActiveTimelineProgress(progress);
  }

  private renderActiveTimelineProgress(progress: number): void {
    if (!this.activeTimeline) return;

    const targetProgress = clampProgress(progress);

    if (this.shouldRebuildTimelineForSeek(targetProgress)) {
      this.rebuildTimelineForDeterministicSeek(targetProgress);
      return;
    }

    this.activeTimeline.progress(targetProgress, false).pause();
    this.updateProgress();
  }

  private shouldRebuildTimelineForSeek(targetProgress: number): boolean {
    const currentProgress = this.activeTimeline?.progress() ?? 0;

    return targetProgress < currentProgress - 0.002;
  }

  private rebuildTimelineForDeterministicSeek(progress: number): void {
    const storyIndex = this.activeIndex;
    const startPoint = this.activeTimelineStartPoint ?? this.cursor.getPosition();
    const wasPlaying = this.playing;

    this.stopTimeline();
    this.activeIndex = storyIndex;
    this.activeTimelineStartPoint = startPoint;
    this.activeTimeline = this.buildTimeline(this.activeIndex, startPoint);
    this.playing = wasPlaying;
    this.activeTimeline.progress(progress, false).pause();
    this.updateProgress();
    this.updateStoryMeta();
  }

  private resumeActiveTimeline(): void {
    const timeline = this.activeTimeline;

    if (!timeline) return;

    if (this.isTimelineAtEnd(timeline)) {
      this.handleComplete();
      return;
    }

    timeline.play();
  }

  private isTimelineAtEnd(timeline: gsap.core.Timeline): boolean {
    const duration = timeline.duration();

    return duration <= 0 || timeline.time() >= duration - 0.001 || timeline.progress() >= 0.999999;
  }

  private endStoryProgressScrub(restorePlayback: boolean): void {
    const scrub = this.storyProgressScrub;

    if (!scrub) return;

    scrub.removeListeners();
    scrub.marker.removeAttribute("data-scrubbing");
    this.storyProgressScrub = null;
    this.playing = restorePlayback ? scrub.wasPlaying : this.playing;
    this.cursor.clearTransientInteraction();

    if (restorePlayback && scrub.wasPlaying) {
      this.resumeActiveTimeline();
    } else {
      this.activeTimeline?.pause();
    }

    this.updatePlayButton();
  }

  private getMarkerProgress(
    marker: HTMLElement,
    event: PointerEvent,
    scrub: StoryProgressScrubState | null = null,
  ): number {
    if (scrub?.marker === marker && scrub.trackLength > 0) {
      const clientPosition = scrub.trackAxis === "x" ? event.clientX : event.clientY;

      return clampProgress((clientPosition - scrub.trackStart) / scrub.trackLength);
    }

    const track = this.getMarkerTrack(marker);

    if (track.trackLength <= 0) return 0;

    const clientPosition = track.trackAxis === "x" ? event.clientX : event.clientY;

    return clampProgress((clientPosition - track.trackStart) / track.trackLength);
  }

  private getMarkerTrack(marker: HTMLElement): Pick<StoryProgressScrubState, "trackAxis" | "trackStart" | "trackLength"> {
    const rect = marker.getBoundingClientRect();
    const trackAxis = rect.width > rect.height ? "x" : "y";

    return {
      trackAxis,
      trackStart: trackAxis === "x" ? rect.left : rect.top,
      trackLength: Math.max(0, trackAxis === "x" ? rect.width : rect.height),
    };
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
    this.seekTween = null;
    this.activeTimeline?.pause();
    this.chat.stopScrollMotion();
    this.chat.prepareForChatHistoryPause();
    this.parkCursorForPausedPlayback();
    this.setHistoryPaused(true);
    this.updatePlayButton();
  }

  private parkCursorForPausedPlayback(): void {
    this.cursor.clearTransientInteraction();
    this.cancelHistoryParkMotion();
    this.historyParkTimeline = this.cursor.parkForChatHistory();
  }

  private setHistoryPaused(paused: boolean, options: HistoryPausedOptions = {}): void {
    if (!paused) {
      if (!options.preserveActiveMimic) this.pausedCursorMimic?.setPaused(false);
      this.cancelHistoryParkMotion();
    }

    this.historyPaused = paused;
    this.root.dataset.chatHistoryPaused = String(paused);
    if (paused || !options.preserveActiveMimic) this.pausedCursorMimic?.setPaused(paused);
    this.updateResumeButtonVisibility();
  }

  private updateResumeButtonVisibility(): void {
    const resume = this.resumeButton;
    const paused = !this.playing || this.historyPaused;

    if (!resume) return;

    resume.setAttribute("aria-hidden", String(!paused));
    resume.tabIndex = paused ? 0 : -1;
  }

  private syncPausedCursorMimic(): void {
    const canMimicPausedCursor = Boolean(this.activeTimeline && !this.storySwitchTimeline);

    this.pausedCursorMimic?.setPaused(canMimicPausedCursor && (!this.playing || this.historyPaused));
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

  private onRoot(eventName: string, handler: EventListener): void {
    this.root.addEventListener(eventName, handler);
    this.listeners.push(() => this.root.removeEventListener(eventName, handler));
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
      prior.summary !== story.summary ||
      prior.navDescription !== story.navDescription ||
      !areStoryDescriptionLinksEqual(prior.navDescriptionLink, story.navDescriptionLink)
    );
  });
}

function areStoryDescriptionLinksEqual(
  previous: StoryDefinition["navDescriptionLink"],
  next: StoryDefinition["navDescriptionLink"],
): boolean {
  return previous?.text === next?.text &&
    previous?.href === next?.href &&
    previous?.ariaLabel === next?.ariaLabel;
}
