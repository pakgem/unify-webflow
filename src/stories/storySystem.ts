import type { gsap } from "gsap";
import type {
  AnchorName,
  BreakpointName,
  CursorMode,
  CursorMoveOptions,
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  MailboxConnectionConfig,
  Offset,
  PersonalizationSwipeGameConfig,
  ResponsiveTarget,
  SequenceEngagementConfig,
  StoryContext,
  StrategyPlanConfig,
  ThinkingItemConfig,
  ThinkingStateConfig,
} from "../core/types";

type TimelinePosition = string | number;

export const STORY_TIMING = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26,
  fileGrab: 0.18,
};

export const CURSOR_CLICK_MOVE_BASE = {
  ease: "sine.inOut",
  overshoot: false,
  settle: false,
} satisfies Pick<CursorMoveOptions, "ease" | "overshoot" | "settle">;

export const CURSOR_CLICK_MOVE_DURATIONS = {
  compact: 0.5,
  paginationApproach: 0.72,
  paginationClick: 0.52,
  previewCard: 0.68,
  sequenceEnroll: 1.05,
} as const;

type ResponsiveOffsets = Partial<Record<BreakpointName, Offset | number>>;

function offsetFromValue(value?: Offset | number): Offset | undefined {
  if (typeof value === "number") return { x: value, y: 0 };
  return value;
}

export function responsiveElementTarget(
  selector: string,
  anchor: AnchorName,
  offsets: ResponsiveOffsets = {},
  humanOffset = true,
): ResponsiveTarget {
  return {
    desktop: { target: selector, anchor, offset: offsetFromValue(offsets.desktop), humanOffset },
    tablet: { target: selector, anchor, offset: offsetFromValue(offsets.tablet), humanOffset },
    mobile: { target: selector, anchor, offset: offsetFromValue(offsets.mobile), humanOffset },
  };
}

export const CHAT_INPUT_TARGETS = {
  hitGroundRunning: responsiveElementTarget("[data-chat-input]", "center", { desktop: -72, tablet: -68, mobile: -54 }),
  dataMarketplace: responsiveElementTarget("[data-chat-input]", "center", { desktop: -54, tablet: -52, mobile: -44 }),
  crmUpdate: responsiveElementTarget("[data-chat-input]", "center", { desktop: -42, tablet: -46, mobile: -36 }),
  researchBrief: responsiveElementTarget("[data-chat-input]", "center", { desktop: -70, tablet: -62, mobile: -50 }),
  supportResolution: responsiveElementTarget("[data-chat-input]", "center", { desktop: -62, tablet: -58, mobile: -46 }),
} satisfies Record<string, ResponsiveTarget>;

export const SIGNUP_EMAIL_TARGET = responsiveElementTarget("[data-signup-field]", "center", {
  desktop: -74,
  tablet: -66,
  mobile: -48,
});

export const SIGNUP_SUBMIT_TARGET = responsiveElementTarget("[data-signup-submit]", "center");

export const SEND_TARGET = responsiveElementTarget("[data-send-button]", "center");

const THINKING_IDLE_TARGET = {
  desktop: {
    target: "[data-chat-shell]",
    anchor: "right",
    offset: { x: -34, y: -138 },
    humanOffset: true,
  },
  tablet: {
    target: "[data-chat-shell]",
    anchor: "right",
    offset: { x: -30, y: -118 },
    humanOffset: true,
  },
  mobile: {
    target: "[data-chat-shell]",
    anchor: "right",
    offset: { x: -28, y: -96 },
    humanOffset: true,
  },
} satisfies ResponsiveTarget;

