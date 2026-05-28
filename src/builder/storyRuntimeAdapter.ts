import type { gsap } from "gsap";
import type {
  CursorMoveOptions,
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  MailboxConnectionConfig,
  OutreachStyleProfileConfig,
  PersonalizationSwipeGameConfig,
  ProximityLeadListConfig,
  ResponsiveTarget,
  SequenceEngagementConfig,
  StoryContext,
  StoryDefinition,
  StrategyPlanConfig,
  ThinkingStateConfig,
  UploadedFileConfig,
} from "../core/types";
import {
  collectDataSourceAssetUrls,
  collectDataTableAssetUrls,
  collectProximityAssetUrls,
  collectSequenceAssetUrls,
} from "../core/assetPreloader";
import { getPreviewSequenceIndexes } from "../core/sequenceSelection";
import {
  CHAT_INPUT_TARGETS,
  CURSOR_CLICK_MOVE_BASE,
  CURSOR_CLICK_MOVE_DURATIONS,
  EXIT_TARGETS,
  INPUT_ENTRY_LEAD_TIME,
  SIGNUP_EMAIL_TARGET,
  SIGNUP_ENTRY_LEAD_TIME,
  SIGNUP_SUBMIT_TARGET,
  STORY_TIMING,
  buildStorySteps,
  dataTableFooterPerusalStep,
  exitStory,
  mailboxConnectionSteps,
  responsiveElementTarget,
  sequenceStepClickSteps,
  styleProfilePerusalSteps,
  type StoryStep,
} from "../stories/storySystem";
import { getThinkingElapsedLabel } from "../stories/thinkingText";
import type {
  BuilderComponent,
  BuilderEnrichmentComponent,
  BuilderMailboxConnectionComponent,
  BuilderSequenceEngagementComponent,
  BuilderStep,
  BuilderStory,
  BuilderTableComponent,
  BuilderThinkingState,
  BuilderUploadedFilesComponent,
} from "./draftTypes";
import {
  getRowsForPaginationRange,
  inferPageSizeFromRanges,
  normalizePageSize,
  normalizePaginationRanges,
  parsePaginationRange,
} from "./pagination";

type ComponentStep = BuilderStep & { component: BuilderComponent };

const CONTEXT_FILE_PICKUP_TARGET = {
  desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 420, y: -74 }, humanOffset: false },
  tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 360, y: -58 }, humanOffset: false },
  mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 280, y: -42 }, humanOffset: false },
} satisfies ResponsiveTarget;

const OUTREACH_SEQUENCE_CURSOR_MOVE = {
  mode: "pointer",
  intent: "hover",
  speed: "slow",
  duration: 1,
  ease: "sine.inOut",
  curve: 0.72,
  overshoot: false,
  label: "hover-outreach-sequence",
} satisfies CursorMoveOptions;

const VISITOR_PAGINATION_CLICK_MOVE = {
  mode: "pointer",
  intent: "click",
  speed: "quick",
  duration: CURSOR_CLICK_MOVE_DURATIONS.paginationClick,
  curve: 0.1,
  ...CURSOR_CLICK_MOVE_BASE,
  label: "open-visitor-page-2",
} satisfies CursorMoveOptions;

const SEQUENCE_PERSON_PREVIEW_MOVE = {
  mode: "pointer",
  intent: "click",
  speed: "normal",
  duration: CURSOR_CLICK_MOVE_DURATIONS.previewCard,
  curve: 0.16,
  ...CURSOR_CLICK_MOVE_BASE,
} satisfies CursorMoveOptions;

const SEQUENCE_KICKOFF_MOVE = {
  mode: "pointer",
  intent: "click",
  speed: "slow",
  duration: CURSOR_CLICK_MOVE_DURATIONS.sequenceEnroll,
  curve: 0.18,
  ...CURSOR_CLICK_MOVE_BASE,
} satisfies CursorMoveOptions;

const VISITOR_TABLE_FOOTER_BOTTOM_CLEARANCE = 96;
const VISITOR_TABLE_FOOTER_SCROLL_DURATION = 1.05;
const VISITOR_PAGINATION_PRE_CLICK_HOLD = 0;

const RUNTIME_ENTRY_BY_STORY_ID: Record<string, StoryDefinition["entry"]> = {
  "hit-ground-running": SIGNUP_EMAIL_TARGET,
  "data-marketplace": CHAT_INPUT_TARGETS.dataMarketplace,
  "research-brief": CHAT_INPUT_TARGETS.researchBrief,
};

const RUNTIME_ENTRY_LEAD_TIME_BY_STORY_ID: Record<string, number> = {
  "hit-ground-running": SIGNUP_ENTRY_LEAD_TIME,
  "data-marketplace": INPUT_ENTRY_LEAD_TIME,
  "research-brief": INPUT_ENTRY_LEAD_TIME,
};

const TABLE_COLUMN_WIDTHS = {
  emailContent: "max-content",
  foldedDefault: "minmax(130px,1fr)",
  foldedEmail: "minmax(190px,0.95fr)",
  foldedMobile: "minmax(150px,0.72fr)",
  foldedConnector: "minmax(170px,0.78fr)",
  foldedName: "minmax(220px,0.95fr)",
  rawName: "110px",
  rawEmail: "250px",
  rawCompany: "minmax(120px,1fr)",
  cleanName: "175px",
  cleanEmail: "215px",
  cleanCompany: "minmax(150px,1fr)",
} as const;

const DATA_MARKETPLACE_PROSPECT_COMPANY = "Stripe";

export function createStoriesFromBuilderDraft(
  builderStories: BuilderStory[],
  baseStories: StoryDefinition[],
): StoryDefinition[] {
  const builderById = new Map(builderStories.map((story) => [story.id, story]));

  return baseStories.map((baseStory) => {
    const builderStory = builderById.get(baseStory.id);
    return builderStory ? createStoryFromBuilderStory(builderStory, baseStory) : baseStory;
  });
}

function createStoryFromBuilderStory(builderStory: BuilderStory, baseStory: StoryDefinition): StoryDefinition {
  return {
    ...baseStory,
    label: builderStory.label,
    navLabel: builderStory.label,
    navDescription: builderStory.summary || baseStory.navDescription,
    summary: builderStory.summary || baseStory.summary,
    assetUrls: collectBuilderStoryAssetUrls(builderStory),
    entry: getRuntimeEntry(builderStory.id, baseStory),
    entryLeadTime: getRuntimeEntryLeadTime(builderStory.id, baseStory),
    prepare: builderStory.id === "hit-ground-running" ? (ctx) => ctx.chat.prepareSignup() : baseStory.prepare,
    build: (ctx) => buildBuilderStory(ctx, builderStory, baseStory),
  };
}

