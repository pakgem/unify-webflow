import {
  DEFAULT_THINKING_COLLAPSED_DISCLOSURE,
  DEFAULT_THINKING_DISCLOSURE,
  DEFAULT_THINKING_TITLE,
  getDefaultThinkingDetail,
  getThinkingElapsedLabel,
} from "../stories/thinkingText";
import {
  normalizePageSize,
  normalizePaginationRanges,
} from "./pagination";

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
    duration?: number;
    toolCalls?: Array<{
      label: string;
      vendor?: string;
    }>;
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
    component: normalizeBuilderComponent(step.component),
  };
}

function normalizeBuilderComponent(component: unknown): BuilderComponent | undefined {
  if (!isRecord(component)) return undefined;

  const kind = toStringValue(component.kind);

  switch (kind) {
    case "table":
      return normalizeTableComponent(component);
    case "strategyCards":
      return normalizeStrategyComponent(component);
    case "enrichment":
      return normalizeEnrichmentComponent(component);
    case "dataSources":
      return normalizeDataSourcesComponent(component);
    case "uploadedFiles":
      return normalizeUploadedFilesComponent(component);
    case "mailboxConnection":
      return normalizeMailboxConnectionComponent(component);
    case "styleProfile":
      return normalizeStyleProfileComponent(component);
    case "proximityList":
      return normalizeProximityListComponent(component);
    case "personalizationSwipeGame":
      return normalizePersonalizationSwipeComponent(component);
    case "sequenceEngagement":
      return normalizeSequenceEngagementComponent(component);
    case "generic":
      return {
        kind,
        title: toStringValue(component.title) ?? "Items",
        items: toStringArray(component.items),
      };
    default:
      return undefined;
  }
}

function normalizeTableComponent(component: Record<string, unknown>): BuilderTableComponent | undefined {
  const columns = toStringArray(component.columns);
  const rows = toStringMatrix(component.rows);

  if (!columns.length || !rows.length) return undefined;

  const pagination = normalizeTablePagination(component.pagination);
  const actions = toRecordArray(component.actions, (action) => {
    const label = toStringValue(action.label);

    return label
      ? {
          label,
          badge: toStringValue(action.badge) ?? "",
        }
      : null;
  });

  return {
    kind: "table",
    title: toStringValue(component.title) ?? "Table",
    ...optionalStringProperty("eyebrow", component.eyebrow),
    ...optionalStringProperty("count", component.count),
    columns,
    rows,
    ...(actions.length ? { actions } : {}),
    ...(pagination ? { pagination } : {}),
  };
}

function normalizeTablePagination(value: unknown): BuilderTableComponent["pagination"] | undefined {
  if (!isRecord(value)) return undefined;

  const ranges = normalizePaginationRanges(value.ranges);
  const pageSize = normalizePageSize(value.pageSize) ?? undefined;

  return ranges.length
    ? {
        ...(pageSize ? { pageSize } : {}),
        ranges,
      }
    : undefined;
}

function normalizeStrategyComponent(component: Record<string, unknown>): BuilderStrategyComponent {
  return {
    kind: "strategyCards",
    title: toStringValue(component.title) ?? "Strategy",
    cards: toRecordArray(component.cards, (card) => ({
      label: toStringValue(card.label) ?? "",
      title: toStringValue(card.title) ?? "",
      summary: toStringValue(card.summary) ?? "",
    })).filter((card) => card.title || card.summary),
  };
}

function normalizeEnrichmentComponent(component: Record<string, unknown>): BuilderEnrichmentComponent {
  return {
    kind: "enrichment",
    title: toStringValue(component.title) ?? "Enriching",
    subtitle: toStringValue(component.subtitle) ?? "",
    fields: toRecordArray(component.fields, (field) => {
      const title = toStringValue(field.title);
      const steps = toStringArray(field.steps);

      return title && steps.length ? { title, steps } : null;
    }),
  };
}

function normalizeDataSourcesComponent(component: Record<string, unknown>): BuilderDataSourcesComponent {
  return {
    kind: "dataSources",
    title: toStringValue(component.title) ?? "Data sources",
    subtitle: toStringValue(component.subtitle) ?? "",
    sources: toRecordArray(component.sources, (source) => {
      const name = toStringValue(source.name);

      return name
        ? {
            ...optionalStringProperty("category", source.category),
            name,
            detail: toStringValue(source.detail) ?? "",
            ...optionalStringProperty("logoSrc", source.logoSrc),
          }
        : null;
    }),
  };
}

function normalizeUploadedFilesComponent(component: Record<string, unknown>): BuilderUploadedFilesComponent {
  return {
    kind: "uploadedFiles",
    title: toStringValue(component.title) ?? "Files",
    files: toRecordArray(component.files, (file) => {
      const name = toStringValue(file.name);

      return name
        ? {
            name,
            detail: toStringValue(file.detail) ?? "",
            type: toStringValue(file.type) ?? "",
          }
        : null;
    }),
  };
}

function normalizeMailboxConnectionComponent(component: Record<string, unknown>): BuilderMailboxConnectionComponent {
  return {
    kind: "mailboxConnection",
    title: toStringValue(component.title) ?? "Connect mailbox",
    subtitle: toStringValue(component.subtitle) ?? "",
    provider: toStringValue(component.provider) ?? "gmail",
    account: toStringValue(component.account) ?? "",
    status: toStringValue(component.status) ?? "",
    ctaLabel: toStringValue(component.ctaLabel) ?? "Connect",
    ...optionalStringProperty("secondaryCtaLabel", component.secondaryCtaLabel),
    loadingLabel: toStringValue(component.loadingLabel) ?? "connecting",
    learningTitle: toStringValue(component.learningTitle) ?? "Learning your style",
    learningDetail: toStringValue(component.learningDetail) ?? "",
    ...optionalStringProperty("learningReadyDetail", component.learningReadyDetail),
    signals: toStringArray(component.signals),
  };
}