const THINKING_SIDE_PARK_THRESHOLD = 2.8;
const TEXT_SKIM_MIN_CHARS = 42;
const TEXT_SKIM_MIN_STEP_GAP = 2;
const TEXT_SKIM_MAX_PER_STORY = 3;
const STRATEGY_CARD_CURSOR = {
  approachDuration: 0.78,
  betweenCardDuration: 0.92,
  betweenCardDurationStep: 0.08,
  curve: 0.2,
  followBuffer: 0.7,
} as const;
const CHAT_THREAD_SCOPE = "[data-chat-shell] [data-chat-thread]";
const LATEST_ASSISTANT_TEXT_SELECTOR = `${CHAT_THREAD_SCOPE} [data-message-role="assistant"]:not(.wa-message--component) [data-message-body]`;
const LATEST_THINKING_TEXT_SELECTOR =
  `${CHAT_THREAD_SCOPE} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="current"] .wa-research-step__body, ` +
  `${CHAT_THREAD_SCOPE} [data-message-role="assistant"].wa-message--thinking .wa-research-step[data-step-state="complete"] .wa-research-step__label`;

export const INPUT_ENTRY_LEAD_TIME = 0.24;
export const SIGNUP_ENTRY_LEAD_TIME = 0.3;

type PromptStep = {
  kind: "prompt";
  text: string;
  sendLabel: string;
  duration?: number;
  statusBefore?: string;
  statusAfter?: string;
  fromEntry?: boolean;
  focusTarget?: ResponsiveTarget;
  postSendCursorMotion?: boolean;
  at?: TimelinePosition;
};

type AttentionState = {
  textCandidateCount: number;
  textSkimCount: number;
  lastTextSkimStep: number;
};

type ThinkingStep = {
  kind: "thinking";
  hold?: number;
  preserveScroll?: boolean;
  cursorMotion?: boolean;
  statusBefore?: string;
  at?: TimelinePosition;
} & (
  | { label: string | ThinkingItemConfig; steps?: never; thinking?: never }
  | { steps: Array<string | ThinkingItemConfig>; label?: never; thinking?: never }
  | { thinking: ThinkingStateConfig; label?: never; steps?: never }
);
type ElementPerusalItem = {
  selector: string;
  label: string;
  scanSelector?: string;
  scanLabel?: string;
  scanDuration?: number;
  scanMatch?: "first" | "last";
  scrollBeforeScan?: boolean;
  scrollDuration?: number;
  scrollOffset?: number;
  scrollAlign?: "top" | "bottom";
  at?: TimelinePosition;
};

export const EXIT_TARGETS = {
  right: { target: "[data-chat-shell]", anchor: "right", outside: "right" },
  topRight: { target: "[data-chat-shell]", anchor: "topRight", outside: "top" },
  bottomRight: { target: "[data-chat-shell]", anchor: "bottomRight", outside: "bottom" },
} satisfies Record<string, ResponsiveTarget>;

export type StoryStep =
  | PromptStep
  | { kind: "status"; text: string; at?: TimelinePosition }
  | { kind: "cursorClick"; nextMode?: CursorMode; at?: TimelinePosition }
  | { kind: "typeSignupEmail"; email: string; duration?: number; at?: TimelinePosition }
  | { kind: "transitionSignupToChat"; at?: TimelinePosition }
  | { kind: "assistant"; text: string; at?: TimelinePosition }
  | ThinkingStep
  | { kind: "dataTable"; config: DataTableConfig; at?: TimelinePosition }
  | { kind: "enrichmentPanel"; config: EnrichmentConfig; at?: TimelinePosition }
  | { kind: "strategyPlans"; plans: StrategyPlanConfig[]; at?: TimelinePosition }
  | { kind: "dataSourcesGrid"; config: DataSourceGridConfig; at?: TimelinePosition }
  | { kind: "marketingDataSourcesGrid"; config: DataSourceGridConfig; at?: TimelinePosition }
  | { kind: "personalizationSwipeGame"; config: PersonalizationSwipeGameConfig; at?: TimelinePosition }
  | { kind: "sequenceEngagement"; config: SequenceEngagementConfig; at?: TimelinePosition }
  | { kind: "cursorMove"; target: ResponsiveTarget; options?: CursorMoveOptions; at?: TimelinePosition }
  | { kind: "cursorDrag"; target: ResponsiveTarget; options?: CursorMoveOptions; at?: TimelinePosition }
  | { kind: "custom"; build: (ctx: StoryContext) => gsap.core.Timeline; at?: TimelinePosition };