function collectBuilderStoryAssetUrls(story: BuilderStory): string[] {
  const urls = new Set<string>();

  for (const step of story.steps) {
    if (step.kind !== "component" || !step.component) continue;

    switch (step.component.kind) {
      case "table":
        addAssetUrls(urls, collectDataTableAssetUrls(toDataTable(step.component, `${story.id}-${step.id}`)));
        break;
      case "dataSources":
        addAssetUrls(urls, collectDataSourceAssetUrls(toDataSources(step.component)));
        break;
      case "proximityList":
        addAssetUrls(urls, collectProximityAssetUrls(toProximityList(step.component)));
        break;
      case "sequenceEngagement":
        addAssetUrls(urls, collectSequenceAssetUrls(toSequenceEngagement(step.component, `${story.id}-${step.id}`)));
        break;
    }
  }

  return [...urls];
}

function addAssetUrls(urls: Set<string>, collectedUrls: string[]): void {
  for (const url of collectedUrls) urls.add(url);
}

function getRuntimeEntry(storyId: string, baseStory: StoryDefinition): StoryDefinition["entry"] {
  return RUNTIME_ENTRY_BY_STORY_ID[storyId] ?? baseStory.entry;
}

function getRuntimeEntryLeadTime(storyId: string, baseStory: StoryDefinition): number | undefined {
  return RUNTIME_ENTRY_LEAD_TIME_BY_STORY_ID[storyId] ?? baseStory.entryLeadTime;
}

function buildBuilderStory(
  ctx: StoryContext,
  builderStory: BuilderStory,
  baseStory: StoryDefinition,
): gsap.core.Timeline {
  if (builderStory.id === "hit-ground-running") return buildHitGroundRunningStory(ctx, builderStory);
  if (builderStory.id === "crm-update") return buildContextLearningStory(ctx, builderStory);
  if (builderStory.id === "research-brief") return buildEngagementStory(ctx, builderStory);
  if (builderStory.id === "csv-import-cleanup") return buildCsvCleanupStory(ctx, builderStory);

  const steps = createGenericStorySteps(builderStory);
  if (!steps.length) return baseStory.build(ctx);

  return buildStorySteps(ctx, [...steps, exitStory(EXIT_TARGETS.bottomRight, "+=0.18")]);
}

function buildHitGroundRunningStory(ctx: StoryContext, story: BuilderStory): gsap.core.Timeline {
  const statusStep = firstStep(story, "status");
  const userStep = firstStep(story, "user");
  const thinkingStep = firstStep(story, "thinking");
  const assistantStep = firstStep(story, "assistant");
  const strategyStep = firstComponent(story, "strategyCards");

  return buildStorySteps(ctx, [
    { kind: "status", text: statusStep?.text || "Sign up" },
    { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
    { kind: "typeSignupEmail", email: userStep?.text || "joel@vercel.com", duration: STORY_TIMING.typeShort },
    {
      kind: "cursorMove",
      target: SIGNUP_SUBMIT_TARGET,
      options: {
        mode: "pointer",
        intent: "click",
        speed: "quick",
        duration: CURSOR_CLICK_MOVE_DURATIONS.compact,
        curve: 0.12,
        ...CURSOR_CLICK_MOVE_BASE,
        label: "signup-submit",
      },
      at: "-=0.04",
    },
    { kind: "cursorClick", nextMode: "default", at: "+=0.06" },
    { kind: "custom", build: () => ctx.chat.submitSignup(), at: "<" },
    { kind: "status", text: "Building workspace", at: "-=0.08" },
    { kind: "transitionSignupToChat", at: `+=${STORY_TIMING.beat}` },
    ...(thinkingStep ? [{ kind: "status" as const, text: thinkingStep.text || "Researching", at: "<" }] : []),
    ...(thinkingStep ? [toThinkingStoryStep(thinkingStep, { hold: 0.46, at: "<" })] : []),
    ...(assistantStep ? [{ kind: "assistant" as const, text: assistantStep.text }] : []),
    ...(strategyStep ? [{ kind: "status" as const, text: "Game plans ready", at: "<" }] : []),
    ...(strategyStep ? [{ kind: "strategyPlans" as const, plans: toStrategyPlans(strategyStep.component), at: "-=0.08" }] : []),
    exitStory(EXIT_TARGETS.right, "+=0.18"),
  ]);
}

function buildContextLearningStory(ctx: StoryContext, story: BuilderStory): gsap.core.Timeline {
  const mailboxStep = firstComponent(story, "mailboxConnection");
  const uploadedFilesStep = firstComponent(story, "uploadedFiles");
  const steps: StoryStep[] = [];

  if (mailboxStep) {
    appendMailboxConnectionFlow(steps, toMailboxConnection(mailboxStep.component));
  }

  if (uploadedFilesStep) {
    const files = toUploadedFiles(uploadedFilesStep.component);
    const dropArea = ctx.chat.prepareCsvDropArea({
      title: uploadedFilesStep.component.title,
      detail: files.map((file) => file.name).join(", "),
    });
    const cursorLabel = files.length > 1 ? `${files.length} context files` : files[0]?.name ?? uploadedFilesStep.text;
    const cursorFile = ctx.chat.prepareCursorFile(cursorLabel, ctx.cursor, files[0]?.type ?? "DOC", files);
    const dropTarget = responsiveElementTarget("[data-chat-shell]", "center", {
      desktop: { x: 0, y: 74 },
      tablet: { x: 0, y: 64 },
      mobile: { x: 0, y: 56 },
    });

    steps.push(
      { kind: "status" as const, text: "waiting for context" },
      {
        kind: "cursorMove" as const,
        target: CONTEXT_FILE_PICKUP_TARGET,
        options: {
          mode: "default" as const,
          intent: "exit" as const,
          speed: "slow" as const,
          overshoot: false,
          settle: true,
          label: "context-file-pickup",
        },
        at: "+=0.08",
      },
      { kind: "custom" as const, build: () => cursorFile.startFollow() },
      { kind: "custom" as const, build: () => dropArea.revealWhenCursorEnters(ctx.cursor), at: "<" },
      {
        kind: "cursorMove" as const,
        target: dropTarget,
        options: {
          mode: "drag" as const,
          intent: "drag" as const,
          speed: "slow" as const,
          ease: "power1.out",
          overshoot: false,
          settle: true,
          preserveMode: true,
          label: "drag-context-files",
        },
        at: "<",
      },
      { kind: "custom" as const, build: () => dropArea.activate(), at: "<+=0.02" },
      { kind: "custom" as const, build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }) },
      { kind: "custom" as const, build: () => dropArea.complete() },
      { kind: "custom" as const, build: () => cursorFile.releaseAtDrop(), at: "<" },
      { kind: "custom" as const, build: () => cursorFile.landAsUploadedFiles(files), at: "<" },
    );
  }

  for (const step of story.steps) {
    if (step === mailboxStep || step === uploadedFilesStep) continue;
    appendRuntimeStep(steps, story.id, step);
  }

  steps.push(exitStory(EXIT_TARGETS.bottomRight, "+=0.16"));
  return buildStorySteps(ctx, steps);
}

