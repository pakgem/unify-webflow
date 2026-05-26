import type { gsap } from "gsap";
import type { CursorActor } from "../actors/CursorActor";
import type { ChatActor } from "../actors/ChatActor";
import type { TargetResolver } from "./TargetResolver";

export type CursorMode = "default" | "pointer" | "click" | "drag" | "release" | "text";
export type CursorIntent = "entry" | "hover" | "click" | "drag" | "text" | "exit";
export type CursorSpeed = "slow" | "normal" | "quick";
export type BreakpointName = "mobile" | "tablet" | "desktop" | "wide";
export type AnchorName =
  | "center"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "right"
  | "top"
  | "bottom";

export type Point = {
  x: number;
  y: number;
};

export type Offset = {
  x?: number;
  y?: number;
};

export type TargetSpec = {
  target?: string | HTMLElement;
  x?: number;
  y?: number;
  anchor?: AnchorName;
  offset?: Offset;
  outside?: "left" | "right" | "top" | "bottom";
  humanOffset?: boolean;
};

export type ResponsiveTarget =
  | TargetSpec
  | Partial<Record<BreakpointName, TargetSpec>>;

export type CursorMoveOptions = {
  mode?: CursorMode;
  intent?: CursorIntent;
  speed?: CursorSpeed;
  curve?: number;
  ease?: string;
  durationScale?: number;
  overshoot?: number | false;
  settle?: boolean;
  releaseHold?: number;
  preserveMode?: boolean;
  label?: string;
};

export type ResultCardConfig = {
  id: string;
  kicker?: string;
  title: string;
  body?: string;
  rows?: Array<{
    label: string;
    value: string;
    tone?: "neutral" | "positive" | "warning" | "accent";
  }>;
  actions?: Array<{
    label: string;
    targetId: string;
  }>;
};

export type StrategyPlanConfig = {
  id: string;
  label: string;
  title: string;
  summary?: string;
  bullets?: string[];
  audience?: string;
  motion?: string;
  proof?: string;
};

export type DataSourceGridConfig = {
  id: string;
  title: string;
  subtitle?: string;
  sources: Array<{
    id: string;
    name: string;
    detail: string;
    category?: string;
    logoSrc?: string;
    logoScale?: number;
  }>;
};

export type UploadedFileConfig = {
  name: string;
  detail: string;
  type?: string;
};

export type MailboxConnectionConfig = {
  id: string;
  title: string;
  subtitle?: string;
  provider: string;
  account: string;
  status?: string;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  loadingLabel?: string;
  learningTitle?: string;
  learningDetail?: string;
  learningReadyDetail?: string;
  signals: string[];
};

export type OutreachStyleProfileConfig = {
  id: string;
  title: string;
  subtitle?: string;
  signals: Array<{
    label: string;
    value: string;
  }>;
  examples?: string[];
};

export type ProximityLeadListConfig = {
  id: string;
  title: string;
  subtitle?: string;
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

export type PersonalizationSwipeDecision = "use" | "avoid";

export type PersonalizationSwipeGameConfig = {
  id: string;
  title: string;
  subtitle?: string;
  prompt?: string;
  labels?: {
    avoid: string;
    use: string;
  };
  completeLabel?: string;
  signals: Array<{
    id: string;
    label: string;
    detail: string;
    decision: PersonalizationSwipeDecision;
  }>;
};

export type SequenceEngagementConfig = {
  id: string;
  title: string;
  subtitle?: string;
  peopleCount: string;
  launchLabel?: string;
  initialSequenceIndex?: number;
  initialStepIndex?: number;
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
      waitDays?: number;
    }>;
  }>;
  channels: Array<{
    label: string;
    detail: string;
    badge?: string;
  }>;
};

export type SequenceBuildThinkingConfig = {
  id: string;
  title: string;
  subtitle: string;
  templateLabel: string;
  template: string;
  total: number;
  tracks: Array<{
    id: string;
    label: string;
    detail: string;
  }>;
};

export type DataTableRowConfig = {
  id: string;
  values: Record<string, string>;
};

export type DataTablePersonColumnConfig = {
  detailKey?: string;
  avatarToneKey?: string;
  avatarUrlKey?: string;
  avatarKey?: string;
  sourceKey?: string;
  companyKey?: string;
  badgeKey?: string;
};

export type DataTableColumnConfig = {
  key: string;
  label: string;
  width?: string;
  cellType?: "text" | "person" | "mutualConnection" | "pillDetail";
  person?: DataTablePersonColumnConfig;
};

export type DataTableConfig = {
  id: string;
  title: string;
  eyebrow?: string;
  count?: string;
  variant?: "default" | "filtered" | "enriched" | "connections";
  scrollAlign?: "equal-inset";
  footerClearance?: number;
  columns: DataTableColumnConfig[];
  rows: DataTableRowConfig[];
  pagination?: {
    pageSize: number;
    totalRows: number;
    activePage?: number;
    pages: Array<{
      page: number;
      range: string;
      rows: DataTableRowConfig[];
    }>;
  };
  scrollAnchor?: "previous-message";
  actions?: Array<{
    id: string;
    label: string;
    icon?: "dialer" | "email";
    badge?: string;
    variant?: "primary" | "secondary";
  }>;
};

export type EnrichmentConfig = {
  id: string;
  title: string;
  subtitle: string;
  modeLabel: string;
  fields: Array<{
    title: string;
    steps: string[];
  }>;
};

export type ThinkingItemConfig = {
  label: string;
  detail?: string;
  disclosure?: string;
};

export type ThinkingStateConfig = {
  title?: string;
  elapsed?: string;
  items: ThinkingItemConfig[];
};

export type StoryDefinition = {
  id: string;
  label: string;
  navLabel?: string;
  navDescription?: string;
  eyebrow: string;
  summary: string;
  accent?: string;
  entry: ResponsiveTarget;
  entryLeadTime?: number;
  assetUrls?: string[];
  prepare?: (ctx: StoryContext) => void;
  build: (ctx: StoryContext) => gsap.core.Timeline;
};

export type StoryContext = {
  root: HTMLElement;
  story: StoryDefinition;
  resolver: TargetResolver;
  cursor: CursorActor;
  chat: ChatActor;
  timeline: () => gsap.core.Timeline;
};

export type ChatbotStoriesConfig = {
  stories?: StoryDefinition[];
  autoplay?: boolean;
  loop?: boolean;
  autoAdvanceDelay?: number;
  initialStory?: number | string;
  injectStyles?: boolean;
  assetBaseUrl?: string;
  assetUrlMap?: Record<string, string>;
  builderDraft?: unknown;
  builderDraftScriptId?: string | false;
  reducedMotion?: boolean;
  showBuilder?: boolean;
  builderDraftEndpoint?: string | false;
  builderDraftAutoSave?: boolean;
  onStoryChange?: (story: StoryDefinition, index: number) => void;
};

export type ChatbotStoriesInstance = {
  play: () => void;
  pause: () => void;
  next: () => void;
  previous: () => void;
  goTo: (story: number | string) => void;
  destroy: () => void;
  getState: () => {
    story: StoryDefinition;
    index: number;
    progress: number;
    playing: boolean;
  };
};