export function exitStory(target: ResponsiveTarget = EXIT_TARGETS.right, at?: TimelinePosition): StoryStep {
  return {
    kind: "cursorMove",
    target,
    options: { intent: "exit", label: "exit" },
    at,
  };
}

export function mailboxConnectionSteps(config: MailboxConnectionConfig): StoryStep[] {
  const buttonTarget = responsiveElementTarget(
    `[data-mailbox-connect="${escapeAttributeValue(config.id)}"]`,
    "center",
    {
      desktop: { x: 2, y: 0 },
      tablet: { x: 1, y: 0 },
      mobile: { x: 0, y: 0 },
    },
    false,
  );

  return [
    { kind: "status", text: "connect mailbox" },
    {
      kind: "custom",
      build: (ctx) => ctx.chat.mailboxConnection(config),
      at: "+=0.04",
    },
    ...elementPerusalSteps([
      {
        selector:
          `[data-mailbox-connection="${escapeAttributeValue(config.id)}"] ` +
          ".wa-mailbox-connection__copy",
        label: `mailbox-cta-skim-${config.id}`,
        scanDuration: 0.5,
        at: "+=0.16",
      },
    ]),
    {
      kind: "cursorMove",
      target: buttonTarget,
      options: {
        mode: "pointer",
        intent: "click",
        speed: "quick",
        duration: CURSOR_CLICK_MOVE_DURATIONS.compact,
        curve: 0.1,
        ...CURSOR_CLICK_MOVE_BASE,
        label: `mailbox-connect-${config.id}`,
      },
      at: "+=0.08",
    },
    { kind: "cursorClick", at: "+=0.04" },
    {
      kind: "custom",
      build: (ctx) => ctx.chat.connectMailbox(config.id),
      at: "<+=0.08",
    },
  ];
}

export function styleProfilePerusalSteps(profileId: string): StoryStep[] {
  const selector = chatThreadSelector(`[data-style-profile="${escapeAttributeValue(profileId)}"]`);
  const label = slugLabel(profileId);

  return elementPerusalSteps([
    {
      selector: `${selector} .wa-style-profile__row:nth-of-type(1)`,
      label: `${label}-top-row`,
      scanDuration: 0.58,
      at: "+=0.08",
    },
    {
      selector: `${selector} .wa-style-profile__row:nth-of-type(3)`,
      label: `${label}-middle-row`,
      scanDuration: 0.58,
      scrollBeforeScan: true,
      scrollDuration: 0.56,
      at: "+=0.04",
    },
    {
      selector: `${selector} .wa-style-profile__examples`,
      scanSelector: `${selector} .wa-style-profile__example:nth-of-type(1)`,
      label: `${label}-examples-section`,
      scanLabel: `${label}-examples`,
      scanDuration: 0.66,
      scrollBeforeScan: true,
      scrollDuration: 0.56,
      at: "+=0.04",
    },
  ]);
}

export function elementPerusalSteps(items: ElementPerusalItem[]): StoryStep[] {
  return items.flatMap((item) => {
    const steps: StoryStep[] = [];

    if (item.scrollBeforeScan) {
      steps.push({
        kind: "custom",
        build: (ctx) =>
          ctx.chat.scrollChatElementIntoView(item.selector, {
            align: item.scrollAlign,
            duration: item.scrollDuration,
            offset: item.scrollOffset,
          }),
        at: item.at,
      });
    }

    steps.push({
      kind: "custom",
      build: (ctx) =>
        ctx.cursor.scanAcross(item.scanSelector ?? item.selector, {
          duration: item.scanDuration,
          label: item.scanLabel ?? item.label,
          match: item.scanMatch,
        }),
      at: item.scrollBeforeScan ? "+=0.02" : item.at,
    });

    return steps;
  });
}

/* --------------------------------------------------------------------------
   Sequence Step Cursor

      0ms   cursor leaves the person rail with a slower direct path
   1150ms   cursor settles over the step before clicking
   1270ms   step click updates the copy panel
   1510ms   cursor moves to the next step with a smaller path
   -------------------------------------------------------------------------- */