function buildEngagementStory(ctx: StoryContext, story: BuilderStory): gsap.core.Timeline {
  const promptStep = firstStep(story, "user");
  const tableStep = firstComponent(story, "table");
  const thinkingStep = firstStep(story, "thinking");
  const sequenceStep = firstComponent(story, "sequenceEngagement");
  const tableConfig = tableStep ? toDataTable(tableStep.component, "website-visitors-sales") : null;
  const sequenceConfig = sequenceStep ? toSequenceEngagement(sequenceStep.component, "visitor-outreach-sequences") : null;
  const steps: StoryStep[] = [];

  if (tableConfig) tableConfig.scrollAlign = "equal-inset";

  if (promptStep) {
    steps.push({
      kind: "prompt" as const,
      text: promptStep.text,
      duration: getTypingDuration(promptStep.text),
      sendLabel: "send-visitor-sales-list",
      statusBefore: "finding visitors",
      statusAfter: "building visitor list",
      fromEntry: true,
    });
  }

  if (tableConfig) {
    steps.push(
      { kind: "custom" as const, build: () => ctx.chat.dataTable(tableConfig), at: "-=0.02" },
      dataTableFooterPerusalStep("website-visitors-sales", VISITOR_TABLE_FOOTER_SCROLL_DURATION, "+=0.08", {
        align: "top",
        bottomClearance: VISITOR_TABLE_FOOTER_BOTTOM_CLEARANCE,
      }),
    );
  }

  if (tableConfig?.pagination && tableConfig.pagination.pages.length > 1) {
    const pageTwoTarget = responsiveElementTarget(
      '[data-data-table="website-visitors-sales"] [data-page-button-role="next"]',
      "center",
    );
    const outreachSequenceTarget = responsiveElementTarget(
      '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
      "center",
      {},
      false,
    );

    steps.push(
      {
        kind: "cursorMove" as const,
        target: pageTwoTarget,
        options: VISITOR_PAGINATION_CLICK_MOVE,
        at: `+=${VISITOR_PAGINATION_PRE_CLICK_HOLD}`,
      },
      { kind: "cursorClick" as const, at: "+=0.08" },
      { kind: "custom" as const, build: () => ctx.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.02" },
      { kind: "status" as const, text: "ready to engage", at: "+=0.1" },
      { kind: "custom" as const, build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }) },
      {
        kind: "cursorMove" as const,
        target: outreachSequenceTarget,
        options: OUTREACH_SEQUENCE_CURSOR_MOVE,
        at: "+=0.12",
      },
      { kind: "cursorClick" as const, at: "+=0.18" },
      { kind: "custom" as const, build: () => ctx.chat.dataTableActionSelected("website-visitors-sales", "email-sequence"), at: "<" },
      { kind: "status" as const, text: "building outreach sequence", at: "<" },
    );
  }

  if (thinkingStep) {
    steps.push(toThinkingStoryStep(thinkingStep, {
      hold: STORY_TIMING.thinkingMedium,
      at: "+=0.06",
      cursorMotion: false,
    }));
  }

  if (sequenceConfig) {
    const [sequenceSecondPersonIndex, sequenceThirdPersonIndex] = getPreviewSequenceIndexes(sequenceConfig, 2);
    const sequenceSecondPersonTarget = responsiveElementTarget(
      `[data-sequence-person-card="visitor-outreach-sequences:${sequenceSecondPersonIndex}"]`,
      "center",
    );
    const sequenceThirdPersonTarget = responsiveElementTarget(
      `[data-sequence-person-card="visitor-outreach-sequences:${sequenceThirdPersonIndex}"]`,
      "center",
    );
    const sequenceKickoffTarget = responsiveElementTarget(
      '[data-sequence-kickoff="visitor-outreach-sequences"]',
      "center",
    );

    steps.push(
      { kind: "custom" as const, build: () => ctx.chat.sequenceEngagement(sequenceConfig), at: "-=0.02" },
      { kind: "custom" as const, build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }), at: "+=0.04" },
      {
        kind: "custom" as const,
        build: () => ctx.chat.sequencePersonCardIntoView("visitor-outreach-sequences", sequenceSecondPersonIndex),
        at: "+=0.02",
      },
      {
        kind: "cursorMove" as const,
        target: sequenceSecondPersonTarget,
        options: { ...SEQUENCE_PERSON_PREVIEW_MOVE, label: "preview-second-sequence" },
        at: "+=0.02",
      },
      { kind: "cursorClick" as const, at: "+=0.08" },
      { kind: "custom" as const, build: () => ctx.chat.sequencePerson("visitor-outreach-sequences", sequenceSecondPersonIndex), at: "-=0.03" },
      { kind: "custom" as const, build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }), at: "+=0.04" },
      {
        kind: "custom" as const,
        build: () => ctx.chat.sequencePersonCardIntoView("visitor-outreach-sequences", sequenceThirdPersonIndex),
        at: "+=0.02",
      },
      {
        kind: "cursorMove" as const,
        target: sequenceThirdPersonTarget,
        options: { ...SEQUENCE_PERSON_PREVIEW_MOVE, label: "preview-third-sequence" },
        at: "+=0.02",
      },
      { kind: "cursorClick" as const, at: "+=0.08" },
      { kind: "custom" as const, build: () => ctx.chat.sequencePerson("visitor-outreach-sequences", sequenceThirdPersonIndex), at: "-=0.03" },
      { kind: "custom" as const, build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 0.28 }), at: "+=0.04" },
      ...sequenceStepClickSteps("visitor-outreach-sequences", [1, 2, 3], "+=0.22"),
      {
        kind: "cursorMove" as const,
        target: sequenceKickoffTarget,
        options: { ...SEQUENCE_KICKOFF_MOVE, label: "kickoff-visitor-sequence" },
      },
      { kind: "cursorClick" as const, at: "+=0.12" },
      { kind: "custom" as const, build: () => ctx.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.02" },
      { kind: "custom" as const, build: () => ctx.chat.enrollmentProgress({ total: 50 }), at: "+=0.08" },
    );
  }

  return buildStorySteps(ctx, steps);
}

