import {
  DEFAULT_THINKING_COLLAPSED_DISCLOSURE,
  DEFAULT_THINKING_DISCLOSURE,
  DEFAULT_THINKING_TITLE,
  getDefaultThinkingDetail,
  getThinkingElapsedLabel,
} from "../stories/thinkingText";

export type BuilderStepKind =
  | "user"
  | "assistant"
  | "thinking"
  | "component"
  | "cursor"
  | "status"
  | "file";

export type BuilderTableComponent = {
  kind: "table";
  title: string;
  eyebrow?: string;
  count?: string;
  columns: string[];
  rows: string[][];
  actions?: Array<{
    label: string;
    badge: string;
  }>;
  pagination?: {
    pageSize?: number;
    ranges: string[];
  };
};

export type BuilderStrategyComponent = {
  kind: "strategyCards";
  title: string;
  cards: Array<{
    label: string;
    title: string;
    summary: string;
  }>;
};

export type BuilderEnrichmentComponent = {
  kind: "enrichment";
  title: string;
  subtitle: string;
  fields: Array<{
    title: string;
    steps: string[];
  }>;
};

export type BuilderDataSourcesComponent = {
  kind: "dataSources";
  title: string;
  subtitle: string;
  sources: Array<{
    category?: string;
    name: string;
    detail: string;
    logoSrc?: string;
  }>;
};

export type BuilderUploadedFilesComponent = {
  kind: "uploadedFiles";
  title: string;
  files: Array<{
    name: string;
    detail: string;
    type: string;
  }>;
};

export type BuilderMailboxConnectionComponent = {
  kind: "mailboxConnection";
  title: string;
  subtitle: string;
  provider: string;
  account: string;
  status: string;
  ctaLabel: string;
  secondaryCtaLabel?: string;
  loadingLabel: string;
  learningTitle: string;
  learningDetail: string;
  learningReadyDetail?: string;
  signals: string[];
};

export type BuilderStyleProfileComponent = {
  kind: "styleProfile";
  title: string;
  subtitle: string;
  signals: Array<{
    label: string;
    value: string;
  }>;
  examples: string[];
};

export type BuilderProximityListComponent = {
  kind: "proximityList";
  title: string;
  subtitle: string;
  leads: Array<{
    rank: string;
    name: string;
    company: string;
    title: string;
    proximity: string;
    personalization: string;
    score: string;
    avatarUrl?: string;
  }>;
};

export type BuilderPersonalizationSwipeComponent = {
  kind: "personalizationSwipeGame";
  title: string;
  subtitle: string;
  prompt: string;
  signals: Array<{
    label: string;
    detail: string;
    decision: "use" | "avoid";
  }>;
};

export type BuilderSequenceEngagementComponent = {
  kind: "sequenceEngagement";
  title: string;
  subtitle: string;
  peopleCount: string;
  launchLabel?: string;
  sequences: Array<{
    name: string;
    company: string;
    title?: string;
    signal?: string;
    avatarUrl?: string;
    subject: string;
    personalization: string;
    steps?: Array<{
      channel: string;
      label: string;
      body: string;
      waitDays?: string;
    }>;
  }>;
  channels: Array<{
    label: string;
    detail: string;
    badge: string;
  }>;
};

export type BuilderGenericComponent = {
  kind: "generic";
  title: string;
  items: string[];
};

export type BuilderComponent =
  | BuilderTableComponent
  | BuilderStrategyComponent
  | BuilderEnrichmentComponent
  | BuilderDataSourcesComponent
  | BuilderUploadedFilesComponent
  | BuilderMailboxConnectionComponent
  | BuilderStyleProfileComponent
  | BuilderProximityListComponent
  | BuilderPersonalizationSwipeComponent
  | BuilderSequenceEngagementComponent
  | BuilderGenericComponent;

export type BuilderThinkingState = {
  title: string;
  elapsed: string;
  items: Array<{
    label: string;
    detail: string;
    disclosure: string;
  }>;
};

export type BuilderStep = {
  id: string;
  kind: BuilderStepKind;
  text: string;
  note: string;
  component?: BuilderComponent;
  thinking?: BuilderThinkingState;
};