const SEQUENCE_STEP_CURSOR_MOTION = {
  firstMoveDelay: "+=0.22",
  betweenStepDelay: "+=0.22",
  clickDelay: "+=0.12",
  sequenceUpdateAt: "-=0.03",
  firstDuration: 1.15,
  duration: 0.82,
  firstCurve: 0.2,
  curve: 0.14,
  reviewHold: STORY_TIMING.beat + 0.22,
} as const;

export function sequenceStepClickSteps(
  sequenceId: string,
  stepIndexes: number[],
  at: TimelinePosition = SEQUENCE_STEP_CURSOR_MOTION.firstMoveDelay,
): StoryStep[] {
  return stepIndexes.flatMap((stepIndex, index) => {
    const selector =
      `[data-sequence-engagement="${escapeAttributeValue(sequenceId)}"] ` +
      `.wa-sequence-card[data-active="true"] .wa-sequence-step[data-step-index="${stepIndex}"]`;
    const isFirstStepAfterRail = index === 0;

    return [
      {
        kind: "cursorMove" as const,
        target: responsiveElementTarget(selector, "center", {}, false),
        options: {
          mode: "pointer" as const,
          intent: "click" as const,
          speed: "slow" as const,
          ease: "sine.inOut",
          duration: isFirstStepAfterRail
            ? SEQUENCE_STEP_CURSOR_MOTION.firstDuration
            : SEQUENCE_STEP_CURSOR_MOTION.duration,
          curve: isFirstStepAfterRail ? SEQUENCE_STEP_CURSOR_MOTION.firstCurve : SEQUENCE_STEP_CURSOR_MOTION.curve,
          overshoot: false,
          settle: false,
          label: `${sequenceId}-step-${stepIndex}`,
        },
        at: index === 0 ? at : SEQUENCE_STEP_CURSOR_MOTION.betweenStepDelay,
      },
      { kind: "cursorClick" as const, at: SEQUENCE_STEP_CURSOR_MOTION.clickDelay },
      {
        kind: "custom" as const,
        build: (ctx) => ctx.chat.sequenceStep(sequenceId, stepIndex),
        at: SEQUENCE_STEP_CURSOR_MOTION.sequenceUpdateAt,
      },
      {
        kind: "custom" as const,
        build: (ctx) => ctx.timeline().to({}, { duration: SEQUENCE_STEP_CURSOR_MOTION.reviewHold }),
        at: "+=0.02",
      },
    ];
  });
}

export function dataTableFooterPerusalStep(
  tableId: string,
  duration = STORY_TIMING.beat + 0.18,
  at?: TimelinePosition,
  scrollOptions: { align?: "top" | "bottom"; offset?: number; bottomClearance?: number; settleDelay?: number } = {},
): StoryStep {
  return {
    kind: "custom",
    build: (ctx) => {
      const tl = createBuildTimeline(ctx);

      tl.call(() => ctx.chat.scrollDataTableFooterIntoView(tableId, duration, scrollOptions));
      tl.to({}, { duration });

      if (scrollOptions.settleDelay) {
        tl.to({}, { duration: scrollOptions.settleDelay });
        tl.call(() => ctx.chat.scrollDataTableFooterIntoView(tableId, duration, scrollOptions));
        tl.to({}, { duration });
      }

      return releaseBuildTimeline(tl);
    },
    at,
  };
}

export function buildStorySteps(ctx: StoryContext, steps: StoryStep[]): gsap.core.Timeline {
  const tl = createBuildTimeline(ctx);
  const attention = createAttentionState();

  for (const [index, step] of steps.entries()) {
    addStep(tl, ctx, step, index, attention);
  }

  return releaseBuildTimeline(tl);
}