function buildCsvCleanupStory(ctx: StoryContext, story: BuilderStory): gsap.core.Timeline {
  const fileStep = firstStep(story, "file");
  const thinkingStep = firstStep(story, "thinking");
  const assistantStep = firstStep(story, "assistant");
  const tableSteps = story.steps.filter((step): step is BuilderStep & { component: Extract<BuilderComponent, { kind: "table" }> } =>
    step.kind === "component" && step.component?.kind === "table",
  );
  const thinkingIndex = thinkingStep ? story.steps.indexOf(thinkingStep) : -1;
  const rawTableStep = tableSteps.find((step) => thinkingIndex >= 0 && story.steps.indexOf(step) < thinkingIndex);
  const cleanTableStep = [...tableSteps].reverse().find((step) => step !== rawTableStep);
  const fileName = fileStep?.text || "may_webinar_attendees.csv";
  const fileDetail = getCsvUploadDetail(fileStep, rawTableStep?.component ?? cleanTableStep?.component);
  const dropArea = ctx.chat.prepareCsvDropArea();
  const cursorFile = ctx.chat.prepareCursorFile(fileName, ctx.cursor);
  const dropTarget = responsiveElementTarget("[data-chat-shell]", "center", {
    desktop: { x: 0, y: 82 },
    tablet: { x: 0, y: 72 },
    mobile: { x: 0, y: 64 },
  });

  return buildStorySteps(ctx, [
    { kind: "status", text: "waiting for CSV" },
    { kind: "custom", build: () => cursorFile.startFollow(), at: `+=${STORY_TIMING.fileGrab}` },
    { kind: "custom", build: () => dropArea.revealWhenCursorEnters(ctx.cursor), at: "<" },
    {
      kind: "cursorMove",
      target: dropTarget,
      options: {
        mode: "drag",
        intent: "drag",
        speed: "slow",
        ease: "power1.out",
        overshoot: false,
        settle: true,
        preserveMode: true,
        label: "drag-webinar-csv",
      },
      at: "<",
    },
    { kind: "custom", build: () => dropArea.activate(), at: "<+=0.02" },
    { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }) },
    { kind: "custom", build: () => dropArea.complete() },
    { kind: "custom", build: () => cursorFile.releaseAtDrop(), at: "<" },
    {
      kind: "custom",
      build: () => cursorFile.landAsUploadedFile(fileName, fileDetail, { preserveScroll: true }),
      at: "<",
    },
    ...(rawTableStep ? [{
      kind: "dataTable" as const,
      config: { ...toDataTable(rawTableStep.component, "raw-webinar-attendees"), preserveScroll: true },
      at: `+=${STORY_TIMING.beat}`,
    }] : []),
    { kind: "status", text: "Cleaning CSV", at: "<" },
    ...(thinkingStep ? [toThinkingStoryStep(thinkingStep, {
      hold: 0.34,
      at: `+=${STORY_TIMING.beat}`,
    })] : []),
    ...(assistantStep ? [{ kind: "assistant" as const, text: assistantStep.text }] : []),
    ...(cleanTableStep ? [{ kind: "dataTable" as const, config: withCsvCleanTableScroll(toDataTable(cleanTableStep.component, "cleaned-webinar-attendees")), at: "-=0.04" }] : []),
    exitStory(EXIT_TARGETS.bottomRight, "+=0.18"),
  ]);
}

function getCsvUploadDetail(fileStep: BuilderStep | undefined, tableComponent: BuilderComponent | undefined): string {
  const tableSummary = getTableComponentSummary(tableComponent);
  if (tableSummary) return tableSummary;

  const note = fileStep?.note?.trim();
  if (!note || isInstructionalFileNote(note)) return "CSV uploaded";

  return note;
}

function getTableComponentSummary(component: BuilderComponent | undefined): string | null {
  if (!component || component.kind !== "table") return null;

  const count = component.count?.trim();
  if (count) return count;

  const rowCount = component.rows.length;
  if (rowCount <= 0) return null;

  return `${rowCount} ${rowCount === 1 ? "record" : "records"}`;
}

function isInstructionalFileNote(note: string): boolean {
  return /user-side message|after release|drop overlay|appears as/i.test(note);
}

function createGenericStorySteps(story: BuilderStory): StoryStep[] {
  const steps: StoryStep[] = [];
  const builderSteps = story.id === "data-marketplace"
    ? consolidateConsecutiveThinkingSteps(story.steps)
    : story.steps;
  let promptIndex = 0;

  for (const step of builderSteps) {
    promptIndex += step.kind === "user" ? 1 : 0;
    appendRuntimeStep(steps, story.id, step, promptIndex === 1);
  }

  return steps;
}

function consolidateConsecutiveThinkingSteps(steps: BuilderStep[]): BuilderStep[] {
  const consolidated: BuilderStep[] = [];
  let index = 0;

  while (index < steps.length) {
    const step = steps[index];

    if (step.kind !== "thinking") {
      consolidated.push(step);
      index += 1;
      continue;
    }

    const thinkingRun: BuilderStep[] = [];

    while (index < steps.length && steps[index].kind === "thinking") {
      thinkingRun.push(steps[index]);
      index += 1;
    }

    consolidated.push(thinkingRun.length > 1 ? mergeThinkingSteps(thinkingRun) : step);
  }

  return consolidated;
}

function mergeThinkingSteps(steps: BuilderStep[]): BuilderStep {
  const firstStep = steps[0];
  const items = steps.flatMap((step) => step.thinking?.items.length
    ? step.thinking.items
    : [{
        label: step.text || "Thinking",
        detail: step.note || "",
        disclosure: "",
      }]
  ).filter((item) => item.label.trim());
  const normalizedItems = items.map((item, index) => ({
    label: item.label,
    detail: item.detail,
    disclosure: item.disclosure || (index === 0 ? "Show more" : "Show less"),
  }));

  return {
    ...firstStep,
    text: normalizedItems[0]?.label || firstStep.text,
    note: normalizedItems[0]?.detail || firstStep.note,
    thinking: {
      title: firstStep.thinking?.title || "Thinking",
      elapsed: getThinkingElapsedLabel(normalizedItems.length),
      items: normalizedItems,
    },
  };
}

