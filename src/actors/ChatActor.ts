import { gsap } from "gsap";
import type { CursorActor } from "./CursorActor";
import { getDataLogoOpticalScale } from "../assets/dataLogoOpticalSizing";
import type {
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  OutreachStyleProfileConfig,
  PersonalizationSwipeDecision,
  PersonalizationSwipeGameConfig,
  ProximityLeadListConfig,
  ResultCardConfig,
  SequenceBuildThinkingConfig,
  SequenceEngagementConfig,
  StrategyPlanConfig,
  UploadedFileConfig,
} from "../core/types";

type PreparedResultCard = {
  el: HTMLElement;
  reveal: () => gsap.core.Timeline;
  highlight: (target?: HTMLElement | string) => gsap.core.Timeline;
};

type PreparedCsvDropArea = {
  el: HTMLElement;
  reveal: () => gsap.core.Timeline;
  revealWhenCursorEnters: (cursor: CursorActor) => gsap.core.Timeline;
  activate: () => gsap.core.Timeline;
  complete: () => gsap.core.Timeline;
};

type PreparedCursorFile = {
  el: HTMLElement;
  startFollow: () => gsap.core.Timeline;
  stopFollow: () => gsap.core.Timeline;
  landAsUploadedFile: (fileName: string, detail?: string) => gsap.core.Timeline;
  landAsUploadedFiles: (files: UploadedFileConfig[]) => gsap.core.Timeline;
};
type CursorFileFollowOffset = {
  x: number;
  y: number;
};
type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number;
};
type FileLandingClone = {
  el: HTMLElement;
  target: HTMLElement;
  startX: number;
  startY: number;
  startScaleX: number;
  startScaleY: number;
  startRotation: number;
  startBackground: RgbaColor;
  endBackground: RgbaColor;
  startBorderColor: RgbaColor;
  detailEls: HTMLElement[];
  setX: (value: number) => void;
  setY: (value: number) => void;
  setScaleX: (value: number) => void;
  setScaleY: (value: number) => void;
  setRotation: (value: number) => void;
  setBackgroundColor: (value: string) => void;
  setBorderColor: (value: string) => void;
};
type ComposerFrame = {
  left: number;
  bottom: number;
  width: number;
  height: number;
};

type DropAreaOptions = {
  title?: string;
  detail?: string;
};

type ComponentKind =
  | "table"
  | "enrichment"
  | "thinking"
  | "result"
  | "strategy"
  | "sources"
  | "style"
  | "proximity"
  | "game"
  | "sequence"
  | "drop";
type MessageKind = ComponentKind | "file";
type DataSourceGroup = {
  category: string;
  sources: Array<DataSourceGridConfig["sources"][number]>;
};
type ThinkingSequenceOptions = {
  hold: number;
  itemStartY: number;
  headerDuration: number;
  afterStepHold: number;
  finalHold: number;
};
type StreamTiming = {
  charsPerSecond: number;
  minDuration: number;
  maxDuration: number;
};
type ChildRevealPreset = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  position?: string | number;
};
export type DataTablePageRestore = {
  tableId: string;
  currentPage: number;
  expectedPage: number;
  target: HTMLElement;
};

const MESSAGE_KIND_CLASSES = [
  "wa-message--component",
  ...(
    [
      "table",
      "enrichment",
      "thinking",
      "result",
      "strategy",
      "sources",
      "style",
      "proximity",
      "game",
      "sequence",
      "drop",
      "file",
    ] satisfies Array<MessageKind>
  ).map(
    (kind) => `wa-message--${kind}`,
  ),
];

const MOTION_TIME_SCALE = 1.28;
const motionDuration = (seconds: number): number => Number((seconds * MOTION_TIME_SCALE).toFixed(3));
const SEQUENCE_WAIT_DAY_DEFAULTS = [2, 3, 2];

const MESSAGE_SPRING = {
  duration: motionDuration(0.44),
  ease: "back.out(1.7)",
};

/* --------------------------------------------------------------------------
   AI Text Streaming

      0ms   assistant message bubble enters
    +80ms   text begins streaming left-to-right
    done   caret disappears and final text is locked in
   -------------------------------------------------------------------------- */

const AI_TEXT_STREAM = {
  startOverlap: "-=0.08",
  charsPerSecond: 54,
  minDuration: 0.36,
  maxDuration: 1.55,
};

/* --------------------------------------------------------------------------
   Thinking Step Animation

      0ms   row appears and becomes current
    +80ms   evidence detail streams in under the title
   done   active shimmer stops, detail folds away, title remains
   -------------------------------------------------------------------------- */

const THINKING_STEP_STREAM = {
  startOverlap: "-=0.08",
  charsPerSecond: 86,
  labelCharsPerSecond: 72,
  minDuration: 0.28,
  maxDuration: 1.1,
};

const THINKING_LABEL_STREAM = {
  charsPerSecond: THINKING_STEP_STREAM.labelCharsPerSecond,
  minDuration: THINKING_STEP_STREAM.minDuration,
  maxDuration: THINKING_STEP_STREAM.maxDuration,
};

const THINKING_HEADER_STREAM = {
  charsPerSecond: 62,
  minDuration: 0.18,
  maxDuration: 0.42,
};

const THINKING_STEP_FOLD = {
  detailOffsetY: -4,
  duration: motionDuration(0.24),
};

/* --------------------------------------------------------------------------
   Composer Show/Hide Storyboard

       0ms   hidden shell is a compact centered pill
       0ms   show: pill frame morphs to full input dimensions
       0ms   chat reserves final composer clearance
       0ms   hide: full input morphs back to compact centered pill
     done   hidden shell is removed from pointer and accessibility flow
   -------------------------------------------------------------------------- */

const COMPOSER_MOTION = {
  compactWidth: 96,
  compactHeight: 30,
  showDuration: motionDuration(0.42),
  hideDuration: motionDuration(0.36),
  contentShowDelay: motionDuration(0.1),
  contentHideDuration: motionDuration(0.1),
  showEase: "expo.out",
  hideEase: "power4.inOut",
  contentEase: "power2.out",
  threadGap: 44,
};

const COMPOSER_FRAME_PROPS = "left,right,bottom,width,height,minHeight";

const SIGNUP_TRANSITION = {
  scrollOutRatio: 0.74,
  minScrollOut: 280,
  duration: motionDuration(0.58),
  threadOverlap: "-=0.36",
};

const CHAT_BOTTOM_CLEARANCE = 110;

const CHAT_SCROLL_MOTION = {
  revealDuration: motionDuration(0.42),
  revealEase: "power3.inOut",
  followDuration: motionDuration(0.24),
  followEase: "power2.out",
};

const MARKETING_PAGE_MOTION = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: motionDuration(0.62),
  revealEase: "power3.inOut",
  cardDuration: motionDuration(0.28),
};

const STREAM_SCROLL_INTERVAL_MS = 96;
const TRANSIENT_ELEMENT_SELECTOR = ".wa-cursor-file, .wa-file-landing-clone, .wa-csv-drop";
const MARKETING_PANEL_SELECTOR = "[data-marketing-data-sources-grid]";
const CURSOR_FILE_ENTRY = {
  offscreenMargin: 96,
  pullInDuration: motionDuration(0.38),
  pullInEase: "power3.out",
};
const FILE_DROP_LANDING = {
  duration: motionDuration(0.54),
  stagger: 0.055,
  ease: "power3.inOut",
  rotations: [2, -5, 6, -8],
  detailStart: 0.42,
  detailSpan: 0.34,
  shadowY: 16,
  shadowBlur: 28,
  shadowAlpha: 0.18,
};

const COMPONENT_CHILD_REVEAL = {
  tableRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: motionDuration(0.24),
      ease: "power2.out",
      stagger: 0.045,
    },
  },
  compactRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: motionDuration(0.2),
      ease: "power2.out",
      stagger: 0.045,
    },
  },
  softRow: {
    from: { autoAlpha: 0, y: 7 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: motionDuration(0.24),
      ease: "power2.out",
      stagger: 0.045,
    },
  },
  smallCard: {
    from: {
      autoAlpha: 0,
      y: 12,
      scale: 0.985,
      transformOrigin: "center top",
    },
    to: {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: motionDuration(0.28),
      ease: "power2.out",
      stagger: 0.05,
    },
  },
  stackCard: {
    from: { autoAlpha: 0, y: 9, scale: 0.99 },
    to: {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: motionDuration(0.24),
      ease: "power2.out",
      stagger: 0.05,
    },
  },
  strategyCard: {
    from: {
      autoAlpha: 0,
      y: 20,
      scale: 0.985,
      transformOrigin: "center top",
    },
    to: {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: motionDuration(0.44),
      ease: "back.out(1.35)",
      stagger: 0.16,
    },
  },
  waterfallRow: {
    from: { autoAlpha: 0, y: 6 },
    to: {
      autoAlpha: 1,
      y: 0,
      duration: motionDuration(0.22),
      ease: "power2.out",
      stagger: 0.045,
    },
    position: "-=0.18",
  },
} satisfies Record<string, ChildRevealPreset>;

export class ChatActor {
  private chatShell: HTMLElement;
  private chatBody: HTMLElement;
  private thread: HTMLElement;
  private composerText: HTMLElement;
  private composer: HTMLElement;
  private composerContents: HTMLElement[] = [];
  private tableControlTooltip: HTMLElement;
  private signupScene: HTMLElement;
  private signupEmail: HTMLElement;
  private status: HTMLElement | null;
  private messagePool: HTMLElement[] = [];
  private cardPool: HTMLElement[] = [];
  private transientCleanups: Array<() => void> = [];
  private messageIndex = 0;
  private cardIndex = 0;
  private scheduledScrollFrame = 0;
  private scheduledScrollMessage: HTMLElement | null = null;
  private scrollTween: gsap.core.Tween | null = null;
  private dropRevealWatchers = new WeakMap<HTMLElement, () => void>();
  private lastStreamScrollAt = 0;
  private prefersReducedMotion = false;
  private composerVisible = false;
  private activeTablePageTimelines = new Map<string, gsap.core.Timeline>();
  private expectedDataTablePages = new Map<string, number>();

  private readonly handleDataTableControlPointerOver = (event: PointerEvent): void => {
    const control = this.findDataTableControl(event.target);

    if (!control) return;
    this.showTooltipForDataTableControl(control);
  };

  private readonly handleDataTableControlPointerOut = (event: PointerEvent): void => {
    const control = this.findDataTableControl(event.target);
    const relatedTarget = event.relatedTarget;

    if (!control) return;
    if (relatedTarget instanceof Node && control.contains(relatedTarget)) return;
    this.hideDataTableControlTooltip();
  };

  private readonly handleDataTableControlClick = (event: MouseEvent): void => {
    const pageButton = this.findDataTablePageButton(event.target);

    if (!pageButton) return;

    const table = pageButton.closest<HTMLElement>("[data-data-table]");
    const tableId = table?.dataset.dataTable;
    const page = Number(pageButton.dataset.tablePageButton);

    if (!tableId || !Number.isFinite(page)) return;

    event.preventDefault();
    this.activeTablePageTimelines.get(tableId)?.kill();
    const timeline = this.dataTablePage(tableId, page, { updateExpected: false });

    this.activeTablePageTimelines.set(tableId, timeline);
    timeline.eventCallback("onComplete", () => {
      if (this.activeTablePageTimelines.get(tableId) === timeline) {
        this.activeTablePageTimelines.delete(tableId);
      }
      this.showTooltipForDataTableControl(pageButton);
    });
  };

  constructor(private root: HTMLElement) {
    this.chatShell = this.required("[data-chat-shell]");
    this.chatBody = this.required(".wa-chat-shell__body");
    this.thread = this.required("[data-chat-thread]");
    this.composer = this.required("[data-chat-input]");
    this.composerText = this.required("[data-composer-text]");
    this.composerContents = Array.from(this.composer.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );
    this.tableControlTooltip = this.createDataTableFloatingTooltip();
    this.chatShell.append(this.tableControlTooltip);
    this.chatShell.addEventListener("pointerover", this.handleDataTableControlPointerOver);
    this.chatShell.addEventListener("pointerout", this.handleDataTableControlPointerOut);
    this.chatShell.addEventListener("click", this.handleDataTableControlClick);
    this.signupScene = this.required("[data-signup-scene]");
    this.signupEmail = this.required("[data-signup-email]");
    this.status = this.root.querySelector<HTMLElement>("[data-chat-status]");
    this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    this.root.querySelectorAll("[data-thinking], [data-research-steps], [data-result-grid]").forEach((el) => {
      el.remove();
    });
    this.root.querySelectorAll(TRANSIENT_ELEMENT_SELECTOR).forEach((el) => {
      el.remove();
    });
    this.clearMarketingPanels();
  }

  reset(): void {
    this.cancelScheduledScroll();
    this.scrollTween?.kill();
    this.scrollTween = null;
    this.clearTransientElements();
    this.clearMarketingPanels();
    this.messageIndex = 0;
    this.cardIndex = 0;
    this.composerText.textContent = "";
    gsap.killTweensOf([this.composer, this.composerText, ...this.composerContents, this.thread]);
    this.setComposerFocusState(false);
    this.setComposerVisibleState(false);
    this.activeTablePageTimelines.forEach((timeline) => timeline.kill());
    this.activeTablePageTimelines.clear();
    this.expectedDataTablePages.clear();
    this.hideDataTableControlTooltip();
    this.signupEmail.textContent = "";
    this.status?.replaceChildren(document.createTextNode("Ready"));
    this.clearCustomResults();

    this.thread.scrollTop = 0;
    gsap.set(this.thread, {
      clearProps: "maxHeight,minHeight,paddingTop,paddingBottom,borderWidth",
    });
    gsap.set(this.signupScene, { autoAlpha: 0, y: 0, scale: 1, display: "none" });
    gsap.set(this.thread, {
      autoAlpha: 1,
      y: 0,
      display: "",
    });
    gsap.set(this.composer, this.getComposerHiddenVars());
    gsap.set(this.composerContents, this.getComposerContentsHiddenVars());
    gsap.set(this.composerText, { autoAlpha: 1, y: 0 });

    for (const message of this.messagePool) {
      message.style.display = "none";
    }

    for (const card of this.cardPool) {
      card.style.display = "none";
    }
  }

  destroy(): void {
    this.chatShell.removeEventListener("pointerover", this.handleDataTableControlPointerOver);
    this.chatShell.removeEventListener("pointerout", this.handleDataTableControlPointerOut);
    this.chatShell.removeEventListener("click", this.handleDataTableControlClick);
    this.activeTablePageTimelines.forEach((timeline) => timeline.kill());
    this.activeTablePageTimelines.clear();
  }

  prepareStoryStart(): void {
    this.setComposerFocusState(false);
    this.setComposerVisibleState(false);
    gsap.set(this.composer, this.getComposerHiddenVars());
    gsap.set(this.composerContents, this.getComposerContentsHiddenVars());
    gsap.set(this.composerText, { autoAlpha: 1, y: 0 });
  }

  setStatus(text: string): gsap.core.Timeline {
    const tl = gsap.timeline();

    if (!this.status) return tl;

    tl.to(this.status, {
      autoAlpha: 0,
      y: -3,
      duration: motionDuration(0.12),
      ease: "power1.out",
    })
      .call(() => {
        if (this.status) this.status.textContent = text;
      })
      .to(this.status, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(0.18),
        ease: "power2.out",
      });