function addStep(
  tl: gsap.core.Timeline,
  ctx: StoryContext,
  step: StoryStep,
  stepIndex: number,
  attention: AttentionState,
): void {
  switch (step.kind) {
    case "prompt":
      tl.add(buildPromptStep(ctx, step), step.at);
      return;
    case "status":
      tl.add(ctx.chat.setStatus(step.text), step.at);
      return;
    case "cursorClick":
      tl.add(ctx.cursor.click(step.nextMode), step.at);
      return;
    case "typeSignupEmail":
      tl.add(ctx.chat.typeSignupEmail(step.email, step.duration), step.at);
      return;
    case "transitionSignupToChat":
      tl.add(ctx.chat.transitionSignupToChat(), step.at);
      return;
    case "assistant":
      tl.add(ctx.chat.assistantMessage(step.text), step.at);
      addDeterministicTextSkim(tl, ctx, attention, {
        kind: "assistant",
        key: step.text,
        text: step.text,
        selector: LATEST_ASSISTANT_TEXT_SELECTOR,
        label: `assistant-${slugLabel(step.text)}`,
        stepIndex,
      });
      return;
    case "thinking": {
      const thinkingState = getThinkingState(step);
      const thinkingLabels = thinkingState.items.map((item) => item.label);
      const estimatedTotalHold = getThinkingCursorHold(thinkingState, step.hold);
      if (step.statusBefore) tl.add(ctx.chat.setStatus(step.statusBefore), step.at);
      tl.add(
        ctx.chat.thinkingState(thinkingState, step.hold, { preserveScroll: step.preserveScroll ?? false }),
        step.statusBefore ? undefined : step.at,
      );
      if (step.cursorMotion !== false) {
        addThinkingCursorMotion(
          tl,
          ctx,
          attention,
          step.hold,
          thinkingLabels.length,
          thinkingLabels.join("|"),
          stepIndex,
          estimatedTotalHold,
        );
      }
      return;
    }
    case "dataTable":
      addComponentWithAttention(
        tl,
        ctx,
        ctx.chat.dataTable(step.config),
        step.at,
        chatThreadSelector(`[data-data-table="${escapeAttributeValue(step.config.id)}"]`),
        `table-${step.config.id}`,
      );
      return;
    case "enrichmentPanel":
      addComponentWithAttention(
        tl,
        ctx,
        ctx.chat.enrichmentPanel(step.config),
        step.at,
        chatThreadSelector(`[data-enrichment-panel="${escapeAttributeValue(step.config.id)}"]`),
        `enrichment-${step.config.id}`,
      );
      return;
    case "strategyPlans":
      {
        const selector = chatThreadSelector(`[data-strategy-plans~="${escapeAttributeValue(step.plans[0]?.id ?? "strategy")}"]`);
        tl.add(ctx.chat.strategyPlans(step.plans), step.at);
        tl.add(strategyPlansAttention(ctx, selector, step.plans), "+=0.06");
      }
      return;
    case "dataSourcesGrid":
      addComponentWithAttention(
        tl,
        ctx,
        ctx.chat.dataSourcesGrid(step.config),
        step.at,
        chatThreadSelector(`[data-data-sources-grid="${escapeAttributeValue(step.config.id)}"]`),
        `sources-${step.config.id}`,
      );
      return;
    case "marketingDataSourcesGrid":
      addComponentWithAttention(
        tl,
        ctx,
        ctx.chat.marketingDataSourcesGrid(step.config),
        step.at,
        chatThreadSelector(`[data-marketing-data-sources-grid="${escapeAttributeValue(step.config.id)}"]`),
        `marketing-sources-${step.config.id}`,
      );
      return;
    case "personalizationSwipeGame":
      addPersonalizationSwipeGame(tl, ctx, step.config, step.at);
      return;
    case "sequenceEngagement":
      addComponentWithAttention(
        tl,
        ctx,
        ctx.chat.sequenceEngagement(step.config),
        step.at,
        chatThreadSelector(`[data-sequence-engagement="${escapeAttributeValue(step.config.id)}"]`),
        `sequence-${step.config.id}`,
      );
      return;
    case "cursorMove":
      tl.add(ctx.cursor.moveTo(step.target, step.options), step.at);
      return;
    case "cursorDrag":
      tl.add(ctx.cursor.dragTo(step.target, step.options), step.at);
      return;
    case "custom":
      tl.add(step.build(ctx), step.at);
      return;
  }
}