function appendRuntimeStep(
  steps: StoryStep[],
  storyId: string,
  step: BuilderStep,
  fromEntry = false,
): void {
  if (step.kind === "status" && step.text) {
    steps.push({ kind: "status", text: step.text });
    return;
  }

  if (step.kind === "user" && step.text) {
    steps.push({
      kind: "prompt",
      text: step.text,
      duration: getTypingDuration(step.text),
      sendLabel: `send-${slugId(storyId)}-${steps.length}`,
      fromEntry,
      statusAfter: step.note || undefined,
      at: fromEntry ? undefined : `+=${STORY_TIMING.beat}`,
    });
    return;
  }

  if (step.kind === "assistant" && step.text) {
    steps.push({ kind: "assistant", text: step.text, at: "+=0.08" });
    return;
  }

  if (step.kind === "thinking") {
    steps.push(toThinkingStoryStep(step, { hold: STORY_TIMING.thinkingMedium }));
    return;
  }

  if (step.kind === "file" && step.text) {
    steps.push({ kind: "custom", build: (ctx: StoryContext) => ctx.chat.uploadedFileMessage(step.text, step.note || "uploaded") });
    return;
  }

  if (step.kind !== "component" || !step.component) return;

  appendComponentRuntimeStep(steps, storyId, step as ComponentStep);
}

function appendComponentRuntimeStep(
  steps: StoryStep[],
  storyId: string,
  step: ComponentStep,
): void {
  const component = step.component;

  if (component.kind === "table") {
    const config = toDataTable(component, `${storyId}-${step.id}`);

    if (storyId === "data-marketplace") normalizeDataMarketplaceProspectTable(config);
    if (shouldEqualInsetRevealTable(storyId, step, config)) config.scrollAlign = "equal-inset";
    steps.push({ kind: "dataTable", config, at: "-=0.04" });
    return;
  }

  if (component.kind === "strategyCards") {
    steps.push({ kind: "strategyPlans", plans: toStrategyPlans(component), at: "-=0.04" });
    return;
  }

  if (component.kind === "enrichment") {
    steps.push({ kind: "enrichmentPanel", config: toEnrichment(component), at: "+=0.12" });
    return;
  }

  if (component.kind === "dataSources") {
    const config = toDataSources(component);
    steps.push({
      kind: storyId === "data-marketplace" ? "marketingDataSourcesGrid" : "dataSourcesGrid",
      config,
      at: storyId === "data-marketplace" ? "+=1.44" : "-=0.04",
    });
    return;
  }

  if (component.kind === "uploadedFiles") {
    steps.push({ kind: "custom", build: (ctx: StoryContext) => ctx.chat.uploadedFilesMessage(toUploadedFiles(component)), at: "-=0.04" });
    return;
  }

  if (component.kind === "mailboxConnection") {
    appendMailboxConnectionFlow(steps, toMailboxConnection(component));
    return;
  }

  if (component.kind === "styleProfile") {
    const config = toStyleProfile(component);

    steps.push({
      kind: "custom",
      build: (ctx: StoryContext) => ctx.chat.outreachStyleProfile(config, { scrollAlign: "equal-inset" }),
      at: "-=0.02",
    });
    if (storyId === "crm-update") steps.push(...styleProfilePerusalSteps(config.id));
    return;
  }

  if (component.kind === "proximityList") {
    steps.push({ kind: "custom", build: (ctx: StoryContext) => ctx.chat.proximityLeadList(toProximityList(component)), at: "-=0.04" });
    return;
  }

  if (component.kind === "personalizationSwipeGame") {
    steps.push({ kind: "personalizationSwipeGame", config: toPersonalizationSwipe(component), at: "+=0.06" });
    return;
  }

  if (component.kind === "sequenceEngagement") {
    steps.push({ kind: "sequenceEngagement", config: toSequenceEngagement(component, `${storyId}-${step.id}`), at: "-=0.02" });
    return;
  }

  steps.push({ kind: "assistant", text: [component.title, ...component.items].filter(Boolean).join("\n") });
}

function toThinkingStoryStep(
  step: BuilderStep,
  options: { hold?: number; preserveScroll?: boolean; cursorMotion?: boolean; at?: string | number } = {},
) {
  return {
    kind: "thinking" as const,
    thinking: toThinkingState(step.thinking, step.text, step.note),
    hold: options.hold,
    preserveScroll: options.preserveScroll,
    cursorMotion: options.cursorMotion,
    at: options.at,
  };
}

function toThinkingState(
  thinking: BuilderThinkingState | undefined,
  fallbackText: string,
  fallbackNote: string,
): ThinkingStateConfig {
  if (thinking?.items.length) {
    return {
      title: thinking.title,
      elapsed: thinking.elapsed,
      items: thinking.items.map((item) => ({
        label: item.label,
        detail: item.detail,
        disclosure: item.disclosure,
        duration: item.duration,
        toolCalls: item.toolCalls,
      })),
    };
  }

  return {
    items: [
      {
        label: fallbackText || "Thinking",
        detail: fallbackNote || undefined,
      },
    ],
  };
}

type BuilderTableShape = {
  columns: DataTableConfig["columns"];
  sourceIndexes: number[];
  foldedRoleIndex?: number;
  mutualConnectionKey?: string;
  connectorPersonKey?: string;
  variant?: DataTableConfig["variant"];
};

type DataTableColumn = DataTableConfig["columns"][number];
type DataTablePersonColumn = NonNullable<DataTableColumn["person"]>;

const CONNECTOR_PERSON_COLUMN: DataTablePersonColumn = {
  detailKey: "connectorDetail",
  avatarToneKey: "connectorAvatarTone",
  avatarUrlKey: "connectorAvatarUrl",
  avatarKey: "connectorAvatar",
  sourceKey: "connectorSource",
  companyKey: "connectorCompany",
};

const MUTUAL_CONNECTION_COMPANY_BY_NAME: Record<string, { title: string; company: string }> = {
  "dev singh": { title: "RevOps Lead @ Brex", company: "Brex" },
  "evan brooks": { title: "Growth Lead @ PayPal", company: "PayPal" },
  "jenna park": { title: "VP Marketing @ Square", company: "Square" },
  "marco liu": { title: "Partner @ Sequoia", company: "Sequoia" },
  "noah singh": { title: "Head of Sales @ Adyen", company: "Adyen" },
  "owen lee": { title: "Principal @ Sequoia", company: "Sequoia" },
  "priya shah": { title: "VP Sales @ Plaid", company: "Plaid" },
  "rachel cho": { title: "Head of Sales @ Stripe", company: "Stripe" },
  "sam hollis": { title: "VP Sales @ Waterfall", company: "Waterfall" },
};