function normalizeStyleProfileComponent(component: Record<string, unknown>): BuilderStyleProfileComponent {
  return {
    kind: "styleProfile",
    title: toStringValue(component.title) ?? "Profile",
    subtitle: toStringValue(component.subtitle) ?? "",
    signals: toRecordArray(component.signals, (signal) => {
      const label = toStringValue(signal.label);

      return label
        ? {
            label,
            value: toStringValue(signal.value) ?? "",
          }
        : null;
    }),
    examples: toStringArray(component.examples),
  };
}

function normalizeProximityListComponent(component: Record<string, unknown>): BuilderProximityListComponent {
  return {
    kind: "proximityList",
    title: toStringValue(component.title) ?? "Leads",
    subtitle: toStringValue(component.subtitle) ?? "",
    leads: toRecordArray(component.leads, (lead) => {
      const name = toStringValue(lead.name);

      return name
        ? {
            rank: toStringValue(lead.rank) ?? "",
            name,
            company: toStringValue(lead.company) ?? "",
            title: toStringValue(lead.title) ?? "",
            proximity: toStringValue(lead.proximity) ?? "",
            personalization: toStringValue(lead.personalization) ?? "",
            score: toStringValue(lead.score) ?? "",
            ...optionalStringProperty("avatarUrl", lead.avatarUrl),
          }
        : null;
    }),
  };
}

function normalizePersonalizationSwipeComponent(component: Record<string, unknown>): BuilderPersonalizationSwipeComponent {
  return {
    kind: "personalizationSwipeGame",
    title: toStringValue(component.title) ?? "Personalization",
    subtitle: toStringValue(component.subtitle) ?? "",
    prompt: toStringValue(component.prompt) ?? "",
    signals: toRecordArray(component.signals, (signal) => {
      const label = toStringValue(signal.label);

      return label
        ? {
            label,
            detail: toStringValue(signal.detail) ?? "",
            decision: toStringValue(signal.decision) === "avoid" ? "avoid" : "use",
          }
        : null;
    }),
  };
}

function normalizeSequenceEngagementComponent(component: Record<string, unknown>): BuilderSequenceEngagementComponent {
  return {
    kind: "sequenceEngagement",
    title: toStringValue(component.title) ?? "Engagement",
    subtitle: toStringValue(component.subtitle) ?? "",
    peopleCount: toStringValue(component.peopleCount) ?? "",
    ...optionalStringProperty("launchLabel", component.launchLabel),
    sequences: toRecordArray(component.sequences, normalizeSequenceEngagementPerson),
    channels: toRecordArray(component.channels, (channel) => {
      const label = toStringValue(channel.label);

      return label
        ? {
            label,
            detail: toStringValue(channel.detail) ?? "",
            badge: toStringValue(channel.badge) ?? "",
          }
        : null;
    }),
  };
}

function normalizeSequenceEngagementPerson(value: Record<string, unknown>): BuilderSequenceEngagementComponent["sequences"][number] | null {
  const name = toStringValue(value.name);

  if (!name) return null;

  const steps = toRecordArray(value.steps, (step) => {
    const label = toStringValue(step.label);
    const body = toStringValue(step.body);

    return label || body
      ? {
          channel: toStringValue(step.channel) ?? "email",
          label: label ?? "",
          body: body ?? "",
          ...optionalStringProperty("waitDays", step.waitDays),
        }
      : null;
  });

  return {
    name,
    company: toStringValue(value.company) ?? "",
    ...optionalStringProperty("title", value.title),
    ...optionalStringProperty("signal", value.signal),
    ...optionalStringProperty("avatarUrl", value.avatarUrl),
    subject: toStringValue(value.subject) ?? "",
    personalization: toStringValue(value.personalization) ?? "",
    ...(steps.length ? { steps } : {}),
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
    ...optionalNumberProperty("duration", item.duration),
    toolCalls: normalizeThinkingToolCalls(item.toolCalls),
  };
}

function normalizeThinkingToolCalls(value: unknown): BuilderThinkingState["items"][number]["toolCalls"] {
  if (!Array.isArray(value)) return undefined;

  const toolCalls: NonNullable<BuilderThinkingState["items"][number]["toolCalls"]> = [];

  value.forEach((toolCall) => {
    if (!isRecord(toolCall)) return;

    const label = toStringValue(toolCall.label);
    const vendor = toStringValue(toolCall.vendor);

    if (!label) return;

    toolCalls.push({
      label,
      ...(vendor ? { vendor } : {}),
    });
  });

  return toolCalls.length ? toolCalls : undefined;
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

function toStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => toStringValue(item))
    .filter((item): item is string => Boolean(item));
}

function toStringMatrix(value: unknown): string[][] {
  if (!Array.isArray(value)) return [];

  return value
    .map((row) => toStringArray(row))
    .filter((row) => row.length);
}

function toRecordArray<T>(
  value: unknown,
  normalize: (record: Record<string, unknown>, index: number) => T | null,
): T[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item, index) => isRecord(item) ? normalize(item, index) : null)
    .filter((item): item is T => Boolean(item));
}

function optionalStringProperty<K extends string>(key: K, value: unknown): Partial<Record<K, string>> {
  const stringValue = toStringValue(value);

  return stringValue ? { [key]: stringValue } as Partial<Record<K, string>> : {};
}

function optionalNumberProperty<K extends string>(key: K, value: unknown): Partial<Record<K, number>> {
  const numberValue = toNumberValue(value);

  return numberValue === null ? {} : { [key]: numberValue } as Partial<Record<K, number>>;
}

function toStringValue(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function toNumberValue(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
