import type { gsap } from "gsap";
import type {
  AnchorName,
  BreakpointName,
  CursorMode,
  CursorMoveOptions,
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  Offset,
  ResponsiveTarget,
  SequenceEngagementConfig,
  StoryContext,
  StrategyPlanConfig,
} from "../core/types";

type TimelinePosition = string | number;

export const STORY_TIMING = {
  typeShort: 0.92,
  typeMedium: 1.16,
  typeLong: 1.34,
  thinkingShort: 0.92,
  thinkingMedium: 1.3,
  beat: 0.26,
};

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
  at?: TimelinePosition;
};

type AttentionState = {
  textCandidateCount: number;
  textSkimCount: number;
  lastTextSkimStep: number;
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
  | { kind: "thinking"; label: string; hold?: number; statusBefore?: string; at?: TimelinePosition }
  | { kind: "research"; steps: string[]; hold?: number; statusBefore?: string; at?: TimelinePosition }
  | { kind: "dataTable"; config: DataTableConfig; at?: TimelinePosition }
  | { kind: "enrichmentPanel"; config: EnrichmentConfig; at?: TimelinePosition }
  | { kind: "strategyPlans"; plans: StrategyPlanConfig[]; at?: TimelinePosition }
  | { kind: "dataSourcesGrid"; config: DataSourceGridConfig; at?: TimelinePosition }
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
    case "thinking":
      if (step.statusBefore) tl.add(ctx.chat.setStatus(step.statusBefore), step.at);
      tl.add(ctx.chat.thinkingState(step.label, step.hold), step.statusBefore ? undefined : step.at);
      addThinkingCursorMotion(tl, ctx, attention, step.hold, 1, step.label, stepIndex);
      return;
    case "research":
      if (step.statusBefore) tl.add(ctx.chat.setStatus(step.statusBefore), step.at);
      tl.add(ctx.chat.researchSequence(step.steps, step.hold), step.statusBefore ? undefined : step.at);
      addThinkingCursorMotion(tl, ctx, attention, step.hold, step.steps.length, step.steps.join("|"), stepIndex);
      return;
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
      addComponentWithAttention(
        tl,
        ctx,
        ctx.chat.strategyPlans(step.plans),
        step.at,
        chatThreadSelector(`[data-strategy-plans~="${escapeAttributeValue(step.plans[0]?.id ?? "strategy")}"]`),
        `strategy-${step.plans[0]?.id ?? "plans"}`,
      );
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

function componentAttention(ctx: StoryContext, selector: string, label: string): gsap.core.Timeline {
  const tl = createBuildTimeline(ctx).add(ctx.cursor.scanAcross(selector, { label }));

  return releaseBuildTimeline(tl);
}

function addThinkingCursorMotion(
  tl: gsap.core.Timeline,
  ctx: StoryContext,
  attention: AttentionState,
  hold = STORY_TIMING.thinkingShort,
  itemCount = 1,
  label = "thinking",
  stepIndex = 0,
): void {
  const totalHold = hold * Math.max(1, itemCount);
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
        label: `focus-${step.sendLabel}`,
      }),
      "-=0.18",
    );
  }

  tl.add(ctx.cursor.click("text"), "-=0.02")
    .add(ctx.chat.setComposerFocus(true), "-=0.14")
    .add(ctx.chat.typeComposer(step.text, step.duration ?? STORY_TIMING.typeMedium))
    .add(
      ctx.cursor.moveTo(SEND_TARGET, {
        mode: "pointer",
        intent: "click",
        speed: "quick",
        label: step.sendLabel,
      }),
      "-=0.16",
    )
    .add(ctx.cursor.click())
    .add(ctx.chat.setComposerFocus(false), "-=0.08")
    .add(ctx.chat.userMessage(step.text), "-=0.08")
    .add(ctx.chat.clearComposer(), "<")
    .add(ctx.chat.hideComposer(), "-=0.03")
    .add(
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