function toDataTable(component: BuilderTableComponent, fallbackId: string): DataTableConfig {
  const shape = getBuilderTableShape(component, fallbackId);
  const rows = component.rows
    .filter((row) => row.some((cell) => cell.trim()))
    .map((row, rowIndex) => toDataTableRow(row, shape, rowIndex));
  const paginationRanges = getPaginationRanges(component.pagination);
  const pageSize = normalizePageSize(component.pagination?.pageSize) ??
    inferPageSizeFromRanges(paginationRanges) ??
    Math.min(10, rows.length || 10);
  const pages = paginationRanges.map((range, pageIndex) => ({
    page: pageIndex + 1,
    range,
    rows: getRowsForPaginationRange(rows, range, pageIndex, pageSize),
  })).filter((page) => page.rows.length);

  return {
    id: fallbackId === "website-visitors-sales" ? fallbackId : slugId(component.title || fallbackId),
    title: component.title,
    eyebrow: component.eyebrow,
    count: component.count,
    variant: shape.variant ?? inferTableVariant(component),
    footerClearance: getTableFooterClearance(fallbackId),
    columns: shape.columns,
    rows: pages[0]?.rows ?? rows,
    actions: component.actions?.map(toDataTableAction),
    pagination: pages.length > 1
      ? {
          pageSize,
          totalRows: inferTotalRows(component, rows.length),
          activePage: 1,
          pages,
        }
      : undefined,
  };
}

function withCsvCleanTableScroll(config: DataTableConfig): DataTableConfig {
  return {
    ...config,
    scrollAnchor: "previous-message",
  };
}

function normalizeDataMarketplaceProspectTable(config: DataTableConfig): void {
  config.rows.forEach((row) => normalizeDataMarketplaceProspectValues(row.values));
  config.pagination?.pages.forEach((page) => {
    page.rows.forEach((row) => normalizeDataMarketplaceProspectValues(row.values));
  });
}

function normalizeDataMarketplaceProspectValues(values: Record<string, string>): void {
  if (values.name && "company" in values) values.company = DATA_MARKETPLACE_PROSPECT_COMPANY;
  if (values.prospectDetail) values.prospectDetail = normalizeProspectDetailToDataMarketplaceProspect(values.prospectDetail);
  if (values.connector && !values.connectorDetail) values.connector = normalizeConnectorLabel(values.connector);
}

function normalizeProspectDetailToDataMarketplaceProspect(detail: string): string {
  const cleanDetail = detail.trim();

  if (!cleanDetail) return "";

  if (/(?:@|\bat\s+)[A-Z][A-Za-z0-9& .-]+(?:\s*\([^()]*\))?$/i.test(cleanDetail)) {
    return cleanDetail.replace(
      /(?:@|\bat\s+)([A-Z][A-Za-z0-9& .-]+?)(\s*\([^()]*\))?$/i,
      (_match, _company, suffix = "") => `at ${DATA_MARKETPLACE_PROSPECT_COMPANY}${formatTrailingParenthetical(suffix)}`,
    );
  }

  if (/,\s*[A-Z][A-Za-z0-9& .-]+(?:\s*\([^()]*\))?$/.test(cleanDetail)) {
    return cleanDetail.replace(
      /,\s*([A-Z][A-Za-z0-9& .-]+?)(\s*\([^()]*\))?$/,
      (_match, _company, suffix = "") => `, ${DATA_MARKETPLACE_PROSPECT_COMPANY}${formatTrailingParenthetical(suffix)}`,
    );
  }

  return new RegExp(DATA_MARKETPLACE_PROSPECT_COMPANY, "i").test(cleanDetail)
    ? cleanDetail
    : `${cleanDetail} at ${DATA_MARKETPLACE_PROSPECT_COMPANY}`;
}

function formatTrailingParenthetical(value: string): string {
  const suffix = value.trim();

  return suffix ? ` ${suffix}` : "";
}

function normalizeConnectorLabel(value: string): string {
  const parsed = parseMutualConnection(value);

  if (!parsed.name || !parsed.title) return value;

  return `${parsed.name} (${parsed.title})${parsed.context ? ` — ${parsed.context}` : ""}`;
}

function getPaginationRanges(pagination: BuilderTableComponent["pagination"]): string[] {
  return normalizePaginationRanges(pagination?.ranges);
}

function shouldEqualInsetRevealTable(
  storyId: string,
  step: ComponentStep,
  config: DataTableConfig,
): boolean {
  if (storyId !== "data-marketplace") return false;

  const titleSlug = slugId(config.title);

  return (
    step.id === "data-marketplace-step-3" ||
    step.id === "data-marketplace-step-6" ||
    titleSlug === "best-connections-into-stripe" ||
    titleSlug === "best-connections-into-vercel" ||
    titleSlug === "new-hires-at-dev-tool-companies" ||
    titleSlug === "raised-in-the-past-three-months" ||
    titleSlug === "warmest-paths-into-vercel-active-in-past-90-days" ||
    titleSlug === "warmest-paths-into-stripe-active-in-past-90-days"
  );
}

function getBuilderTableShape(component: BuilderTableComponent, fallbackId: string): BuilderTableShape {
  const labels = component.columns;
  const nameIndex = labels.findIndex((label) => label.trim().toLowerCase() === "name");
  const roleIndex = nameIndex >= 0
    ? labels.findIndex((label, index) => index > nameIndex && /^role\b/i.test(label.trim()))
    : -1;
  const foldsRoleIntoName = nameIndex >= 0 && roleIndex >= 0;
  const cleanedDetailIndex = isCleanedWebinarTable(fallbackId)
    ? labels.findIndex((label) => label.trim().toLowerCase() === "title")
    : -1;
  const foldedDetailIndex = foldsRoleIntoName
    ? roleIndex
    : cleanedDetailIndex >= 0
      ? cleanedDetailIndex
      : undefined;
  const sourceIndexes = labels
    .map((_label, index) => index)
    .filter((index) => index !== roleIndex && index !== cleanedDetailIndex);
  const columns = sourceIndexes.map((sourceIndex) => {
    const label = labels[sourceIndex] || `Column ${sourceIndex + 1}`;

    if (foldsRoleIntoName && sourceIndex === nameIndex) {
      return {
        key: "name",
        label: "Prospect",
        width: TABLE_COLUMN_WIDTHS.foldedName,
        cellType: "person" as const,
      };
    }

    if (foldsRoleIntoName && /^via\s+connector\b/i.test(label.trim())) {
      return {
        key: "mutualConnection",
        label: "Best connection",
        width: "minmax(0,1.3fr)",
        cellType: "mutualConnection" as const,
      };
    }

    const override = getTableColumnOverride(fallbackId, label);
    const key = override.key ?? slugId(label || `column-${sourceIndex + 1}`);

    return {
      key,
      label,
      width: override.width ?? getBuilderTableColumnWidth(label, foldsRoleIntoName),
      cellType: override.cellType ?? getDefaultTableColumnCellType(fallbackId, label, key),
      person: override.person,
    };
  });

  return {
    columns,
    sourceIndexes,
    foldedRoleIndex: foldedDetailIndex,
    mutualConnectionKey: columns.some((column) => column.key === "mutualConnection") ? "mutualConnection" : undefined,
    connectorPersonKey: columns.some((column) => column.key === "connector" && column.cellType === "person") ? "connector" : undefined,
    variant: columns.some((column) => column.key === "mutualConnection") ? "connections" : undefined,
  };
}