function getThinkingState(step: ThinkingStep): ThinkingStateConfig {
  if ("thinking" in step && step.thinking) return step.thinking;
  if (Array.isArray(step.steps)) return { items: step.steps.map(normalizeThinkingItem) };

  return { items: [normalizeThinkingItem(step.label ?? "")] };
}

function normalizeThinkingItem(item: string | ThinkingItemConfig): ThinkingItemConfig {
  return typeof item === "string" ? { label: item } : item;
}

function getThinkingCursorHold(thinkingState: ThinkingStateConfig, hold = STORY_TIMING.thinkingShort): number {
  const itemCount = Math.max(1, thinkingState.items.length);
  const configuredDurations = thinkingState.items.reduce((total, item) => {
    const duration = typeof item.duration === "number" && Number.isFinite(item.duration)
      ? Math.max(0, item.duration)
      : 0;

    return total + duration;
  }, 0);

  return hold * itemCount + configuredDurations;
}

function addComponentWithAttention(
  tl: gsap.core.Timeline,
  ctx: StoryContext,
  reveal: gsap.core.Timeline,
  at: TimelinePosition | undefined,
  selector: string,
  label: string,
): void {
  tl.add(reveal, at);
  tl.add(componentAttention(ctx, selector, label), "+=0.06");
}

function addPersonalizationSwipeGame(
  tl: gsap.core.Timeline,
  ctx: StoryContext,
  config: PersonalizationSwipeGameConfig,
  at: TimelinePosition | undefined,
): void {
  const gameSelector = chatThreadSelector(
    `[data-personalization-swipe-game="${escapeAttributeValue(config.id)}"]`,
  );

  tl.add(ctx.chat.personalizationSwipeGame(config), at);

  config.signals.forEach((signal, index) => {
    const cardSelector = `${gameSelector} [data-swipe-card="${escapeAttributeValue(signal.id)}"]`;
    const direction = signal.decision === "use" ? 1 : -1;
    const side: AnchorName = signal.decision === "use" ? "right" : "left";
    const target = responsiveElementTarget(cardSelector, side, {
      desktop: { x: direction * 154, y: index % 2 === 0 ? -18 : 16 },
      tablet: { x: direction * 132, y: index % 2 === 0 ? -14 : 14 },
      mobile: { x: direction * 86, y: index % 2 === 0 ? -10 : 10 },
    }, false);

    tl.add(
      ctx.cursor.moveTo(responsiveElementTarget(cardSelector, "center", {}, false), {
        intent: "hover",
        mode: "default",
        speed: index === 0 ? "normal" : "quick",
        overshoot: false,
        settle: false,
        label: `swipe-card-${signal.id}-center`,
      }),
      index === 0 ? "+=0.2" : "+=0.12",
    );

    tl.add(
      ctx.cursor.dragTo(target, {
        speed: "slow",
        releaseHold: 0.08,
        label: `swipe-card-${signal.id}-${signal.decision}`,
      }),
      "-=0.02",
    );
    tl.add(ctx.chat.swipePersonalizationCard(config.id, signal.id, signal.decision), "<+=0.2");
  });

  tl.add(
    ctx.cursor.moveTo(THINKING_IDLE_TARGET, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: false,
      settle: false,
      label: `swipe-game-complete-${config.id}`,
    }),
    "+=0.08",
  );
}

function componentAttention(ctx: StoryContext, selector: string, label: string): gsap.core.Timeline {
  const tl = createBuildTimeline(ctx).add(ctx.cursor.scanAcross(selector, { label }));

  return releaseBuildTimeline(tl);
}