export type BuilderStory = {
  id: string;
  label: string;
  summary: string;
  steps: BuilderStep[];
};

export const BUILDER_DRAFT_SCHEMA_VERSION = 3;

const BUILDER_STEP_KINDS = new Set<BuilderStepKind>([
  "user",
  "assistant",
  "thinking",
  "component",
  "cursor",
  "status",
  "file",
]);

export function normalizeBuilderDraftPayload(payload: unknown): { schemaVersion: number; stories: BuilderStory[] } | null {
  if (!isRecord(payload) || !Array.isArray(payload.stories)) return null;

  const schemaVersion = typeof payload.schemaVersion === "number" ? payload.schemaVersion : 1;
  const stories = payload.stories
    .map((story) => normalizeBuilderStory(story))
    .filter((story): story is BuilderStory => Boolean(story));

  return stories.length ? { schemaVersion, stories } : null;
}

export function isBuilderStepKind(value: string): value is BuilderStepKind {
  return BUILDER_STEP_KINDS.has(value as BuilderStepKind);
}

export function clonePlainObject<T>(value: T): T {
  return typeof structuredClone === "function"
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value)) as T;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function normalizeBuilderStory(story: unknown): BuilderStory | null {
  if (!isRecord(story) || !Array.isArray(story.steps)) return null;

  const id = toStringValue(story.id);
  const label = toStringValue(story.label);
  const summary = toStringValue(story.summary);
  const steps = story.steps
    .map((step) => normalizeBuilderStep(step))
    .filter((step): step is BuilderStep => Boolean(step));

  if (!id || !label || !steps.length) return null;

  return {
    id,
    label,
    summary: summary ?? "",
    steps,
  };
}

function normalizeBuilderStep(step: unknown): BuilderStep | null {
  if (!isRecord(step)) return null;

  const id = toStringValue(step.id);
  const kind = toStringValue(step.kind);
  const text = toStringValue(step.text);
  const note = toStringValue(step.note);

  if (!id || !kind || !isBuilderStepKind(kind)) return null;

  return {
    id,
    kind,
    text: text ?? "",
    note: note ?? "",
    thinking: isRecord(step.thinking)
      ? normalizeThinkingState(step.thinking, text ?? "", note ?? "")
      : kind === "thinking"
        ? createThinkingState(text ?? "", note ?? "")
        : undefined,
    component: isRecord(step.component) ? clonePlainObject(step.component as BuilderComponent) : undefined,
  };
}

function normalizeThinkingState(value: Record<string, unknown>, fallbackText: string, fallbackNote: string): BuilderThinkingState {
  const rawItems = Array.isArray(value.items) ? value.items : [];
  const items = rawItems
    .map((item, index) => normalizeThinkingItem(item, index))
    .filter((item): item is BuilderThinkingState["items"][number] => Boolean(item));

  if (!items.length) return createThinkingState(fallbackText, fallbackNote);

  return {
    title: toStringValue(value.title) ?? DEFAULT_THINKING_TITLE,
    elapsed: toStringValue(value.elapsed) ?? getThinkingElapsedLabel(items.length),
    items,
  };
}

function normalizeThinkingItem(item: unknown, index: number): BuilderThinkingState["items"][number] | null {
  if (!isRecord(item)) return null;

  const label = toStringValue(item.label);
  if (!label) return null;

  return {
    label,
    detail: toStringValue(item.detail) ?? getDefaultThinkingDetail(label, index),
    disclosure:
      toStringValue(item.disclosure) ??
      (index === 0 ? DEFAULT_THINKING_DISCLOSURE : DEFAULT_THINKING_COLLAPSED_DISCLOSURE),
  };
}

function createThinkingState(text: string, note = ""): BuilderThinkingState {
  return {
    title: DEFAULT_THINKING_TITLE,
    elapsed: getThinkingElapsedLabel(1),
    items: [
      {
        label: text || "Thinking",
        detail: note || getDefaultThinkingDetail(text || "Thinking", 0),
        disclosure: DEFAULT_THINKING_DISCLOSURE,
      },
    ],
  };
}

function toStringValue(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}
