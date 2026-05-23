import { gsap } from "gsap";
import type { CursorActor } from "./CursorActor";
import type {
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  MailboxConnectionConfig,
  OutreachStyleProfileConfig,
  PersonalizationSwipeDecision,
  PersonalizationSwipeGameConfig,
  ProximityLeadListConfig,
  ResultCardConfig,
  SequenceBuildThinkingConfig,
  SequenceEngagementConfig,
  StrategyPlanConfig,
  ThinkingItemConfig,
  ThinkingStateConfig,
  UploadedFileConfig,
} from "../core/types";
import {
  DEFAULT_THINKING_COLLAPSED_DISCLOSURE,
  DEFAULT_THINKING_DISCLOSURE,
  DEFAULT_THINKING_TITLE,
  getDefaultThinkingDetail,
  getThinkingElapsedLabel,
} from "../stories/thinkingText";
import { addTimelineElapsedTimer } from "../motion/elapsedTimer";
import { getProfilePhotoUrl } from "../assets/profilePhotos";
import { createUnifyMarkSvg } from "../assets/unifyMark";
import gmailConnectorIconSvg from "../assets/email-connectors/gmail.svg?raw";
import outlookConnectorIconSvg from "../assets/email-connectors/outlook.svg?raw";

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
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
  endX: number;
  endY: number;
  endWidth: number;
  endHeight: number;
  startScaleX: number;
  startScaleY: number;
  startRotation: number;
  startBackground: RgbaColor;
  endBackground: RgbaColor;
  startBorderColor: RgbaColor;
  endBorderColor: RgbaColor;
  detailEls: HTMLElement[];
  setX: (value: number) => void;
  setY: (value: number) => void;
  setScaleX: (value: number) => void;
  setScaleY: (value: number) => void;
  setRotation: (value: number) => void;
  setBackgroundColor: (value: string) => void;
  setBorderColor: (value: string) => void;
};
type FileLandingLabel = {
  el: HTMLElement;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  setX: (value: number) => void;
  setY: (value: number) => void;
  setOpacity: (value: number) => void;
};
type SignupLogoTransfer = {
  el: HTMLElement;
  startX: number;
  startY: number;
  startWidth: number;
  startHeight: number;
  target: HTMLElement;
  setX: (value: number) => void;
  setY: (value: number) => void;
  setWidth: (value: number) => void;
  setHeight: (value: number) => void;
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
  | "mailbox"
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
type ThinkingInput = string | ThinkingItemConfig | Array<string | ThinkingItemConfig> | ThinkingStateConfig;
type NormalizedThinkingItem = Required<ThinkingItemConfig>;
type NormalizedThinkingState = {
  title: string;
  elapsed?: string;
  items: NormalizedThinkingItem[];
};
type ClaimedThinkingMessage = {
  message: HTMLElement;
  header: HTMLElement;
  headerGlyph: HTMLElement;
  title: HTMLElement;
  traveler: HTMLElement;
  elapsed: HTMLElement;
  steps: HTMLElement;
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
      "mailbox",
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
const MAILBOX_CONNECT_MOTION = {
  pressDuration: motionDuration(0.09),
  releaseDuration: motionDuration(0.2),
  loadingHoldDuration: motionDuration(0.78),
  successHoldDuration: motionDuration(0.12),
  learningRevealDuration: motionDuration(0.34),
  detailSwapDuration: 0.16,
  readyPopUpDuration: 0.12,
  readyPopSettleDuration: 0.22,
  settleHold: motionDuration(0.24),
};
const MAILBOX_LEARNING_TITLE = "Learning your style";
const MAILBOX_LEARNING_READY_TITLE = "Voice calibrated";
const MAILBOX_LEARNING_READY_DETAIL = "73 tone & tactic rules defined";
const MAILBOX_LEARNING_STAGES = [
  { detail: "Analyzing vocabulary", progress: 31, duration: 1.05, hold: 0.38 },
  { detail: "Investigating wins", progress: 64, duration: 1.2, hold: 0.46 },
  { detail: "Figuring out your voice", progress: 100, duration: 1.15, hold: 0.76 },
] as const;
const MAILBOX_CONNECTOR_ICON_SRC = {
  gmail: svgToDataUri(gmailConnectorIconSvg),
  outlook: svgToDataUri(outlookConnectorIconSvg),
} satisfies Record<MailboxConnectorProvider, string>;
const MAILBOX_THUMBPRINT_FILL_STARTS = [
  82,
  86,
  94,
  74,
  76,
  90,
  68,
  70,
  46,
  18,
  12,
  8,
  28,
  54,
  38,
  0,
  4,
] as const;
const MAILBOX_THUMBPRINT_SHORT_STROKES = new Set([5, 8, 10, 16]);
const MAILBOX_THUMBPRINT_PATHS = [
  "M9.62137 135.631C9.62137 135.631 -4.10678 106.019 7.70875 69.6796",
  "M11.3787 60.2136C11.3787 60.2136 34.0777 2.91262 102.427 2.91262",
  "M197.058 103.718C197.058 103.718 200.942 20.068 113.252 3.7767",
  "M19.5631 158.35C21.2233 151.262 23.0582 140.369 22.3107 127.116C21.7184 116.583 20.0097 113.913 19.5145 104.777C19.2621 100.029 18.5437 83.4757 26.4951 65.9126C34.9709 47.1845 49.0971 36.6311 56.398 31.9612",
  "M66.1456 26.6117C71.4369 24.1359 96.4369 13.1262 126.097 23.0971C153.777 32.3981 167.068 53.7573 170.777 60.3301C177.078 71.4757 179.175 85.0583 181.252 95.932C182.883 104.495 183.68 111.757 184.087 116.922",
  "M184.427 150.524C184.515 142.883 184.602 135.243 184.699 127.602",
  "M30.6699 171.767C33.8641 164.67 37.8835 153.573 38.5923 139.67C39.3107 125.777 36.0777 121.699 35.7961 107.32C35.5631 95.5631 35.233 78.5534 45.5728 62.8738C58.4369 43.3689 79.8253 38.0291 85.602 36.8155C101.301 33.4951 114.262 36.7864 120.437 38.8058",
  "M129.709 42.7379C136.136 46.2524 146.456 53.0777 154.252 65.2136C160.437 74.8447 162.097 83.2524 165.194 98.9515C166.748 106.845 169.301 122.456 168.689 142.699C168.282 156.039 166.621 167.204 165.029 175.35",
  "M43.165 182.466C44.8738 178.65 46.5728 174.388 48.1456 169.699C49.6602 165.184 50.8349 160.922 51.7476 156.981",
  "M54.1068 146.456C54.6699 142.476 55.2718 136.388 54.8932 128.971C54.4951 121.262 53.3592 118.146 52.5631 110.359C51.7184 102.019 51.0194 95.1553 52.5631 87.7864C55.9126 71.7573 67.9806 62.1845 69.7864 60.7961C82.5631 50.9515 96.1942 50.9612 100.039 51.0194C111.505 51.2039 119.767 55.4078 122.379 56.835C131.981 62.0971 137.282 69.3495 139.583 72.9612",
  "M88.7087 199.709C89.8447 196.689 90.9903 193.67 92.1262 190.641C93.2816 187.573 94.4272 184.515 95.5728 181.456",
  "M105.913 199.777C108.777 192.884 111.67 184.68 114 175.282C116.466 165.34 117.767 156.282 118.417 148.524",
  "M124.214 196.961C127.447 188.175 130.951 176.689 133.311 162.951C136.252 145.816 136.068 132.913 135.874 122.233C135.388 96.6602 131.485 89.068 129.825 86.1651C127.748 82.5243 123.583 75.4466 114.932 71.0388C106.845 66.9223 99.2136 67.3592 97.0097 67.5437C91.9806 67.9806 88.0582 69.4951 85.6019 70.6602",
  "M144.515 188.553C148.485 174.864 152.505 155.534 152.388 132.233C152.291 112.165 149.175 95.2427 145.854 82.6019",
  "M77.6602 76.1553C73.8544 79.6117 68.8738 85.2524 67.2233 93.1456C65.4466 101.621 68.7087 107.049 70.4854 118.282C72.1359 128.767 71.2913 136.621 70.2524 146.204C69.1748 156.126 66.1553 171.942 56.5631 190.359",
  "M71.9224 196.039C76.0777 187.456 80.7088 175.825 83.7476 161.553C85.7767 152.019 88.4078 139.67 87.0097 125.252C86.4758 119.748 86.233 114.223 85.6117 108.728C84.4758 98.699 83.6214 95.9418 85.3787 92.2039C87.5728 87.5243 92.5437 84.0874 97.9418 83.3592C105.107 82.3981 111.67 86.4078 114.466 91.2718C114.913 92.0485 115.398 93.0874 116.563 99.6505C117.583 105.417 118.126 108.476 118.66 114.311C119.184 120.039 119.651 127.816 119.505 137.311",
  "M98.1747 172.204C100.495 161.476 102.466 148.019 102.592 132.466C102.709 118.631 101.34 106.495 99.5631 96.5437",
] as const;

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

      0ms   header streams with logo sitting on the header mark
    +80ms   logo glides to the current row, leaving a dot behind previous rows
   done   rows fold away and logo returns to the header shadow
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

const THINKING_LOGO_TRAVEL = {
  duration: motionDuration(0.34),
  returnDuration: motionDuration(0.38),
  ease: "power2.inOut",
};

const THINKING_BLOCK_COLLAPSE = {
  y: -4,
  duration: motionDuration(0.26),
  ease: "power2.inOut",
};

const SEQUENCE_THINKING_LOGO = {
  templateHold: motionDuration(0.54),
  progressDuration: motionDuration(3.9),
  finalHold: motionDuration(0.34),
};

/* --------------------------------------------------------------------------
   Composer Show/Hide Storyboard

   0ms   hidden shell is a compact centered pill
   0ms   show: pill frame morphs to full input dimensions
   0ms   chat reserves final composer clearance
   0ms   send: message enters while full input collapses into its center
 done   hidden shell is removed from pointer and accessibility flow
   -------------------------------------------------------------------------- */

const COMPOSER_MOTION = {
  compactWidth: 96,
  compactHeight: 30,
  collapsedWidth: 0,
  collapsedHeight: 0,
  showDuration: motionDuration(0.42),
  hideDuration: motionDuration(0.32),
  contentShowDelay: motionDuration(0.1),
  contentHideDuration: motionDuration(0.1),
  showEase: "expo.out",
  hideEase: "power3.in",
  contentEase: "power2.out",
  threadGap: 44,
};

const COMPOSER_FRAME_PROPS =
  "left,right,bottom,width,height,minHeight,paddingTop,paddingRight,paddingBottom,paddingLeft,borderWidth,gap";

const COMPOSER_BOX_RESET_VARS: gsap.TweenVars = {
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  borderWidth: "",
  gap: "",
};

const SIGNUP_TRANSITION = {
  scrollOutRatio: 1.02,
  minScrollOut: 420,
  duration: motionDuration(0.58),
  threadOverlap: "-=0.36",
};

const SIGNUP_LOGO_TRANSFER = {
  duration: motionDuration(0.68),
  ease: "power3.inOut",
  targetColor: "#67635f",
};

const CHAT_BOTTOM_CLEARANCE = 110;

const CHAT_SCROLL_MOTION = {
  revealDuration: motionDuration(0.42),
  revealEase: "power3.inOut",
  followDuration: motionDuration(0.24),
  followEase: "power2.out",
};

/* ─────────────────────────────────────────────────────────
 * STORY SWITCH EXIT
 *
 *    0ms   live chat continues scrolling toward the bottom
 *   40ms   visible story content drifts upward and fades
 *  420ms   next story is allowed to reset and build
 * ───────────────────────────────────────────────────────── */
const STORY_SWITCH_EXIT_MOTION = {
  scrollDistance: 160,
  offsetY: 78,
  scrollDuration: motionDuration(0.36),
  contentDuration: motionDuration(0.42),
  contentDelay: 0.04,
  contentEase: "power3.in",
  stagger: 0.015,
};

const MARKETING_PAGE_MOTION = {
  threadY: -176,
  threadOpacity: 0,
  revealDuration: motionDuration(0.62),
  revealEase: "power3.inOut",
  cardDuration: motionDuration(0.28),
};
const STRATEGY_REVEAL_SCROLL_EXTRA = 4;
const MARKETING_DATA_SOURCE_COLUMNS = [
  ["CRM", "Core Data", "Ad Intelligence"],
  ["Web Intent", "Product Analytics", "SMB Data", "Ecommerce"],
  ["Enrichment", "Company / Fundraising", "Tech Stack"],
  ["Web / SEO", "Relationships", "And more"],
];
type MailboxConnectorProvider = "gmail" | "outlook";
const MARKETING_DATA_GRID_ARTBOARD = {
  contentWidth: 1881,
  height: 1280,
};

const STREAM_SCROLL_INTERVAL_MS = 96;
const TRANSIENT_ELEMENT_SELECTOR =
  ".wa-cursor-file, .wa-file-landing-clone, .wa-file-landing-label, .wa-csv-drop, .wa-signup-logo-transfer";
const MARKETING_PANEL_SELECTOR = "[data-marketing-data-sources-grid]";
const DATA_TABLE_SELECTOR = "[data-data-table]";
const DATA_TABLE_ACTION_SELECTOR = "[data-table-action]";
const DATA_TABLE_PAGE_BUTTON_SELECTOR = "[data-table-page-button]";
const DATA_TABLE_PAGE_RANGE_SELECTOR = "[data-table-page-range]";
const CURSOR_FILE_ENTRY = {
  offscreenMargin: 280,
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
  private signupLogo: HTMLElement;
  private signupEmail: HTMLElement;
  private signupSubmit: HTMLElement;
  private status: HTMLElement | null;
  private messagePool: HTMLElement[] = [];
  private messageBodies = new WeakMap<HTMLElement, HTMLElement>();
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
  private transferSignupLogoOnNextThinking = false;
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

    const table = pageButton.closest<HTMLElement>(DATA_TABLE_SELECTOR);
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
    this.signupLogo = this.required("[data-signup-logo-target]");
    this.signupEmail = this.required("[data-signup-email]");
    this.signupSubmit = this.required("[data-signup-submit]");
    this.status = this.root.querySelector<HTMLElement>("[data-chat-status]");
    this.prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    this.removeElements("[data-thinking], [data-research-steps], [data-result-grid]");
    this.removeElements(TRANSIENT_ELEMENT_SELECTOR);
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
    this.transferSignupLogoOnNextThinking = false;
    this.hideDataTableControlTooltip();
    this.signupEmail.textContent = "";
    this.setSignupEmailFilled(false);
    this.status?.replaceChildren(document.createTextNode("Ready"));
    this.clearCustomResults();

    this.thread.scrollTop = 0;
    gsap.set(this.thread, {
      clearProps: "maxHeight,minHeight,paddingTop,paddingBottom,borderWidth",
    });
    gsap.set(this.signupScene, { autoAlpha: 0, y: 0, scale: 1, display: "none" });
    gsap.set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" });
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

  animateStorySwitchExit(): gsap.core.Timeline {
    const targets = this.getStorySwitchExitTargets();
    const tl = gsap.timeline();

    this.stopScrollMotion();

    if (!targets.length) {
      return tl.to({}, { duration: 0.001 });
    }

    const maxScroll = this.getThreadBottomScrollTarget();
    const scrollTarget = Math.min(maxScroll, this.thread.scrollTop + STORY_SWITCH_EXIT_MOTION.scrollDistance);

    gsap.killTweensOf(targets);

    if (scrollTarget > this.thread.scrollTop + 0.5) {
      tl.to(
        this.thread,
        {
          scrollTop: scrollTarget,
          duration: STORY_SWITCH_EXIT_MOTION.scrollDuration,
          ease: "power2.inOut",
          overwrite: "auto",
        },
        0,
      );
    }

    tl.to(
      targets,
      {
        y: `-=${STORY_SWITCH_EXIT_MOTION.offsetY}`,
        autoAlpha: 0,
        duration: STORY_SWITCH_EXIT_MOTION.contentDuration,
        ease: STORY_SWITCH_EXIT_MOTION.contentEase,
        stagger: STORY_SWITCH_EXIT_MOTION.stagger,
        overwrite: "auto",
      },
      STORY_SWITCH_EXIT_MOTION.contentDelay,
    );

    return tl;
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
    this.setSignupEmailFilled(Boolean(email));
    gsap.set(this.signupScene, {
      display: "grid",
      autoAlpha: 1,
      y: 0,
      scale: 1,
      pointerEvents: "auto",
    });
    gsap.set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" });
    gsap.set([this.thread, this.composer], {
      autoAlpha: 0,
      y: 34,
    });
    gsap.set(this.composer, this.getComposerHiddenVars());
    gsap.set(this.composerContents, this.getComposerContentsHiddenVars());
    this.setComposerVisibleState(false);
  }

  private setSignupEmailFilled(isFilled: boolean): void {
    this.signupScene.dataset.signupFilled = String(isFilled);
    if (!isFilled) delete this.signupScene.dataset.signupSubmitted;
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
        ...COMPOSER_BOX_RESET_VARS,
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
    const collapsedFrame = this.getComposerCollapsedFrame(fullFrame);

    return gsap.timeline()
      .set(this.composer, {
        ...COMPOSER_BOX_RESET_VARS,
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
        left: collapsedFrame.left,
        bottom: collapsedFrame.bottom,
        width: collapsedFrame.width,
        height: collapsedFrame.height,
        minHeight: collapsedFrame.height,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        borderWidth: 0,
        gap: 0,
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
      ...COMPOSER_BOX_RESET_VARS,
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

  private getComposerCollapsedFrame(frame: ComposerFrame): ComposerFrame {
    const width = COMPOSER_MOTION.collapsedWidth;
    const height = COMPOSER_MOTION.collapsedHeight;

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
        this.setSignupEmailFilled(Boolean(email));
      })
      .set(this.signupScene, {
        display: "grid",
        autoAlpha: 1,
        y: 0,
        scale: 1,
        pointerEvents: "auto",
      })
      .set([this.signupLogo, this.signupSubmit], { clearProps: "transform,opacity,visibility" })
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
        this.setSignupEmailFilled(false);
      })
      .to(proxy, {
        count: email.length,
        duration,
        ease: "none",
        onUpdate: () => {
          const typedEmail = email.slice(0, Math.round(proxy.count));
          this.signupEmail.textContent = typedEmail;
          this.setSignupEmailFilled(Boolean(typedEmail));
        },
      });
  }

  submitSignup(): gsap.core.Timeline {
    return gsap
      .timeline()
      .call(() => {
        this.signupScene.dataset.signupSubmitted = "true";
      })
      .to(this.signupSubmit, {
        scale: 0.9,
        duration: motionDuration(0.08),
        ease: "power2.out",
      })
      .to(this.signupSubmit, {
        scale: 1,
        duration: motionDuration(0.2),
        ease: "back.out(3.2)",
      });
  }

  transferSignupLogoToNextThinking(): gsap.core.Timeline {
    this.transferSignupLogoOnNextThinking = true;
    return gsap.timeline();
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
      .to(this.signupScene, {
        autoAlpha: 0,
        duration: motionDuration(0.08),
        ease: "power1.out",
      }, ">-0.08")
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

  prepareForChatHistoryPause(): void {
    gsap.killTweensOf(this.tableControlTooltip);
    this.hideDataTableControlTooltip();
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

  thinkingState(input: ThinkingInput, hold = 1.1): gsap.core.Timeline {
    const thinking = this.normalizeThinkingInput(input);
    const isSequence = thinking.items.length > 1;

    return this.runThinkingSequence(thinking, {
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
    const scrollAnchor = config.scrollAnchor === "previous-message" ? this.getLastMessageBody() : null;

    return this.revealComponentItems("table", table, ".wa-data-table__row", COMPONENT_CHILD_REVEAL.tableRow, scrollAnchor);
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
        state.buttons = state.table ? this.queryElements(state.table, DATA_TABLE_PAGE_BUTTON_SELECTOR) : [];
        state.targetButton = state.buttons.find((button) => Number(button.dataset.tablePageButton) === page);
        state.range = state.table?.querySelector<HTMLElement>(DATA_TABLE_PAGE_RANGE_SELECTOR) ?? null;
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

      const buttons = this.queryElements(table, DATA_TABLE_ACTION_SELECTOR);
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
    const tl = this.revealComponentItems("enrichment", panel, ".wa-waterfall-row", COMPONENT_CHILD_REVEAL.waterfallRow);
    const elapsed = panel.querySelector<HTMLElement>(".wa-thinking__elapsed");
    const glyph = panel.querySelector<HTMLElement>(".wa-thinking__glyph");

    if (elapsed) this.addThinkingElapsedTimer(tl, elapsed, elapsed.dataset.elapsedTarget ?? "4m 20s");
    tl.call(() => this.setLocalLogoMode(glyph, "thinking"), undefined, 0);
    tl.call(() => this.setLocalLogoMode(glyph, "done"));
    return tl;
  }

  strategyPlans(plans: StrategyPlanConfig[]): gsap.core.Timeline {
    const cards = plans.map((plan) => this.createStrategyPlan(plan));
    const grid = document.createElement("div");
    const bulletItems = cards.flatMap((card) => this.queryElements(card, ".wa-strategy-plan__bullets li"));
    const scrollAnchor = this.getLastMessageBody();

    grid.className = "wa-result-grid has-strategy-plans";
    grid.dataset.strategyPlans = plans.map((plan) => plan.id).join(" ");
    grid.append(...cards);

    gsap.set(bulletItems, { autoAlpha: 0, y: 5 });

    const message = this.claimComponentMessage("strategy", grid);

    return this.revealPreparedItems(
      message,
      cards,
      COMPONENT_CHILD_REVEAL.strategyCard,
      scrollAnchor,
      STRATEGY_REVEAL_SCROLL_EXTRA,
    )
      .to(
        bulletItems,
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

  strategyPlanHover(selector: string, visible: boolean): gsap.core.Timeline {
    return gsap.timeline().call(() => {
      const card = this.root.querySelector<HTMLElement>(selector);
      const container = card?.closest<HTMLElement>("[data-strategy-plans]");
      const cards = container ? this.queryElements(container, ".wa-strategy-plan") : [];

      cards.forEach((candidate) => candidate.toggleAttribute("data-cursor-hover", visible && candidate === card));
    });
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

    return this.revealComponentItems("table", list, ".wa-data-table__row", COMPONENT_CHILD_REVEAL.tableRow);
  }

  mailboxConnection(config: MailboxConnectionConfig): gsap.core.Timeline {
    const connection = this.createMailboxConnection(config);
    const revealTargets = this.compactElements(
      connection.querySelector<HTMLElement>(".wa-mailbox-connection__card"),
    );

    return this.revealComponentItems("mailbox", connection, revealTargets, {
      from: { autoAlpha: 0, y: 10, scale: 0.99 },
      to: {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: motionDuration(0.28),
        ease: "power2.out",
        stagger: 0.045,
      },
      position: "-=0.2",
    });
  }

  connectMailbox(connectionId: string): gsap.core.Timeline {
    const section = this.root.querySelector<HTMLElement>(
      `[data-mailbox-connection="${this.escapeSelectorValue(connectionId)}"]`,
    );
    const button = section?.querySelector<HTMLButtonElement>("[data-mailbox-connect]");
    const learning = section?.querySelector<HTMLElement>("[data-mailbox-learning]");
    const thumbprintFillPaths = section
      ? Array.from(section.querySelectorAll<SVGPathElement>("[data-mailbox-thumbprint-path]"))
      : [];
    const progressFill = section?.querySelector<HTMLElement>("[data-mailbox-learning-progress]");
    const title = section?.querySelector<HTMLElement>(".wa-mailbox-learning__title");
    const titleText = section?.querySelector<HTMLElement>("[data-mailbox-learning-title-text]") ?? title;
    const titleChevron = section?.querySelector<HTMLElement>("[data-mailbox-learning-ready-chevron]");
    const detail = section?.querySelector<HTMLElement>(".wa-mailbox-learning__detail");
    const thumbprintFrame = section?.querySelector<HTMLElement>(".wa-mailbox-learning__thumbprint");
    const signals = section ? this.queryElements(section, ".wa-mailbox-connection__signal") : [];
    const tl = gsap.timeline();

    if (!section || !button || !learning || !titleText || !detail || !thumbprintFrame || !thumbprintFillPaths.length || !progressFill) return tl;
    const thumbprintProgress = { value: 0 };

    tl.call(() => {
      section.dataset.mailboxState = "loading";
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.setAttribute("aria-label", button.dataset.mailboxLoadingLabel ?? "Connecting");
      learning.dataset.mailboxLearningState = "idle";
      titleText.textContent = MAILBOX_LEARNING_TITLE;
      detail.textContent = MAILBOX_LEARNING_STAGES[0].detail;
      gsap.set(learning, { display: "none", autoAlpha: 0, y: 8, scale: 0.992 });
      this.updateMailboxThumbprintFill(thumbprintFillPaths, 0);
      gsap.set(progressFill, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(thumbprintFrame, { scale: 1, transformOrigin: "center center" });
      gsap.set(this.compactElements(titleChevron), { autoAlpha: 0, y: -1, scale: 0.9 });
    })
      .to(button, {
        scale: 0.985,
        duration: MAILBOX_CONNECT_MOTION.pressDuration,
        ease: "power2.out",
      })
      .to(button, {
        scale: 1,
        duration: MAILBOX_CONNECT_MOTION.releaseDuration,
        ease: "back.out(2.6)",
      })
      .to({}, { duration: MAILBOX_CONNECT_MOTION.loadingHoldDuration })
      .call(() => {
        section.dataset.mailboxState = "connected";
        button.disabled = true;
        button.removeAttribute("aria-busy");
        button.setAttribute("aria-label", button.dataset.mailboxConnectedLabel ?? "Connected");
        learning.dataset.mailboxLearningState = "loading";
      })
      .to({}, { duration: MAILBOX_CONNECT_MOTION.successHoldDuration })
      .set(learning, { display: "grid", height: "auto" }, "-=0.04")
      .fromTo(
        learning,
        { autoAlpha: 0, y: 8, scale: 0.992 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: MAILBOX_CONNECT_MOTION.learningRevealDuration,
          ease: "power2.out",
        },
        "-=0.02",
      )
      .fromTo(
        this.compactElements(titleText, detail),
        { autoAlpha: 0, y: 5 },
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.22),
          ease: "power2.out",
          stagger: 0.04,
        },
        "<+=0.07",
      );

    MAILBOX_LEARNING_STAGES.forEach((stage, index) => {
      if (index > 0) {
        tl.to(detail, {
          autoAlpha: 0,
          y: -3,
          duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
          ease: "power1.in",
        })
          .call(() => {
            detail.textContent = stage.detail;
          })
          .fromTo(
            detail,
            { autoAlpha: 0, y: 4 },
            {
              autoAlpha: 1,
              y: 0,
              duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
              ease: "power2.out",
            },
          );
      }

      tl.to(
        thumbprintProgress,
        {
          value: stage.progress,
          duration: stage.duration,
          ease: "power2.inOut",
          onUpdate: () => this.updateMailboxThumbprintFill(thumbprintFillPaths, thumbprintProgress.value),
        },
        index === 0 ? "-=0.04" : undefined,
      )
        .to(
          progressFill,
          {
            scaleX: stage.progress / 100,
            duration: stage.duration,
            ease: "power2.inOut",
          },
          "<",
        )
        .to({}, { duration: stage.hold });
    });

    tl.to(detail, {
      autoAlpha: 0,
      y: -3,
      duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
      ease: "power1.in",
    })
      .to(titleText, {
        autoAlpha: 0,
        y: -3,
        duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
        ease: "power1.in",
      }, "<")
      .call(() => {
        learning.dataset.mailboxLearningState = "ready";
        titleText.textContent = MAILBOX_LEARNING_READY_TITLE;
        detail.textContent = learning.dataset.mailboxLearningReadyDetail ?? MAILBOX_LEARNING_READY_DETAIL;
      })
      .fromTo(
        titleText,
        { autoAlpha: 0, y: 4 },
        {
          autoAlpha: 1,
          y: 0,
          duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
          ease: "power2.out",
        },
      )
      .fromTo(
        detail,
        { autoAlpha: 0, y: 4 },
        {
          autoAlpha: 1,
          y: 0,
          duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
          ease: "power2.out",
        },
        "<+=0.03",
      )
      .fromTo(
        this.compactElements(titleChevron),
        { autoAlpha: 0, y: -1, scale: 0.9 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: MAILBOX_CONNECT_MOTION.detailSwapDuration,
          ease: "power2.out",
        },
        "<",
      )
      .to(
        thumbprintFrame,
        {
          scale: 1.16,
          duration: MAILBOX_CONNECT_MOTION.readyPopUpDuration,
          ease: "power2.out",
        },
        "<",
      )
      .to(thumbprintFrame, {
        scale: 1,
        duration: MAILBOX_CONNECT_MOTION.readyPopSettleDuration,
        ease: "back.out(3)",
      });

    if (signals.length) {
      tl.to(
        signals,
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.18),
          ease: "power2.out",
          stagger: 0.035,
        },
        "<+=0.38",
      );
    }

    tl.to({}, { duration: MAILBOX_CONNECT_MOTION.settleHold });

    return tl;
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
      ".wa-sequence-person-card, .wa-sequence-card, .wa-sequence-step, .wa-sequence-wait, .wa-sequence-copy-panel, .wa-engage-channel, .wa-sequence-kickoff",
      COMPONENT_CHILD_REVEAL.stackCard,
    );
  }

  sequenceBuildThinking(config: SequenceBuildThinkingConfig): gsap.core.Timeline {
    const templateItem = this.createSequenceThinkingStep(config.templateLabel, config.template, 0);
    const trackItems = config.tracks.map((track, index) =>
      this.createSequenceThinkingStep(track.label, track.detail, index + 1, config.total),
    );
    const allItems = [templateItem, ...trackItems];
    const elapsedLabel = this.getThinkingElapsed(3);
    const thinking = this.claimThinkingMessage(allItems, elapsedLabel);
    const progress = { value: 1 };
    const progressTracks = trackItems.map((item) => ({
      label: item.querySelector<HTMLElement>(".wa-sequence-thinking-progress__count"),
      bar: item.querySelector<HTMLElement>(".wa-sequence-thinking-progress__bar span"),
    }));
    const progressBars = progressTracks.flatMap((track) => track.bar ? [track.bar] : []);

    thinking.message.querySelector<HTMLElement>(".wa-thinking-block")!.dataset.sequenceThinking = config.id;

    const tl = gsap.timeline()
      .call(() => {
        this.prepareThinkingMessage(thinking, allItems, 10);
        gsap.set(progressBars, {
          scaleX: 1 / Math.max(1, config.total),
          transformOrigin: "left center",
        });
      })
      .add(this.revealMessage(thinking.message))
      .add(this.revealThinkingHeader(thinking, 0.24))
      .call(() => {
        templateItem.dataset.stepState = "current";
        gsap.set(templateItem, { display: "grid" });
      })
      .add(this.moveThinkingLogoToStep(thinking, templateItem), "<");

    this.addThinkingStepReveal(tl, templateItem, { position: "<" });

    tl
      .to({}, { duration: SEQUENCE_THINKING_LOGO.templateHold })
      .add(this.foldThinkingStep(templateItem))
      .call(() => {
        trackItems.forEach((item) => {
          item.dataset.stepState = "current";
          gsap.set(item, { display: "grid" });
        });
      }, undefined, "+=0.1")
      .add(this.moveThinkingLogoToStep(thinking, trackItems[0]), "<")
      .to(trackItems, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(0.3),
        ease: "power2.out",
        stagger: 0.04,
      }, "<");

    this.addThinkingStepStreams(tl, trackItems);

    tl.to(progress, {
      value: config.total,
      duration: SEQUENCE_THINKING_LOGO.progressDuration,
      ease: "power1.inOut",
      onUpdate: () => {
        const current = Math.max(1, Math.round(progress.value));
        const ratio = current / Math.max(1, config.total);

        progressTracks.forEach(({ label, bar }) => {
          if (label) label.textContent = `${current}/${config.total}`;
          if (bar) gsap.set(bar, { scaleX: ratio });
        });
        this.requestMessageScroll(thinking.message);
      },
    }, "+=0.14")
      .to({}, { duration: SEQUENCE_THINKING_LOGO.finalHold });

    trackItems.forEach((item, index) => {
      tl.add(this.foldThinkingStep(item), index === 0 ? undefined : "<");
    });

    tl.add(this.collapseThinkingToHeader(thinking, allItems));
    this.addThinkingElapsedTimer(tl, thinking.elapsed, elapsedLabel);
    return tl;
  }

  sequencePerson(sequenceId: string, index: number): gsap.core.Timeline {
    const section = this.findSequenceEngagement(sequenceId);
    const tl = gsap.timeline();

    if (!section) return tl;

    const cards = this.queryElements(section, "[data-sequence-card]");
    const activeCard = this.getSequenceDisplayCard(section);
    const targetCard = cards.find((card) => Number(card.dataset.sequenceIndex) === index);
    const currentIndex = Number(section.dataset.activeSequenceIndex ?? "0");

    if (!targetCard || !activeCard || currentIndex === index) {
      this.setActiveSequencePerson(section, index, true);
      return tl;
    }

    const textTargets = this.getSequenceTransitionTargets(activeCard);

    tl.to(textTargets, {
      autoAlpha: 0,
      y: -3,
      duration: motionDuration(0.14),
      ease: "power2.in",
      stagger: 0.012,
    })
      .call(() => {
        this.setActiveSequencePerson(section, index, true);
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
      if (label) label.textContent = "sequence kicked off";
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

  prepareCursorFile(
    fileName: string,
    cursor: CursorActor,
    fileType = "CSV",
    stackFiles: UploadedFileConfig[] = [],
  ): PreparedCursorFile {
    const file = this.createCursorFile(fileName, fileType, stackFiles);
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
            cursor.beginDragPayload();
            const entryOffset = this.getCursorFileEntryOffset(file, cursor);
            followOffset.x = entryOffset.x;
            followOffset.y = entryOffset.y;
            removeFollower = this.followCursorWithFile(file, cursor, followOffset);
          })
          .set(file, {
            autoAlpha: 1,
            scale: 1,
          }, 0)
          .to(followOffset, {
            x: 0,
            y: 0,
            duration: CURSOR_FILE_ENTRY.pullInDuration,
            ease: CURSOR_FILE_ENTRY.pullInEase,
          }, 0),
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
          .add(cursor.releaseDragPayload(), 0)
          .add(this.uploadedFileMessageFromCursorFile(file, landedFileName, detail), 0),
      landAsUploadedFiles: (files) =>
        gsap
          .timeline()
          .call(stopFollowing)
          .add(cursor.releaseDragPayload(), 0)
          .add(this.uploadedFilesMessageFromCursorFile(file, files), 0),
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

    return this.revealDroppedFilesMessage(cursorFile, message, targets, extras, {
      landingLabel: `You uploaded ${files.length} files`,
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

  private revealDroppedFilesMessage(
    cursorFile: HTMLElement,
    message: HTMLElement,
    targets: HTMLElement[],
    extras: HTMLElement[] = [],
    options: { landingLabel?: string } = {},
  ): gsap.core.Timeline {
    const revealTargets = [...targets, ...extras];
    let clones: FileLandingClone[] = [];
    let label: FileLandingLabel | null = null;
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
        const initialScrollTop = this.thread.scrollTop;

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
        scrollTarget = this.getMessageScrollTarget(message);
        this.thread.scrollTop = scrollTarget;
        clones = this.createFileLandingClones(cursorFile, targets);
        this.thread.scrollTop = initialScrollTop;
        label = this.createFileLandingLabel(options.landingLabel, clones);
        gsap.set(cursorFile, { autoAlpha: 0 });
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
          onUpdate: () => {
            this.renderFileLandingClones(clones, progress.value);
            this.renderFileLandingLabel(label, progress.value);
          },
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
        this.renderFileLandingLabel(label, 1);
        this.thread.scrollTop = scrollTarget;
        gsap.set(revealTargets, { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set(message, { opacity: 1, visibility: "visible" });
        clones.forEach((clone) => clone.el.remove());
        label?.el.remove();
        cursorFile.remove();
      });
  }

  private createFileLandingClones(
    cursorFile: HTMLElement,
    targets: HTMLElement[],
  ): FileLandingClone[] {
    const sourceCards = this.getCursorFileCards(cursorFile);
    const landingLayer = this.chatBody;

    return targets.map((target, index) => {
      const sourceCard = sourceCards[Math.min(index, sourceCards.length - 1)];
      const sourceRect = sourceCard.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const sourceLocalRect = this.getElementLocalRect(sourceRect, landingLayer);
      const targetLocalRect = this.getElementLocalRect(targetRect, landingLayer);
      const clone = target.cloneNode(true) as HTMLElement;
      const startRotation = this.getCursorFileCardRotation(index, sourceCards.length);
      const startScaleX = targetRect.width ? sourceRect.width / targetRect.width : 1;
      const startScaleY = targetRect.height ? sourceRect.height / targetRect.height : 1;
      const sourceStyle = window.getComputedStyle(sourceCard);
      const targetStyle = window.getComputedStyle(target);
      const startBackground = this.parseCssColor(sourceStyle.backgroundColor) ?? { r: 255, g: 255, b: 249, a: 0.96 };
      const endBackground = this.parseCssColor(targetStyle.backgroundColor) ?? startBackground;
      const startBorderColor = this.parseCssColor(sourceStyle.borderTopColor) ?? { r: 23, g: 23, b: 20, a: 0.12 };
      const endBorderColor = this.parseCssColor(targetStyle.borderTopColor) ?? startBorderColor;
      const detailEls = this.queryElements(clone, ".wa-uploaded-file__body span");

      clone.classList.add("wa-file-landing-clone");
      clone.dataset.fileLandingClone = "";
      landingLayer.append(clone);
      gsap.set(clone, {
        position: "absolute",
        zIndex: 21,
        top: 0,
        left: 0,
        width: targetRect.width,
        height: targetRect.height,
        x: sourceLocalRect.left,
        y: sourceLocalRect.top,
        scaleX: startScaleX,
        scaleY: startScaleY,
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
        startX: sourceLocalRect.left,
        startY: sourceLocalRect.top,
        startWidth: sourceRect.width,
        startHeight: sourceRect.height,
        endX: targetLocalRect.left,
        endY: targetLocalRect.top,
        endWidth: targetRect.width,
        endHeight: targetRect.height,
        startScaleX,
        startScaleY,
        startRotation,
        startBackground,
        endBackground,
        startBorderColor,
        endBorderColor,
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
    for (const clone of clones) {
      const detailProgress = clampUnit(
        (progress - FILE_DROP_LANDING.detailStart) / FILE_DROP_LANDING.detailSpan,
      );

      clone.setX(this.interpolate(clone.startX, clone.endX, progress));
      clone.setY(this.interpolate(clone.startY, clone.endY, progress));
      clone.setScaleX(this.interpolate(clone.startScaleX, 1, progress));
      clone.setScaleY(this.interpolate(clone.startScaleY, 1, progress));
      clone.setRotation(this.interpolate(clone.startRotation, 0, progress));
      clone.setBackgroundColor(this.interpolateRgba(clone.startBackground, clone.endBackground, progress));
      clone.setBorderColor(this.interpolateRgba(clone.startBorderColor, clone.endBorderColor, progress));
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

  private createFileLandingLabel(labelText: string | undefined, clones: FileLandingClone[]): FileLandingLabel | null {
    if (!labelText || !clones.length) return null;

    const label = document.createElement("div");
    label.className = "wa-file-landing-label";
    label.textContent = labelText;
    this.chatBody.append(label);

    gsap.set(label, {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 22,
      pointerEvents: "none",
      opacity: 0,
      visibility: "visible",
      x: 0,
      y: 0,
    });

    const labelWidth = label.offsetWidth;
    const labelHeight = label.offsetHeight;
    const gap = 9;
    const startBounds = this.getFileLandingCloneBounds(clones, "start");
    const endBounds = this.getFileLandingCloneBounds(clones, "end");
    const startX = startBounds.left + startBounds.width / 2 - labelWidth / 2;
    const endX = endBounds.left + endBounds.width / 2 - labelWidth / 2;

    return {
      el: label,
      startX,
      startY: startBounds.top - labelHeight - gap,
      endX,
      endY: endBounds.top - labelHeight - gap,
      setX: gsap.quickSetter(label, "x", "px") as (value: number) => void,
      setY: gsap.quickSetter(label, "y", "px") as (value: number) => void,
      setOpacity: gsap.quickSetter(label, "opacity") as (value: number) => void,
    };
  }

  private renderFileLandingLabel(label: FileLandingLabel | null, progress: number): void {
    if (!label) return;

    const fadeIn = clampUnit(progress / 0.16);
    const fadeOut = clampUnit((1 - progress) / 0.16);
    label.setX(this.interpolate(label.startX, label.endX, progress));
    label.setY(this.interpolate(label.startY, label.endY, progress));
    label.setOpacity(Math.min(fadeIn, fadeOut));
  }

  private getFileLandingCloneBounds(
    clones: FileLandingClone[],
    phase: "start" | "end",
  ): { left: number; top: number; width: number; height: number } {
    const lefts = clones.map((clone) => (phase === "start" ? clone.startX : clone.endX));
    const tops = clones.map((clone) => (phase === "start" ? clone.startY : clone.endY));
    const widths = clones.map((clone) => (phase === "start" ? clone.startWidth : clone.endWidth));
    const heights = clones.map((clone) => (phase === "start" ? clone.startHeight : clone.endHeight));
    const rights = clones.map((_clone, index) => lefts[index] + widths[index]);
    const bottoms = clones.map((_clone, index) => tops[index] + heights[index]);
    const left = Math.min(...lefts);
    const top = Math.min(...tops);
    const right = Math.max(...rights);
    const bottom = Math.max(...bottoms);

    return {
      left,
      top,
      width: right - left,
      height: bottom - top,
    };
  }

  private getCursorFileCards(cursorFile: HTMLElement): HTMLElement[] {
    const cards = Array.from(cursorFile.querySelectorAll<HTMLElement>(".wa-cursor-file__card"));
    return cards.length ? cards : [cursorFile];
  }

  private getCursorFileCardRotation(index: number, sourceCount: number): number {
    return sourceCount > 1 ? FILE_DROP_LANDING.rotations[index] ?? 0 : 0;
  }

  private getElementLocalRect(rect: DOMRect, container: HTMLElement): Pick<DOMRect, "left" | "top"> {
    const containerRect = container.getBoundingClientRect();

    return {
      left: rect.left - containerRect.left,
      top: rect.top - containerRect.top,
    };
  }

  private interpolate(from: number, to: number, progress: number): number {
    return from + (to - from) * progress;
  }

  private parseCssColor(value: string): RgbaColor | null {
    const oklchColor = this.parseOklchColor(value);
    if (oklchColor) return oklchColor;

    const matches = value.match(/[\d.]+/g);

    if (!matches || matches.length < 3) return null;

    return {
      r: Number(matches[0]),
      g: Number(matches[1]),
      b: Number(matches[2]),
      a: matches[3] === undefined ? 1 : Number(matches[3]),
    };
  }

  private parseOklchColor(value: string): RgbaColor | null {
    const match = value.match(/oklch\((.*)\)/i);
    if (!match) return null;

    const [main, alphaPart] = match[1].split("/");
    const parts = main.trim().split(/\s+/);
    if (parts.length < 3) return null;

    const lightness = this.parseCssColorComponent(parts[0], 1);
    const chroma = Number(parts[1]);
    const hue = Number.parseFloat(parts[2]);
    const alpha = alphaPart ? this.parseCssColorComponent(alphaPart.trim(), 1) : 1;
    if (![lightness, chroma, hue, alpha].every(Number.isFinite)) return null;

    const hueRadians = (hue * Math.PI) / 180;
    const labA = chroma * Math.cos(hueRadians);
    const labB = chroma * Math.sin(hueRadians);
    const lPrime = lightness + 0.3963377774 * labA + 0.2158037573 * labB;
    const mPrime = lightness - 0.1055613458 * labA - 0.0638541728 * labB;
    const sPrime = lightness - 0.0894841775 * labA - 1.291485548 * labB;
    const l = lPrime ** 3;
    const m = mPrime ** 3;
    const s = sPrime ** 3;
    const linearR = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    const linearG = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    const linearB = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;

    return {
      r: this.oklchLinearToSrgb(linearR) * 255,
      g: this.oklchLinearToSrgb(linearG) * 255,
      b: this.oklchLinearToSrgb(linearB) * 255,
      a: clampUnit(alpha),
    };
  }

  private parseCssColorComponent(value: string, percentScale: number): number {
    return value.endsWith("%") ? Number.parseFloat(value) / 100 * percentScale : Number(value);
  }

  private oklchLinearToSrgb(value: number): number {
    const clamped = Math.min(1, Math.max(0, value));
    const srgb = clamped <= 0.0031308 ? 12.92 * clamped : 1.055 * clamped ** (1 / 2.4) - 0.055;

    return Math.min(1, Math.max(0, srgb));
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
    scrollAnchor: HTMLElement | null = null,
    scrollOffset = 0,
  ): gsap.core.Timeline {
    return gsap.timeline().add(this.revealMessage(message, scrollAnchor, scrollOffset)).to(targets, vars, position);
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
    scrollAnchor: HTMLElement | null = null,
  ): gsap.core.Timeline {
    const message = this.claimComponentMessage(kind, content);

    return this.revealPreparedItems(message, this.resolveRevealTargets(content, targets), preset, scrollAnchor);
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
    scrollAnchor: HTMLElement | null = null,
    scrollOffset = 0,
  ): gsap.core.Timeline {
    if (targets.length) gsap.set(targets, { ...preset.from });

    return this.revealMessageWithChildren(
      message,
      targets,
      { ...preset.to },
      preset.position,
      scrollAnchor,
      scrollOffset,
    ).call(
      () => this.animateMessageScrollIntoView(message, CHAT_SCROLL_MOTION.followDuration, scrollAnchor, scrollOffset),
      undefined,
      "+=0.02",
    );
  }

  private revealMessage(message: HTMLElement, scrollAnchor: HTMLElement | null = null, scrollOffset = 0): gsap.core.Timeline {
    let scrollTarget = 0;

    return gsap
      .timeline()
      .call(() => {
        this.scrollTween?.kill();
        this.scrollTween = null;
        message.style.display = "grid";
        if (this.composerVisible) this.pinThreadToBottom();
        scrollTarget = this.getMessageScrollTarget(message, scrollAnchor, scrollOffset);
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
    const { message, body } = this.claimMessageShell(
      role,
      role,
      role === "user" ? "right center" : "left center",
    );

    body.replaceChildren(document.createTextNode(text));

    return message;
  }

  private claimComponentMessage(kind: ComponentKind, content: HTMLElement): HTMLElement {
    const { message, body } = this.claimMessageShell("assistant", "assistant-component", "left center");

    message.classList.add("wa-message--component", `wa-message--${kind}`);
    body.replaceChildren(content);

    return message;
  }

  private claimUserComponentMessage(kind: "file", content: HTMLElement): HTMLElement {
    const { message, body } = this.claimMessageShell("user", "user", "right center");

    message.classList.add("wa-message--component", `wa-message--${kind}`);
    body.replaceChildren(content);

    return message;
  }

  private claimMessageShell(
    role: "user" | "assistant",
    idPrefix: string,
    transformOrigin: string,
  ): { message: HTMLElement; body: HTMLElement; index: number } {
    const index = this.messageIndex;
    const message = this.messagePool[index] ?? this.createMessage(index);
    const body = this.getMessageBody(message);

    this.messageIndex += 1;
    message.dataset.messageRole = role;
    message.dataset.messageId = `${idPrefix}-${index}`;
    this.resetMessageClasses(message);
    message.classList.toggle("wa-message--first-active", index === 0);
    message.style.display = "none";
    delete body.dataset.streaming;
    body.replaceChildren();
    this.thread.append(message);
    gsap.set(message, {
      autoAlpha: 0,
      y: 16,
      scale: 0.985,
      transformOrigin,
    });

    return { message, body, index };
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

  private createCursorFile(fileName: string, fileType = "CSV", stackFiles: UploadedFileConfig[] = []): HTMLElement {
    const file = document.createElement("div");
    file.className = "wa-cursor-file";
    file.setAttribute("aria-hidden", "true");

    const stackCount = this.getCursorFileStackCount(fileName, stackFiles);

    if (stackCount > 1) {
      file.classList.add("wa-cursor-file--stack");
      file.append(...this.createCursorFileStack(fileName, fileType, stackCount, stackFiles));
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

      if (cursor.el.dataset.cursorMode !== "drag") cursor.setMode("drag");

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
    const rootRect = this.root.getBoundingClientRect();
    const viewportRightInRoot = window.innerWidth - rootRect.left;
    const fileLeftWhenCentered = point.x - fileWidth * 0.5;
    const offscreenLeft = viewportRightInRoot + CURSOR_FILE_ENTRY.offscreenMargin;

    return {
      x: Math.max(0, offscreenLeft - fileLeftWhenCentered),
      y: 0,
    };
  }

  private getCursorFileStackCount(fileName: string, stackFiles: UploadedFileConfig[] = []): number {
    if (stackFiles.length > 1) return Math.max(1, Math.min(4, stackFiles.length));

    const match = fileName.match(/^(\d+)\s+/);
    return match ? Math.max(1, Math.min(4, Number(match[1]))) : 1;
  }

  private createCursorFileStack(
    fileName: string,
    fileType: string,
    count: number,
    stackFiles: UploadedFileConfig[] = [],
  ): HTMLElement[] {
    const items = this.getCursorFileStackItems(fileName, fileType, count, stackFiles);

    return items.map((item) => {
      const card = this.createCursorFileCard(item.name, item.type);
      card.classList.add("wa-cursor-file__card--stacked");
      return card;
    });
  }

  private getCursorFileStackItems(
    fileName: string,
    fileType: string,
    count: number,
    stackFiles: UploadedFileConfig[] = [],
  ): Array<{ name: string; type?: string }> {
    if (stackFiles.length) {
      return stackFiles.slice(0, count).map((file) => ({
        name: file.name,
        type: file.type,
      }));
    }

    if (fileName.toLowerCase().includes("context")) {
      return [
        { name: "battlecards.pdf", type: "PDF" },
        { name: "positioning-memo.docx", type: "DOC" },
        { name: "icp-context.md", type: "MD" },
        { name: "outbound-playbook.pdf", type: "PDF" },
      ].slice(0, count);
    }

    return Array.from({ length: count }, (_item, index) => ({
      name: index === 0 ? fileName : `File ${index + 1}`,
      type: fileType,
    }));
  }

  private createCursorFileCard(fileName: string, fileType?: string): HTMLElement {
    const displayType = this.getFileDisplayType(fileName, fileType);
    const card = document.createElement("span");
    card.className = "wa-cursor-file__card";
    card.dataset.fileTone = this.getFileTone(displayType);

    const icon = document.createElement("span");
    icon.className = "wa-cursor-file__icon";
    icon.textContent = displayType;

    const name = document.createElement("span");
    name.className = "wa-cursor-file__name";
    name.textContent = fileName;

    card.append(icon, name);
    return card;
  }

  private createUploadedFile(fileName: string, detail: string, fileType?: string): HTMLElement {
    const displayType = this.getFileDisplayType(fileName, fileType);
    const file = document.createElement("div");
    file.className = "wa-uploaded-file";
    file.dataset.fileTone = this.getFileTone(displayType);

    const icon = document.createElement("span");
    icon.className = "wa-uploaded-file__icon";
    icon.textContent = displayType;

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
    stack.dataset.uploadedFileCount = String(files.length);

    const list = document.createElement("div");
    list.className = "wa-uploaded-files__list";
    files.forEach((fileConfig) => {
      const file = this.createUploadedFile(fileConfig.name, fileConfig.detail, fileConfig.type);
      list.append(file);
    });

    stack.append(list);
    return stack;
  }

  private getFileDisplayType(fileName: string, fileType?: string): string {
    const explicitType = fileType?.trim().replace(/^\./, "");
    if (explicitType) return explicitType.toUpperCase();

    const extension = fileName.trim().split(".").pop();
    return extension && extension !== fileName ? extension.toUpperCase() : "FILE";
  }

  private getFileTone(displayType: string): string {
    const type = displayType.toLowerCase();

    if (type === "csv" || type === "xls" || type === "xlsx") return "spreadsheet";
    if (type === "pdf") return "pdf";
    if (type === "doc" || type === "docx") return "doc";
    if (type === "txt" || type === "md") return "text";
    if (type === "ppt" || type === "pptx") return "ppt";
    return "default";
  }

  private streamThinkingHeader(thinkingHeader: HTMLElement): gsap.core.Timeline {
    return this.streamThinkingChild(thinkingHeader, ".wa-thinking__title", THINKING_HEADER_STREAM);
  }

  private streamThinkingStepLabel(item: HTMLElement): gsap.core.Timeline {
    return this.streamThinkingChild(item, ".wa-research-step__label", THINKING_LABEL_STREAM);
  }

  private streamThinkingStepDetail(item: HTMLElement): gsap.core.Timeline {
    return this.streamThinkingChild(item, ".wa-research-step__detail", THINKING_STEP_STREAM);
  }

  private streamThinkingChild(root: HTMLElement, selector: string, timing: StreamTiming): gsap.core.Timeline {
    const target = root.querySelector<HTMLElement>(selector);
    const text = target?.dataset.fullText ?? target?.textContent ?? "";

    if (!target || !text) return gsap.timeline();

    return this.streamText(target, text, {
      duration: this.getStreamDuration(text, timing),
      targetForScroll: this.getMessageScrollTargetElement(root),
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
      ".wa-research-step__detail, .wa-sequence-thinking-progress",
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
        this.animateMessageScrollIntoView(this.getMessageScrollTargetElement(item));
      });
  }

  private getMessageScrollTargetElement(element: HTMLElement): HTMLElement {
    return element.closest<HTMLElement>(".wa-message") ?? element;
  }

  private prepareThinkingMessage(
    thinking: ClaimedThinkingMessage,
    items: HTMLElement[],
    itemStartY: number,
  ): void {
    items.forEach((item) => {
      item.dataset.stepState = "pending";
    });
    gsap.set(thinking.header, { autoAlpha: 0, y: 5 });
    gsap.set(thinking.traveler, { autoAlpha: 0, x: 0, y: 0 });
    gsap.set(thinking.steps, { display: "grid", autoAlpha: 1, y: 0 });
    thinking.title.dataset.thinkingActive = "true";
    this.resetThinkingGuide(thinking);
    gsap.set(items, { autoAlpha: 0, y: itemStartY, display: "none" });
  }

  private revealThinkingHeader(thinking: ClaimedThinkingMessage, duration: number): gsap.core.Timeline {
    if (this.consumeSignupLogoTransfer()) {
      return this.revealThinkingHeaderFromSignupLogo(thinking, duration);
    }

    return gsap.timeline()
      .to(thinking.header, {
        autoAlpha: 1,
        y: 0,
        duration: motionDuration(duration),
        ease: "power2.out",
      })
      .call(() => this.snapThinkingLogoTo(thinking, thinking.headerGlyph))
      .to(thinking.traveler, {
        autoAlpha: 1,
        duration: motionDuration(0.12),
        ease: "power2.out",
      }, "<")
      .add(this.streamThinkingHeader(thinking.header), "-=0.08");
  }

  private revealThinkingHeaderFromSignupLogo(
    thinking: ClaimedThinkingMessage,
    duration: number,
  ): gsap.core.Timeline {
    let transfer: SignupLogoTransfer | null = null;
    const progress = { value: 0 };

    return gsap.timeline()
      .call(() => {
        transfer = this.createSignupLogoTransfer(thinking.headerGlyph);
        gsap.set(this.signupLogo, { autoAlpha: 0 });
        gsap.set(thinking.header, { autoAlpha: 1, y: 0 });
        gsap.set(thinking.traveler, { autoAlpha: 0 });
        this.snapThinkingLogoTo(thinking, thinking.headerGlyph);
      })
      .add(this.streamThinkingHeader(thinking.header), motionDuration(Math.min(duration, 0.16)))
      .to(progress, {
        value: 1,
        duration: SIGNUP_LOGO_TRANSFER.duration,
        ease: SIGNUP_LOGO_TRANSFER.ease,
        overwrite: "auto",
        onUpdate: () => this.renderSignupLogoTransfer(transfer, progress.value),
      }, 0)
      .call(() => {
        this.renderSignupLogoTransfer(transfer, 1);
        this.snapThinkingLogoTo(thinking, thinking.headerGlyph);
        gsap.set(thinking.traveler, { autoAlpha: 1 });
        transfer?.el.remove();
      });
  }

  private consumeSignupLogoTransfer(): boolean {
    const shouldTransfer = this.transferSignupLogoOnNextThinking;
    this.transferSignupLogoOnNextThinking = false;

    if (!shouldTransfer) return false;
    if (!this.signupLogo.isConnected) return false;

    const rect = this.signupLogo.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  private createSignupLogoTransfer(target: HTMLElement): SignupLogoTransfer {
    const sourceRect = this.signupLogo.getBoundingClientRect();
    const sourcePosition = this.getElementLocalRect(sourceRect, this.chatBody);
    const clone = this.signupLogo.cloneNode(true) as HTMLElement;

    clone.className = "wa-signup-logo-transfer";
    clone.removeAttribute("data-signup-logo-target");
    clone.setAttribute("aria-hidden", "true");
    this.chatBody.append(clone);
    gsap.set(clone, {
      width: sourceRect.width,
      height: sourceRect.height,
      x: sourcePosition.left,
      y: sourcePosition.top,
      color: getComputedStyle(this.signupLogo).color,
      autoAlpha: 1,
    });
    gsap.set(target, { autoAlpha: 1 });

    return {
      el: clone,
      startX: sourcePosition.left,
      startY: sourcePosition.top,
      startWidth: sourceRect.width,
      startHeight: sourceRect.height,
      target,
      setX: gsap.quickSetter(clone, "x", "px") as (value: number) => void,
      setY: gsap.quickSetter(clone, "y", "px") as (value: number) => void,
      setWidth: gsap.quickSetter(clone, "width", "px") as (value: number) => void,
      setHeight: gsap.quickSetter(clone, "height", "px") as (value: number) => void,
    };
  }

  private renderSignupLogoTransfer(transfer: SignupLogoTransfer | null, progress: number): void {
    if (!transfer) return;

    const targetRect = transfer.target.getBoundingClientRect();
    const targetPosition = this.getElementLocalRect(targetRect, this.chatBody);
    const easedProgress = smoothstep(progress);

    transfer.setX(this.interpolate(transfer.startX, targetPosition.left, easedProgress));
    transfer.setY(this.interpolate(transfer.startY, targetPosition.top, easedProgress));
    transfer.setWidth(this.interpolate(transfer.startWidth, targetRect.width, easedProgress));
    transfer.setHeight(this.interpolate(transfer.startHeight, targetRect.height, easedProgress));
    gsap.set(transfer.el, {
      color: progress > 0.78 ? SIGNUP_LOGO_TRANSFER.targetColor : getComputedStyle(this.signupLogo).color,
    });
  }

  private addThinkingStepReveal(
    tl: gsap.core.Timeline,
    item: HTMLElement,
    options: { position?: string | number } = {},
  ): gsap.core.Timeline {
    return tl
      .to(
        item,
        {
          autoAlpha: 1,
          y: 0,
          duration: motionDuration(0.26),
          ease: "power2.out",
        },
        options.position ?? "<",
      )
      .add(this.streamThinkingStepLabel(item), THINKING_STEP_STREAM.startOverlap)
      .add(this.streamThinkingStepDetail(item), "-=0.02");
  }

  private createThinkingStepReveal(item: HTMLElement): gsap.core.Timeline {
    return this.addThinkingStepReveal(gsap.timeline(), item, { position: 0 });
  }

  private addThinkingStepStreams(tl: gsap.core.Timeline, items: HTMLElement[]): void {
    items.forEach((item, index) => {
      tl.add(this.streamThinkingStepLabel(item), index === 0 ? THINKING_STEP_STREAM.startOverlap : "<");
    });
    items.forEach((item, index) => {
      tl.add(this.streamThinkingStepDetail(item), index === 0 ? "-=0.02" : "<");
    });
  }

  private markThinkingStepsComplete(items: HTMLElement[]): void {
    items.forEach((item) => {
      item.dataset.stepState = "complete";
    });
  }

  private getThinkingLogoTargetPosition(
    thinking: ClaimedThinkingMessage,
    target: HTMLElement,
    transformReference?: HTMLElement,
  ): { x: number; y: number } {
    const block = thinking.message.querySelector<HTMLElement>(".wa-thinking-block");
    const baseRect = (block ?? thinking.message).getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const logoWidth = thinking.traveler.offsetWidth || thinking.headerGlyph.offsetWidth || 18;
    const logoHeight = thinking.traveler.offsetHeight || thinking.headerGlyph.offsetHeight || 11;
    const currentX = transformReference ? Number(gsap.getProperty(transformReference, "x")) || 0 : 0;
    const currentY = transformReference ? Number(gsap.getProperty(transformReference, "y")) || 0 : 0;

    return {
      x: targetRect.left - baseRect.left + (targetRect.width - logoWidth) / 2 - currentX,
      y: targetRect.top - baseRect.top + (targetRect.height - logoHeight) / 2 - currentY,
    };
  }

  private snapThinkingLogoTo(thinking: ClaimedThinkingMessage, target: HTMLElement): void {
    const position = this.getThinkingLogoTargetPosition(thinking, target);

    gsap.set(thinking.traveler, position);
  }

  private moveThinkingLogoTo(
    thinking: ClaimedThinkingMessage,
    target: HTMLElement,
    duration = THINKING_LOGO_TRAVEL.duration,
    transformReference?: HTMLElement,
  ): gsap.core.Timeline {
    return gsap.timeline().to(thinking.traveler, {
      x: () => this.getThinkingLogoTargetPosition(thinking, target, transformReference).x,
      y: () => this.getThinkingLogoTargetPosition(thinking, target, transformReference).y,
      duration,
      ease: THINKING_LOGO_TRAVEL.ease,
      overwrite: "auto",
    });
  }

  private getThinkingGuideStart(thinking: ClaimedThinkingMessage): number {
    const value = getComputedStyle(thinking.steps).getPropertyValue("--wa-thinking-guide-top");
    const start = Number.parseFloat(value);

    return Number.isFinite(start) ? start : 0;
  }

  private resetThinkingGuide(thinking: ClaimedThinkingMessage): void {
    thinking.steps.style.setProperty("--wa-thinking-guide-end", `${this.getThinkingGuideStart(thinking)}px`);
  }

  private getThinkingGuideTargetPosition(
    thinking: ClaimedThinkingMessage,
    target: HTMLElement,
    transformReference?: HTMLElement,
  ): number {
    const stepsRect = thinking.steps.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const referenceY = transformReference ? Number(gsap.getProperty(transformReference, "y")) || 0 : 0;
    const targetCenter = targetRect.top - stepsRect.top + targetRect.height / 2 - referenceY;

    return Math.max(this.getThinkingGuideStart(thinking), targetCenter);
  }

  private moveThinkingGuideTo(
    thinking: ClaimedThinkingMessage,
    target: HTMLElement,
    duration = THINKING_LOGO_TRAVEL.duration,
    transformReference?: HTMLElement,
  ): gsap.core.Timeline {
    return gsap.timeline().to(thinking.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideTargetPosition(thinking, target, transformReference)}px`,
      duration,
      ease: THINKING_LOGO_TRAVEL.ease,
      overwrite: "auto",
    } as gsap.TweenVars);
  }

  private moveThinkingGuideToStart(
    thinking: ClaimedThinkingMessage,
    duration = THINKING_LOGO_TRAVEL.returnDuration,
  ): gsap.core.Timeline {
    return gsap.timeline().to(thinking.steps, {
      "--wa-thinking-guide-end": () => `${this.getThinkingGuideStart(thinking)}px`,
      duration,
      ease: THINKING_LOGO_TRAVEL.ease,
      overwrite: "auto",
    } as gsap.TweenVars);
  }

  private moveThinkingLogoToStep(thinking: ClaimedThinkingMessage, item: HTMLElement | undefined): gsap.core.Timeline {
    const target = item?.querySelector<HTMLElement>(".wa-research-step__marker");

    if (!target) return gsap.timeline();

    return gsap.timeline()
      .add(this.moveThinkingLogoTo(thinking, target, THINKING_LOGO_TRAVEL.duration, item), 0)
      .add(this.moveThinkingGuideTo(thinking, target, THINKING_LOGO_TRAVEL.duration, item), 0);
  }

  private collapseThinkingToHeader(thinking: ClaimedThinkingMessage, items: HTMLElement[]): gsap.core.Timeline {
    return gsap.timeline()
      .call(() => {
        this.markThinkingStepsComplete(items);
        this.setLocalLogoMode(thinking.traveler, "done");
        gsap.set(thinking.steps, {
          height: thinking.steps.offsetHeight,
          overflow: "hidden",
        });
      })
      .add(this.moveThinkingLogoTo(thinking, thinking.headerGlyph, THINKING_LOGO_TRAVEL.returnDuration), 0)
      .add(this.moveThinkingGuideToStart(thinking, THINKING_LOGO_TRAVEL.returnDuration), 0)
      .to(thinking.steps, {
        autoAlpha: 0,
        y: THINKING_BLOCK_COLLAPSE.y,
        height: 0,
        duration: THINKING_BLOCK_COLLAPSE.duration,
        ease: THINKING_BLOCK_COLLAPSE.ease,
        onComplete: () => this.setThinkingHeaderCollapsed(thinking),
        onReverseComplete: () => this.setThinkingHeaderActive(thinking),
      }, 0)
      .call(() => {
        gsap.set(thinking.steps, {
          display: "none",
          height: "",
          overflow: "",
          y: 0,
        });
        this.animateMessageScrollIntoView(thinking.message);
      });
  }

  private getActiveThinkingTitle(titleText = DEFAULT_THINKING_TITLE): string {
    const title = titleText.trim() || DEFAULT_THINKING_TITLE;

    if (/^thinking(?:\.\.\.)?$/i.test(title)) return "Thinking...";

    return title;
  }

  private setThinkingHeaderActive(thinking: ClaimedThinkingMessage): void {
    const title = this.getActiveThinkingTitle(thinking.title.dataset.activeText);

    thinking.title.dataset.fullText = title;
    thinking.title.textContent = title;
    thinking.title.dataset.thinkingActive = "true";
    delete thinking.title.dataset.streaming;
    gsap.set(thinking.elapsed, { display: "", autoAlpha: 1 });
  }

  private setThinkingHeaderCollapsed(thinking: ClaimedThinkingMessage): void {
    const elapsedText = thinking.elapsed.dataset.elapsedTarget || thinking.elapsed.textContent?.trim() || "";
    const title = elapsedText ? `Thought for ${elapsedText}` : "Thought";

    thinking.title.dataset.fullText = title;
    thinking.title.textContent = title;
    delete thinking.title.dataset.thinkingActive;
    delete thinking.title.dataset.streaming;
    gsap.set(thinking.elapsed, { display: "none" });
  }

  private runThinkingSequence(thinkingState: NormalizedThinkingState, options: ThinkingSequenceOptions): gsap.core.Timeline {
    const tl = gsap.timeline();
    const items = thinkingState.items.map((item, index) => this.createThinkingStep(item, index));
    const elapsedLabel = thinkingState.elapsed ?? this.getThinkingElapsed(thinkingState.items.length);
    const thinking = this.claimThinkingMessage(items, elapsedLabel, thinkingState.title);

    tl.call(() => this.prepareThinkingMessage(thinking, items, options.itemStartY))
      .add(this.revealMessage(thinking.message))
      .add(this.revealThinkingHeader(thinking, options.headerDuration));

    thinkingState.items.forEach((_item, index) => {
      const item = items[index];
      const position = index === 0 ? "+=0" : `+=${options.hold}`;

      tl.call(() => this.activateThinkingStep(items, index), undefined, position)
        .add(this.moveThinkingLogoToStep(thinking, item), "<")
        .add(this.createThinkingStepReveal(item), "<")
        .to({}, { duration: options.afterStepHold })
        .add(this.foldThinkingStep(item));
    });

    tl.add(this.collapseThinkingToHeader(thinking, items), `+=${options.finalHold}`);
    this.addThinkingElapsedTimer(tl, thinking.elapsed, elapsedLabel);
    return tl;
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

  private claimThinkingMessage(
    items: HTMLElement[],
    elapsedText: string,
    titleText = DEFAULT_THINKING_TITLE,
  ): ClaimedThinkingMessage {
    const content = document.createElement("div");
    content.className = "wa-thinking-block";

    const header = document.createElement("div");
    header.className = "wa-thinking";

    const glyph = this.createThinkingLogo();
    glyph.dataset.logoRole = "shadow";
    const traveler = this.createThinkingLogo("wa-thinking-logo-traveler");

    const title = document.createElement("span");
    const activeTitle = this.getActiveThinkingTitle(titleText);

    title.className = "wa-thinking__title";
    title.dataset.activeText = titleText;
    title.dataset.fullText = activeTitle;
    title.dataset.thinkingActive = "true";
    title.textContent = "";

    const elapsed = document.createElement("span");
    elapsed.className = "wa-thinking__elapsed";
    elapsed.dataset.elapsedTarget = elapsedText;
    elapsed.textContent = "0s";

    const steps = document.createElement("div");
    steps.className = "wa-research-steps";
    steps.dataset.researchSteps = "";
    steps.append(...items);

    header.append(glyph, title, elapsed);
    content.append(header, steps, traveler);

    return {
      message: this.claimComponentMessage("thinking", content),
      header,
      headerGlyph: glyph,
      title,
      traveler,
      elapsed,
      steps,
    };
  }

  private addThinkingElapsedTimer(tl: gsap.core.Timeline, elapsed: HTMLElement, finalLabel: string): void {
    addTimelineElapsedTimer(tl, elapsed, finalLabel, { reducedMotion: this.prefersReducedMotion });
  }

  private createThinkingLogo(className = "wa-thinking__glyph"): HTMLElement {
    const glyph = document.createElement("span");

    glyph.className = className;
    glyph.dataset.logoMode = "thinking";
    glyph.setAttribute("aria-hidden", "true");
    glyph.append(createUnifyMarkSvg("wa-thinking__logo-mark"));
    return glyph;
  }

  private setLocalLogoMode(glyph: HTMLElement | null | undefined, mode: "thinking" | "done" | "static"): void {
    if (glyph) glyph.dataset.logoMode = mode;
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
    this.messageBodies.set(message, body);

    return message;
  }

  private getMessageBody(message: HTMLElement): HTMLElement {
    const cached = this.messageBodies.get(message);
    if (cached) return cached;

    const body = message.querySelector<HTMLElement>("[data-message-body]");
    if (!body) throw new Error("ChatActor: message body missing");

    this.messageBodies.set(message, body);
    return body;
  }

  private getLastMessageBody(): HTMLElement | null {
    const message = this.messagePool[this.messageIndex - 1];

    return message ? this.getMessageBody(message) : null;
  }

  private createThinkingStep(itemConfig: NormalizedThinkingItem, index: number): HTMLElement {
    const item = document.createElement("div");
    item.className = "wa-research-step";
    item.dataset.researchStep = String(index);
    item.dataset.stepState = index === 0 ? "current" : "complete";

    const marker = document.createElement("span");
    marker.className = "wa-research-step__marker";
    marker.setAttribute("aria-hidden", "true");

    const body = document.createElement("span");
    body.className = "wa-research-step__body";

    const labelRow = document.createElement("span");
    labelRow.className = "wa-research-step__label-row";

    const label = document.createElement("span");
    label.className = "wa-research-step__label";
    label.dataset.fullText = itemConfig.label;
    label.textContent = "";

    const detail = document.createElement("span");
    detail.className = "wa-research-step__detail";
    detail.dataset.fullText = itemConfig.detail;
    detail.textContent = "";

    const chevron = document.createElement("span");
    chevron.className = "wa-research-step__chevron";
    chevron.setAttribute("aria-hidden", "true");

    labelRow.append(label, chevron);
    body.append(labelRow, detail);
    item.append(marker, body);
    return item;
  }

  private getThinkingDetail(labelText: string, index: number): string {
    return getDefaultThinkingDetail(labelText, index);
  }

  private getThinkingElapsed(stepCount: number): string {
    return getThinkingElapsedLabel(stepCount);
  }

  private normalizeThinkingInput(input: ThinkingInput): NormalizedThinkingState {
    if (this.isThinkingStateConfig(input)) {
      const items = input.items.map((item, index) => this.normalizeThinkingItem(item, index));
      return {
        title: input.title || DEFAULT_THINKING_TITLE,
        elapsed: input.elapsed,
        items: items.length ? items : [this.normalizeThinkingItem(DEFAULT_THINKING_TITLE, 0)],
      };
    }

    const items = (Array.isArray(input) ? input : [input]).map((item, index) =>
      this.normalizeThinkingItem(item, index),
    );

    return {
      title: DEFAULT_THINKING_TITLE,
      items: items.length ? items : [this.normalizeThinkingItem(DEFAULT_THINKING_TITLE, 0)],
    };
  }

  private normalizeThinkingItem(item: string | ThinkingItemConfig, index: number): NormalizedThinkingItem {
    const label = typeof item === "string" ? item : item.label;

    return {
      label,
      detail: typeof item === "string" ? this.getThinkingDetail(label, index) : item.detail || this.getThinkingDetail(label, index),
      disclosure:
        typeof item === "string"
          ? index === 0
            ? DEFAULT_THINKING_DISCLOSURE
            : DEFAULT_THINKING_COLLAPSED_DISCLOSURE
          : item.disclosure || (index === 0 ? DEFAULT_THINKING_DISCLOSURE : DEFAULT_THINKING_COLLAPSED_DISCLOSURE),
    };
  }

  private isThinkingStateConfig(input: ThinkingInput): input is ThinkingStateConfig {
    return Boolean(input && typeof input === "object" && !Array.isArray(input) && "items" in input);
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
    if (config.scrollAlign) table.dataset.scrollAlign = config.scrollAlign;
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
      } else if (column.key === "mutualConnection") {
        cell.append(this.createDataTablePerson(values, values[column.key] ?? "", {
          detailKey: "mutualConnectionDetail",
          avatarToneKey: "mutualConnectionAvatarTone",
          avatarUrlKey: "mutualConnectionAvatarUrl",
          avatarKey: "mutualConnectionAvatar",
          sourceKey: "mutualConnectionSource",
        }));
        if (values.mutualConnectionBadge) cell.append(this.createDataTableCellBadge(values.mutualConnectionBadge));
      } else {
        const value = values[column.key] ?? "";
        const text = document.createElement("span");
        text.className = "wa-data-table__cell-text";
        text.textContent = value || "-";
        cell.append(text);
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
      add.append(this.createDataTableAddIcon());
      row.append(add);
    }

    return row;
  }

  private createDataTableAddIcon(): SVGSVGElement {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("wa-data-table__add-icon");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    for (const d of ["M12 5v14", "M5 12h14"]) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      svg.append(path);
    }

    return svg;
  }

  private createDataTableCellBadge(label: string): HTMLElement {
    const badge = document.createElement("span");

    badge.className = "wa-data-table-cell-badge";
    badge.textContent = label;
    return badge;
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

    const label = document.createElement("span");
    label.className = "wa-data-table-action__label";
    label.textContent = action.label;

    button.append(this.createDataTableActionIcon(action.icon ?? "email"), label);

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
          "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
          "M15 7a2 2 0 0 1 2 2",
          "M15 3a6 6 0 0 1 6 6",
        ]
      : [
          "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
          "M3 7l9 6l9 -6",
        ];

    svg.classList.add("wa-data-table-action__icon");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
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
    this.queryElements(this.chatShell, DATA_TABLE_ACTION_SELECTOR).forEach((control) => {
      control.dataset.tooltipVisible = "false";
    });
  }

  private setDataTableControlTooltipVisible(activeControl: HTMLElement): void {
    const table = activeControl.closest<HTMLElement>(DATA_TABLE_SELECTOR);
    const controls = table
      ? this.queryElements(table, DATA_TABLE_ACTION_SELECTOR)
      : this.queryElements(this.chatShell, DATA_TABLE_ACTION_SELECTOR);

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
    return target.closest<HTMLElement>(DATA_TABLE_ACTION_SELECTOR);
  }

  private findDataTablePageButton(target: EventTarget | null): HTMLElement | null {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLElement>(DATA_TABLE_PAGE_BUTTON_SELECTOR);
  }

  private findDataTable(tableId: string): HTMLElement | null {
    return this.root.querySelector<HTMLElement>(`[data-data-table="${this.escapeSelectorValue(tableId)}"]`);
  }

  private getVisibleDataTableRows(table: HTMLElement): HTMLElement[] {
    const rows: HTMLElement[] = [];

    for (const row of table.querySelectorAll<HTMLElement>(".wa-data-table__row[data-page]")) {
      if (row.style.display !== "none") rows.push(row);
    }

    return rows;
  }

  private createDataTablePerson(
    values: Record<string, string>,
    name: string,
    options: {
      detailKey?: string;
      avatarToneKey?: string;
      avatarUrlKey?: string;
      avatarKey?: string;
      sourceKey?: string;
    } = {},
  ): HTMLElement {
    const person = document.createElement("span");
    person.className = "wa-data-table-person";

    const avatarWrap = document.createElement("span");
    avatarWrap.className = "wa-data-table-person__avatar-wrap";

    const avatar = document.createElement("span");
    avatar.className = "wa-data-table-person__avatar";
    avatar.dataset.avatarTone = values[options.avatarToneKey ?? "avatarTone"] ?? "1";
    this.setProfileAvatar(
      avatar,
      name,
      values[options.avatarUrlKey ?? "avatarUrl"],
      values[options.avatarKey ?? "avatar"],
    );

    const source = document.createElement("span");
    source.className = "wa-data-table-person__source";
    source.dataset.source = values[options.sourceKey ?? "source"] ?? "default";
    source.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.className = "wa-data-table-person__name";
    label.textContent = name || "-";

    avatarWrap.append(avatar, source);
    const copy = document.createElement("span");
    copy.className = "wa-data-table-person__copy";
    copy.append(label);

    const detailText = values[options.detailKey ?? "prospectDetail"] || values.personDetail || "";
    if (detailText) {
      const detail = document.createElement("span");
      detail.className = "wa-data-table-person__detail";
      detail.textContent = detailText;
      copy.append(detail);
    }

    person.append(avatarWrap, copy);
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

  private setProfileAvatar(
    avatar: HTMLElement,
    name: string,
    explicitUrl?: string,
    fallbackText?: string,
  ): void {
    const avatarUrl = getProfilePhotoUrl(name, explicitUrl);

    avatar.replaceChildren();
    avatar.dataset.hasPhoto = String(Boolean(avatarUrl));

    if (!avatarUrl) {
      avatar.textContent = fallbackText ?? this.getInitials(name);
      return;
    }

    const img = document.createElement("img");

    img.alt = "";
    img.decoding = "async";
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    img.src = avatarUrl;
    img.addEventListener("error", () => {
      if (!avatar.contains(img)) return;
      avatar.dataset.hasPhoto = "false";
      avatar.textContent = fallbackText ?? this.getInitials(name);
    }, { once: true });
    avatar.append(img);
  }

  private createEnrichmentPanel(config: EnrichmentConfig): HTMLElement {
    const panel = document.createElement("article");
    panel.className = "wa-enrichment-panel wa-waterfall-thinking";
    panel.dataset.enrichmentPanel = config.id;

    const header = document.createElement("div");
    header.className = "wa-enrichment-panel__header";

    const icon = this.createThinkingLogo();

    const title = document.createElement("span");
    title.className = "wa-thinking__title";
    title.textContent = "Enriching";

    const elapsed = document.createElement("span");
    elapsed.className = "wa-thinking__elapsed";
    elapsed.dataset.elapsedTarget = "4m 20s";
    elapsed.textContent = "0s";

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

    const surface = document.createElement("div");
    surface.className = "wa-strategy-plan__surface";

    const title = document.createElement("h3");
    title.className = "wa-strategy-plan__title";
    title.textContent = plan.title;

    const bullets = document.createElement("ul");
    bullets.className = "wa-strategy-plan__bullets";

    for (const item of this.getStrategyPlanBullets(plan)) {
      const bullet = document.createElement("li");
      bullet.textContent = item;
      bullets.append(bullet);
    }

    surface.append(title, bullets);
    card.append(surface);
    return card;
  }

  private getStrategyPlanBullets(plan: StrategyPlanConfig): string[] {
    if (plan.bullets?.length) return plan.bullets;
    if (plan.summary) return plan.summary.split(/\n+/).map((item) => item.trim()).filter(Boolean);

    return [plan.audience, plan.motion, plan.proof].filter((item): item is string => Boolean(item));
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
    const scaler = document.createElement("div");
    const groupedList = document.createElement("div");
    const header = section.querySelector<HTMLElement>(".wa-data-source-grid__header");
    const groups = this.groupDataSources(config.sources);

    section.classList.add("wa-data-source-grid--marketing");
    section.dataset.marketingDataSourcesGrid = config.id;
    scaler.className = "wa-data-source-grid__scale";
    groupedList.className = "wa-data-source-grid__groups";

    MARKETING_DATA_SOURCE_COLUMNS.forEach((columnCategories) => {
      const column = document.createElement("div");
      column.className = "wa-data-source-grid__column";

      columnCategories.forEach((category) => {
        const groupConfig = groups.find((group) => group.category === category);
        if (!groupConfig) return;

        column.append(this.createMarketingDataSourceGroup(groupConfig));
      });

      groupedList.append(column);
    });

    scaler.replaceChildren(...this.compactElements(header, groupedList));
    section.replaceChildren(scaler);
    this.setMarketingDataGridScale(section);
    return section;
  }

  private setMarketingDataGridScale(section: HTMLElement): void {
    const rect = this.chatBody.getBoundingClientRect();
    const styles = getComputedStyle(this.chatBody);
    const gutterLeft = Number.parseFloat(styles.paddingLeft) || 0;
    const gutterRight = Number.parseFloat(styles.paddingRight) || gutterLeft;
    const widthScale = Math.max(0, rect.width - gutterLeft - gutterRight) / MARKETING_DATA_GRID_ARTBOARD.contentWidth;
    const heightScale = Math.max(0, rect.height) / MARKETING_DATA_GRID_ARTBOARD.height;
    const scale = Math.min(widthScale || 1, heightScale || 1);
    const artboardGutterLeft = scale > 0 ? gutterLeft / scale : 0;
    const artboardGutterRight = scale > 0 ? gutterRight / scale : artboardGutterLeft;
    const artboardWidth = MARKETING_DATA_GRID_ARTBOARD.contentWidth + artboardGutterLeft + artboardGutterRight;

    section.style.setProperty("--wa-data-grid-scale", String(scale));
    section.style.setProperty("--wa-data-grid-artboard-width", `${artboardWidth}px`);
    section.style.setProperty("--wa-data-grid-gutter-left", `${artboardGutterLeft}px`);
    section.style.setProperty("--wa-data-grid-gutter-right", `${artboardGutterRight}px`);
  }

  private createMarketingDataSourceGroup(groupConfig: DataSourceGroup): HTMLElement {
    const group = document.createElement("section");
    const label = document.createElement("h4");
    const list = document.createElement("div");

    group.className = "wa-data-source-group";
    group.dataset.sourceGroup = this.slugChannelName(groupConfig.category);
    label.className = "wa-data-source-group__title";
    label.textContent = groupConfig.category;
    list.className = "wa-data-source-grid__list";
    list.classList.add(`wa-data-source-grid__list--count-${groupConfig.sources.length}`);

    groupConfig.sources.forEach((source) => {
      list.append(this.createDataVendorLogo(source));
    });

    group.append(label, list);
    return group;
  }

  private createDataVendorLogo(source: DataSourceGridConfig["sources"][number]): HTMLElement {
    const logo = document.createElement("span");
    logo.className = "wa-data-vendor-logo";
    logo.dataset.vendorLogo = source.id;
    logo.title = source.detail;
    logo.style.setProperty("--wa-logo-scale", String(source.logoScale ?? 1));

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

  private createMailboxConnection(config: MailboxConnectionConfig): HTMLElement {
    const section = document.createElement("section");
    section.className = "wa-mailbox-connection";
    section.dataset.mailboxConnection = config.id;
    section.dataset.mailboxState = "idle";

    const card = document.createElement("div");
    card.className = "wa-mailbox-connection__card";

    const copy = document.createElement("span");
    copy.className = "wa-mailbox-connection__copy";

    const title = document.createElement("h3");
    title.className = "wa-mailbox-connection__title";
    title.textContent = config.title;

    if (config.subtitle) {
      const subtitle = document.createElement("p");
      subtitle.className = "wa-mailbox-connection__subtitle";
      subtitle.textContent = config.subtitle;
      copy.append(title, subtitle);
    } else {
      copy.append(title);
    }

    const actions = document.createElement("div");
    actions.className = "wa-mailbox-connection__actions";

    const gmailButton = this.createMailboxProviderButton({
      id: config.id,
      icon: "gmail",
      label: normalizeMailboxProviderButtonLabel("gmail", config.ctaLabel),
      loadingLabel: normalizeMailboxStateLabel(config.loadingLabel, "Connecting"),
      connectedLabel: normalizeMailboxProviderButtonLabel("gmail", config.status, "connected"),
      isPrimary: true,
    });

    const outlookButton = this.createMailboxProviderButton({
      icon: "outlook",
      label: normalizeMailboxProviderButtonLabel("outlook", config.secondaryCtaLabel),
    });

    actions.append(gmailButton, outlookButton);
    card.append(copy, actions);

    const learning = document.createElement("div");
    learning.className = "wa-mailbox-learning";
    learning.dataset.mailboxLearning = "";
    learning.dataset.mailboxLearningReadyDetail = config.learningReadyDetail ?? MAILBOX_LEARNING_READY_DETAIL;

    const thumbprintFrame = document.createElement("div");
    thumbprintFrame.className = "wa-mailbox-learning__thumbprint";
    thumbprintFrame.append(this.createMailboxThumbprint(config.id));

    const learningTitle = document.createElement("h4");
    learningTitle.className = "wa-mailbox-learning__title";
    const learningTitleText = document.createElement("span");
    learningTitleText.dataset.mailboxLearningTitleText = "";
    learningTitleText.textContent = config.learningTitle ?? MAILBOX_LEARNING_TITLE;
    const readyChevron = document.createElement("span");
    readyChevron.className = "wa-mailbox-learning__ready-chevron";
    readyChevron.dataset.mailboxLearningReadyChevron = "";
    readyChevron.setAttribute("aria-hidden", "true");
    learningTitle.append(learningTitleText, readyChevron);

    const learningDetail = document.createElement("p");
    learningDetail.className = "wa-mailbox-learning__detail";
    learningDetail.textContent = config.learningDetail ?? MAILBOX_LEARNING_STAGES[0].detail;

    const progress = document.createElement("div");
    progress.className = "wa-mailbox-learning__progress";
    const progressFill = document.createElement("span");
    progressFill.dataset.mailboxLearningProgress = "";
    progress.append(progressFill);

    learning.append(thumbprintFrame, learningTitle, progress, learningDetail);

    section.append(card, learning);
    return section;
  }

  private createMailboxProviderButton(options: {
    id?: string;
    icon: MailboxConnectorProvider;
    label: string;
    loadingLabel?: string;
    connectedLabel?: string;
    isPrimary?: boolean;
  }): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "wa-mailbox-connection__button";
    button.type = "button";
    button.setAttribute("aria-label", options.label);

    if (options.isPrimary && options.id) {
      button.dataset.mailboxConnect = options.id;
      button.dataset.mailboxLoadingLabel = normalizeMailboxStateLabel(options.loadingLabel, "Connecting");
      button.dataset.mailboxConnectedLabel = options.connectedLabel ?? "Gmail";
    }

    const icon = this.createMailboxProviderIcon(options.icon);
    const labelStack = document.createElement("span");
    labelStack.className = "wa-mailbox-connection__button-copy";

    const idleLabel = document.createElement("span");
    idleLabel.className = options.isPrimary ? "wa-mailbox-connection__button-label" : "wa-mailbox-connection__provider-label";
    if (options.isPrimary) {
      idleLabel.dataset.mailboxButtonLabel = "idle";
      idleLabel.setAttribute("aria-hidden", "true");
    }
    idleLabel.textContent = options.label;

    labelStack.append(idleLabel);

    if (options.isPrimary) {
      const loadingLabel = document.createElement("span");
      loadingLabel.className = "wa-mailbox-connection__button-label";
      loadingLabel.dataset.mailboxButtonLabel = "loading";
      loadingLabel.setAttribute("aria-hidden", "true");
      loadingLabel.textContent = normalizeMailboxStateLabel(options.loadingLabel, "Connecting");

      const connectedLabel = document.createElement("span");
      connectedLabel.className = "wa-mailbox-connection__button-label";
      connectedLabel.dataset.mailboxButtonLabel = "connected";
      connectedLabel.setAttribute("aria-hidden", "true");
      connectedLabel.textContent = options.connectedLabel ?? "Gmail";

      labelStack.append(loadingLabel, connectedLabel);
    }

    const spinner = document.createElement("span");
    spinner.className = "wa-mailbox-connection__spinner";
    spinner.setAttribute("aria-hidden", "true");

    button.append(icon, labelStack, spinner);
    return button;
  }

  private createMailboxProviderIcon(provider: MailboxConnectorProvider): HTMLImageElement {
    const image = document.createElement("img");
    image.className = "wa-mailbox-connection__provider-icon";
    image.src = MAILBOX_CONNECTOR_ICON_SRC[provider];
    image.alt = "";
    image.decoding = "async";
    image.loading = "eager";
    image.setAttribute("aria-hidden", "true");
    return image;
  }

  private createMailboxThumbprint(id: string): SVGSVGElement {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("wa-mailbox-thumbprint");
    svg.dataset.mailboxThumbprint = id;
    svg.setAttribute("viewBox", "0 0 200 203");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    svg.append(
      this.createMailboxThumbprintGroup("wa-mailbox-thumbprint__base"),
      this.createMailboxThumbprintGroup("wa-mailbox-thumbprint__fill", true),
    );

    return svg;
  }

  private createMailboxThumbprintGroup(className: string, isFill = false): SVGGElement {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add(className);

    MAILBOX_THUMBPRINT_PATHS.forEach((pathData, index) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathData);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-miterlimit", "10");
      if (isFill) {
        path.dataset.mailboxThumbprintPath = String(index);
        path.setAttribute("pathLength", "100");
        path.setAttribute("stroke-dasharray", "0 100");
        path.setAttribute("stroke-dashoffset", "0");
      }
      group.append(path);
    });

    return group;
  }

  private updateMailboxThumbprintFill(paths: SVGPathElement[], percent: number): void {
    paths.forEach((path, index) => {
      const amount = mailboxThumbprintSegmentProgress(index, percent);
      if (amount <= 0) {
        path.setAttribute("stroke-dasharray", "0 100");
        return;
      }

      path.setAttribute("stroke-dasharray", amount >= 100 ? "100 0" : `${amount} 100`);
    });
  }

  private createProximityLeadList(config: ProximityLeadListConfig): HTMLElement {
    const table = this.createDataTable({
      id: config.id,
      title: config.title,
      eyebrow: "ranked leads",
      count: `${config.leads.length} leads`,
      columns: [
        { key: "name", label: "Prospect", width: "1.18fr" },
        { key: "company", label: "Company", width: "0.88fr" },
        { key: "connection", label: "Connection", width: "2.05fr" },
      ],
      rows: config.leads.map((lead) => ({
        id: `proximity-${lead.rank}`,
        values: {
          name: lead.name,
          prospectDetail: lead.title,
          company: lead.company,
          connection: this.formatLeadConnection(lead),
          source: "signal",
          avatarTone: lead.rank,
          avatarUrl: lead.avatarUrl ?? "",
          score: lead.score,
        },
      })),
    });

    table.classList.add("wa-data-table--proximity");
    table.dataset.proximityList = config.id;
    return table;
  }

  private formatLeadConnection(lead: ProximityLeadListConfig["leads"][number]): string {
    const connection = lead.personalization.trim();
    const label = lead.proximity.trim();

    if (!label) return connection;
    if (!connection) return label;

    return `${label}: ${connection}`;
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
      const peopleRail = document.createElement("div");

      peopleRail.className = "wa-sequence-people";
      peopleRail.dataset.sequencePeopleRail = config.id;
      peopleRail.setAttribute("aria-label", "Sequence people");

      config.sequences.forEach((sequence, index) => {
        const person = document.createElement("button");
        const avatar = document.createElement("span");
        const copy = document.createElement("span");
        const name = document.createElement("strong");
        const meta = document.createElement("span");

        person.className = "wa-sequence-person-card";
        person.type = "button";
        person.tabIndex = -1;
        person.dataset.sequencePersonCard = `${config.id}:${index}`;
        person.dataset.sequencePersonIndex = String(index);
        person.dataset.active = String(index === 0);
        person.setAttribute("aria-pressed", String(index === 0));
        person.setAttribute("aria-label", `Preview sequence for ${sequence.name}`);
        person.addEventListener("click", () => {
          this.sequencePerson(config.id, index).play();
        });

        avatar.className = "wa-sequence-person-card__avatar";
        avatar.dataset.avatarTone = String((index % 9) + 1);
        this.setProfileAvatar(avatar, sequence.name, sequence.avatarUrl);

        copy.className = "wa-sequence-person-card__copy";
        name.textContent = sequence.name;
        meta.textContent = [sequence.title, sequence.company].filter(Boolean).join(", ");
        copy.append(name, meta);
        person.append(avatar, copy);
        peopleRail.append(person);
      });

      peopleNav = peopleRail;
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
      card.dataset.sequenceTemplateAvatarUrl = sequence.avatarUrl ?? "";
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
    kickoff.setAttribute("aria-label", config.launchLabel ?? "kick off sequence");
    kickoffLabel.className = "wa-sequence-kickoff__label";
    kickoffLabel.textContent = config.launchLabel ?? "kick off sequence";
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
    const item = this.createThinkingStep(
      {
        label: labelText,
        detail: detailText,
        disclosure: index === 0 ? DEFAULT_THINKING_DISCLOSURE : DEFAULT_THINKING_COLLAPSED_DISCLOSURE,
      },
      index,
    );
    const detail = item.querySelector<HTMLElement>(".wa-research-step__detail");
    const body = item.querySelector<HTMLElement>(".wa-research-step__body");

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
    return `wait ${days} ${days === 1 ? "day" : "days"}`;
  }

  private setActiveSequencePerson(section: HTMLElement, index: number, shouldCenter = false): void {
    const cards = this.queryElements(section, "[data-sequence-card]");
    const personCards = this.queryElements(section, "[data-sequence-person-card]");
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
    personCards.forEach((personCard) => {
      const active = Number(personCard.dataset.sequencePersonIndex) === index;

      personCard.dataset.active = String(active);
      personCard.setAttribute("aria-pressed", String(active));
    });
    if (count) count.textContent = this.getSequenceCountLabel(index, section.dataset.peopleCount ?? "");
    if (shouldCenter) this.centerSequencePersonCard(section, index);
  }

  private centerSequencePersonCard(section: HTMLElement, index: number): void {
    const rail = section.querySelector<HTMLElement>("[data-sequence-people-rail]");
    const card = rail?.querySelector<HTMLElement>(`[data-sequence-person-index="${index}"]`);

    if (!rail || !card) return;

    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const target = Math.min(maxScroll, Math.max(0, card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2));

    if (this.prefersReducedMotion || Math.abs(rail.scrollLeft - target) < 1) {
      rail.scrollLeft = target;
      return;
    }

    gsap.to(rail, {
      scrollLeft: target,
      duration: motionDuration(0.34),
      ease: "power2.out",
      overwrite: "auto",
    });
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

  private getSequenceTransitionTargets(card: HTMLElement): HTMLElement[] {
    return this.compactElements(
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
    const selectedLabel = selected?.querySelector<HTMLElement>(".wa-sequence-step__channel")?.textContent?.trim() ?? "email";

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
    const compact: HTMLElement[] = [];

    for (const element of elements) {
      if (element) compact.push(element);
    }

    return compact;
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
    this.removeElements(
      "[data-result-grid] .wa-strategy-plan, [data-result-grid] .wa-data-table, [data-result-grid] .wa-enrichment-panel",
    );
  }

  private clearMarketingPanels(): void {
    this.removeElements(MARKETING_PANEL_SELECTOR);
  }

  private getStorySwitchExitTargets(): HTMLElement[] {
    return this.compactElements(
      this.isVisibleForStorySwitchExit(this.thread) ? this.thread : null,
      this.composerVisible && this.isVisibleForStorySwitchExit(this.composer) ? this.composer : null,
      this.isVisibleForStorySwitchExit(this.signupScene) ? this.signupScene : null,
      ...this.queryElements(this.chatBody, MARKETING_PANEL_SELECTOR).filter((panel) =>
        this.isVisibleForStorySwitchExit(panel)
      ),
    );
  }

  private isVisibleForStorySwitchExit(el: HTMLElement): boolean {
    const style = window.getComputedStyle(el);

    if (style.display === "none" || style.visibility === "hidden") return false;
    if ((Number.parseFloat(style.opacity) || 0) <= 0.01) return false;

    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
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
    this.removeElements(TRANSIENT_ELEMENT_SELECTOR);
  }

  private removeElements(selector: string): void {
    this.root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      gsap.killTweensOf(el);
      el.remove();
    });
  }

  private getMessageScrollTarget(
    message: HTMLElement,
    alignElement: HTMLElement | null = null,
    alignOffset = 0,
  ): number {
    const alignedTarget = alignElement
      ? this.getAlignedElementScrollTarget(alignElement, alignOffset)
      : this.getAlignedMessageScrollTarget(message);

    if (alignedTarget !== null) return alignedTarget;

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

  private getAlignedMessageScrollTarget(message: HTMLElement): number | null {
    const equalInsetTarget = message.matches('[data-scroll-align="equal-inset"]')
      ? message
      : message.querySelector<HTMLElement>('[data-scroll-align="equal-inset"]');

    if (!equalInsetTarget) return null;

    return this.getAlignedElementScrollTarget(equalInsetTarget);
  }

  private getAlignedElementScrollTarget(element: HTMLElement, extraScroll = 0): number {
    const sideInset = this.getElementSideInset(element);
    const target = this.getElementOffsetTopWithinThread(element) - sideInset + extraScroll;

    return Math.min(Math.max(0, target), this.getThreadBottomScrollTarget());
  }

  private getElementSideInset(element: HTMLElement): number {
    const elementRect = element.getBoundingClientRect();
    const bodyRect = this.chatBody.getBoundingClientRect();
    const fallbackInset = Number.parseFloat(getComputedStyle(this.chatBody).paddingLeft) || 0;
    const measuredInset = elementRect.left - bodyRect.left;

    return Math.max(0, Number.isFinite(measuredInset) ? measuredInset : fallbackInset);
  }

  private getElementOffsetTopWithinThread(element: HTMLElement): number {
    let top = 0;
    let node: HTMLElement | null = element;

    while (node && node !== this.thread) {
      top += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }

    if (node === this.thread) return top;

    const elementRect = element.getBoundingClientRect();
    const threadRect = this.thread.getBoundingClientRect();

    return this.thread.scrollTop + elementRect.top - threadRect.top;
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
    scrollAnchor: HTMLElement | null = null,
    scrollOffset = 0,
  ): void {
    const target = this.getMessageScrollTarget(message, scrollAnchor, scrollOffset);

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

function smoothstep(value: number): number {
  const t = clampUnit(value);
  return t * t * (3 - 2 * t);
}

function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function normalizeMailboxProviderButtonLabel(
  provider: MailboxConnectorProvider,
  value?: string,
  state: "idle" | "connected" = "idle",
): string {
  const fallback = provider === "gmail" ? "Gmail" : "Outlook";
  const normalized = value?.trim();
  if (!normalized) return state === "connected" ? "Connected" : fallback;

  const providerLabel = fallback.toLowerCase();
  const lower = normalized.toLowerCase().replace(/\s+/g, " ");
  const providerStates = new Set([
    providerLabel,
    `connect ${providerLabel}`,
    `${providerLabel} connected`,
    `connected ${providerLabel}`,
  ]);

  if (state === "connected" && (providerStates.has(lower) || lower === "connected")) return "Connected";
  if (providerStates.has(lower)) return fallback;

  return normalized;
}

function normalizeMailboxStateLabel(value: string | undefined, fallback: "Connecting" | "Connected"): string {
  const normalized = value?.trim();
  if (!normalized) return fallback;
  return normalized.toLowerCase() === fallback.toLowerCase() ? fallback : normalized;
}

function mailboxThumbprintSegmentProgress(index: number, percent: number): number {
  const start = MAILBOX_THUMBPRINT_FILL_STARTS[index] ?? 0;
  const duration = 24 + ((index * 11) % 8);
  const end = Math.min(100, start + duration);
  const eased = smoothstep((percent - start) / (end - start));

  if (eased <= 0) return 0;

  const minVisible = MAILBOX_THUMBPRINT_SHORT_STROKES.has(index) ? 20 : 12;
  return Math.round(minVisible + eased * (100 - minVisible));
}