function strategyPlansAttention(
  ctx: StoryContext,
  selector: string,
  plans: StrategyPlanConfig[],
): gsap.core.Timeline {
  const tl = createBuildTimeline(ctx);
  const cardSelectors = plans.map(
    (plan) => `${selector} [data-strategy-plan="${escapeAttributeValue(plan.id)}"]`,
  );
  const [firstCardSelector, ...remainingCardSelectors] = cardSelectors;
  const betweenCardDurationTotal = remainingCardSelectors.reduce(
    (total, _selector, index) => total + getStrategyCardMoveDuration(index),
    0,
  );
  const hoverTrackDuration =
    STRATEGY_CARD_CURSOR.approachDuration +
    betweenCardDurationTotal +
    STRATEGY_CARD_CURSOR.followBuffer;

  if (!firstCardSelector) return releaseBuildTimeline(tl);

  tl.add(ctx.chat.strategyPlanCursorHover(selector, ctx.cursor, hoverTrackDuration), 0);
  tl.add(ctx.cursor.moveTo(responsiveElementTarget(firstCardSelector, "center", {}, false), {
    intent: "hover",
    speed: "slow",
    duration: STRATEGY_CARD_CURSOR.approachDuration,
    curve: STRATEGY_CARD_CURSOR.curve,
    ease: "sine.inOut",
    overshoot: false,
    settle: false,
    label: `strategy-card-approach-${plans[0]?.id ?? "first"}`,
  }), 0);

  remainingCardSelectors.forEach((cardSelector, index) => {
    tl.add(ctx.cursor.moveTo(responsiveElementTarget(cardSelector, "center", {}, false), {
      intent: "hover",
      speed: "slow",
      duration: getStrategyCardMoveDuration(index),
      curve: STRATEGY_CARD_CURSOR.curve,
      ease: "sine.inOut",
      overshoot: false,
      settle: false,
      label: `strategy-card-hover-${plans[index + 1]?.id ?? index + 2}`,
    }), "+=0.04");
  });

  return releaseBuildTimeline(tl);
}

function getStrategyCardMoveDuration(index: number): number {
  return STRATEGY_CARD_CURSOR.betweenCardDuration + index * STRATEGY_CARD_CURSOR.betweenCardDurationStep;
}

function addThinkingCursorMotion(
  tl: gsap.core.Timeline,
  ctx: StoryContext,
  attention: AttentionState,
  hold = STORY_TIMING.thinkingShort,
  itemCount = 1,
  label = "thinking",
  stepIndex = 0,
  estimatedTotalHold = hold * Math.max(1, itemCount),
): void {
  const totalHold = estimatedTotalHold;
  const shouldSkimThinking =
    itemCount >= 3 &&
    shouldSkimText(ctx, attention, {
      kind: "thinking",
      key: label,
      text: label,
      stepIndex,
      minChars: 16,
    });

  if (shouldSkimThinking) {
    tl.add(
      ctx.cursor.scanAcross(LATEST_THINKING_TEXT_SELECTOR, {
        label: `thinking-skim-${slugLabel(label)}`,
        match: "last",
        duration: 0.72,
      }),
      "<+=0.58",
    );
  }

  if (totalHold < THINKING_SIDE_PARK_THRESHOLD) return;

  tl.add(
    ctx.cursor.moveTo(THINKING_IDLE_TARGET, {
      intent: "hover",
      mode: "default",
      speed: "slow",
      overshoot: false,
      settle: false,
      label: `thinking-idle-${slugLabel(label)}`,
    }),
    shouldSkimThinking ? "+=0.08" : "<+=0.08",
  );
}

function addDeterministicTextSkim(
  tl: gsap.core.Timeline,
  ctx: StoryContext,
  attention: AttentionState,
  candidate: {
    kind: string;
    key: string;
    text: string;
    selector: string;
    label: string;
    stepIndex: number;
  },
): void {
  if (!shouldSkimText(ctx, attention, candidate)) return;

  tl.add(
    ctx.cursor.scanAcross(candidate.selector, {
      label: `text-skim-${candidate.label}`,
      match: "last",
      duration: 0.68,
    }),
    "+=0.04",
  );
}

function createAttentionState(): AttentionState {
  return {
    textCandidateCount: 0,
    textSkimCount: 0,
    lastTextSkimStep: Number.NEGATIVE_INFINITY,
  };
}