    return tl;
  }

  prepareSignup(email = ""): void {
    this.signupEmail.textContent = email;
    gsap.set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",
    });
    gsap.set([this.thread, this.composer], {
      autoAlpha: 0,
      y: 34,
    });
    gsap.set(this.composer, this.getComposerHiddenVars());
    gsap.set(this.composerContents, this.getComposerContentsHiddenVars());
    this.setComposerVisibleState(false);
  }

  typeComposer(text: string, duration = 1.1): gsap.core.Timeline {
    const proxy = { count: 0 };
    const tl = gsap.timeline();

    tl.call(() => {
      this.composerText.textContent = "";
    }).to(proxy, {
      count: text.length,
      duration,
      ease: "none",
      onUpdate: () => {
        this.composerText.textContent = text.slice(0, Math.round(proxy.count));
      },
    });

    return tl;
  }

  sendComposerText(): gsap.core.Timeline {
    return gsap.timeline().to(this.composerText, {
      autoAlpha: 0,
      y: -9,
      duration: motionDuration(0.18),
      ease: "power2.out",
      overwrite: "auto",
    });
  }

  setComposerFocus(focused: boolean): gsap.core.Timeline {
    return gsap.timeline().to(
      {},
      {
        duration: 0.001,
        onStart: () => this.setComposerFocusState(focused),
      },
    );
  }

  showComposer(): gsap.core.Timeline {
    const tl = gsap.timeline();
    const fullFrame = this.measureComposerFullFrame();
    const compactFrame = this.getComposerCompactFrame(fullFrame);

    tl
      .set(this.composer, {
        ...this.getComposerHiddenVars(),
        display: "grid",
        visibility: "visible",
        left: compactFrame.left,
        right: "auto",
        bottom: compactFrame.bottom,
        width: compactFrame.width,
        height: compactFrame.height,
        minHeight: compactFrame.height,
      })
      .set(this.composerContents, {
        visibility: "visible",
        opacity: 0,
        y: 0,
      })
      .call(() => this.setComposerVisibleState(true))
      .set(this.thread, {
        paddingBottom: () => Math.max(CHAT_BOTTOM_CLEARANCE, this.getComposerThreadInsetForFrame(fullFrame)),
      }, 0)
      .call(() => this.pinThreadToBottom(), undefined, 0)
      .to(this.composer, {
        left: fullFrame.left,
        bottom: fullFrame.bottom,
        width: fullFrame.width,
        height: fullFrame.height,
        minHeight: fullFrame.height,
        duration: COMPOSER_MOTION.showDuration,
        ease: COMPOSER_MOTION.showEase,
        force3D: true,
        autoRound: false,
        overwrite: "auto",
        onUpdate: () => {
          if (!this.composerVisible) this.setComposerVisibleState(true);
        },
        onComplete: () => {
          if (!this.composerVisible) this.setComposerVisibleState(true);
        },
      }, 0)
      .to(this.composerContents, {
        opacity: 1,
        duration: motionDuration(0.18),
        ease: COMPOSER_MOTION.contentEase,
        overwrite: "auto",
      }, COMPOSER_MOTION.contentShowDelay)
      .call(() => this.pinThreadToBottom());

    return tl;
  }

  hideComposer(): gsap.core.Timeline {
    const fullFrame = this.measureComposerFullFrame();
    const compactFrame = this.getComposerCompactFrame(fullFrame);

    return gsap.timeline()
      .set(this.composer, {
        left: fullFrame.left,
        right: "auto",
        bottom: fullFrame.bottom,
        width: fullFrame.width,
        height: fullFrame.height,
        minHeight: fullFrame.height,
        y: 0,
        scaleX: 1,
        scaleY: 1,
      })
      .to(this.composerContents, {
        opacity: 0,
        duration: COMPOSER_MOTION.contentHideDuration,
        ease: "power2.out",
        overwrite: "auto",
      }, 0)
      .to(this.composer, {
        left: compactFrame.left,
        bottom: compactFrame.bottom,
        width: compactFrame.width,
        height: compactFrame.height,
        minHeight: compactFrame.height,
        opacity: 1,
        duration: COMPOSER_MOTION.hideDuration,
        ease: COMPOSER_MOTION.hideEase,
        force3D: true,
        autoRound: false,
        overwrite: "auto",
        onStart: () => {
          this.setComposerFocusState(false);
          this.setComposerVisibleState(false);
        },
        onComplete: () => {
          gsap.set(this.composerContents, { visibility: "hidden" });
          gsap.set(this.composer, {
            visibility: "hidden",
          });
          gsap.set(this.thread, { paddingBottom: CHAT_BOTTOM_CLEARANCE });
          this.pinThreadToBottom();
        },
      }, 0);
  }

  clearComposer(): gsap.core.Timeline {
    return gsap.timeline().call(() => {
      this.composerText.textContent = "";
      gsap.set(this.composerText, { autoAlpha: 1, y: 0 });
    });
  }

  private setComposerFocusState(focused: boolean): void {
    this.composer.dataset.focused = String(focused);
  }

  private setComposerVisibleState(visible: boolean): void {
    this.composerVisible = visible;
    this.composer.dataset.visible = String(visible);
    this.composer.setAttribute("aria-hidden", String(!visible));
  }

  private getComposerHiddenVars(): gsap.TweenVars {
    return {
      opacity: 1,
      visibility: "hidden",
      y: 0,
      scaleX: 1,
      scaleY: 1,
      display: "",
      left: "",
      right: "",
      bottom: "",
      width: "",
      height: "",
      minHeight: "",
    };
  }

  private getComposerContentsHiddenVars(): gsap.TweenVars {
    return {
      visibility: "hidden",
      opacity: 0,
      y: 0,
    };
  }

  private getComposerThreadInsetForFrame(frame: ComposerFrame): number {
    const composerTop = this.chatShell.clientHeight - frame.bottom - frame.height;
    const threadBottom = this.thread.offsetTop + this.thread.clientHeight;
    const overlap = Math.max(0, threadBottom - composerTop);

    return Math.ceil(overlap + COMPOSER_MOTION.threadGap);
  }

  private measureComposerFullFrame(): ComposerFrame {
    gsap.set(this.composer, { clearProps: COMPOSER_FRAME_PROPS });

    const shellRect = this.chatShell.getBoundingClientRect();
    const composerRect = this.composer.getBoundingClientRect();

    return {
      left: composerRect.left - shellRect.left,
      bottom: shellRect.bottom - composerRect.bottom,
      width: composerRect.width,
      height: composerRect.height,
    };
  }

  private getComposerCompactFrame(frame: ComposerFrame): ComposerFrame {
    const width = Math.min(COMPOSER_MOTION.compactWidth, frame.width);
    const height = Math.min(COMPOSER_MOTION.compactHeight, frame.height);

    return {
      left: frame.left + (frame.width - width) / 2,
      bottom: frame.bottom + (frame.height - height) / 2,
      width,
      height,
    };
  }

  showSignup(email = ""): gsap.core.Timeline {
    return gsap
      .timeline()
      .call(() => {
        this.signupEmail.textContent = email;
      })
      .set(this.signupScene, {
        display: "grid",
        autoAlpha: 1,
        y: 0,
        scale: 1,
        pointerEvents: "auto",
      })
      .set(this.thread, {
        autoAlpha: 0,
        y: 34,
      })
      .set(this.composer, this.getComposerHiddenVars())
      .set(this.composerContents, this.getComposerContentsHiddenVars())
      .call(() => this.setComposerVisibleState(false));
  }

  typeSignupEmail(email: string, duration = 0.86): gsap.core.Timeline {
    const proxy = { count: 0 };

    return gsap
      .timeline()
      .call(() => {
        this.signupEmail.textContent = "";
      })
      .to(proxy, {
        count: email.length,
        duration,
        ease: "none",
        onUpdate: () => {
          this.signupEmail.textContent = email.slice(0, Math.round(proxy.count));
        },
      });
  }

  transitionSignupToChat(): gsap.core.Timeline {
    return gsap
      .timeline()
      .to(this.signupScene, {
        y: () => this.getSignupScrollOutDistance(),
        autoAlpha: 1,
        scale: 1,
        duration: SIGNUP_TRANSITION.duration,
        ease: "power3.inOut",
      })
      .set(this.signupScene, { pointerEvents: "none" })
      .fromTo(
        this.thread,
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: SIGNUP_TRANSITION.duration,
          ease: "power3.out",
        },
        SIGNUP_TRANSITION.threadOverlap,
      )
      .set(this.composer, this.getComposerHiddenVars())
      .set(this.composerContents, this.getComposerContentsHiddenVars())
      .call(() => this.setComposerVisibleState(false));
  }

  private getSignupScrollOutDistance(): number {
    const height = this.signupScene.getBoundingClientRect().height;

    return -Math.max(SIGNUP_TRANSITION.minScrollOut, Math.round(height * SIGNUP_TRANSITION.scrollOutRatio));
  }

  stopScrollMotion(): void {
    this.cancelScheduledScroll();
    this.scrollTween?.kill();
    this.scrollTween = null;
  }

  scrollToLive(duration = CHAT_SCROLL_MOTION.followDuration): void {
    this.stopScrollMotion();

    const target = this.getThreadBottomScrollTarget();

    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - target) < 1) {
      this.thread.scrollTop = target;
      return;
    }

    this.scrollTween = gsap.to(this.thread, {
      scrollTop: target,
      duration,
      ease: CHAT_SCROLL_MOTION.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      },
    });
  }

  userMessage(text: string): gsap.core.Timeline {
    const message = this.claimMessage("user", text);

    return this.revealMessage(message);
  }

  assistantMessage(text: string): gsap.core.Timeline {
    const message = this.claimMessage("assistant", "");
    const body = message.querySelector<HTMLElement>("[data-message-body]");
    const tl = gsap.timeline().add(this.revealMessage(message));

    if (!body) return tl;

    return tl.add(
      this.streamText(body, text, {
        duration: this.getStreamDuration(text, AI_TEXT_STREAM),
        targetForScroll: message,
      }),
      AI_TEXT_STREAM.startOverlap,
    );
  }

  thinkingState(labelOrSteps: string | string[], hold = 1.1): gsap.core.Timeline {
    const steps = Array.isArray(labelOrSteps) ? labelOrSteps : [labelOrSteps];
    const isSequence = steps.length > 1;

    return this.runThinkingSequence(steps, {
      hold,
      itemStartY: isSequence ? 10 : 6,
      headerDuration: isSequence ? 0.24 : 0.28,
      afterStepHold: isSequence ? hold * 0.45 : hold,
      finalHold: isSequence ? hold * 0.35 : 0,
    });
  }

  prepareResultCard(config: ResultCardConfig): PreparedResultCard {
    const card = this.claimCard(config);

    return {
      el: card,
      reveal: () => this.revealCard(card),
      highlight: (target?: HTMLElement | string) => this.highlightCardTarget(card, target),
    };
  }

  dataTable(config: DataTableConfig): gsap.core.Timeline {
    const table = this.createDataTable(config);

    return this.revealComponentItems("table", table, ".wa-data-table__row", COMPONENT_CHILD_REVEAL.tableRow);
  }

  dataTablePage(tableId: string, page: number, options: { updateExpected?: boolean } = {}): gsap.core.Timeline {
    const tl = gsap.timeline();
    const fadeOut = { value: 0 };
    const fadeIn = { value: 0 };
    const updateExpected = options.updateExpected ?? true;
    const state: {
      canSwitch: boolean;
      table: HTMLElement | null;
      currentRows: HTMLElement[];
      targetRows: HTMLElement[];
      buttons: HTMLElement[];
      targetButton?: HTMLElement;
      range: HTMLElement | null;
    } = {
      canSwitch: false,
      table: null,
      currentRows: [],
      targetRows: [],
      buttons: [],
      range: null,
    };

    tl.to(fadeOut, {
      value: 1,
      duration: motionDuration(0.14),
      ease: "power1.out",
      onStart: () => {
        state.table = this.findDataTable(tableId);
        if (updateExpected) this.expectedDataTablePages.set(tableId, page);
        state.currentRows = state.table ? this.getVisibleDataTableRows(state.table) : [];
        state.targetRows = state.table ? this.queryElements(state.table, `.wa-data-table__row[data-page="${page}"]`) : [];
        state.buttons = state.table ? this.queryElements(state.table, "[data-table-page-button]") : [];
        state.targetButton = state.buttons.find((button) => Number(button.dataset.tablePageButton) === page);
        state.range = state.table?.querySelector<HTMLElement>("[data-table-page-range]") ?? null;
        state.canSwitch = Boolean(
          state.table &&
          state.targetRows.length &&
          state.table.dataset.activePage !== String(page),
        );
        if (state.canSwitch) gsap.set(state.currentRows, { autoAlpha: 1, y: 0 });
      },
      onUpdate: () => {
        if (!state.canSwitch) return;

        const progress = fadeOut.value;
        const y = this.interpolate(0, -4, progress);

        state.currentRows.forEach((row) => {
          row.style.opacity = String(1 - progress);
          row.style.visibility = progress > 0.98 ? "hidden" : "visible";
          row.style.transform = `translate3d(0, ${y}px, 0)`;
        });
      },
    })
      .call(() => {
        if (!state.table || !state.canSwitch) return;

        state.table.dataset.activePage = String(page);
        state.currentRows.forEach((row) => {
          row.style.display = "none";
        });
        state.targetRows.forEach((row) => {
          row.style.display = "grid";
        });
        state.buttons.forEach((button) => {
          const active = Number(button.dataset.tablePageButton) === page;
          button.dataset.active = String(active);
          button.setAttribute("aria-current", active ? "page" : "false");
        });
        if (state.range && state.targetButton?.dataset.pageRange) {
          state.range.textContent = state.targetButton.dataset.pageRange;
        }
        gsap.set(state.targetRows, { autoAlpha: 0, y: 6 });
      })
      .to(fadeIn, {
        value: 1,
        duration: motionDuration(0.2),
        ease: "power2.out",
        onStart: () => {
          fadeIn.value = 0;
        },
        onUpdate: () => {
          if (!state.canSwitch) return;

          const progress = fadeIn.value;
          const y = this.interpolate(6, 0, progress);

          state.targetRows.forEach((row) => {
            row.style.opacity = String(progress);
            row.style.visibility = progress > 0 ? "visible" : "hidden";
            row.style.transform = `translate3d(0, ${y}px, 0)`;
          });
        },
        onComplete: () => {
          if (state.canSwitch) gsap.set(state.targetRows, { autoAlpha: 1, y: 0 });
        },
      });

    return tl;
  }

  getDataTablePageRestores(): DataTablePageRestore[] {
    const restores: DataTablePageRestore[] = [];

    this.expectedDataTablePages.forEach((expectedPage, tableId) => {
      const table = this.findDataTable(tableId);
      const currentPage = Number(table?.dataset.activePage);
      const target = table?.querySelector<HTMLElement>(`[data-table-page-button="${expectedPage}"]`);

      if (!table || !target || !Number.isFinite(currentPage) || currentPage === expectedPage) return;

      restores.push({
        tableId,
        currentPage,
        expectedPage,
        target,
      });
    });

    return restores;
  }

  dataTableActionTooltip(tableId: string, actionId: string, visible: boolean): gsap.core.Timeline {
    return gsap.timeline().call(() => {
      const table = this.findDataTable(tableId);

      if (!table) {
        this.hideDataTableControlTooltip();
        return;
      }

      const buttons = this.queryElements(table, "[data-table-action]");
      buttons.forEach((button) => {
        const active = button.dataset.tableAction === actionId && visible;
        button.dataset.tooltipVisible = String(active);
      });
      const activeButton = visible ? buttons.find((button) => button.dataset.tableAction === actionId) : undefined;

      if (!activeButton) {
        this.hideDataTableControlTooltip();
        return;
      }

      const text = this.getDataTableControlTooltipText(activeButton);

      if (!text) {
        this.hideDataTableControlTooltip();
        return;
      }

      this.showDataTableControlTooltip(activeButton, text);
    });
  }

  enrichmentPanel(config: EnrichmentConfig): gsap.core.Timeline {
    const panel = this.createEnrichmentPanel(config);

    return this.revealComponentItems("enrichment", panel, ".wa-waterfall-row", COMPONENT_CHILD_REVEAL.waterfallRow);
  }

  strategyPlans(plans: StrategyPlanConfig[]): gsap.core.Timeline {
    const cards = plans.map((plan) => this.createStrategyPlan(plan));
    const grid = document.createElement("div");
    const summaries = cards.flatMap((card) => this.queryElements(card, ".wa-strategy-plan__summary"));

    grid.className = "wa-result-grid has-strategy-plans";
    grid.dataset.strategyPlans = plans.map((plan) => plan.id).join(" ");
    grid.append(...cards);

    gsap.set(summaries, { autoAlpha: 0, y: 8 });

    return this.revealComponentItems("strategy", grid, cards, COMPONENT_CHILD_REVEAL.strategyCard)
      .to(
        summaries,
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.24),
          ease: "power2.out",
          stagger: 0.035,
        },
        "-=0.22",
      );
  }

  dataSourcesGrid(config: DataSourceGridConfig): gsap.core.Timeline {
    const grid = this.createDataSourcesGrid(config);

    return this.revealComponentItems("sources", grid, ".wa-data-source-card", COMPONENT_CHILD_REVEAL.smallCard);
  }

  marketingDataSourcesGrid(config: DataSourceGridConfig): gsap.core.Timeline {
    const page = this.createMarketingDataSourcesGrid(config);
    const logos = this.queryElements(page, ".wa-data-vendor-logo");
    const groups = this.queryElements(page, ".wa-data-source-group");
    const header = page.querySelector<HTMLElement>(".wa-data-source-grid__header");
    const introTargets = this.compactElements(header, ...groups, ...logos);

    return gsap
      .timeline()
      .call(() => {
        this.clearMarketingPanels();
        this.stopScrollMotion();
        this.chatBody.append(page);
      })
      .set(page, {
        autoAlpha: 0,
        y: 72,
        scale: 0.985,
        transformOrigin: "center bottom",
      })
      .set(introTargets, {
        autoAlpha: 0,
        y: 12,
      })
      .to(
        this.thread,
        {
          scrollTop: () => this.getThreadBottomScrollTarget(),
          duration: MARKETING_PAGE_MOTION.revealDuration,
          ease: MARKETING_PAGE_MOTION.revealEase,
          overwrite: "auto",
        },
        0,
      )
      .to(
        this.thread,
        {
          y: MARKETING_PAGE_MOTION.threadY,
          autoAlpha: MARKETING_PAGE_MOTION.threadOpacity,
          duration: MARKETING_PAGE_MOTION.revealDuration,
          ease: MARKETING_PAGE_MOTION.revealEase,
          overwrite: "auto",
        },
        0.04,
      )
      .to(
        page,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: MARKETING_PAGE_MOTION.revealDuration,
          ease: MARKETING_PAGE_MOTION.revealEase,
        },
        0.16,
      )
      .to(
        header,
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.28),
          ease: "power2.out",
        },
        0.28,
      )
      .to(
        groups,
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.3),
          ease: "power2.out",
          stagger: 0.04,
        },
        0.36,
      )
      .to(
        logos,
        {
          autoAlpha: 1,
          y: 0,
          duration: MARKETING_PAGE_MOTION.cardDuration,
          ease: "power2.out",
          stagger: 0.025,
        },
        0.42,
      );
  }

  outreachStyleProfile(config: OutreachStyleProfileConfig): gsap.core.Timeline {
    const profile = this.createOutreachStyleProfile(config);

    return this.revealComponentItems(
      "style",
      profile,
      ".wa-style-profile__row, .wa-style-profile__example",
      COMPONENT_CHILD_REVEAL.softRow,
    );
  }

  proximityLeadList(config: ProximityLeadListConfig): gsap.core.Timeline {
    const list = this.createProximityLeadList(config);

    return this.revealComponentItems("proximity", list, ".wa-proximity-lead", {
      ...COMPONENT_CHILD_REVEAL.stackCard,
      to: { ...COMPONENT_CHILD_REVEAL.stackCard.to, duration: motionDuration(0.25), stagger: 0.06 },
    });
  }

  personalizationSwipeGame(config: PersonalizationSwipeGameConfig): gsap.core.Timeline {
    const game = this.createPersonalizationSwipeGame(config);
    const revealTargets = this.compactElements(
      ...this.queryElements(game, ".wa-mini-game__header, .wa-swipe-game__prompt, .wa-swipe-game__axis"),
      game.querySelector<HTMLElement>(".wa-swipe-game__stack"),
      game.querySelector<HTMLElement>(".wa-swipe-game__actions"),
    );

    this.layoutSwipeGameCards(game, 0);

    return this.revealComponentItems("game", game, revealTargets, {
      from: { autoAlpha: 0, y: 12, scale: 0.985 },
      to: {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: motionDuration(0.32),
        ease: "power2.out",
        stagger: 0.05,
      },
      position: "-=0.2",
    });
  }

  swipePersonalizationCard(
    gameId: string,
    signalId: string,
    decision: PersonalizationSwipeDecision,
  ): gsap.core.Timeline {
    const game = this.root.querySelector<HTMLElement>(
      `[data-personalization-swipe-game="${this.escapeSelectorValue(gameId)}"]`,
    );
    const card = game?.querySelector<HTMLElement>(`[data-swipe-card="${this.escapeSelectorValue(signalId)}"]`);
    const cards = this.getSwipeCards(game);
    const index = card ? cards.indexOf(card) : -1;
    const nextCard = cards[index + 1];
    const direction = decision === "use" ? 1 : -1;
    const action = game?.querySelector<HTMLElement>(`[data-swipe-action="${decision}"]`);
    const complete = game?.querySelector<HTMLElement>("[data-swipe-complete]");
    const actions = game?.querySelector<HTMLElement>(".wa-swipe-game__actions");
    const tl = gsap.timeline();

    if (!game || !card || index < 0) return tl;

    tl.call(() => {
      game.dataset.swipeDecision = decision;
      if (action) action.dataset.active = "true";
    })
      .to(
        action ?? {},
        {
          scale: 0.92,
          duration: motionDuration(0.08),
          ease: "power2.out",
        },
        0,
      )
      .to(
        action ?? {},
        {
          scale: 1,
          duration: motionDuration(0.18),
          ease: "back.out(2)",
        },
        motionDuration(0.1),
      )
      .to(
        card,
        {
          x: direction * 520,
          y: index % 2 === 0 ? -28 : 24,
          rotation: direction * (16 + index * 2),
          autoAlpha: 0,
          duration: motionDuration(0.5),
          ease: "power3.in",
          force3D: true,
        },
        0.08,
      )
      .call(
        () => {
          delete game.dataset.swipeDecision;
          if (action) delete action.dataset.active;
          card.dataset.swipeState = "done";
          gsap.set(card, { display: "none" });
          this.layoutSwipeGameCards(game, index + 1);
        },
        undefined,
        "-=0.12",
      );

    if (nextCard) {
      tl.fromTo(
        nextCard,
        {
          x: -direction * 18,
          y: 10,
          scale: 0.965,
          rotation: -direction * 1.5,
          autoAlpha: 0.74,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
          duration: motionDuration(0.28),
          ease: "power2.out",
          force3D: true,
        },
        "-=0.2",
      );
    } else if (complete && actions) {
      tl.to(
        actions,
        {
          autoAlpha: 0,
          y: 8,
          duration: motionDuration(0.18),
          ease: "power2.out",
        },
        "-=0.16",
      ).to(
        complete,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: motionDuration(0.28),
          ease: "back.out(1.55)",
        },
        "-=0.06",
      );
    }

    return tl;
  }

  sequenceEngagement(config: SequenceEngagementConfig): gsap.core.Timeline {
    const panel = this.createSequenceEngagement(config);

    return this.revealComponentItems(
      "sequence",
      panel,
      ".wa-sequence-person-button, .wa-sequence-card, .wa-sequence-step, .wa-sequence-wait, .wa-sequence-copy-panel, .wa-engage-channel, .wa-sequence-kickoff",
      COMPONENT_CHILD_REVEAL.stackCard,
    );
  }

  sequenceBuildThinking(config: SequenceBuildThinkingConfig): gsap.core.Timeline {
    const templateItem = this.createSequenceThinkingStep(config.templateLabel, config.template, 0);
    const trackItems = config.tracks.map((track, index) =>
      this.createSequenceThinkingStep(track.label, track.detail, index + 1, config.total),
    );
    const thinking = this.claimThinkingMessage([templateItem, ...trackItems], this.getThinkingElapsed(3));
    const progress = { value: 1 };
    const progressBars = trackItems
      .map((item) => item.querySelector<HTMLElement>(".wa-sequence-thinking-progress__bar span"))
      .filter((bar): bar is HTMLElement => Boolean(bar));

    thinking.message.querySelector<HTMLElement>(".wa-thinking-block")!.dataset.sequenceThinking = config.id;
    gsap.set(thinking.header, { autoAlpha: 0, y: 5 });
    gsap.set(thinking.steps, { display: "grid", autoAlpha: 1, y: 0 });
    gsap.set([templateItem, ...trackItems], { autoAlpha: 0, y: 10, display: "none" });
    gsap.set(progressBars, {
      scaleX: 1 / Math.max(1, config.total),
      transformOrigin: "left center",
    });

    const tl = gsap.timeline()
      .add(this.revealMessage(thinking.message))
      .to(thinking.header, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(0.24),
        ease: "power2.out",
      })
      .add(this.streamThinkingHeader(thinking.header), "-=0.08")
      .call(() => {
        templateItem.dataset.stepState = "current";
        gsap.set(templateItem, { display: "grid" });
      })
      .to(templateItem, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(0.26),
        ease: "power2.out",
      }, "<")
      .add(this.streamThinkingStepLabel(templateItem), THINKING_STEP_STREAM.startOverlap)
      .add(this.streamThinkingStepDetail(templateItem), "-=0.02")
      .to({}, { duration: motionDuration(0.54) })
      .add(this.foldThinkingStep(templateItem))
      .call(() => {
        trackItems.forEach((item) => {
          item.dataset.stepState = "current";
          gsap.set(item, { display: "grid" });
        });
      }, undefined, "+=0.1")
      .to(trackItems, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(0.3),
        ease: "power2.out",
        stagger: 0.04,
      }, "<");

    trackItems.forEach((item, index) => {
      tl.add(this.streamThinkingStepLabel(item), index === 0 ? THINKING_STEP_STREAM.startOverlap : "<");
    });
    trackItems.forEach((item, index) => {
      tl.add(this.streamThinkingStepDetail(item), index === 0 ? "-=0.02" : "<");
    });

    tl.to(progress, {
      value: config.total,
      duration: motionDuration(3.9),
      ease: "power1.inOut",
      onUpdate: () => {
        const current = Math.max(1, Math.round(progress.value));
        const ratio = current / Math.max(1, config.total);

        trackItems.forEach((item) => {
          const label = item.querySelector<HTMLElement>(".wa-sequence-thinking-progress__count");
          const bar = item.querySelector<HTMLElement>(".wa-sequence-thinking-progress__bar span");

          if (label) label.textContent = `${current}/${config.total}`;
          if (bar) gsap.set(bar, { scaleX: ratio });
        });
        this.requestMessageScroll(thinking.message);
      },
    }, "+=0.14")
      .to({}, { duration: motionDuration(0.34) });

    trackItems.forEach((item, index) => {
      tl.add(this.foldThinkingStep(item), index === 0 ? undefined : "<");
    });

    return tl.call(() => {
      trackItems.forEach((item) => {
        item.dataset.stepState = "complete";
      });
      this.animateMessageScrollIntoView(thinking.message);
    });
  }

  sequencePerson(sequenceId: string, index: number): gsap.core.Timeline {
    const section = this.findSequenceEngagement(sequenceId);
    const tl = gsap.timeline();

    if (!section) return tl;

    const cards = this.queryElements(section, "[data-sequence-card]");
    const buttons = this.queryElements(section, "[data-sequence-person-button]");
    const count = section.querySelector<HTMLElement>("[data-sequence-count]");
    const activeCard = this.getSequenceDisplayCard(section);
    const targetCard = cards.find((card) => Number(card.dataset.sequenceIndex) === index);
    const currentIndex = Number(section.dataset.activeSequenceIndex ?? "0");

    if (!targetCard || !activeCard || currentIndex === index) {
      this.setActiveSequencePerson(section, index);
      return tl;
    }

    const textTargets = this.getSequenceTransitionTargets(section, activeCard);

    tl.to(textTargets, {
      autoAlpha: 0,
      y: -3,
      duration: motionDuration(0.14),
      ease: "power2.in",
      stagger: 0.012,
    })
      .call(() => {
        cards.forEach((card) => {
          const active = card === activeCard;

          card.dataset.active = String(active);
          card.style.display = active ? "grid" : "none";
        });
        section.dataset.activeSequenceIndex = String(index);
        this.applySequenceTemplateToDisplayCard(section, activeCard, targetCard, index);
        buttons.forEach((button) => {
          button.dataset.currentIndex = String(index);
        });
        if (count) count.textContent = this.getSequenceCountLabel(index, section.dataset.peopleCount ?? "");
        this.updateSequencePersonIdentity(section, index);
        gsap.set(textTargets, { y: 4 });
      })
      .to(textTargets, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(0.24),
        ease: "power2.out",
        stagger: 0.014,
      })
      .call(() => this.animateMessageScrollIntoView(section.closest<HTMLElement>(".wa-message") ?? section));

    return tl;
  }

  sequenceKickoff(sequenceId: string): gsap.core.Timeline {
    return gsap.timeline().call(() => {
      const section = this.findSequenceEngagement(sequenceId);
      const button = section?.querySelector<HTMLElement>("[data-sequence-kickoff]");
      const label = button?.querySelector<HTMLElement>(".wa-sequence-kickoff__label");

      if (!section || !button) return;

      section.dataset.sequenceLaunched = "true";
      button.dataset.launched = "true";
      if (label) label.textContent = "Sequence kicked off";
    });
  }

  prepareCsvDropArea(options: DropAreaOptions = {}): PreparedCsvDropArea {
    const dropArea = this.createCsvDropArea(options);
    this.registerTransientElement(dropArea, () => this.clearDropRevealWatcher(dropArea));

    return {
      el: dropArea,
      reveal: () => this.revealCsvDropArea(dropArea),
      revealWhenCursorEnters: (cursor) => this.revealCsvDropAreaWhenCursorEnters(dropArea, cursor),
      activate: () => this.activateCsvDropArea(dropArea),
      complete: () => this.completeCsvDropArea(dropArea),
    };
  }

  prepareCursorFile(fileName: string, cursor: CursorActor, fileType = "CSV"): PreparedCursorFile {
    const file = this.createCursorFile(fileName, fileType);
    let removeFollower: (() => void) | null = null;
    let followOffset: CursorFileFollowOffset = { x: 0, y: 0 };
    const stopFollowing = () => {
      removeFollower?.();
      removeFollower = null;
      gsap.killTweensOf(followOffset);
    };

    this.registerTransientElement(file, () => {
      stopFollowing();
    });

    return {
      el: file,
      startFollow: () =>
        gsap
          .timeline()
          .call(() => {
            removeFollower?.();
            followOffset = this.getCursorFileEntryOffset(file, cursor);
            removeFollower = this.followCursorWithFile(file, cursor, followOffset);
          })
          .to(followOffset, {
            x: 0,
            y: 0,
            duration: CURSOR_FILE_ENTRY.pullInDuration,
            ease: CURSOR_FILE_ENTRY.pullInEase,
          }, 0)
          .to(file, {
            autoAlpha: 1,
            scale: 1,
            duration: motionDuration(0.24),
            ease: "back.out(1.9)",
          }, 0.04),
      stopFollow: () =>
        gsap
          .timeline()
          .call(stopFollowing)
          .to(file, {
            autoAlpha: 0,
            scale: 0.92,
            duration: motionDuration(0.18),
            ease: "power2.in",
          }),
      landAsUploadedFile: (landedFileName, detail = "CSV uploaded") =>
        gsap
          .timeline()
          .call(stopFollowing)
          .add(this.uploadedFileMessageFromCursorFile(file, landedFileName, detail)),
      landAsUploadedFiles: (files) =>
        gsap
          .timeline()
          .call(stopFollowing)
          .add(this.uploadedFilesMessageFromCursorFile(file, files)),
    };
  }

  uploadedFileMessage(fileName: string, detail = "CSV uploaded"): gsap.core.Timeline {
    const content = this.createUploadedFile(fileName, detail);
    const message = this.claimUserComponentMessage("file", content);

    return this.revealMessageWithChildFrom(message, content, {
      autoAlpha: 0,
      y: 8,
      scale: 0.98,
    }, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: motionDuration(0.26),
      ease: "back.out(1.6)",
    });
  }

  private uploadedFileMessageFromCursorFile(
    cursorFile: HTMLElement,
    fileName: string,
    detail = "CSV uploaded",
  ): gsap.core.Timeline {
    const content = this.createUploadedFile(fileName, detail);
    const message = this.claimUserComponentMessage("file", content);

    return this.revealDroppedFilesMessage(cursorFile, message, [content]);
  }

  uploadedFilesMessage(files: UploadedFileConfig[]): gsap.core.Timeline {
    const content = this.createUploadedFiles(files);

    return this.revealUserComponentItems("file", content, ".wa-uploaded-file", {
      ...COMPONENT_CHILD_REVEAL.compactRow,
      from: { ...COMPONENT_CHILD_REVEAL.compactRow.from, scale: 0.99 },
      to: { ...COMPONENT_CHILD_REVEAL.compactRow.to, scale: 1 },
      position: "-=0.24",
    });
  }

  private uploadedFilesMessageFromCursorFile(
    cursorFile: HTMLElement,
    files: UploadedFileConfig[],
  ): gsap.core.Timeline {
    const content = this.createUploadedFiles(files);
    const message = this.claimUserComponentMessage("file", content);
    const targets = this.queryElements(content, ".wa-uploaded-file");
    const extras = this.queryElements(content, ".wa-uploaded-files__summary");

    return this.revealDroppedFilesMessage(cursorFile, message, targets, extras);
  }

  pulse(target: HTMLElement | string): gsap.core.Timeline {
    const el = typeof target === "string" ? this.root.querySelector<HTMLElement>(target) : target;
    const tl = gsap.timeline();

    if (!el) return tl;

    tl.to(el, {
      scale: 1.025,
      duration: motionDuration(0.14),
      ease: "power2.out",
    }).to(el, {
      scale: 1,
      duration: motionDuration(0.28),
      ease: "elastic.out(1, 0.55)",
    });

    return tl;
  }

  private revealDroppedFilesMessage(
    cursorFile: HTMLElement,
    message: HTMLElement,
    targets: HTMLElement[],
    extras: HTMLElement[] = [],
  ): gsap.core.Timeline {
    const revealTargets = [...targets, ...extras];
    let clones: FileLandingClone[] = [];
    const progress = { value: 0 };
    let scrollTarget = 0;

    if (!targets.length || !cursorFile.isConnected) {
      return this.revealMessageWithChildren(message, revealTargets, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: motionDuration(0.24),
        ease: "power2.out",
        stagger: FILE_DROP_LANDING.stagger,
      });
    }

    gsap.set(revealTargets, { autoAlpha: 0, y: 0, scale: 1 });

    return gsap
      .timeline()
      .call(() => {
        this.scrollTween?.kill();
        this.scrollTween = null;
        message.style.display = "grid";
        gsap.set(message, {
          opacity: 1,
          visibility: "hidden",
          y: 0,
          scale: 1,
          transformOrigin: "right center",
        });
        clones = this.createFileLandingClones(cursorFile, targets);
        gsap.set(cursorFile, { autoAlpha: 0 });
        scrollTarget = this.getMessageScrollTarget(message);
      })
      .to(
        this.thread,
        {
          scrollTop: () => scrollTarget,
          duration: FILE_DROP_LANDING.duration,
          ease: FILE_DROP_LANDING.ease,
          overwrite: "auto",
        },
        0,
      )
      .to(
        progress,
        {
          value: 1,
          duration: FILE_DROP_LANDING.duration,
          ease: FILE_DROP_LANDING.ease,
          onUpdate: () => this.renderFileLandingClones(clones, progress.value),
        },
        0,
      )
      .to(
        extras,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: motionDuration(0.16),
          ease: "power1.out",
          stagger: FILE_DROP_LANDING.stagger,
        },
        `-=${motionDuration(0.16)}`,
      )
      .call(() => {
        this.renderFileLandingClones(clones, 1);
        gsap.set(revealTargets, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(message, { opacity: 1, visibility: "visible" });
        clones.forEach((clone) => clone.el.remove());
        cursorFile.remove();
        this.animateMessageScrollIntoView(message);
      });
  }

  private createFileLandingClones(cursorFile: HTMLElement, targets: HTMLElement[]): FileLandingClone[] {
    const sourceCards = this.getCursorFileCards(cursorFile);

    return targets.map((target, index) => {
      const sourceCard = sourceCards[Math.min(index, sourceCards.length - 1)];
      const sourceRect = sourceCard.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const sourceLocalRect = this.getRootLocalRect(sourceRect);
      const clone = target.cloneNode(true) as HTMLElement;
      const startRotation = this.getCursorFileCardRotation(index, sourceCards.length);
      const sourceStyle = window.getComputedStyle(sourceCard);
      const targetStyle = window.getComputedStyle(target);
      const startBackground = this.parseCssColor(sourceStyle.backgroundColor) ?? { r: 255, g: 255, b: 249, a: 0.96 };
      const endBackground = this.parseCssColor(targetStyle.backgroundColor) ?? startBackground;
      const startBorderColor = this.parseCssColor(sourceStyle.borderTopColor) ?? { r: 23, g: 23, b: 20, a: 0.12 };
      const detailEls = this.queryElements(clone, ".wa-uploaded-file__body span");

      clone.classList.add("wa-file-landing-clone");
      clone.dataset.fileLandingClone = "";
      this.root.append(clone);
      gsap.set(clone, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: targetRect.width,
        height: targetRect.height,
        x: sourceLocalRect.left,
        y: sourceLocalRect.top,
        scaleX: sourceRect.width / Math.max(1, targetRect.width),
        scaleY: sourceRect.height / Math.max(1, targetRect.height),
        rotation: startRotation,
        transformOrigin: "left top",
        pointerEvents: "none",
        margin: 0,
        autoAlpha: 1,
        visibility: "visible",
        backgroundColor: this.formatRgba(startBackground),
        borderColor: this.formatRgba(startBorderColor),
        borderStyle: sourceStyle.borderTopStyle === "none" ? "solid" : sourceStyle.borderTopStyle,
        borderWidth: sourceStyle.borderTopWidth || "1px",
        boxShadow: this.getFileLandingShadow(0),
      });
      gsap.set(detailEls, { autoAlpha: 0, y: -3 });

      return {
        el: clone,
        target,
        startX: sourceLocalRect.left,
        startY: sourceLocalRect.top,
        startScaleX: sourceRect.width / Math.max(1, targetRect.width),
        startScaleY: sourceRect.height / Math.max(1, targetRect.height),
        startRotation,
        startBackground,
        endBackground,
        startBorderColor,
        detailEls,
        setX: gsap.quickSetter(clone, "x", "px") as (value: number) => void,
        setY: gsap.quickSetter(clone, "y", "px") as (value: number) => void,
        setScaleX: gsap.quickSetter(clone, "scaleX") as (value: number) => void,
        setScaleY: gsap.quickSetter(clone, "scaleY") as (value: number) => void,
        setRotation: gsap.quickSetter(clone, "rotation", "deg") as (value: number) => void,
        setBackgroundColor: gsap.quickSetter(clone, "backgroundColor") as (value: string) => void,
        setBorderColor: gsap.quickSetter(clone, "borderColor") as (value: string) => void,
      };
    });
  }

  private renderFileLandingClones(clones: FileLandingClone[], progress: number): void {
    const rootRect = this.root.getBoundingClientRect();

    for (const clone of clones) {
      const targetRect = clone.target.getBoundingClientRect();
      const targetLeft = targetRect.left - rootRect.left;
      const targetTop = targetRect.top - rootRect.top;
      const detailProgress = clampUnit(
        (progress - FILE_DROP_LANDING.detailStart) / FILE_DROP_LANDING.detailSpan,
      );

      clone.setX(this.interpolate(clone.startX, targetLeft, progress));
      clone.setY(this.interpolate(clone.startY, targetTop, progress));
      clone.setScaleX(this.interpolate(clone.startScaleX, 1, progress));
      clone.setScaleY(this.interpolate(clone.startScaleY, 1, progress));
      clone.setRotation(this.interpolate(clone.startRotation, 0, progress));
      clone.setBackgroundColor(this.interpolateRgba(clone.startBackground, clone.endBackground, progress));
      clone.setBorderColor(this.interpolateRgba(clone.startBorderColor, {
        ...clone.startBorderColor,
        a: 0,
      }, progress));
      clone.el.style.boxShadow = this.getFileLandingShadow(progress);

      if (clone.detailEls.length) {
        const detailY = this.interpolate(-3, 0, detailProgress);

        clone.detailEls.forEach((detail) => {
          detail.style.opacity = String(detailProgress);
          detail.style.visibility = detailProgress > 0 ? "visible" : "hidden";
          detail.style.transform = `translate3d(0, ${detailY}px, 0)`;
        });
      }
    }
  }

  private getCursorFileCards(cursorFile: HTMLElement): HTMLElement[] {
    const cards = Array.from(cursorFile.querySelectorAll<HTMLElement>(".wa-cursor-file__card"));
    return cards.length ? cards : [cursorFile];
  }

  private getCursorFileCardRotation(index: number, sourceCount: number): number {
    return sourceCount > 1 ? FILE_DROP_LANDING.rotations[index] ?? 0 : 0;
  }

  private getRootLocalRect(rect: DOMRect): Pick<DOMRect, "left" | "top"> {
    const rootRect = this.root.getBoundingClientRect();

    return {
      left: rect.left - rootRect.left,
      top: rect.top - rootRect.top,
    };
  }

  private interpolate(from: number, to: number, progress: number): number {
    return from + (to - from) * progress;
  }

  private parseCssColor(value: string): RgbaColor | null {
    const matches = value.match(/[\d.]+/g);

    if (!matches || matches.length < 3) return null;

    return {
      r: Number(matches[0]),
      g: Number(matches[1]),
      b: Number(matches[2]),
      a: matches[3] === undefined ? 1 : Number(matches[3]),
    };
  }

  private interpolateRgba(from: RgbaColor, to: RgbaColor, progress: number): string {
    return this.formatRgba({
      r: this.interpolate(from.r, to.r, progress),
      g: this.interpolate(from.g, to.g, progress),
      b: this.interpolate(from.b, to.b, progress),
      a: this.interpolate(from.a, to.a, progress),
    });
  }

  private formatRgba(color: RgbaColor): string {
    return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${color.a.toFixed(3)})`;
  }

  private getFileLandingShadow(progress: number): string {
    const remaining = 1 - progress;

    return `0 ${this.interpolate(FILE_DROP_LANDING.shadowY, 0, progress).toFixed(2)}px ${this.interpolate(
      FILE_DROP_LANDING.shadowBlur,
      0,
      progress,
    ).toFixed(2)}px rgba(23, 23, 20, ${(FILE_DROP_LANDING.shadowAlpha * remaining).toFixed(3)})`;
  }

  private revealMessageWithChildren(
    message: HTMLElement,
    targets: gsap.TweenTarget,
    vars: gsap.TweenVars,
    position: string | number = "-=0.22",
  ): gsap.core.Timeline {
    return gsap.timeline().add(this.revealMessage(message)).to(targets, vars, position);
  }

  private revealMessageWithChildFrom(
    message: HTMLElement,
    target: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars,
    position: string | number = "-=0.22",
  ): gsap.core.Timeline {
    return gsap.timeline().add(this.revealMessage(message)).fromTo(
      target,
      fromVars,
      toVars,
      position,
    );
  }

  private revealComponentItems(
    kind: ComponentKind,
    content: HTMLElement,
    targets: string | HTMLElement[],
    preset: ChildRevealPreset,
  ): gsap.core.Timeline {
    const message = this.claimComponentMessage(kind, content);

    return this.revealPreparedItems(message, this.resolveRevealTargets(content, targets), preset);
  }

  private revealUserComponentItems(
    kind: "file",
    content: HTMLElement,
    targets: string | HTMLElement[],
    preset: ChildRevealPreset,
  ): gsap.core.Timeline {
    const message = this.claimUserComponentMessage(kind, content);

    return this.revealPreparedItems(message, this.resolveRevealTargets(content, targets), preset);
  }

  private resolveRevealTargets(content: HTMLElement, targets: string | HTMLElement[]): HTMLElement[] {
    return typeof targets === "string"
      ? this.queryElements(content, targets)
      : targets;
  }

  private revealPreparedItems(
    message: HTMLElement,
    targets: HTMLElement[],
    preset: ChildRevealPreset,
  ): gsap.core.Timeline {
    if (targets.length) gsap.set(targets, { ...preset.from });

    return this.revealMessageWithChildren(message, targets, { ...preset.to }, preset.position).call(
      () => this.animateMessageScrollIntoView(message),
      undefined,
      "+=0.02",
    );
  }

  private revealMessage(message: HTMLElement): gsap.core.Timeline {
    let scrollTarget = 0;

    return gsap
      .timeline()
      .call(() => {
        this.scrollTween?.kill();
        this.scrollTween = null;
        message.style.display = "grid";
        if (this.composerVisible) this.pinThreadToBottom();
        scrollTarget = this.getMessageScrollTarget(message);
      })
      .to(
        this.thread,
        {
          scrollTop: () => scrollTarget,
          duration: CHAT_SCROLL_MOTION.revealDuration,
          ease: CHAT_SCROLL_MOTION.revealEase,
          overwrite: "auto",
        },
        0,
      )
      .to(message, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        ...MESSAGE_SPRING,
      }, 0.04)
  }

  private claimMessage(role: "user" | "assistant", text: string): HTMLElement {
    const index = this.messageIndex;
    const message = this.messagePool[index] ?? this.createMessage(index);
    const body = message.querySelector<HTMLElement>("[data-message-body]");

    this.messageIndex += 1;
    message.dataset.messageRole = role;
    message.dataset.messageId = `${role}-${index}`;
    this.resetMessageClasses(message);
    message.classList.toggle("wa-message--first-active", index === 0);
    message.style.display = "none";
    if (body) {
      delete body.dataset.streaming;
      body.replaceChildren(document.createTextNode(text));
    }

    this.thread.append(message);
    gsap.set(message, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: role === "user" ? "right center" : "left center",
    });

    return message;
  }

  private claimComponentMessage(kind: ComponentKind, content: HTMLElement): HTMLElement {
    const index = this.messageIndex;
    const message = this.messagePool[index] ?? this.createMessage(index);
    const body = message.querySelector<HTMLElement>("[data-message-body]");

    this.messageIndex += 1;
    message.dataset.messageRole = "assistant";
    message.dataset.messageId = `assistant-component-${index}`;
    this.resetMessageClasses(message);
    message.classList.toggle("wa-message--first-active", index === 0);
    message.classList.add("wa-message--component", `wa-message--${kind}`);
    message.style.display = "none";
    if (body) {
      delete body.dataset.streaming;
      body.replaceChildren(content);
    }

    this.thread.append(message);
    gsap.set(message, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin: "left center",
    });

    return message;
  }

  private claimUserComponentMessage(kind: "file", content: HTMLElement): HTMLElement {
    const message = this.claimMessage("user", "");
    const body = message.querySelector<HTMLElement>("[data-message-body]");

    message.classList.add("wa-message--component", `wa-message--${kind}`);
    body?.replaceChildren(content);

    return message;
  }

  private resetMessageClasses(message: HTMLElement): void {
    message.classList.remove(...MESSAGE_KIND_CLASSES);
    message.classList.remove("wa-message--first-active");
  }

  private createCsvDropArea(options: DropAreaOptions = {}): HTMLElement {
    const dropArea = document.createElement("article");
    dropArea.className = "wa-csv-drop";
    dropArea.dataset.csvDropArea = "";
    dropArea.dataset.dropState = "idle";

    const copy = document.createElement("span");
    copy.className = "wa-csv-drop__copy";

    const title = document.createElement("strong");
    title.textContent = options.title ?? "Drop CSV to clean audience data";

    const detail = document.createElement("span");
    detail.textContent = options.detail ?? "Accepts webinar exports, event lists, and messy attendee spreadsheets.";

    copy.append(title, detail);
    dropArea.append(copy);
    return dropArea;
  }

  private revealCsvDropArea(dropArea: HTMLElement): gsap.core.Timeline {
    return gsap.timeline().to(
      {},
      {
        duration: 0.001,
        onStart: () => {
          this.showCsvDropArea(dropArea, true);
        },
      },
    );
  }

  private revealCsvDropAreaWhenCursorEnters(dropArea: HTMLElement, cursor: CursorActor): gsap.core.Timeline {
    return gsap.timeline().to(
      {},
      {
        duration: 0.001,
        onStart: () => {
          this.clearDropRevealWatcher(dropArea);

          if (dropArea.dataset.dropComplete === "true") return;
          if (this.isCursorInsideChatShell(cursor)) {
            this.showCsvDropArea(dropArea, false);
            return;
          }

          const watch = () => {
            if (dropArea.dataset.dropComplete === "true") {
              this.clearDropRevealWatcher(dropArea);
              return;
            }

            if (!this.isCursorInsideChatShell(cursor)) return;

            this.clearDropRevealWatcher(dropArea);
            this.showCsvDropArea(dropArea, false);
          };
          const cleanup = () => gsap.ticker.remove(watch);

          this.dropRevealWatchers.set(dropArea, cleanup);
          gsap.ticker.add(watch);
        },
      },
    );
  }

  private activateCsvDropArea(dropArea: HTMLElement): gsap.core.Timeline {
    return gsap.timeline().to(
      {},
      {
        duration: 0.001,
        onStart: () => {
          dropArea.dataset.dropState = "active";
        },
      },
    );
  }

  private completeCsvDropArea(dropArea: HTMLElement): gsap.core.Timeline {
    return gsap.timeline().to(
      {},
      {
        duration: 0.001,
        onStart: () => {
          dropArea.dataset.dropState = "complete";
          dropArea.dataset.dropComplete = "true";
          this.clearDropRevealWatcher(dropArea);
          gsap.killTweensOf(dropArea);
          gsap.set(dropArea, { autoAlpha: 0 });
          dropArea.remove();
        },
      },
    );
  }

  private showCsvDropArea(dropArea: HTMLElement, resetState: boolean): void {
    if (dropArea.dataset.dropComplete === "true") return;

    if (resetState || !dropArea.dataset.dropState) dropArea.dataset.dropState = "idle";
    if (!dropArea.isConnected) this.chatShell.append(dropArea);
    gsap.set(dropArea, {
      autoAlpha: 1,
      transformOrigin: "center center",
    });
  }

  private clearDropRevealWatcher(dropArea: HTMLElement): void {
    const cleanup = this.dropRevealWatchers.get(dropArea);

    if (!cleanup) return;

    cleanup();
    this.dropRevealWatchers.delete(dropArea);
  }

  private isCursorInsideChatShell(cursor: CursorActor): boolean {
    const point = cursor.readPosition();
    const rootRect = this.root.getBoundingClientRect();
    const shellRect = this.chatShell.getBoundingClientRect();
    const viewportPoint = {
      x: rootRect.left + point.x,
      y: rootRect.top + point.y,
    };

    return (
      viewportPoint.x >= shellRect.left &&
      viewportPoint.x <= shellRect.right &&
      viewportPoint.y >= shellRect.top &&
      viewportPoint.y <= shellRect.bottom
    );
  }

  private createCursorFile(fileName: string, fileType = "CSV"): HTMLElement {
    const file = document.createElement("div");
    file.className = "wa-cursor-file";
    file.setAttribute("aria-hidden", "true");

    const stackCount = this.getCursorFileStackCount(fileName);

    if (stackCount > 1) {
      file.classList.add("wa-cursor-file--stack");
      file.append(...this.createCursorFileStack(fileName, fileType, stackCount));
    } else {
      file.append(this.createCursorFileCard(fileName, fileType));
    }

    this.root.append(file);
    gsap.set(file, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 });
    return file;
  }

  private followCursorWithFile(file: HTMLElement, cursor: CursorActor, offset: CursorFileFollowOffset): () => void {
    const fileWidth = file.offsetWidth || 154;
    const fileHeight = file.offsetHeight || 42;
    const setFileX = gsap.quickSetter(file, "x", "px") as (value: number) => void;
    const setFileY = gsap.quickSetter(file, "y", "px") as (value: number) => void;
    const transformState = { x: -120, y: -120 };

    const follow = () => {
      const point = cursor.readPosition();
      const nextX = point.x - fileWidth * 0.5 + offset.x;
      const nextY = point.y - fileHeight * 0.5 + offset.y;

      if (nextX !== transformState.x) {
        transformState.x = nextX;
        setFileX(nextX);
      }

      if (nextY !== transformState.y) {
        transformState.y = nextY;
        setFileY(nextY);
      }
    };

    follow();
    gsap.ticker.add(follow);
    return () => gsap.ticker.remove(follow);
  }

  private getCursorFileEntryOffset(file: HTMLElement, cursor: CursorActor): CursorFileFollowOffset {
    const fileWidth = file.offsetWidth || 154;
    const point = cursor.readPosition();
    const rootWidth = this.root.getBoundingClientRect().width || window.innerWidth;
    const fileRightWhenCentered = point.x + fileWidth * 0.5;
    const offscreenRight = rootWidth + CURSOR_FILE_ENTRY.offscreenMargin;

    return {
      x: Math.max(0, offscreenRight - fileRightWhenCentered),
      y: 0,
    };
  }

  private getCursorFileStackCount(fileName: string): number {
    const match = fileName.match(/^(\d+)\s+/);
    return match ? Math.max(1, Math.min(4, Number(match[1]))) : 1;
  }

  private createCursorFileStack(fileName: string, fileType: string, count: number): HTMLElement[] {
    const labels = this.getCursorFileStackLabels(fileName, count);

    return labels.map((label, index) => {
      const card = this.createCursorFileCard(label, fileType);
      card.classList.add("wa-cursor-file__card--stacked");
      return card;
    });
  }

  private getCursorFileStackLabels(fileName: string, count: number): string[] {
    if (fileName.toLowerCase().includes("context")) {
      return ["Battle cards", "ICP notes", "Voice doc", "Playbook"].slice(0, count);
    }

    return Array.from({ length: count }, (_item, index) => (index === 0 ? fileName : `File ${index + 1}`));
  }

  private createCursorFileCard(fileName: string, fileType: string): HTMLElement {
    const card = document.createElement("span");
    card.className = "wa-cursor-file__card";

    const icon = document.createElement("span");
    icon.className = "wa-cursor-file__icon";
    icon.textContent = fileType;

    const name = document.createElement("span");
    name.className = "wa-cursor-file__name";
    name.textContent = fileName;

    card.append(icon, name);
    return card;
  }

  private createUploadedFile(fileName: string, detail: string): HTMLElement {
    const file = document.createElement("div");
    file.className = "wa-uploaded-file";

    const icon = document.createElement("span");
    icon.className = "wa-uploaded-file__icon";
    icon.textContent = "CSV";

    const body = document.createElement("span");
    body.className = "wa-uploaded-file__body";

    const name = document.createElement("strong");
    name.textContent = fileName;

    const meta = document.createElement("span");
    meta.textContent = detail;

    body.append(name, meta);
    file.append(icon, body);
    return file;
  }

  private createUploadedFiles(files: UploadedFileConfig[]): HTMLElement {
    const stack = document.createElement("div");
    stack.className = "wa-uploaded-files";

    const list = document.createElement("div");
    list.className = "wa-uploaded-files__list";
    files.forEach((fileConfig) => {
      const file = this.createUploadedFile(fileConfig.name, fileConfig.detail);
      const icon = file.querySelector<HTMLElement>(".wa-uploaded-file__icon");
      if (icon) icon.textContent = fileConfig.type ?? "DOC";
      list.append(file);
    });

    stack.append(list);
    return stack;
  }

  private streamThinkingHeader(thinkingHeader: HTMLElement): gsap.core.Timeline {
    const title = thinkingHeader.querySelector<HTMLElement>(".wa-thinking__title");
    const text = title?.dataset.fullText ?? title?.textContent ?? "";

    if (!title || !text) return gsap.timeline();

    return this.streamText(title, text, {
      duration: this.getStreamDuration(text, THINKING_HEADER_STREAM),
      targetForScroll: thinkingHeader.closest<HTMLElement>(".wa-message") ?? thinkingHeader,
    });
  }

  private streamThinkingStepLabel(item: HTMLElement): gsap.core.Timeline {
    const label = item.querySelector<HTMLElement>(".wa-research-step__label");
    const text = label?.dataset.fullText ?? label?.textContent ?? "";

    if (!label || !text) return gsap.timeline();

    return this.streamText(label, text, {
      duration: this.getStreamDuration(text, THINKING_LABEL_STREAM),
      targetForScroll: item.closest<HTMLElement>(".wa-message") ?? item,
    });
  }

  private streamThinkingStepDetail(item: HTMLElement): gsap.core.Timeline {
    const detail = item.querySelector<HTMLElement>(".wa-research-step__detail");
    const text = detail?.dataset.fullText ?? "";
    if (!detail || !text) return gsap.timeline();

    return this.streamText(detail, text, {
      duration: this.getStreamDuration(text, THINKING_STEP_STREAM),
      targetForScroll: item.closest<HTMLElement>(".wa-message") ?? item,
    });
  }

  private streamText(
    target: HTMLElement,
    text: string,
    options: { duration: number; targetForScroll: HTMLElement },
  ): gsap.core.Timeline {
    const proxy = { count: 0 };
    let lastCount = -1;

    return gsap
      .timeline()
      .call(() => {
        target.dataset.streaming = "true";
        target.textContent = "";
        lastCount = 0;
      })
      .to(proxy, {
        count: text.length,
        duration: options.duration,
        ease: "none",
        onUpdate: () => {
          const nextCount = Math.round(proxy.count);

          if (nextCount === lastCount) return;

          lastCount = nextCount;
          target.textContent = text.slice(0, nextCount);
          this.requestMessageScroll(options.targetForScroll);
        },
      })
      .call(() => {
        target.textContent = text;
        delete target.dataset.streaming;
        this.cancelScheduledScroll();
        this.animateMessageScrollIntoView(options.targetForScroll, CHAT_SCROLL_MOTION.followDuration * 0.7);
      });
  }

  private foldThinkingStep(item: HTMLElement): gsap.core.Timeline {
    const foldTargets = item.querySelectorAll<HTMLElement>(
      ".wa-research-step__detail, .wa-sequence-thinking-progress, .wa-research-step__disclosure, .wa-research-step__chevron",
    );

    return gsap
      .timeline()
      .to(foldTargets, {
        autoAlpha: 0,
        y: THINKING_STEP_FOLD.detailOffsetY,
        scaleY: 0.96,
        transformOrigin: "left top",
        duration: THINKING_STEP_FOLD.duration,
        ease: "power2.inOut",
      })
      .call(() => {
        item.dataset.stepState = "complete";
        this.animateMessageScrollIntoView(item.closest<HTMLElement>(".wa-message") ?? item);
      });
  }

  private runThinkingSequence(labels: string[], options: ThinkingSequenceOptions): gsap.core.Timeline {
    const tl = gsap.timeline();
    const items = labels.map((label, index) => this.createThinkingStep(label, index));
    const thinking = this.claimThinkingMessage(items, this.getThinkingElapsed(labels.length));

    tl.call(() => {
      items.forEach((item) => {
        item.dataset.stepState = "pending";
      });
      gsap.set(thinking.header, { autoAlpha: 0, y: 5 });
      gsap.set(thinking.steps, { display: "grid", autoAlpha: 1, y: 0 });
      gsap.set(items, { autoAlpha: 0, y: options.itemStartY, display: "none" });
    })
      .add(this.revealMessage(thinking.message))
      .to(thinking.header, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(options.headerDuration),
        ease: "power2.out",
      })
      .add(this.streamThinkingHeader(thinking.header), "-=0.08");

    labels.forEach((_label, index) => {
      const item = items[index];
      const position = index === 0 ? "+=0" : `+=${options.hold}`;

      tl.call(() => this.activateThinkingStep(items, index), undefined, position)
        .to(
          item,
          {
            autoAlpha: 1,
            y: 0,
            duration: motionDuration(0.26),
            ease: "power2.out",
          },
          "<",
        )
        .add(this.streamThinkingStepLabel(item), THINKING_STEP_STREAM.startOverlap)
        .add(this.streamThinkingStepDetail(item), "-=0.02")
        .to({}, { duration: options.afterStepHold })
        .add(this.foldThinkingStep(item));
    });

    return tl.call(() => {
      items.forEach((item) => {
        item.dataset.stepState = "complete";
      });
    }, undefined, `+=${options.finalHold}`);
  }

  private activateThinkingStep(items: HTMLElement[], activeIndex: number): void {
    items.forEach((item, itemIndex) => {
      if (itemIndex > activeIndex) {
        item.dataset.stepState = "pending";
        gsap.set(item, { display: "none" });
      }

      if (itemIndex === activeIndex) {
        item.dataset.stepState = "current";
        gsap.set(item, { display: "grid" });
      }
    });
  }

  private getStreamDuration(text: string, timing: StreamTiming): number {
    if (this.prefersReducedMotion) return 0.01;

    return Math.min(timing.maxDuration, Math.max(timing.minDuration, text.length / timing.charsPerSecond));
  }

  private claimThinkingMessage(items: HTMLElement[], elapsedText: string): {
    message: HTMLElement;
    header: HTMLElement;
    steps: HTMLElement;
  } {
    const content = document.createElement("div");
    content.className = "wa-thinking-block";

    const header = document.createElement("div");
    header.className = "wa-thinking";

    const glyph = document.createElement("span");
    glyph.className = "wa-thinking__glyph";
    glyph.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.className = "wa-thinking__title";
    title.dataset.fullText = "Thinking";
    title.textContent = "";

    const elapsed = document.createElement("span");
    elapsed.className = "wa-thinking__elapsed";
    elapsed.textContent = elapsedText;

    const steps = document.createElement("div");
    steps.className = "wa-research-steps";
    steps.dataset.researchSteps = "";
    steps.append(...items);

    header.append(glyph, title, elapsed);
    content.append(header, steps);

    return {
      message: this.claimComponentMessage("thinking", content),
      header,
      steps,
    };
  }

  private createMessage(index: number): HTMLElement {
    const message = document.createElement("div");
    message.className = "wa-message";
    message.dataset.messageId = `message-${index}`;

    const avatar = document.createElement("div");
    avatar.className = "wa-message__avatar";

    const body = document.createElement("div");
    body.className = "wa-message__body";
    body.dataset.messageBody = "";

    message.append(avatar, body);
    this.messagePool[index] = message;

    return message;
  }

  private createThinkingStep(labelText: string, index: number): HTMLElement {
    const item = document.createElement("div");
    item.className = "wa-research-step";
    item.dataset.researchStep = String(index);
    item.dataset.stepState = index === 0 ? "current" : "complete";

    const check = document.createElement("span");
    check.className = "wa-research-step__check";
    check.setAttribute("aria-hidden", "true");

    const body = document.createElement("span");
    body.className = "wa-research-step__body";

    const label = document.createElement("span");
    label.className = "wa-research-step__label";
    label.dataset.fullText = labelText;
    label.textContent = "";

    const detail = document.createElement("span");
    detail.className = "wa-research-step__detail";
    detail.dataset.fullText = this.getThinkingDetail(labelText, index);
    detail.textContent = "";

    const disclosure = document.createElement("span");
    disclosure.className = "wa-research-step__disclosure";
    disclosure.textContent = index === 0 ? "Show more" : "Show less";

    const chevron = document.createElement("span");
    chevron.className = "wa-research-step__chevron";
    chevron.setAttribute("aria-hidden", "true");

    body.append(label, detail, disclosure);
    item.append(check, body, chevron);
    return item;
  }

  private getThinkingDetail(labelText: string, index: number): string {
    const label = labelText.toLowerCase();

    if (label.includes("source") || label.includes("data")) return "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches.";
    if (label.includes("company")) return "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context.";
    if (label.includes("icp") || label.includes("buyer")) return "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence.";
    if (label.includes("blog")) return "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles.";
    if (label.includes("career") || label.includes("hiring")) return "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities.";
    if (label.includes("gtm")) return "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert.";
    if (label.includes("funding") || label.includes("round")) return "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months.";
    if (label.includes("transcript") || label.includes("notes")) return "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript.";
    if (label.includes("logs") || label.includes("auth")) return "Inspecting connector logs, authentication events, permission changes, and recent workspace activity.";
    if (label.includes("account") || label.includes("signals")) return "Combining account history with public source changes and recent activity to prepare a concise research brief.";

    return index % 2 === 0
      ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results."
      : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
  }

  private getThinkingElapsed(stepCount: number): string {
    if (stepCount <= 1) return "4m 12s";
    if (stepCount <= 3) return "4m 20s";
    return "4m 50s";
  }

  private createSectionHeader(
    classPrefix: string,
    titleText: string,
    subtitleText?: string,
    sideElement?: HTMLElement,
  ): HTMLElement {
    const header = document.createElement("div");
    header.className = `${classPrefix}__header`;

    const title = document.createElement("h3");
    title.className = `${classPrefix}__title`;
    title.textContent = titleText;
    header.append(title);

    if (sideElement) header.append(sideElement);

    if (subtitleText) {
      const subtitle = document.createElement("p");
      subtitle.className = `${classPrefix}__subtitle`;
      subtitle.textContent = subtitleText;
      header.append(subtitle);
    }

    return header;
  }

  private claimCard(config: ResultCardConfig): HTMLElement {
    const index = this.cardIndex;
    const card = this.cardPool[index] ?? this.createCard(index);
    const kicker = card.querySelector<HTMLElement>("[data-result-kicker]");
    const title = card.querySelector<HTMLElement>("[data-result-title]");
    const body = card.querySelector<HTMLElement>("[data-result-body]");
    const rows = card.querySelector<HTMLElement>("[data-result-rows]");
    const actions = card.querySelector<HTMLElement>("[data-result-actions]");

    this.cardIndex += 1;
    card.dataset.resultCard = config.id;
    card.style.display = "none";

    if (kicker) kicker.textContent = config.kicker ?? "Result";
    if (title) title.textContent = config.title;
    if (body) body.textContent = config.body ?? "";

    rows?.replaceChildren(
      ...(config.rows ?? []).map((row, rowIndex) => {
        const item = document.createElement("li");
        item.className = "wa-result-row";
        item.dataset.resultRow = `${config.id}-${rowIndex}`;
        item.dataset.tone = row.tone ?? "neutral";

        const label = document.createElement("span");
        label.textContent = row.label;

        const value = document.createElement("strong");
        value.textContent = row.value;

        item.append(label, value);
        return item;
      }),
    );

    actions?.replaceChildren(
      ...(config.actions ?? []).map((action) => {
        const button = document.createElement("button");
        button.className = "wa-result-action";
        button.type = "button";
        button.textContent = action.label;
        button.dataset.resultAction = action.targetId;
        return button;
      }),
    );

    gsap.set(card, {
      autoAlpha: 0,
      y: 18,
      scale: 0.985,
      transformOrigin: "center top",
    });
    gsap.set(card.querySelectorAll(".wa-result-row, .wa-result-action"), {
      autoAlpha: 0,
      y: 8,
    });

    return card;
  }

  private createCard(index: number): HTMLElement {
    const card = document.createElement("article");
    card.className = "wa-result-card";
    card.dataset.resultCard = `result-${index}`;

    card.innerHTML = `
      <div class="wa-result-card__topline" data-result-kicker></div>
      <h3 class="wa-result-card__title" data-result-title></h3>
      <p class="wa-result-card__body" data-result-body></p>
      <ul class="wa-result-card__rows" data-result-rows></ul>
      <div class="wa-result-card__actions" data-result-actions></div>
    `;

    this.cardPool[index] = card;
    return card;
  }

  private createDataTable(config: DataTableConfig): HTMLElement {
    const table = document.createElement("article");
    const pages = this.getDataTablePages(config);
    const activePage = config.pagination?.activePage ?? pages[0]?.page ?? 1;

    table.className = "wa-data-table";
    table.dataset.dataTable = config.id;
    table.dataset.tableVariant = config.variant ?? "default";
    table.dataset.columnCount = String(config.columns.length);
    table.dataset.activePage = String(activePage);
    this.expectedDataTablePages.set(config.id, activePage);
    table.style.setProperty(
      "--wa-data-table-columns",
      config.columns.map((column) => column.width ?? "minmax(0, 1fr)").join(" "),
    );

    const header = document.createElement("div");
    header.className = "wa-data-table__header";

    const meta = document.createElement("div");
    meta.className = "wa-data-table__meta";
    meta.textContent = config.eyebrow ?? "Data marketplace";

    const title = document.createElement("h3");
    title.className = "wa-data-table__title";
    title.textContent = config.title;

    header.append(meta, title);

    if (config.count) {
      const count = document.createElement("span");
      count.className = "wa-data-table__count";
      count.textContent = config.count;
      header.append(count);
    }

    const grid = document.createElement("div");
    grid.className = "wa-data-table__grid";
    grid.append(this.createDataTableRow("header", config.columns, {}, config.id));

    for (const page of pages) {
      for (const row of page.rows) {
        const rowEl = this.createDataTableRow(row.id, config.columns, row.values, config.id, page.page);

        if (page.page !== activePage) {
          rowEl.style.display = "none";
          gsap.set(rowEl, { autoAlpha: 0, y: 6 });
        }

        grid.append(rowEl);
      }
    }

    table.append(header, grid);

    if (config.actions?.length || config.pagination) {
      table.append(this.createDataTableFooter(config, pages, activePage));
    }

    return table;
  }

  private createDataTableRow(
    rowId: string,
    columns: DataTableConfig["columns"],
    values: Record<string, string>,
    tableId: string,
    page?: number,
  ): HTMLElement {
    const row = document.createElement("div");
    row.className = "wa-data-table__row";
    row.dataset.tableRow = rowId;

    const isHeader = rowId === "header";

    if (isHeader) row.dataset.header = "true";
    if (!isHeader && values.source) row.dataset.source = values.source;
    if (!isHeader && page !== undefined) row.dataset.page = String(page);

    for (const column of columns) {
      const cell = document.createElement(isHeader ? "strong" : "span");
      cell.className = "wa-data-table__cell";
      cell.dataset.columnKey = column.key;

      if (isHeader) {
        cell.textContent = column.label;
      } else if (column.key === "name" || column.key === "contact") {
        cell.append(this.createDataTablePerson(values, values[column.key] ?? ""));
      } else {
        const value = values[column.key] ?? "";
        cell.textContent = value || "-";
        if (!value) cell.dataset.empty = "true";
      }

      row.append(cell);
    }

    if (isHeader) {
      const add = document.createElement("button");
      add.className = "wa-data-table__add";
      add.type = "button";
      add.tabIndex = -1;
      add.setAttribute("aria-label", `Add row to ${tableId}`);
      add.textContent = "+";
      row.append(add);
    }

    return row;
  }

  private getDataTablePages(config: DataTableConfig): Array<{ page: number; range: string; rows: DataTableConfig["rows"] }> {
    if (config.pagination?.pages.length) return config.pagination.pages;

    return [
      {
        page: 1,
        range: config.count ?? `${config.rows.length} records`,
        rows: config.rows,
      },
    ];
  }

  private createDataTableFooter(
    config: DataTableConfig,
    pages: Array<{ page: number; range: string; rows: DataTableConfig["rows"] }>,
    activePage: number,
  ): HTMLElement {
    const footer = document.createElement("div");
    footer.className = "wa-data-table__footer";

    if (config.actions?.length) {
      const actions = document.createElement("div");
      actions.className = "wa-data-table__actions";

      for (const action of config.actions) {
        actions.append(this.createDataTableAction(config.id, action));
      }

      footer.append(actions);
    }

    if (config.pagination) {
      const pagination = document.createElement("div");
      pagination.className = "wa-data-table__pagination";

      const activeRange = pages.find((page) => page.page === activePage)?.range ?? pages[0]?.range ?? "";
      const range = document.createElement("span");
      range.className = "wa-data-table__range";
      range.dataset.tablePageRange = "";
      range.textContent = activeRange;

      const controls = document.createElement("span");
      controls.className = "wa-data-table__page-controls";

      for (const page of pages) {
        const button = document.createElement("button");
        const active = page.page === activePage;

        button.className = "wa-data-table__page-button";
        button.type = "button";
        button.tabIndex = -1;
        button.dataset.tablePageButton = String(page.page);
        button.dataset.pageRange = page.range;
        button.dataset.active = String(active);
        button.setAttribute("aria-label", `Show page ${page.page}`);
        button.setAttribute("aria-current", active ? "page" : "false");
        button.textContent = String(page.page);
        controls.append(button);
      }

      pagination.append(range, controls);
      footer.append(pagination);
    }

    return footer;
  }

  private createDataTableAction(
    tableId: string,
    action: NonNullable<DataTableConfig["actions"]>[number],
  ): HTMLElement {
    const button = document.createElement("button");
    button.className = "wa-data-table-action";
    button.type = "button";
    button.tabIndex = -1;
    button.dataset.tableAction = action.id;
    button.dataset.tableActionTable = tableId;
    button.dataset.actionVariant = action.variant ?? "secondary";
    button.dataset.tooltipVisible = "false";
    button.setAttribute("aria-label", action.tooltip ?? action.label);

    button.append(this.createDataTableActionIcon(action.icon ?? "email"));

    if (action.badge) {
      button.dataset.tooltipBadge = action.badge;
      const badge = document.createElement("span");
      badge.className = "wa-data-table-action__badge";
      badge.textContent = action.badge;
      button.append(badge);
    }

    if (action.tooltip) {
      const tooltip = document.createElement("span");
      tooltip.className = "wa-data-table-action__tooltip";
      tooltip.textContent = action.tooltip;
      button.append(tooltip);
    }

    return button;
  }

  private createDataTableActionIcon(iconName: NonNullable<NonNullable<DataTableConfig["actions"]>[number]["icon"]>): SVGSVGElement {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const paths = iconName === "dialer"
      ? [
          "M7.2 5.6c.5 4 2.7 6.2 6.2 7.2l1.9-1.9c.3-.3.7-.4 1.1-.2l3.1 1.2c.5.2.8.6.8 1.1v3.1c0 .7-.5 1.2-1.2 1.2C10 17.3 2.7 10 2.7 1.9 2.7 1.2 3.2.7 3.9.7H7c.5 0 .9.3 1.1.8l1.2 3.1c.1.4.1.8-.2 1.1L7.2 7.6",
        ]
      : [
          "M3.5 5.5h17v13h-17z",
          "m4.2 6.1 4.9 3.8a2.2 2.2 0 0 0 2.8 0l4.9-3.8",
        ];

    svg.classList.add("wa-data-table-action__icon");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    for (const d of paths) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      svg.append(path);
    }

    return svg;
  }

  private createDataTableFloatingTooltip(): HTMLElement {
    const tooltip = document.createElement("span");

    tooltip.className = "wa-data-table-floating-tooltip";
    tooltip.dataset.visible = "false";
    tooltip.setAttribute("aria-hidden", "true");
    return tooltip;
  }

  private showTooltipForDataTableControl(control: HTMLElement): void {
    const text = this.getDataTableControlTooltipText(control);

    if (!text) {
      this.hideDataTableControlTooltip();
      return;
    }

    this.setDataTableControlTooltipVisible(control);
    this.showDataTableControlTooltip(control, text);
  }

  private showDataTableControlTooltip(control: HTMLElement, text: string): void {
    const shellRect = this.chatShell.getBoundingClientRect();
    const controlRect = control.getBoundingClientRect();
    const x = controlRect.left - shellRect.left + controlRect.width * 0.5;
    const y = controlRect.top - shellRect.top - 7;

    const label = document.createElement("span");
    const badgeText = control.dataset.tooltipBadge?.trim();

    label.className = "wa-data-table-floating-tooltip__label";
    label.textContent = text;
    this.tableControlTooltip.replaceChildren(label);

    if (badgeText) {
      const badge = document.createElement("span");

      badge.className = "wa-data-table-floating-tooltip__badge";
      badge.textContent = badgeText;
      this.tableControlTooltip.append(badge);
    }

    this.tableControlTooltip.dataset.hasBadge = String(Boolean(badgeText));
    this.tableControlTooltip.dataset.visible = "true";
    gsap.set(this.tableControlTooltip, {
      x,
      y,
      xPercent: -50,
      yPercent: -100,
    });
  }

  private hideDataTableControlTooltip(): void {
    this.tableControlTooltip.dataset.visible = "false";
    this.tableControlTooltip.dataset.hasBadge = "false";
    this.queryElements(this.chatShell, "[data-table-action]").forEach((control) => {
      control.dataset.tooltipVisible = "false";
    });
  }

  private setDataTableControlTooltipVisible(activeControl: HTMLElement): void {
    const table = activeControl.closest<HTMLElement>("[data-data-table]");
    const controls = table
      ? this.queryElements(table, "[data-table-action]")
      : this.queryElements(this.chatShell, "[data-table-action]");

    controls.forEach((control) => {
      control.dataset.tooltipVisible = String(control === activeControl);
    });
  }

  private getDataTableControlTooltipText(control: HTMLElement): string {
    const inlineTooltip = control.querySelector<HTMLElement>(".wa-data-table-action__tooltip")?.textContent?.trim();

    return inlineTooltip || control.dataset.tooltip || control.getAttribute("aria-label") || "";
  }

  private findDataTableControl(target: EventTarget | null): HTMLElement | null {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLElement>("[data-table-action]");
  }

  private findDataTablePageButton(target: EventTarget | null): HTMLElement | null {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLElement>("[data-table-page-button]");
  }

  private findDataTable(tableId: string): HTMLElement | null {
    return this.queryElements(this.root, "[data-data-table]").find((table) => table.dataset.dataTable === tableId) ?? null;
  }

  private getVisibleDataTableRows(table: HTMLElement): HTMLElement[] {
    return this.queryElements(table, ".wa-data-table__row[data-page]").filter((row) => row.style.display !== "none");
  }

  private createDataTablePerson(values: Record<string, string>, name: string): HTMLElement {
    const person = document.createElement("span");
    person.className = "wa-data-table-person";

    const avatarWrap = document.createElement("span");
    avatarWrap.className = "wa-data-table-person__avatar-wrap";

    const avatar = document.createElement("span");
    avatar.className = "wa-data-table-person__avatar";
    avatar.dataset.avatarTone = values.avatarTone ?? "1";

    if (values.avatarUrl) {
      const img = document.createElement("img");
      img.alt = "";
      img.decoding = "async";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer";
      img.src = values.avatarUrl;
      avatar.append(img);
    } else {
      avatar.textContent = values.avatar ?? this.getInitials(name);
    }

    const source = document.createElement("span");
    source.className = "wa-data-table-person__source";
    source.dataset.source = values.source ?? "default";
    source.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "wa-data-table-person__name";
    label.textContent = name || "-";

    avatarWrap.append(avatar, source);
    person.append(avatarWrap, label);
    return person;
  }

  private getInitials(name: string): string {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  }

  private createEnrichmentPanel(config: EnrichmentConfig): HTMLElement {
    const panel = document.createElement("article");
    panel.className = "wa-enrichment-panel wa-waterfall-thinking";
    panel.dataset.enrichmentPanel = config.id;

    const header = document.createElement("div");
    header.className = "wa-enrichment-panel__header";

    const icon = document.createElement("span");
    icon.className = "wa-thinking__glyph";
    icon.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.className = "wa-thinking__title";
    title.textContent = "Enriching";

    const elapsed = document.createElement("span");
    elapsed.className = "wa-thinking__elapsed";
    elapsed.textContent = "4m 20s";

    header.append(icon, title, elapsed);

    const rows = document.createElement("div");
    rows.className = "wa-waterfall-rows";
    rows.append(
      this.createWaterfallRow("Work email", "complete", [
        { label: "Apollo", state: "complete" },
        { label: "ZoomInfo", state: "failed" },
      ]),
      this.createWaterfallRow("Mobile number", "failed", [
        { label: "Apollo", state: "failed" },
        { label: "FullEnrich", state: "failed" },
      ]),
      this.createWaterfallRow("LinkedIn", "pending", [
        { label: "Apollo", state: "pending" },
        { label: "ZoomInfo", state: "pending" },
      ]),
      this.createWaterfallRow("Title", "pending", [
        { label: "Apollo", state: "pending" },
        { label: "ZoomInfo", state: "pending" },
        { label: "FullEnrich", state: "pending" },
      ]),
    );

    panel.append(header, rows);
    return panel;
  }

  private createWaterfallRow(
    labelText: string,
    state: "complete" | "failed" | "pending",
    chips: Array<{ label: string; state: "complete" | "failed" | "pending" }>,
  ): HTMLElement {
    const row = document.createElement("div");
    row.className = "wa-waterfall-row";
    row.dataset.stepState = state;

    const status = document.createElement("span");
    status.className = "wa-waterfall-row__status";
    status.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "wa-waterfall-row__label";
    label.textContent = labelText;

    const chipList = document.createElement("span");
    chipList.className = "wa-waterfall-row__chips";
    chipList.append(
      ...chips.map((chip) => {
        const item = document.createElement("span");
        item.className = "wa-waterfall-chip";
        item.dataset.stepState = chip.state;
        item.textContent = chip.label;
        return item;
      }),
    );

    row.append(status, label, chipList);
    return row;
  }

  private createStrategyPlan(plan: StrategyPlanConfig): HTMLElement {
    const card = document.createElement("article");
    card.className = "wa-strategy-plan";
    card.dataset.strategyPlan = plan.id;

    const label = document.createElement("div");
    label.className = "wa-strategy-plan__label";
    label.textContent = plan.label;

    const title = document.createElement("h3");
    title.className = "wa-strategy-plan__title";
    title.textContent = plan.title;

    const summary = document.createElement("p");
    summary.className = "wa-strategy-plan__summary";
    summary.textContent = this.getStrategyPlanSummary(plan);

    card.append(label, title, summary);
    return card;
  }

  private getStrategyPlanSummary(plan: StrategyPlanConfig): string {
    if (plan.summary) return plan.summary;

    return [plan.audience, plan.motion, plan.proof].filter(Boolean).join(". ");
  }

  private createDataSourcesGrid(config: DataSourceGridConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-data-source-grid";
    section.dataset.dataSourcesGrid = config.id;
    const header = this.createSectionHeader("wa-data-source-grid", config.title, config.subtitle);

    const list = document.createElement("div");
    list.className = "wa-data-source-grid__list";

    config.sources.forEach((source) => {
      list.append(this.createDataSourceCard(source));
    });

    section.append(header, list);
    return section;
  }

  private createMarketingDataSourcesGrid(config: DataSourceGridConfig): HTMLElement {
    const section = this.createDataSourcesGrid(config);
    const groupedList = document.createElement("div");
    const header = section.querySelector<HTMLElement>(".wa-data-source-grid__header");

    section.classList.add("wa-data-source-grid--marketing");
    section.dataset.marketingDataSourcesGrid = config.id;
    groupedList.className = "wa-data-source-grid__groups";

    for (const groupConfig of this.groupDataSources(config.sources)) {
      const group = document.createElement("section");
      const label = document.createElement("h4");
      const list = document.createElement("div");

      group.className = "wa-data-source-group";
      label.className = "wa-data-source-group__title";
      label.textContent = groupConfig.category;
      list.className = "wa-data-source-grid__list";

      groupConfig.sources.forEach((source) => {
        list.append(this.createDataVendorLogo(source));
      });

      group.append(label, list);
      groupedList.append(group);
    }

    section.replaceChildren(...this.compactElements(header, groupedList));
    return section;
  }

  private createDataVendorLogo(source: DataSourceGridConfig["sources"][number]): HTMLElement {
    const logo = document.createElement("span");
    logo.className = "wa-data-vendor-logo";
    logo.dataset.vendorLogo = source.id;
    logo.title = source.detail;
    logo.style.setProperty("--wa-logo-optical-scale", String(source.logoScale ?? getDataLogoOpticalScale(source.id)));

    const mark = source.logoSrc ? document.createElement("img") : document.createElement("span");

    if (source.logoSrc && mark instanceof HTMLImageElement) {
      logo.classList.add("wa-data-vendor-logo--image");
      mark.className = "wa-data-vendor-logo__image";
      mark.alt = source.name;
      mark.decoding = "async";
      mark.draggable = false;
      mark.loading = "lazy";
      mark.src = source.logoSrc;
    } else {
      mark.className = "wa-data-vendor-logo__mark";
      mark.textContent = source.name;
    }

    logo.append(mark);
    return logo;
  }

  private groupDataSources(sources: DataSourceGridConfig["sources"]): DataSourceGroup[] {
    const groups: DataSourceGroup[] = [];
    const groupsByCategory = new Map<string, DataSourceGroup>();

    sources.forEach((source) => {
      const category = source.category ?? "Data partners";
      let group = groupsByCategory.get(category);

      if (!group) {
        group = { category, sources: [] };
        groupsByCategory.set(category, group);
        groups.push(group);
      }

      group.sources.push(source);
    });

    return groups;
  }

  private createDataSourceCard(source: DataSourceGridConfig["sources"][number]): HTMLElement {
    const card = document.createElement("article");
    card.className = "wa-data-source-card";
    card.dataset.dataSource = source.id;

    const icon = document.createElement("span");
    icon.className = "wa-data-source-card__icon";
    icon.setAttribute("aria-hidden", "true");

    const copy = document.createElement("span");
    copy.className = "wa-data-source-card__copy";

    const name = document.createElement("strong");
    name.textContent = source.name;

    const detail = document.createElement("span");
    detail.textContent = source.detail;

    copy.append(name, detail);
    card.append(icon, copy);
    return card;
  }

  private createOutreachStyleProfile(config: OutreachStyleProfileConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-style-profile";
    section.dataset.styleProfile = config.id;
    const header = this.createSectionHeader("wa-style-profile", config.title, config.subtitle);

    const rows = document.createElement("div");
    rows.className = "wa-style-profile__rows";

    config.signals.forEach((signal) => {
      const row = document.createElement("div");
      row.className = "wa-style-profile__row";

      const label = document.createElement("span");
      label.textContent = signal.label;

      const value = document.createElement("strong");
      value.textContent = signal.value;

      row.append(label, value);
      rows.append(row);
    });

    section.append(header, rows);

    if (config.examples?.length) {
      const examples = document.createElement("div");
      examples.className = "wa-style-profile__examples";
      config.examples.forEach((example) => {
        const item = document.createElement("blockquote");
        item.className = "wa-style-profile__example";
        item.textContent = example;
        examples.append(item);
      });
      section.append(examples);
    }

    return section;
  }

  private createProximityLeadList(config: ProximityLeadListConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-proximity-list";
    section.dataset.proximityList = config.id;
    const header = this.createSectionHeader("wa-proximity-list", config.title, config.subtitle);

    const rows = document.createElement("div");
    rows.className = "wa-proximity-list__rows";

    config.leads.forEach((lead) => {
      const row = document.createElement("article");
      row.className = "wa-proximity-lead";
      row.dataset.proximityScore = lead.score;

      const rank = document.createElement("span");
      rank.className = "wa-proximity-lead__rank";
      rank.textContent = lead.rank;

      const body = document.createElement("div");
      body.className = "wa-proximity-lead__body";

      const top = document.createElement("div");
      top.className = "wa-proximity-lead__top";

      const identity = document.createElement("span");
      identity.className = "wa-proximity-lead__identity";
      const name = document.createElement("strong");
      name.textContent = lead.name;
      const role = document.createElement("span");
      role.textContent = `${lead.title}, ${lead.company}`;
      identity.append(name, role);

      const score = document.createElement("span");
      score.className = "wa-proximity-lead__score";
      score.textContent = lead.score;

      top.append(identity, score);

      const personalization = document.createElement("p");
      personalization.className = "wa-proximity-lead__personalization";
      personalization.textContent = lead.personalization;

      const proximity = document.createElement("span");
      proximity.className = "wa-proximity-lead__proximity";
      proximity.textContent = lead.proximity;

      body.append(top, personalization, proximity);
      row.append(rank, body);
      rows.append(row);
    });

    section.append(header, rows);
    return section;
  }

  private createPersonalizationSwipeGame(config: PersonalizationSwipeGameConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-mini-game wa-swipe-game";
    section.dataset.personalizationSwipeGame = config.id;

    const intro = this.createSectionHeader(
      "wa-mini-game",
      config.title,
      config.subtitle ?? "Swipe to teach the agent which personalization patterns sound like you.",
    );
    const eyebrow = document.createElement("span");
    eyebrow.className = "wa-mini-game__eyebrow";
    eyebrow.textContent = "Mini game";
    intro.prepend(eyebrow);

    const prompt = document.createElement("p");
    prompt.className = "wa-swipe-game__prompt";
    prompt.textContent = config.prompt ?? "Swipe toward the personalization you would use.";

    const axis = document.createElement("div");
    axis.className = "wa-swipe-game__axis";

    const avoidLabel = document.createElement("span");
    avoidLabel.textContent = config.labels?.avoid ?? "Never me";

    const progress = document.createElement("span");
    progress.dataset.swipeProgress = "";

    const useLabel = document.createElement("span");
    useLabel.textContent = config.labels?.use ?? "I'd use it";

    axis.append(avoidLabel, progress, useLabel);

    const stack = document.createElement("div");
    stack.className = "wa-swipe-game__stack";

    const glow = document.createElement("div");
    glow.className = "wa-swipe-game__glow";
    glow.setAttribute("aria-hidden", "true");
    stack.append(glow);

    config.signals.forEach((signal, index) => {
      const card = document.createElement("article");
      card.className = "wa-swipe-card";
      card.dataset.swipeCard = signal.id;
      card.dataset.swipeDecision = signal.decision;
      card.dataset.cardIndex = String(index);

      const label = document.createElement("strong");
      label.className = "wa-swipe-card__label";
      label.textContent = signal.label;

      const detail = document.createElement("span");
      detail.className = "wa-swipe-card__detail";
      detail.textContent = signal.detail;

      card.append(label, detail);
      stack.append(card);
    });

    const complete = document.createElement("div");
    complete.className = "wa-swipe-game__complete";
    complete.dataset.swipeComplete = "";
    complete.textContent = config.completeLabel ?? `${config.signals.length} choices captured`;
    stack.append(complete);
    gsap.set(complete, { autoAlpha: 0, y: 12, scale: 0.96 });

    const actions = document.createElement("div");
    actions.className = "wa-swipe-game__actions";
    actions.append(
      this.createSwipeActionButton("avoid", config.labels?.avoid ?? "Never me"),
      this.createSwipeActionButton("use", config.labels?.use ?? "I'd use it"),
    );

    section.append(intro, prompt, axis, stack, actions);
    this.updateSwipeGameProgress(section, 0);
    return section;
  }

  private createSwipeActionButton(decision: PersonalizationSwipeDecision, label: string): HTMLElement {
    const button = document.createElement("button");
    button.className = "wa-swipe-game__action";
    button.type = "button";
    button.tabIndex = -1;
    button.dataset.swipeAction = decision;
    button.setAttribute("aria-label", label);
    return button;
  }

  private layoutSwipeGameCards(game: HTMLElement, activeIndex: number): void {
    const cards = this.getSwipeCards(game);

    cards.forEach((card, index) => {
      const depth = index - activeIndex;
      const visible = depth >= 0 && depth < 3;

      card.dataset.swipeState = depth === 0 ? "active" : depth > 0 ? "queued" : "done";
      gsap.set(card, {
        display: depth >= 0 ? "grid" : "none",
        x: 0,
        y: Math.max(0, depth) * 8,
        scale: 1 - Math.max(0, depth) * 0.035,
        rotation: depth === 1 ? -1.15 : depth === 2 ? 1.05 : 0,
        autoAlpha: visible ? 1 - Math.max(0, depth) * 0.18 : 0,
        zIndex: cards.length - index,
        transformOrigin: "center center",
        force3D: true,
      });
    });

    this.updateSwipeGameProgress(game, activeIndex);
  }

  private updateSwipeGameProgress(game: HTMLElement, activeIndex: number): void {
    const progress = game.querySelector<HTMLElement>("[data-swipe-progress]");
    const total = this.getSwipeCards(game).length;
    const current = Math.min(activeIndex + 1, total);

    if (progress) progress.textContent = `${current}/${total}`;
  }

  private createSequenceEngagement(config: SequenceEngagementConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-sequence-engagement";
    section.dataset.sequenceEngagement = config.id;
    section.dataset.peopleCount = config.peopleCount;
    section.dataset.activeSequenceIndex = "0";

    const count = document.createElement("span");
    count.className = "wa-sequence-engagement__count";
    count.dataset.sequenceCount = "";
    count.textContent = config.sequences.some((sequence) => sequence.steps?.length)
      ? this.getSequenceCountLabel(0, config.peopleCount)
      : config.peopleCount;
    const header = this.createSectionHeader("wa-sequence-engagement", config.title, config.subtitle, count);

    const sequences = document.createElement("div");
    sequences.className = "wa-sequence-engagement__sequences";

    const hasSequenceSteps = config.sequences.some((sequence) => sequence.steps?.length);
    let peopleNav: HTMLElement | null = null;

    if (hasSequenceSteps) {
      peopleNav = document.createElement("div");
      peopleNav.className = "wa-sequence-people";
      peopleNav.setAttribute("aria-label", "Sequence people");

      const previous = document.createElement("button");
      const current = document.createElement("div");
      const avatar = document.createElement("span");
      const avatarText = document.createElement("span");
      const currentCopy = document.createElement("span");
      const currentName = document.createElement("strong");
      const currentMeta = document.createElement("span");
      const actions = document.createElement("div");
      const next = document.createElement("button");
      const firstSequence = config.sequences[0];

      previous.className = "wa-sequence-person-button";
      previous.type = "button";
      previous.tabIndex = -1;
      previous.dataset.sequencePersonButton = `${config.id}:prev`;
      previous.dataset.direction = "prev";
      previous.dataset.currentIndex = "0";
      previous.setAttribute("aria-label", "Previous person");
      previous.textContent = "‹";
      previous.addEventListener("click", () => {
        const currentIndex = Number(previous.dataset.currentIndex ?? "0");
        const targetIndex = (currentIndex - 1 + config.sequences.length) % config.sequences.length;

        this.sequencePerson(config.id, targetIndex).play();
      });

      current.className = "wa-sequence-person-current";
      avatar.className = "wa-sequence-person-current__avatar";
      avatar.dataset.avatarTone = "1";
      avatarText.textContent = this.getInitials(firstSequence?.name ?? "");
      avatar.append(avatarText);
      currentCopy.className = "wa-sequence-person-current__copy";
      currentName.textContent = firstSequence?.name ?? "";
      currentMeta.textContent = [firstSequence?.title, firstSequence?.company].filter(Boolean).join(", ");
      currentCopy.append(currentName, currentMeta);
      current.append(avatar, currentCopy);

      next.className = "wa-sequence-person-button";
      next.type = "button";
      next.tabIndex = -1;
      next.dataset.sequencePersonButton = `${config.id}:next`;
      next.dataset.direction = "next";
      next.dataset.currentIndex = "0";
      next.setAttribute("aria-label", "Next person");
      next.textContent = "›";
      next.addEventListener("click", () => {
        const currentIndex = Number(next.dataset.currentIndex ?? "0");
        const targetIndex = (currentIndex + 1) % config.sequences.length;

        this.sequencePerson(config.id, targetIndex).play();
      });

      actions.className = "wa-sequence-person-actions";
      actions.append(previous, next);
      peopleNav.append(current, actions);
    }

    config.sequences.forEach((sequence, index) => {
      const card = document.createElement("article");
      card.className = "wa-sequence-card";
      card.dataset.sequenceCard = `${config.id}:${index}`;
      card.dataset.sequenceIndex = String(index);
      card.dataset.active = String(index === 0);
      card.dataset.sequenceName = sequence.name;
      card.dataset.sequenceMeta = [sequence.title, sequence.company].filter(Boolean).join(", ");
      card.dataset.sequenceTemplateName = sequence.name;
      card.dataset.sequenceTemplateMeta = [sequence.title, sequence.company].filter(Boolean).join(", ");
      if (index !== 0) {
        card.style.display = "none";
        gsap.set(card, { autoAlpha: 0, y: 8 });
      }

      const top = document.createElement("div");
      top.className = "wa-sequence-card__top";

      const identity = document.createElement("span");
      identity.className = "wa-sequence-card__identity";
      const name = document.createElement("strong");
      name.textContent = sequence.name;
      const company = document.createElement("span");
      company.textContent = [sequence.title, sequence.company].filter(Boolean).join(", ");
      identity.append(name, company);

      const label = document.createElement("span");
      label.className = "wa-sequence-card__label";
      label.textContent = sequence.signal ?? "Personalized";

      top.append(identity, label);

      const subject = document.createElement("p");
      subject.className = "wa-sequence-card__subject";
      subject.textContent = sequence.subject;

      const personalization = document.createElement("p");
      personalization.className = "wa-sequence-card__personalization";
      personalization.textContent = sequence.personalization;

      const sequenceSteps = sequence.steps;

      if (sequenceSteps?.length) {
        const steps = document.createElement("div");
        const selectedStep = sequenceSteps[0];
        const copyPanel = document.createElement("div");
        const copyMeta = document.createElement("span");
        const copySubject = document.createElement("strong");
        const copyBody = document.createElement("p");

        steps.className = "wa-sequence-steps";
        sequenceSteps.forEach((step, stepIndex) => {
          const stepEl = document.createElement("button");
          const channel = document.createElement("span");
          const copy = document.createElement("span");
          const stepLabel = document.createElement("strong");
          const waitDays = this.getSequenceStepWaitDays(step, stepIndex, sequenceSteps.length);

          stepEl.className = "wa-sequence-step";
          stepEl.type = "button";
          stepEl.tabIndex = -1;
          stepEl.dataset.stepIndex = String(stepIndex);
          stepEl.dataset.stepOpen = String(stepIndex === 0);
          stepEl.dataset.stepSelected = String(stepIndex === 0);
          stepEl.dataset.channel = this.slugChannelName(step.channel);
          stepEl.dataset.stepSubject = stepIndex === 0 ? sequence.subject : step.label;
          stepEl.dataset.stepBody = this.getSequenceStepCopy(sequence, step);
          stepEl.dataset.stepTemplateChannel = step.channel;
          stepEl.dataset.stepTemplateLabel = step.label;
          stepEl.dataset.stepTemplateSubject = stepIndex === 0 ? sequence.subject : step.label;
          stepEl.dataset.stepTemplateBody = this.getSequenceStepCopy(sequence, step);
          if (waitDays) {
            stepEl.dataset.waitDays = String(waitDays);
            stepEl.dataset.stepTemplateWaitDays = String(waitDays);
          }
          stepEl.setAttribute("aria-pressed", String(stepIndex === 0));
          stepEl.addEventListener("click", () => {
            this.selectSequenceStep(card, stepIndex);
          });
          channel.className = "wa-sequence-step__channel";
          channel.textContent = step.channel;
          copy.className = "wa-sequence-step__copy";
          stepLabel.textContent = step.label;
          copy.append(stepLabel);
          stepEl.append(channel, copy);
          steps.append(stepEl);

          if (waitDays) {
            steps.append(this.createSequenceWaitRow(waitDays, stepIndex));
          }
        });

        copyPanel.className = "wa-sequence-copy-panel";
        copyPanel.dataset.sequenceCopyPanel = "";
        copyMeta.className = "wa-sequence-copy-panel__meta";
        copyMeta.dataset.sequenceCopyMeta = "";
        copyMeta.textContent = selectedStep ? `${selectedStep.channel} 1` : "Email";
        copySubject.className = "wa-sequence-copy-panel__subject";
        copySubject.dataset.sequenceCopySubject = "";
        copySubject.textContent = sequence.subject;
        copyBody.className = "wa-sequence-copy-panel__body";
        copyBody.dataset.sequenceCopyBody = "";
        copyBody.textContent = selectedStep ? this.getSequenceStepCopy(sequence, selectedStep) : sequence.personalization;
        copyPanel.append(copyMeta, copySubject, copyBody);
        card.append(steps, copyPanel);
      } else {
        card.append(top, subject, personalization);
      }

      sequences.append(card);
    });

    const channels = document.createElement("div");
    channels.className = "wa-engage-channels";

    config.channels.forEach((channel) => {
      const item = document.createElement("button");
      item.className = "wa-engage-channel";
      item.type = "button";
      item.tabIndex = -1;

      const copy = document.createElement("span");
      copy.className = "wa-engage-channel__copy";

      const label = document.createElement("strong");
      label.textContent = channel.label;

      const detail = document.createElement("span");
      detail.textContent = channel.detail;

      copy.append(label, detail);
      item.append(copy);

      if (channel.badge) {
        const badge = document.createElement("span");
        badge.className = "wa-engage-channel__badge";
        badge.textContent = channel.badge;
        item.dataset.badge = channel.badge.toLowerCase();
        item.append(badge);
      }

      channels.append(item);
    });

    const kickoff = document.createElement("button");
    const kickoffLabel = document.createElement("span");
    const kickoffDetail = document.createElement("span");

    kickoff.className = "wa-sequence-kickoff";
    kickoff.type = "button";
    kickoff.tabIndex = -1;
    kickoff.dataset.sequenceKickoff = config.id;
    kickoff.setAttribute("aria-label", config.launchLabel ?? "Kick off sequence");
    kickoffLabel.className = "wa-sequence-kickoff__label";
    kickoffLabel.textContent = config.launchLabel ?? "Kick off sequence";
    kickoffDetail.className = "wa-sequence-kickoff__detail";
    kickoffDetail.textContent = `Launch tailored touches for ${config.peopleCount}`;
    kickoff.append(kickoffLabel, kickoffDetail);
    kickoff.addEventListener("click", () => {
      this.sequenceKickoff(config.id).play();
    });

    if (hasSequenceSteps) {
      section.append(...this.compactElements(header, peopleNav, sequences, kickoff));
    } else {
      section.append(header, sequences, channels);
    }

    return section;
  }

  private createSequenceThinkingStep(
    labelText: string,
    detailText: string,
    index: number,
    total?: number,
  ): HTMLElement {
    const item = this.createThinkingStep(labelText, index);
    const detail = item.querySelector<HTMLElement>(".wa-research-step__detail");
    const body = item.querySelector<HTMLElement>(".wa-research-step__body");

    if (detail) detail.dataset.fullText = detailText;

    if (typeof total === "number" && body) {
      const progress = document.createElement("span");
      const count = document.createElement("span");
      const bar = document.createElement("span");
      const fill = document.createElement("span");

      progress.className = "wa-sequence-thinking-progress";
      progress.dataset.sequenceThinkingTrack = labelText;
      count.className = "wa-sequence-thinking-progress__count";
      count.textContent = `1/${total}`;
      bar.className = "wa-sequence-thinking-progress__bar";
      fill.setAttribute("aria-hidden", "true");
      bar.append(fill);
      progress.append(count, bar);
      body.append(progress);
    }

    return item;
  }

  private findSequenceEngagement(sequenceId: string): HTMLElement | null {
    return this.queryElements(this.root, "[data-sequence-engagement]")
      .find((section) => section.dataset.sequenceEngagement === sequenceId) ?? null;
  }

  private createSequenceWaitRow(waitDays: number, index: number): HTMLElement {
    const wait = document.createElement("div");
    const label = document.createElement("span");

    wait.className = "wa-sequence-wait";
    wait.dataset.sequenceWaitIndex = String(index);
    wait.dataset.waitDays = String(waitDays);
    label.className = "wa-sequence-wait__label";
    label.textContent = this.formatSequenceWaitLabel(waitDays);
    wait.append(label);

    return wait;
  }

  private getSequenceStepWaitDays(
    step: NonNullable<SequenceEngagementConfig["sequences"][number]["steps"]>[number],
    index: number,
    totalSteps: number,
  ): number | null {
    if (index >= totalSteps - 1) return null;

    return step.waitDays ?? SEQUENCE_WAIT_DAY_DEFAULTS[index] ?? 1;
  }

  private formatSequenceWaitLabel(days: number): string {
    return `Wait ${days} ${days === 1 ? "day" : "days"}`;
  }

  private setActiveSequencePerson(section: HTMLElement, index: number): void {
    const cards = this.queryElements(section, "[data-sequence-card]");
    const buttons = this.queryElements(section, "[data-sequence-person-button]");
    const count = section.querySelector<HTMLElement>("[data-sequence-count]");
    const displayCard = this.getSequenceDisplayCard(section);
    const templateCard = this.getSequenceTemplateCard(section, index);

    if (!displayCard || !templateCard) return;

    cards.forEach((card) => {
      const active = card === displayCard;

      card.dataset.active = String(active);
      card.style.display = active ? "grid" : "none";
      gsap.set(card, { autoAlpha: active ? 1 : 0, y: 0 });
    });
    section.dataset.activeSequenceIndex = String(index);
    this.applySequenceTemplateToDisplayCard(section, displayCard, templateCard, index);
    buttons.forEach((button) => {
      button.dataset.currentIndex = String(index);
    });
    if (count) count.textContent = this.getSequenceCountLabel(index, section.dataset.peopleCount ?? "");
    this.updateSequencePersonIdentity(section, index);
  }

  private getSequenceCountLabel(index: number, peopleCount: string): string {
    const total = peopleCount.match(/\d+/)?.[0] ?? peopleCount;

    return `${index + 1}/${total}`;
  }

  private getSequenceDisplayCard(section: HTMLElement): HTMLElement | null {
    const cards = this.queryElements(section, "[data-sequence-card]");
    const activeCard = cards.find((card) => card.dataset.active === "true" && card.style.display !== "none");

    return activeCard ?? cards[0] ?? null;
  }

  private getSequenceTemplateCard(section: HTMLElement, index: number): HTMLElement | null {
    return this.queryElements(section, "[data-sequence-card]")
      .find((card) => Number(card.dataset.sequenceIndex) === index) ?? null;
  }

  private getSelectedSequenceStepIndex(card: HTMLElement): number {
    const selected = card.querySelector<HTMLElement>(".wa-sequence-step[data-step-selected=\"true\"]");

    return Number(selected?.dataset.stepIndex ?? "0");
  }

  private getSequenceTransitionTargets(section: HTMLElement, card: HTMLElement): HTMLElement[] {
    return this.compactElements(
      section.querySelector<HTMLElement>(".wa-sequence-person-current__avatar span"),
      section.querySelector<HTMLElement>(".wa-sequence-person-current__copy strong"),
      section.querySelector<HTMLElement>(".wa-sequence-person-current__copy span"),
      ...this.queryElements(card, ".wa-sequence-step__copy strong"),
      card.querySelector<HTMLElement>("[data-sequence-copy-meta]"),
      card.querySelector<HTMLElement>("[data-sequence-copy-subject]"),
      card.querySelector<HTMLElement>("[data-sequence-copy-body]"),
    );
  }

  private applySequenceTemplateToDisplayCard(
    section: HTMLElement,
    displayCard: HTMLElement,
    templateCard: HTMLElement,
    index: number,
  ): void {
    const selectedIndex = this.getSelectedSequenceStepIndex(displayCard);
    const displaySteps = this.queryElements(displayCard, ".wa-sequence-step");
    const displayWaits = this.queryElements(displayCard, ".wa-sequence-wait");
    const templateSteps = this.queryElements(templateCard, ".wa-sequence-step");

    displayCard.dataset.sequenceName =
      templateCard.dataset.sequenceTemplateName ?? templateCard.dataset.sequenceName ?? "";
    displayCard.dataset.sequenceMeta =
      templateCard.dataset.sequenceTemplateMeta ?? templateCard.dataset.sequenceMeta ?? "";

    displaySteps.forEach((step, stepIndex) => {
      const templateStep = templateSteps[stepIndex];
      const channel = step.querySelector<HTMLElement>(".wa-sequence-step__channel");
      const label = step.querySelector<HTMLElement>(".wa-sequence-step__copy strong");

      if (!templateStep) return;

      step.dataset.channel = templateStep.dataset.channel ?? "";
      step.dataset.stepSubject = templateStep.dataset.stepTemplateSubject ?? templateStep.dataset.stepSubject ?? "";
      step.dataset.stepBody = templateStep.dataset.stepTemplateBody ?? templateStep.dataset.stepBody ?? "";
      step.dataset.waitDays = templateStep.dataset.stepTemplateWaitDays ?? templateStep.dataset.waitDays ?? "";
      if (channel) channel.textContent = templateStep.dataset.stepTemplateChannel ?? channel.textContent;
      if (label) label.textContent = templateStep.dataset.stepTemplateLabel ?? label.textContent;

      const wait = displayWaits[stepIndex];
      const waitDays = Number(step.dataset.waitDays);
      const waitLabel = wait?.querySelector<HTMLElement>(".wa-sequence-wait__label");

      if (wait) {
        wait.style.display = Number.isFinite(waitDays) && waitDays > 0 ? "grid" : "none";
        wait.dataset.waitDays = String(waitDays);
      }
      if (waitLabel && Number.isFinite(waitDays) && waitDays > 0) {
        waitLabel.textContent = this.formatSequenceWaitLabel(waitDays);
      }
    });

    section.dataset.activeSequenceIndex = String(index);
    this.selectSequenceStep(displayCard, Math.min(selectedIndex, Math.max(0, displaySteps.length - 1)));
  }

  private selectSequenceStep(card: HTMLElement, index: number): void {
    const steps = this.queryElements(card, ".wa-sequence-step");
    const selected = steps.find((step) => Number(step.dataset.stepIndex) === index) ?? steps[0];
    const meta = card.querySelector<HTMLElement>("[data-sequence-copy-meta]");
    const subject = card.querySelector<HTMLElement>("[data-sequence-copy-subject]");
    const body = card.querySelector<HTMLElement>("[data-sequence-copy-body]");
    const selectedLabel = selected?.querySelector<HTMLElement>(".wa-sequence-step__channel")?.textContent?.trim() ?? "Email";

    steps.forEach((step) => {
      const active = step === selected;

      step.dataset.stepSelected = String(active);
      step.dataset.stepOpen = String(active);
      step.setAttribute("aria-pressed", String(active));
    });

    if (meta) meta.textContent = `${selectedLabel} ${index + 1}`;
    if (subject) subject.textContent = selected?.dataset.stepSubject ?? "";
    if (body) body.textContent = selected?.dataset.stepBody ?? "";
  }

  private getSequenceStepCopy(
    sequence: SequenceEngagementConfig["sequences"][number],
    step: NonNullable<SequenceEngagementConfig["sequences"][number]["steps"]>[number],
  ): string {
    const firstName = sequence.name.split(" ")[0] ?? sequence.name;

    if (this.slugChannelName(step.channel) !== "email") return step.body;

    return [
      `Hi ${firstName},`,
      sequence.personalization,
      step.body,
      "Worth sending over a quick example?",
    ].join("\n\n");
  }

  private updateSequencePersonIdentity(section: HTMLElement, index: number): void {
    const card = this.getSequenceTemplateCard(section, index);
    const name =
      card?.dataset.sequenceTemplateName ??
      card?.dataset.sequenceName ??
      card?.querySelector<HTMLElement>(".wa-sequence-card__identity strong")?.textContent ??
      "";
    const meta =
      card?.dataset.sequenceTemplateMeta ??
      card?.dataset.sequenceMeta ??
      card?.querySelector<HTMLElement>(".wa-sequence-card__identity span")?.textContent ??
      "";
    const avatar = section.querySelector<HTMLElement>(".wa-sequence-person-current__avatar");
    const avatarText = avatar?.querySelector<HTMLElement>("span");
    const currentName = section.querySelector<HTMLElement>(".wa-sequence-person-current__copy strong");
    const currentMeta = section.querySelector<HTMLElement>(".wa-sequence-person-current__copy span");

    if (avatar) avatar.dataset.avatarTone = String((index % 6) + 1);
    if (avatarText) avatarText.textContent = this.getInitials(name);
    if (currentName) currentName.textContent = name;
    if (currentMeta) currentMeta.textContent = meta;
  }

  private slugChannelName(channel: string): string {
    return channel.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  private revealCard(card: HTMLElement): gsap.core.Timeline {
    const message = this.claimComponentMessage("result", card);
    const rows = card.querySelectorAll(".wa-result-row, .wa-result-action");

    return gsap
      .timeline()
      .call(() => {
        card.style.display = "grid";
      })
      .add(this.revealMessageWithChildren(message, card, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: motionDuration(0.48),
        ease: "back.out(1.45)",
      }), 0)
      .to(
        rows,
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.32),
          ease: "power2.out",
          stagger: 0.06,
        },
        "-=0.22",
      );
  }

  private highlightCardTarget(card: HTMLElement, target?: HTMLElement | string): gsap.core.Timeline {
    const el =
      typeof target === "string"
        ? card.querySelector<HTMLElement>(target)
        : target ?? card.querySelector<HTMLElement>(".wa-result-row, .wa-result-action") ?? card;
    const tl = gsap.timeline();

    if (!el) return tl;

    tl.to(el, {
      backgroundColor: "rgba(213, 255, 79, 0.22)",
      scale: 1.018,
      duration: motionDuration(0.16),
      ease: "power2.out",
    }).to(el, {
      backgroundColor: "rgba(255, 255, 255, 0)",
      scale: 1,
      duration: motionDuration(0.42),
      ease: "power2.out",
    });

    return tl;
  }

  private required(selector: string): HTMLElement {
    const el = this.root.querySelector<HTMLElement>(selector);

    if (!el) {
      throw new Error(`ChatbotStories: required element missing: ${selector}`);
    }

    return el;
  }

  private queryElements(root: ParentNode, selector: string): HTMLElement[] {
    return Array.from(root.querySelectorAll<HTMLElement>(selector));
  }

  private compactElements(...elements: Array<HTMLElement | null | undefined>): HTMLElement[] {
    return elements.filter((element): element is HTMLElement => Boolean(element));
  }

  private getSwipeCards(game: HTMLElement | null | undefined): HTMLElement[] {
    return game ? this.queryElements(game, "[data-swipe-card]") : [];
  }

  private escapeSelectorValue(value: string): string {
    return typeof CSS !== "undefined" && "escape" in CSS
      ? CSS.escape(value)
      : value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  private clearCustomResults(): void {
    this.root.querySelectorAll("[data-result-grid] .wa-strategy-plan, [data-result-grid] .wa-data-table, [data-result-grid] .wa-enrichment-panel").forEach((el) => {
      el.remove();
    });
  }

  private clearMarketingPanels(): void {
    this.root.querySelectorAll<HTMLElement>(MARKETING_PANEL_SELECTOR).forEach((el) => {
      gsap.killTweensOf(el);
      el.remove();
    });
  }

  private registerTransientElement(el: HTMLElement, cleanup?: () => void): void {
    this.transientCleanups.push(() => {
      cleanup?.();
      gsap.killTweensOf(el);
      el.remove();
    });
  }

  private clearTransientElements(): void {
    for (const cleanup of this.transientCleanups) cleanup();
    this.transientCleanups = [];
    this.root.querySelectorAll(TRANSIENT_ELEMENT_SELECTOR).forEach((el) => {
      gsap.killTweensOf(el);
      el.remove();
    });
  }

  private getMessageScrollTarget(message: HTMLElement): number {
    const target =
      message.offsetTop +
      message.offsetHeight +
      this.getThreadBottomPadding() -
      this.thread.clientHeight;

    if (this.composerVisible) {
      return Math.max(0, target, this.getThreadBottomScrollTarget());
    }

    return Math.max(0, target);
  }

  private getThreadBottomPadding(): number {
    return Number.parseFloat(getComputedStyle(this.thread).paddingBottom) || 0;
  }

  private getThreadBottomScrollTarget(): number {
    return Math.max(0, this.thread.scrollHeight - this.thread.clientHeight);
  }

  private pinThreadToBottom(): void {
    this.thread.scrollTop = this.getThreadBottomScrollTarget();
  }

  private animateMessageScrollIntoView(
    message: HTMLElement,
    duration = CHAT_SCROLL_MOTION.followDuration,
  ): void {
    const target = this.getMessageScrollTarget(message);

    if (this.prefersReducedMotion || Math.abs(this.thread.scrollTop - target) < 1) {
      this.thread.scrollTop = target;
      return;
    }

    this.scrollTween?.kill();
    this.scrollTween = gsap.to(this.thread, {
      scrollTop: target,
      duration,
      ease: CHAT_SCROLL_MOTION.followEase,
      overwrite: "auto",
      onComplete: () => {
        this.scrollTween = null;
      },
    });
  }

  private requestMessageScroll(message: HTMLElement): void {
    const now = performance.now();

    this.scheduledScrollMessage = message;

    if (now - this.lastStreamScrollAt < STREAM_SCROLL_INTERVAL_MS) return;
    if (this.scheduledScrollFrame) return;

    this.lastStreamScrollAt = now;
    this.scheduledScrollFrame = window.requestAnimationFrame(() => {
      const target = this.scheduledScrollMessage;

      this.scheduledScrollFrame = 0;
      this.scheduledScrollMessage = null;

      if (target?.isConnected) this.animateMessageScrollIntoView(target);
    });
  }

  private cancelScheduledScroll(): void {
    if (!this.scheduledScrollFrame) return;

    window.cancelAnimationFrame(this.scheduledScrollFrame);
    this.scheduledScrollFrame = 0;
    this.scheduledScrollMessage = null;
    this.lastStreamScrollAt = 0;
  }
}

function clampUnit(value: number): number {
  return Math.min(1, Math.max(0, value));
}
