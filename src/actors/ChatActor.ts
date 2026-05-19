import { gsap } from "gsap";
import type { CursorActor } from "./CursorActor";
import type {
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  OutreachStyleProfileConfig,
  ProximityLeadListConfig,
  ResultCardConfig,
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
  activate: () => gsap.core.Timeline;
  complete: () => gsap.core.Timeline;
};

type PreparedCursorFile = {
  el: HTMLElement;
  startFollow: () => gsap.core.Timeline;
  stopFollow: () => gsap.core.Timeline;
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
  | "sequence"
  | "drop";
type MessageKind = ComponentKind | "file";
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

const COMPOSER_MOTION = {
  hiddenY: 8,
  hiddenScale: 0.94,
  showDuration: motionDuration(0.26),
  hideDuration: motionDuration(0.2),
  threadGap: 44,
};

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

const STREAM_SCROLL_INTERVAL_MS = 96;
const TRANSIENT_ELEMENT_SELECTOR = ".wa-cursor-file, .wa-csv-drop";

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
  private thread: HTMLElement;
  private composerText: HTMLElement;
  private composer: HTMLElement;
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
  private lastStreamScrollAt = 0;
  private prefersReducedMotion = false;
  private composerVisible = false;

  constructor(private root: HTMLElement) {
    this.chatShell = this.required("[data-chat-shell]");
    this.thread = this.required("[data-chat-thread]");
    this.composer = this.required("[data-chat-input]");
    this.composerText = this.required("[data-composer-text]");
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
  }

  reset(): void {
    this.cancelScheduledScroll();
    this.scrollTween?.kill();
    this.scrollTween = null;
    this.clearTransientElements();
    this.messageIndex = 0;
    this.cardIndex = 0;
    this.composerText.textContent = "";
    gsap.killTweensOf([this.composer, this.composerText]);
    this.setComposerFocusState(false);
    this.setComposerVisibleState(false);
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
    gsap.set(this.composerText, { autoAlpha: 1, y: 0 });

    for (const message of this.messagePool) {
      message.style.display = "none";
    }

    for (const card of this.cardPool) {
      card.style.display = "none";
    }
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

    tl.to(this.composer, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      duration: COMPOSER_MOTION.showDuration,
      ease: "back.out(1.45)",
      overwrite: "auto",
      onStart: () => {
        this.setComposerVisibleState(true);
        gsap.set(this.composer, {
          display: "grid",
          transformOrigin: "center bottom",
        });
      },
      onUpdate: () => {
        if (!this.composerVisible) this.setComposerVisibleState(true);
      },
      onComplete: () => {
        if (!this.composerVisible) this.setComposerVisibleState(true);
      },
    }).to(
      this.thread,
      {
        paddingBottom: () => Math.max(CHAT_BOTTOM_CLEARANCE, this.getComposerThreadInset()),
        duration: COMPOSER_MOTION.showDuration,
        ease: "power3.out",
        overwrite: "auto",
        onUpdate: () => this.pinThreadToBottom(),
        onComplete: () => this.pinThreadToBottom(),
      },
      0,
    );

    return tl;
  }

  hideComposer(): gsap.core.Timeline {
    return gsap.timeline().to(this.composer, {
      autoAlpha: 0,
      y: COMPOSER_MOTION.hiddenY,
      scale: COMPOSER_MOTION.hiddenScale,
      duration: COMPOSER_MOTION.hideDuration,
      ease: "power2.in",
      overwrite: "auto",
      onStart: () => {
        this.setComposerFocusState(false);
        this.setComposerVisibleState(false);
      },
    }).to(
      this.thread,
      {
        paddingBottom: CHAT_BOTTOM_CLEARANCE,
        duration: COMPOSER_MOTION.hideDuration,
        ease: "power2.inOut",
        overwrite: "auto",
        onUpdate: () => this.pinThreadToBottom(),
        onComplete: () => this.pinThreadToBottom(),
      },
      0,
    );
  }

  clearComposer(): gsap.core.Timeline {
    return gsap
      .timeline()
      .to(this.composerText, {
        autoAlpha: 0,
        y: -4,
        duration: motionDuration(0.16),
        ease: "power1.out",
      })
      .call(() => {
        this.composerText.textContent = "";
      })
      .set(this.composerText, { y: 0 })
      .to(this.composerText, {
        autoAlpha: 1,
        duration: motionDuration(0.12),
        ease: "power1.out",
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
      autoAlpha: 0,
      y: COMPOSER_MOTION.hiddenY,
      scale: COMPOSER_MOTION.hiddenScale,
      display: "",
      transformOrigin: "center bottom",
    };
  }

  private getComposerThreadInset(): number {
    const composerRect = this.composer.getBoundingClientRect();
    const threadRect = this.thread.getBoundingClientRect();
    const overlap = Math.max(0, threadRect.bottom - composerRect.top);

    return Math.ceil(overlap + COMPOSER_MOTION.threadGap);
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

  thinkingState(label: string, hold = 1.1): gsap.core.Timeline {
    return this.runThinkingSequence([label], {
      hold,
      itemStartY: 6,
      headerDuration: 0.28,
      afterStepHold: hold,
      finalHold: 0,
    });
  }

  researchSequence(steps: string[], hold = 0.42): gsap.core.Timeline {
    return this.runThinkingSequence(steps, {
      hold,
      itemStartY: 10,
      headerDuration: 0.24,
      afterStepHold: hold * 0.45,
      finalHold: hold * 0.35,
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

  enrichmentPanel(config: EnrichmentConfig): gsap.core.Timeline {
    const panel = this.createEnrichmentPanel(config);

    return this.revealComponentItems("enrichment", panel, ".wa-waterfall-row", COMPONENT_CHILD_REVEAL.waterfallRow);
  }

  strategyPlans(plans: StrategyPlanConfig[]): gsap.core.Timeline {
    const cards = plans.map((plan) => this.createStrategyPlan(plan));
    const grid = document.createElement("div");
    const rows = cards.flatMap((card) => Array.from(card.querySelectorAll(".wa-strategy-plan__row")));

    grid.className = "wa-result-grid has-strategy-plans";
    grid.dataset.strategyPlans = plans.map((plan) => plan.id).join(" ");
    grid.append(...cards);

    gsap.set(rows, { autoAlpha: 0, y: 8 });

    return this.revealComponentItems("strategy", grid, cards, COMPONENT_CHILD_REVEAL.strategyCard)
      .to(
        rows,
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

  sequenceEngagement(config: SequenceEngagementConfig): gsap.core.Timeline {
    const panel = this.createSequenceEngagement(config);

    return this.revealComponentItems(
      "sequence",
      panel,
      ".wa-sequence-card, .wa-engage-channel",
      COMPONENT_CHILD_REVEAL.stackCard,
    );
  }

  prepareCsvDropArea(options: DropAreaOptions = {}): PreparedCsvDropArea {
    const dropArea = this.createCsvDropArea(options);
    this.registerTransientElement(dropArea);

    return {
      el: dropArea,
      reveal: () => this.revealCsvDropArea(dropArea),
      activate: () => this.activateCsvDropArea(dropArea),
      complete: () => this.completeCsvDropArea(dropArea),
    };
  }

  prepareCursorFile(fileName: string, cursor: CursorActor, fileType = "CSV"): PreparedCursorFile {
    const file = this.createCursorFile(fileName, fileType);
    let removeFollower: (() => void) | null = null;
    this.registerTransientElement(file, () => {
      removeFollower?.();
      removeFollower = null;
    });

    return {
      el: file,
      startFollow: () =>
        gsap
          .timeline()
          .call(() => {
            removeFollower?.();
            removeFollower = this.followCursorWithFile(file, cursor);
          })
          .to(file, {
            autoAlpha: 1,
            scale: 1,
            duration: motionDuration(0.24),
            ease: "back.out(1.9)",
          }),
      stopFollow: () =>
        gsap
          .timeline()
          .call(() => {
            removeFollower?.();
            removeFollower = null;
          })
          .to(file, {
            autoAlpha: 0,
            scale: 0.92,
            duration: motionDuration(0.18),
            ease: "power2.in",
          }),
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

  uploadedFilesMessage(files: UploadedFileConfig[]): gsap.core.Timeline {
    const content = this.createUploadedFiles(files);

    return this.revealUserComponentItems("file", content, ".wa-uploaded-file", {
      ...COMPONENT_CHILD_REVEAL.compactRow,
      from: { ...COMPONENT_CHILD_REVEAL.compactRow.from, scale: 0.99 },
      to: { ...COMPONENT_CHILD_REVEAL.compactRow.to, scale: 1 },
      position: "-=0.24",
    });
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
      ? Array.from(content.querySelectorAll<HTMLElement>(targets))
      : targets;
  }

  private revealPreparedItems(
    message: HTMLElement,
    targets: HTMLElement[],
    preset: ChildRevealPreset,
  ): gsap.core.Timeline {
    if (targets.length) gsap.set(targets, { ...preset.from });

    return this.revealMessageWithChildren(message, targets, { ...preset.to }, preset.position);
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

    const icon = document.createElement("span");
    icon.className = "wa-csv-drop__icon";
    icon.setAttribute("aria-hidden", "true");

    const copy = document.createElement("span");
    copy.className = "wa-csv-drop__copy";

    const title = document.createElement("strong");
    title.textContent = options.title ?? "Drop CSV to clean audience data";

    const detail = document.createElement("span");
    detail.textContent = options.detail ?? "Accepts webinar exports, event lists, and messy attendee spreadsheets.";

    copy.append(title, detail);
    dropArea.append(icon, copy);
    return dropArea;
  }

  private revealCsvDropArea(dropArea: HTMLElement): gsap.core.Timeline {
    return gsap.timeline().to(
      {},
      {
        duration: 0.001,
        onStart: () => {
          if (dropArea.dataset.dropComplete === "true") return;

          dropArea.dataset.dropState = "idle";
          if (!dropArea.isConnected) this.chatShell.append(dropArea);
          gsap.set(dropArea, {
            autoAlpha: 1,
            transformOrigin: "center center",
          });
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
          gsap.killTweensOf(dropArea);
          gsap.set(dropArea, { autoAlpha: 0 });
          dropArea.remove();
        },
      },
    );
  }

  private createCursorFile(fileName: string, fileType = "CSV"): HTMLElement {
    const file = document.createElement("div");
    file.className = "wa-cursor-file";
    file.setAttribute("aria-hidden", "true");
    file.innerHTML = `
      <span class="wa-cursor-file__icon"></span>
      <span class="wa-cursor-file__name"></span>
    `;
    file.querySelector<HTMLElement>(".wa-cursor-file__icon")!.textContent = fileType;
    file.querySelector<HTMLElement>(".wa-cursor-file__name")!.textContent = fileName;
    this.root.append(file);
    gsap.set(file, { autoAlpha: 0, scale: 0.88, x: -120, y: -120 });
    return file;
  }

  private followCursorWithFile(file: HTMLElement, cursor: CursorActor): () => void {
    const fileWidth = file.offsetWidth || 154;
    const fileHeight = file.offsetHeight || 42;
    const setFileX = gsap.quickSetter(file, "x", "px") as (value: number) => void;
    const setFileY = gsap.quickSetter(file, "y", "px") as (value: number) => void;
    const transformState = { x: -120, y: -120 };

    const follow = () => {
      const point = cursor.readPosition();
      const nextX = point.x - fileWidth * 0.5;
      const nextY = point.y - fileHeight * 0.5;

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

    const header = document.createElement("span");
    header.className = "wa-uploaded-files__summary";
    header.textContent = `${files.length} business context files`;

    const list = document.createElement("div");
    list.className = "wa-uploaded-files__list";
    files.forEach((fileConfig) => {
      const file = this.createUploadedFile(fileConfig.name, fileConfig.detail);
      const icon = file.querySelector<HTMLElement>(".wa-uploaded-file__icon");
      if (icon) icon.textContent = fileConfig.type ?? "DOC";
      list.append(file);
    });

    stack.append(header, list);
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
      ".wa-research-step__detail, .wa-research-step__disclosure, .wa-research-step__chevron",
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
      gsap.set(items, { autoAlpha: 0, y: options.itemStartY });
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
      if (itemIndex > activeIndex) item.dataset.stepState = "pending";
      if (itemIndex === activeIndex) item.dataset.stepState = "current";
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
    table.className = "wa-data-table";
    table.dataset.dataTable = config.id;
    table.dataset.tableVariant = config.variant ?? "default";
    table.dataset.columnCount = String(config.columns.length);
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

    for (const row of config.rows) {
      grid.append(this.createDataTableRow(row.id, config.columns, row.values, config.id));
    }

    table.append(header, grid);
    return table;
  }

  private createDataTableRow(
    rowId: string,
    columns: DataTableConfig["columns"],
    values: Record<string, string>,
    tableId: string,
  ): HTMLElement {
    const row = document.createElement("div");
    row.className = "wa-data-table__row";
    row.dataset.tableRow = rowId;

    const isHeader = rowId === "header";

    if (isHeader) row.dataset.header = "true";
    if (!isHeader && values.source) row.dataset.source = values.source;

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

    card.append(
      label,
      title,
      this.createStrategyPlanRow("Who", plan.audience),
      this.createStrategyPlanRow("Motion", plan.motion),
      this.createStrategyPlanRow("Proof", plan.proof),
    );

    return card;
  }

  private createStrategyPlanRow(labelText: string, valueText: string): HTMLElement {
    const row = document.createElement("div");
    row.className = "wa-strategy-plan__row";

    const label = document.createElement("span");
    label.textContent = labelText;

    const value = document.createElement("strong");
    value.textContent = valueText;

    row.append(label, value);
    return row;
  }

  private createDataSourcesGrid(config: DataSourceGridConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-data-source-grid";
    section.dataset.dataSourcesGrid = config.id;
    const header = this.createSectionHeader("wa-data-source-grid", config.title, config.subtitle);

    const list = document.createElement("div");
    list.className = "wa-data-source-grid__list";

    config.sources.forEach((source) => {
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
      list.append(card);
    });

    section.append(header, list);
    return section;
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

  private createSequenceEngagement(config: SequenceEngagementConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-sequence-engagement";
    section.dataset.sequenceEngagement = config.id;

    const count = document.createElement("span");
    count.className = "wa-sequence-engagement__count";
    count.textContent = config.peopleCount;
    const header = this.createSectionHeader("wa-sequence-engagement", config.title, config.subtitle, count);

    const sequences = document.createElement("div");
    sequences.className = "wa-sequence-engagement__sequences";

    config.sequences.forEach((sequence) => {
      const card = document.createElement("article");
      card.className = "wa-sequence-card";

      const top = document.createElement("div");
      top.className = "wa-sequence-card__top";

      const identity = document.createElement("span");
      identity.className = "wa-sequence-card__identity";
      const name = document.createElement("strong");
      name.textContent = sequence.name;
      const company = document.createElement("span");
      company.textContent = sequence.company;
      identity.append(name, company);

      const label = document.createElement("span");
      label.className = "wa-sequence-card__label";
      label.textContent = "Personalized";

      top.append(identity, label);

      const subject = document.createElement("p");
      subject.className = "wa-sequence-card__subject";
      subject.textContent = sequence.subject;

      const personalization = document.createElement("p");
      personalization.className = "wa-sequence-card__personalization";
      personalization.textContent = sequence.personalization;

      card.append(top, subject, personalization);
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

    section.append(header, sequences, channels);
    return section;
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

  private clearCustomResults(): void {
    this.root.querySelectorAll("[data-result-grid] .wa-strategy-plan, [data-result-grid] .wa-data-table, [data-result-grid] .wa-enrichment-panel").forEach((el) => {
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