function getBuilderTableColumnWidth(label: string, foldsRoleIntoName: boolean): string | undefined {
  const normalized = label.toLowerCase();

  if (foldsRoleIntoName) {
    if (normalized.includes("connector") || normalized.includes("connection")) return TABLE_COLUMN_WIDTHS.foldedConnector;
    if (normalized.includes("email")) return TABLE_COLUMN_WIDTHS.foldedEmail;
    if (normalized.includes("mobile")) return TABLE_COLUMN_WIDTHS.foldedMobile;
    return TABLE_COLUMN_WIDTHS.foldedDefault;
  }

  if (normalized === "email" || normalized === "work email") return TABLE_COLUMN_WIDTHS.emailContent;
  return undefined;
}

function getTableColumnOverride(fallbackId: string, label: string): Partial<DataTableColumn> {
  const normalized = label.trim().toLowerCase();

  if (fallbackId === "raw-webinar-attendees") {
    if (normalized === "name") return { width: TABLE_COLUMN_WIDTHS.rawName, cellType: "text" };
    if (normalized === "email") return { width: TABLE_COLUMN_WIDTHS.rawEmail };
    if (normalized === "company") return { width: TABLE_COLUMN_WIDTHS.rawCompany };
  }

  if (isCleanedWebinarTable(fallbackId)) {
    if (normalized === "full name") return { key: "fullName", width: TABLE_COLUMN_WIDTHS.cleanName, cellType: "person" };
    if (normalized === "work email") return { width: TABLE_COLUMN_WIDTHS.cleanEmail };
    if (normalized === "company") return { width: TABLE_COLUMN_WIDTHS.cleanCompany };
  }

  if (normalized === "connector") {
    return {
      key: "connector",
      width: TABLE_COLUMN_WIDTHS.foldedConnector,
      cellType: "person",
      person: CONNECTOR_PERSON_COLUMN,
    };
  }

  return {};
}

function getDefaultTableColumnCellType(
  fallbackId: string,
  label: string,
  key: string,
): DataTableColumn["cellType"] {
  const normalized = label.trim().toLowerCase();

  if (fallbackId === "raw-webinar-attendees") return undefined;
  if (key === "name" || key === "contact" || key === "fullName") return "person";
  if (normalized === "name" || normalized === "prospect" || normalized === "contact" || normalized === "full name") return "person";
  return undefined;
}

function getTableFooterClearance(fallbackId: string): number | undefined {
  return fallbackId === "website-visitors-sales" ? 28 : undefined;
}

function isCleanedWebinarTable(fallbackId: string): boolean {
  return fallbackId === "cleaned-webinar-attendees" || fallbackId === "clean-webinar-attendees";
}

function toDataTableRow(
  row: string[],
  shape: BuilderTableShape,
  rowIndex: number,
): DataTableConfig["rows"][number] {
  const values: Record<string, string> = {};

  shape.columns.forEach((column, columnIndex) => {
    values[column.key] = row[shape.sourceIndexes[columnIndex]] ?? "";
  });
  if (shape.foldedRoleIndex !== undefined) values.prospectDetail = row[shape.foldedRoleIndex] ?? "";

  if (shape.mutualConnectionKey) {
    const parsed = parseMutualConnection(values[shape.mutualConnectionKey] ?? "");
    const relationshipSource = getMutualConnectionSourceBadge(parsed.context);

    values[shape.mutualConnectionKey] = parsed.name;
    values.mutualConnectionDetail = parsed.title;
    values.mutualConnectionContext = parsed.context;
    values.mutualConnectionCompany = parsed.company;
    if (parsed.name && relationshipSource) values.mutualConnectionBadge = relationshipSource;
  }

  if (shape.connectorPersonKey) {
    const parsed = parseMutualConnection(values[shape.connectorPersonKey] ?? "");

    values[shape.connectorPersonKey] = parsed.name;
    values.connectorDetail = parsed.title;
    values.connectorCompany = parsed.company;
  }

  return {
    id: `${slugId(row[0] || "row")}-${rowIndex + 1}`,
    values,
  };
}

function getMutualConnectionSourceBadge(context: string): string | null {
  const source = context.trim();

  return source || null;
}

function parseMutualConnection(value: string): { name: string; title: string; context: string; company: string } {
  const [personPart = "", context = ""] = value.split(/\s+[—–]\s+/, 2);
  const match = personPart.trim().match(/^(.+?)(?:\s*\((.+)\))?$/);
  const name = match?.[1]?.trim() || value.trim();
  const contextText = context.trim();
  const normalized = MUTUAL_CONNECTION_COMPANY_BY_NAME[slugId(name).replace(/-/g, " ")];
  const title = normalizeMutualConnectionTitle(match?.[2]?.trim() || "", normalized, contextText);

  return {
    name,
    title: title.title,
    context: contextText,
    company: title.company,
  };
}

function normalizeMutualConnectionTitle(
  sourceTitle: string,
  normalized: { title: string; company: string } | undefined,
  context: string,
): { title: string; company: string } {
  const inferredCompany = inferConnectionCompany(context);
  const inferredCompanyIsWorkplace = inferredCompany && !/^(?:Stanford GSB|Wharton)$/i.test(inferredCompany);

  if (sourceTitle && inferredCompanyIsWorkplace && /\bUnify\b/i.test(sourceTitle)) {
    return {
      title: sourceTitle.replace(/\bUnify\b/g, inferredCompany),
      company: inferredCompany,
    };
  }
  if (normalized && (!sourceTitle || /\bUnify\b/i.test(sourceTitle))) return normalized;
  if (sourceTitle) {
    return {
      title: sourceTitle,
      company: inferConnectionCompany(sourceTitle) || inferredCompany || "",
    };
  }

  return {
    title: normalized?.title ?? (inferredCompany ? `Warm intro @ ${inferredCompany}` : ""),
    company: normalized?.company ?? inferredCompany,
  };
}