function shouldSkimText(
  ctx: StoryContext,
  attention: AttentionState,
  candidate: {
    kind: string;
    key: string;
    text: string;
    stepIndex: number;
    minChars?: number;
  },
): boolean {
  const text = candidate.text.trim();
  const minChars = candidate.minChars ?? TEXT_SKIM_MIN_CHARS;

  if (text.length < minChars || attention.textSkimCount >= TEXT_SKIM_MAX_PER_STORY) return false;

  const candidateIndex = attention.textCandidateCount;
  attention.textCandidateCount += 1;

  const firstReadableThing = attention.textSkimCount === 0;
  const enoughSpace = candidate.stepIndex - attention.lastTextSkimStep >= TEXT_SKIM_MIN_STEP_GAP;
  const score = attentionScore(`${ctx.story.id}:${candidate.kind}:${candidateIndex}:${candidate.key}`);
  const cadenceHit = candidateIndex > 0 && candidateIndex % 3 === 0;
  const shouldSkim = firstReadableThing || (enoughSpace && (score >= 0.58 || cadenceHit));

  if (shouldSkim) {
    attention.textSkimCount += 1;
    attention.lastTextSkimStep = candidate.stepIndex;
  }

  return shouldSkim;
}

function attentionScore(seed: string): number {
  let value = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    value ^= seed.charCodeAt(index);
    value = Math.imul(value, 16777619);
  }

  value += 0x6d2b79f5;
  let next = value;
  next = Math.imul(next ^ (next >>> 15), next | 1);
  next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
  return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
}

function escapeAttributeValue(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function chatThreadSelector(selector: string): string {
  return `${CHAT_THREAD_SCOPE} ${selector}`;
}

function slugLabel(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 36) || "state";
}

function buildPromptStep(ctx: StoryContext, step: PromptStep): gsap.core.Timeline {
  const tl = createBuildTimeline(ctx);

  if (step.statusBefore) {
    tl.add(ctx.chat.setStatus(step.statusBefore));
  }

  tl.add(ctx.chat.showComposer(), step.statusBefore ? "-=0.02" : undefined);

  if (!step.fromEntry) {
    tl.add(
      ctx.cursor.moveTo(step.focusTarget ?? ctx.story.entry, {
        mode: "text",
        intent: "text",
        speed: "normal",
        duration: CURSOR_CLICK_MOVE_DURATIONS.compact,
        curve: 0.1,
        ...CURSOR_CLICK_MOVE_BASE,
        label: `focus-${step.sendLabel}`,
      }),
      "-=0.18",
    );
  }

  tl.add(ctx.cursor.click("text"), "+=0.04")
    .add(ctx.chat.setComposerFocus(true), "-=0.14")
    .add(ctx.chat.typeComposer(step.text, step.duration ?? STORY_TIMING.typeMedium))
    .add(
      ctx.cursor.moveTo(SEND_TARGET, {
        mode: "pointer",
        intent: "click",
        speed: "quick",
        duration: CURSOR_CLICK_MOVE_DURATIONS.compact,
        curve: 0.12,
        ...CURSOR_CLICK_MOVE_BASE,
        label: step.sendLabel,
      }),
      "-=0.16",
    )
    .add(ctx.cursor.click())
    .add(ctx.chat.setComposerFocus(false), "-=0.08")
    .add(ctx.chat.sendComposerText(), "-=0.06")
    .add(ctx.chat.userMessage(step.text), "-=0.12")
    .add(ctx.chat.hideComposer(), "<")
    .add(ctx.chat.clearComposer());

  if (step.postSendCursorMotion !== false) {
    tl.add(
      ctx.cursor.moveTo(THINKING_IDLE_TARGET, {
        intent: "hover",
        mode: "default",
        speed: "slow",
        overshoot: false,
        settle: false,
        label: `post-interaction-${step.sendLabel}`,
      }),
      "-=0.12",
    );
  }

  if (step.statusAfter) {
    tl.add(ctx.chat.setStatus(step.statusAfter), "<");
  }

  return releaseBuildTimeline(tl);
}

function createBuildTimeline(ctx: StoryContext): gsap.core.Timeline {
  const tl = ctx.timeline();
  tl.pause(0);
  return tl;
}

function releaseBuildTimeline(tl: gsap.core.Timeline): gsap.core.Timeline {
  tl.paused(false);
  return tl;
}