function inferConnectionCompany(text: string): string {
  const normalized = text.trim();

  if (!normalized) return "";

  const directMatch = normalized.match(/(?:@|\bat\s+|Both at |Shared investor:\s*)([A-Z][A-Za-z0-9& .-]+?)(?:\s*\(|$)/);

  if (directMatch?.[1]) return directMatch[1].trim();
  if (/Wharton/i.test(normalized)) return "Wharton";
  if (/Stanford/i.test(normalized)) return "Stanford GSB";

  return "";
}

function toDataTableAction(action: NonNullable<BuilderTableComponent["actions"]>[number]): NonNullable<DataTableConfig["actions"]>[number] {
  const id = action.label.toLowerCase().includes("dial") ? "power-dialer" : "email-sequence";

  return {
    id,
    label: id === "power-dialer" ? "Power dial" : "Outreach sequence",
    icon: id === "power-dialer" ? "dialer" : "email",
    badge: action.badge || undefined,
  };
}

function toStrategyPlans(component: Extract<BuilderComponent, { kind: "strategyCards" }>): StrategyPlanConfig[] {
  return component.cards.map((card, index) => ({
    id: slugId(card.label || card.title || `strategy-${index + 1}`),
    label: card.label,
    title: card.title,
    summary: card.summary,
    bullets: card.summary.split(/\n+/).map((item) => item.trim()).filter(Boolean),
  }));
}

function toEnrichment(component: BuilderEnrichmentComponent): EnrichmentConfig {
  return {
    id: slugId(component.title || "enrichment"),
    title: component.title,
    subtitle: component.subtitle,
    modeLabel: "Balanced",
    fields: component.fields,
  };
}

function toDataSources(component: Extract<BuilderComponent, { kind: "dataSources" }>): DataSourceGridConfig {
  return {
    id: slugId(component.title || "data-sources"),
    title: component.title,
    subtitle: component.subtitle,
    sources: component.sources.map((source, index) => ({
      id: slugId(source.name || `source-${index + 1}`),
      category: source.category,
      name: source.name,
      detail: source.detail,
      logoSrc: source.logoSrc,
    })),
  };
}

function toUploadedFiles(component: BuilderUploadedFilesComponent): UploadedFileConfig[] {
  return component.files.map((file) => ({
    name: file.name,
    detail: file.detail,
    type: file.type,
  }));
}

function toMailboxConnection(component: BuilderMailboxConnectionComponent): MailboxConnectionConfig {
  return {
    id: slugId(component.title || "mailbox-connection"),
    title: component.title,
    subtitle: component.subtitle,
    provider: component.provider,
    account: component.account,
    status: component.status,
    ctaLabel: component.ctaLabel,
    secondaryCtaLabel: component.secondaryCtaLabel,
    loadingLabel: component.loadingLabel,
    learningTitle: component.learningTitle,
    learningDetail: component.learningDetail,
    learningReadyDetail: component.learningReadyDetail,
    signals: component.signals,
  };
}

function appendMailboxConnectionFlow(steps: StoryStep[], config: MailboxConnectionConfig): void {
  steps.push(...mailboxConnectionSteps(config));
}

function toStyleProfile(component: Extract<BuilderComponent, { kind: "styleProfile" }>): OutreachStyleProfileConfig {
  return {
    id: slugId(component.title || "style-profile"),
    title: component.title,
    subtitle: component.subtitle,
    signals: component.signals,
    examples: component.examples,
  };
}

function toProximityList(component: Extract<BuilderComponent, { kind: "proximityList" }>): ProximityLeadListConfig {
  return {
    id: slugId(component.title || "proximity-list"),
    title: component.title,
    subtitle: component.subtitle,
    leads: component.leads,
  };
}

function toPersonalizationSwipe(component: Extract<BuilderComponent, { kind: "personalizationSwipeGame" }>): PersonalizationSwipeGameConfig {
  return {
    id: slugId(component.title || "personalization-swipe"),
    title: component.title,
    subtitle: component.subtitle,
    prompt: component.prompt,
    labels: { avoid: "avoid", use: "use" },
    completeLabel: "personalization rules learned",
    signals: component.signals.map((signal, index) => ({
      id: slugId(signal.label || `signal-${index + 1}`),
      label: signal.label,
      detail: signal.detail,
      decision: signal.decision,
    })),
  };
}

function toSequenceEngagement(
  component: BuilderSequenceEngagementComponent,
  fallbackId: string,
): SequenceEngagementConfig {
  return {
    id: fallbackId,
    title: component.title,
    subtitle: component.subtitle,
    peopleCount: component.peopleCount,
    launchLabel: component.launchLabel,
    sequences: component.sequences.map((sequence) => ({
      ...sequence,
      steps: sequence.steps?.map((step) => ({
        ...step,
        waitDays: step.waitDays ? Number(step.waitDays) : undefined,
      })),
    })),
    channels: component.channels.map((channel) => ({
      label: channel.label,
      detail: channel.detail,
      badge: channel.badge || undefined,
    })),
  };
}

function firstStep(story: BuilderStory, kind: BuilderStep["kind"]): BuilderStep | undefined {
  return story.steps.find((step) => step.kind === kind);
}

function firstComponent<K extends BuilderComponent["kind"]>(
  story: BuilderStory,
  kind: K,
): (BuilderStep & { component: Extract<BuilderComponent, { kind: K }> }) | undefined {
  return story.steps.find((step): step is BuilderStep & { component: Extract<BuilderComponent, { kind: K }> } =>
    step.kind === "component" && step.component?.kind === kind
  );
}

function getTypingDuration(text: string): number {
  if (text.length > 72) return STORY_TIMING.typeLong;
  if (text.length > 38) return STORY_TIMING.typeMedium;
  return STORY_TIMING.typeShort;
}

function inferTableVariant(component: BuilderTableComponent): DataTableConfig["variant"] {
  const text = `${component.title} ${component.eyebrow ?? ""}`.toLowerCase();
  if (text.includes("enrich")) return "enriched";
  if (text.includes("filter") || text.includes("raised")) return "filtered";
  return undefined;
}

function inferTotalRows(component: BuilderTableComponent, fallback: number): number {
  const ranges = getPaginationRanges(component.pagination);
  const lastRange = ranges[ranges.length - 1];
  return parsePaginationRange(lastRange)?.total ?? fallback;
}

function slugId(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
}
