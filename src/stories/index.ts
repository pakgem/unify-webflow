import type {
  CursorMoveOptions,
  DataTableConfig,
  EnrichmentConfig,
  MailboxConnectionConfig,
  OutreachStyleProfileConfig,
  ProximityLeadListConfig,
  ResponsiveTarget,
  SequenceBuildThinkingConfig,
  SequenceEngagementConfig,
  StoryDefinition,
  StrategyPlanConfig,
  ThinkingItemConfig,
} from "../core/types";
import {
  collectDataTableAssetUrls,
  collectProximityAssetUrls,
  collectSequenceAssetUrls,
} from "../core/assetPreloader";
import { getPreviewSequenceIndexes } from "../core/sequenceSelection";
import {
  buildStorySteps,
  CHAT_INPUT_TARGETS,
  CURSOR_CLICK_MOVE_BASE,
  CURSOR_CLICK_MOVE_DURATIONS,
  dataTableFooterPerusalStep,
  EXIT_TARGETS,
  exitStory,
  INPUT_ENTRY_LEAD_TIME,
  mailboxConnectionSteps,
  responsiveElementTarget,
  sequenceStepClickSteps,
  SIGNUP_EMAIL_TARGET,
  SIGNUP_ENTRY_LEAD_TIME,
  SIGNUP_SUBMIT_TARGET,
  STORY_TIMING,
  styleProfilePerusalSteps,
} from "./storySystem";

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

const VISITOR_TABLE_FOOTER_BOTTOM_CLEARANCE = 96;
const VISITOR_TABLE_FOOTER_SCROLL_DURATION = 1.05;
const VISITOR_PAGINATION_PRE_CLICK_HOLD = 0;

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

/* --------------------------------------------------------------------------
   Story 1: sign-up -> research -> GTM strategies

      0ms   cursor heads to first visible sign-up field
    300ms   email typing starts before the cursor fully settles
   1500ms   cursor clicks the sign-in button
   1800ms   sign-up scene scrolls up into the first thinking state
   2600ms   research steps cycle through public company signals
   5700ms   three GTM strategies reveal as compact strategy cards
   -------------------------------------------------------------------------- */

const GTM_RESEARCH_STEPS = [
  {
    label: "Scraping vercel.com",
    detail: "Reviewing the website, employee social profiles, looking at customer testimonials.",
    duration: 8,
    toolCalls: [
      { label: "Reading vercel.com/", vendor: "Vercel" },
      { label: "Reading vercel.com/cdn", vendor: "Vercel" },
      { label: "Reading v0.app/", vendor: "v0" },
      { label: "Reading vercel.com/customers", vendor: "Vercel" },
      { label: "Reading vercel.com/ai", vendor: "Vercel" },
      { label: "Reading vercel.com/enterprise", vendor: "Vercel" },
      { label: "Reading vercel.com/blog", vendor: "Vercel" },
      { label: "Reading vercel.com/press", vendor: "Vercel" },
    ],
  },
  {
    label: "Studying who you sell to",
    detail: "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence.",
  },
  {
    label: "Understanding your value proposition",
    detail: "Reading the homepage, product pages, and recent launches to learn what you sell, who you sell to, and why they buy.",
  },
  {
    label: "Mapping current GTM signals",
    detail: "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert.",
  },
  {
    label: "Distilling insights into ideas",
    detail: "Pulling together the company profile, ICP, value prop, and live signals to land on the highest-conviction ideas to test first.",
  },
] satisfies ThinkingItemConfig[];

const GTM_STRATEGY_PLANS = [
  {
    id: "founder-signal",
    label: "Idea one",
    title: "Target DevOps teams outgrowing AWS complexity",
    bullets: [
      "I’ll find mid-market SaaS companies with heavy AWS footprints and hiring DevOps",
      "I’ll run a 3-step email + LinkedIn sequence using the Notion infra efficiency angle",
    ],
  },
  {
    id: "revops-consolidation",
    label: "Idea two",
    title: "Intercept AI teams burning cycles on LLM infra",
    bullets: [
      "I’ll identify companies building AI products, showing LLM/ML engineering hiring signals",
      "I’ll craft a sequence leading with AI infra complexity pain and Vercel AI SDK as the path",
    ],
  },
  {
    id: "pipeline-acceleration",
    label: "Idea three",
    title: "Hit e-commerce teams before peak season",
    bullets: [
      "I’ll find ecom and DTC brands with 50+ engineers and upcoming high-traffic events",
      "I’ll lead with PAIGE’s Black Friday results in a short sequence timed to pre-peak urgency",
    ],
  },
] satisfies StrategyPlanConfig[];

/* --------------------------------------------------------------------------
   Story 2: natural-language data search -> filter -> enrichment

      0ms   ask for new hires at dev-tool companies
   1600ms   table of matching companies appears
   3100ms   ask to filter by recent funding
   4700ms   smaller funded-company table appears
   6200ms   ask to enrich contacts
   7600ms   enrichment component runs
   9200ms   enriched contact table returns with engage prompt
   -------------------------------------------------------------------------- */

const DATA_MARKETPLACE_PRE_ENRICHMENT_COLUMNS = [
  { key: "name", label: "Name", width: "1.45fr", cellType: "person" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" },
] satisfies DataTableConfig["columns"];

const DATA_MARKETPLACE_ENRICHED_COLUMNS = [
  { key: "name", label: "Prospect", width: "minmax(220px,0.95fr)", cellType: "person" },
  { key: "email", label: "Work email", width: "minmax(190px,0.95fr)" },
  { key: "number", label: "Mobile", width: "minmax(150px,0.72fr)" },
  {
    key: "connector",
    label: "Connector",
    width: "minmax(170px,0.78fr)",
    cellType: "person",
    person: {
      detailKey: "connectorDetail",
      avatarToneKey: "connectorAvatarTone",
      avatarUrlKey: "connectorAvatarUrl",
      avatarKey: "connectorAvatar",
      sourceKey: "connectorSource",
      companyKey: "connectorCompany",
    },
  },
] satisfies DataTableConfig["columns"];

const DATA_MARKETPLACE_INITIAL_TABLE = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "8 records",
  scrollAlign: "equal-inset",
  columns: DATA_MARKETPLACE_PRE_ENRICHMENT_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Stripe",
        title: "VP of Sales",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal",
      },
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        company: "Stripe",
        title: "Head of Growth",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal",
      },
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        company: "Stripe",
        title: "Head of Revenue",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal",
      },
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        company: "Stripe",
        title: "VP of Sales",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database",
      },
    },
    {
      id: "ellen-nelle",
      values: {
        name: "Ellen Nelle",
        company: "Stripe",
        title: "Growth Engineer",
        avatarTone: "5",
        avatarUrl: "https://i.pravatar.cc/64?img=47",
        source: "database",
      },
    },
    {
      id: "chadley-dupre",
      values: {
        name: "Chadley Dupre",
        company: "Stripe",
        title: "Head of Revops",
        avatarTone: "6",
        avatarUrl: "https://i.pravatar.cc/64?img=59",
        source: "database",
      },
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        company: "Stripe",
        title: "COO",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage",
      },
    },
    {
      id: "miles-kibble",
      values: {
        name: "Miles Kibble III",
        company: "Stripe",
        title: "Head of Chaos",
        avatarTone: "8",
        avatarUrl: "https://i.pravatar.cc/64?img=15",
        source: "engage",
      },
    },
  ],
} satisfies DataTableConfig;

const DATA_MARKETPLACE_FUNDED_TABLE = {
  id: "recently-funded-dev-tools",
  title: "Raised in the past three months",
  eyebrow: "Filtered results",
  count: "3 records",
  variant: "filtered",
  scrollAlign: "equal-inset",
  columns: DATA_MARKETPLACE_PRE_ENRICHMENT_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Stripe",
        title: "VP of Sales",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal",
      },
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        company: "Stripe",
        title: "Head of Growth",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal",
      },
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        company: "Stripe",
        title: "Head of Revenue",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal",
      },
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        company: "Stripe",
        title: "COO",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage",
      },
    },
  ],
} satisfies DataTableConfig;

const DATA_MARKETPLACE_ENRICHMENT = {
  id: "contact-enrichment",
  title: "I’m about to run an enrichment",
  subtitle: "Up to 84 credits could be spent across 2 fields on 14 records.",
  modeLabel: "Balanced",
  fields: [
    {
      title: "Business emails",
      steps: ["Unify Data", "5-Step Waterfall", "ContactOut"],
    },
    {
      title: "Mobile phones",
      steps: ["Unify Data", "5-Step Waterfall", "ContactOut"],
    },
  ],
} satisfies EnrichmentConfig;

const DATA_MARKETPLACE_ENRICHED_TABLE = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "ready to engage",
  count: "4 contacts",
  variant: "enriched",
  columns: DATA_MARKETPLACE_ENRICHED_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        prospectDetail: "VP of Sales at Stripe",
        email: "jamie@stripe.com",
        number: "+1 (628) 240-2744",
        connector: "Priya Shah",
        connectorDetail: "VP Sales @ Plaid",
        connectorCompany: "Plaid",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal",
      },
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        prospectDetail: "Head of Growth at Stripe",
        email: "andre@stripe.com",
        number: "+1 (210) 555-2341",
        connector: "Marco Liu",
        connectorDetail: "Partner @ Sequoia",
        connectorCompany: "Sequoia",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal",
      },
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        prospectDetail: "Head of Revenue at Stripe",
        email: "david@stripe.com",
        number: "+1 (628) 230-9962",
        connector: "Dev Singh",
        connectorDetail: "RevOps Lead @ Brex",
        connectorCompany: "Brex",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal",
      },
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        prospectDetail: "VP of Sales at Stripe",
        email: "chandler@stripe.com",
        number: "+1 (628) 240-2744",
        connector: "Jenna Park",
        connectorDetail: "VP Marketing @ Square",
        connectorCompany: "Square",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database",
      },
    },
  ],
} satisfies DataTableConfig;

const AGENT_CONTEXT_FILES = [
  {
    name: "vercel-positioning.pdf",
    detail: "Frontend Cloud narrative, buyer pains, proof points",
    type: "PDF",
  },
  {
    name: "ai-app-playbook.docx",
    detail: "AI app workflows, Vercel AI SDK, launch patterns",
    type: "DOC",
  },
  {
    name: "enterprise-objections.pdf",
    detail: "Security, scale, migration, and platform objections",
    type: "PDF",
  },
  {
    name: "icp-context.md",
    detail: "Best-fit teams, disqualifiers, buying triggers",
    type: "MD",
  },
];

const GMAIL_MAILBOX_CONNECTION = {
  id: "gmail-mailbox-connection",
  title: "Connect a mailbox",
  subtitle: "Unify will analyze recent emails and replies to learn how you actually communicate",
  provider: "Gmail",
  account: "joel@unifygtm.com",
  status: "Connected",
  ctaLabel: "Gmail",
  secondaryCtaLabel: "Outlook",
  loadingLabel: "Connecting",
  learningTitle: "Learning your style",
  learningDetail: "Analyzing tone...",
  learningReadyDetail: "73 tone & tactic rules defined",
  signals: ["sent emails", "reply patterns", "calendar context", "signature and tone"],
} satisfies MailboxConnectionConfig;

const VERCEL_BUSINESS_REPORT = {
  id: "vercel-business-report",
  title: "Vercel GTM Context",
  signals: [
    {
      label: "Winning wedge",
      value: "Lead with Frontend Cloud: the fastest path from idea to production for teams building web and AI experiences.",
    },
    {
      label: "Primary motion",
      value: "Target engineering leaders, platform teams, and founders with Next.js adoption, high-traffic launches, or active AI app work.",
    },
    {
      label: "Displacement angle",
      value: "Against homegrown cloud and generic hosting, show where teams lose time: previews, performance, observability, and release confidence.",
    },
    {
      label: "Proof to use",
      value: "Use Next.js, preview deployments, global performance, enterprise controls, and Vercel AI SDK as concrete credibility.",
    },
  ],
  examples: [
    "Open with a launch moment: traffic spike, AI feature release, migration project, or frontend team scaling past brittle workflows.",
    "Package the CTA as a workflow review: local dev to preview to production, including where Vercel removes handoffs.",
    "Keep the copy specific: Next.js, AI SDK, preview links, edge performance, and enterprise governance beat generic developer-platform language.",
  ],
} satisfies OutreachStyleProfileConfig;

const PROXIMITY_LEADS = {
  id: "personalized-lead-proximity",
  title: "Ranked leads with proximity fields",
  subtitle: "Each lead gets a relationship-aware reason to personalize the first touch.",
  leads: [
    {
      rank: "01",
      name: "Maya Patel",
      company: "OrbitGrid",
      title: "VP Revenue",
      proximity: "Same school",
      personalization: "Hey, you went to the same school as Joel and both studied systems design.",
      score: "94",
    },
    {
      rank: "02",
      name: "Evan Brooks",
      company: "Northstar Dev",
      title: "Head of Growth",
      proximity: "Mutual connection",
      personalization: "You both know Priya Shah from the early PLG operators group.",
      score: "89",
    },
    {
      rank: "03",
      name: "Clara Wong",
      company: "BrightLayer",
      title: "RevOps Lead",
      proximity: "Shared background",
      personalization: "You both studied economics before moving into revenue operations.",
      score: "82",
    },
    {
      rank: "04",
      name: "Sam Hollis",
      company: "Pylon",
      title: "Growth Lead",
      proximity: "Warm signal",
      personalization: "They follow two of your customers and recently posted about data quality.",
      score: "76",
    },
  ],
} satisfies ProximityLeadListConfig;

const ENGAGEMENT_LIST_COLUMNS = [
  { key: "name", label: "Name", width: "1.35fr", cellType: "person" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.35fr" },
  { key: "fit", label: "Fit", width: "0.72fr" },
] satisfies DataTableConfig["columns"];

const ENGAGEMENT_LIST_10 = {
  id: "engagement-list-10",
  title: "Outbound list",
  eyebrow: "Starting list",
  count: "10 people",
  columns: ENGAGEMENT_LIST_COLUMNS,
  rows: [
    { id: "maya-patel", values: { name: "Maya Patel", company: "OrbitGrid", title: "VP Revenue", fit: "High", source: "signal" } },
    { id: "evan-brooks", values: { name: "Evan Brooks", company: "Northstar Dev", title: "Head of Growth", fit: "High", source: "signal" } },
    { id: "clara-wong", values: { name: "Clara Wong", company: "BrightLayer", title: "RevOps Lead", fit: "Med", source: "database" } },
    { id: "sam-hollis", values: { name: "Sam Hollis", company: "Pylon", title: "Growth Lead", fit: "Med", source: "database" } },
    { id: "nina-kapoor", values: { name: "Nina Kapoor", company: "Mercury", title: "Sales Ops", fit: "High", source: "engage" } },
  ],
} satisfies DataTableConfig;

const ENGAGEMENT_LIST_50 = {
  id: "engagement-list-50",
  title: "Expanded outbound list",
  eyebrow: "Lookalike expansion",
  count: "50 people",
  variant: "filtered",
  columns: ENGAGEMENT_LIST_COLUMNS,
  rows: [
    ...ENGAGEMENT_LIST_10.rows,
    { id: "andre-park", values: { name: "Andre Park", company: "Waterfall", title: "Head of Growth", fit: "High", source: "signal" } },
    { id: "jamie-chen", values: { name: "Jamie Chen", company: "Square", title: "VP Sales", fit: "High", source: "signal" } },
    { id: "david-kim", values: { name: "David Kim", company: "Stripe", title: "Revenue Lead", fit: "Med", source: "database" } },
  ],
} satisfies DataTableConfig;

const ENGAGEMENT_SEQUENCE_LAUNCH = {
  id: "visitor-outreach-sequences",
  title: "Personalized sequence preview",
  subtitle: "Each visitor gets a channel plan based on company fit, page intent, and the person’s role.",
  peopleCount: "50 people",
  launchLabel: "kick off sequence",
  sequences: [
    {
      name: "Maya Patel",
      company: "OrbitGrid",
      title: "VP Sales",
      signal: "Pricing page",
      subject: "OrbitGrid’s pricing-page interest",
      personalization: "Maya viewed pricing after OrbitGrid added two RevOps roles, so the opener ties visitor intent to cleaner account research.",
      steps: [
        {
          channel: "email",
          label: "lead with the trigger",
          body: "Mention the pricing visit and RevOps hiring pattern; ask if their team is evaluating ways to source better-fit accounts.",
        },
        {
          channel: "linkedin",
          label: "light proof",
          body: "Maya, saw OrbitGrid looking at pricing while hiring RevOps. I work on turning those signals into focused account lists instead of generic outreach. Worth connecting?",
        },
        {
          channel: "email",
          label: "offer the play",
          body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion.",
        },
        {
          channel: "call",
          label: "use context",
          body: "Hi Maya, saw OrbitGrid looking at pricing while hiring RevOps. Are you trying to improve account fit, source coverage, or speed to follow-up right now?",
        },
      ],
    },
    {
      name: "Evan Brooks",
      company: "Northstar Dev",
      title: "Head of Sales",
      signal: "Integrations",
      subject: "Northstar Dev’s integration-led growth",
      personalization: "Evan came through integrations after Northstar Dev expanded sales leadership, so the sequence frames Unify as a way to find accounts already showing ecosystem fit.",
      steps: [
        {
          channel: "email",
          label: "anchor to integrations",
          body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts.",
        },
        {
          channel: "linkedin",
          label: "ask a narrow question",
          body: "Evan, saw Northstar Dev digging into integrations while expanding sales. Curious if partner-fit signals are already part of outbound scoring?",
        },
        {
          channel: "email",
          label: "show the workflow",
          body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list.",
        },
        {
          channel: "call",
          label: "reference the path",
          body: "Hi Evan, saw the integrations research and Northstar Dev’s sales expansion. Are ecosystem-led accounts already a named campaign, or still mostly rep judgment?",
        },
      ],
    },
    {
      name: "Clara Wong",
      company: "BrightLayer",
      title: "VP Revenue",
      signal: "Case study",
      subject: "BrightLayer’s case-study research",
      personalization: "Clara read a customer story, so the sequence mirrors the proof format and offers a concise account-selection playbook.",
      steps: [
        {
          channel: "email",
          label: "mirror the proof",
          body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern.",
        },
        {
          channel: "linkedin",
          label: "share a takeaway",
          body: "Clara, saw BrightLayer reading customer proof. Curious whether your team is trying to find more accounts that look like that same buyer.",
        },
        {
          channel: "email",
          label: "personalized follow-up",
          body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment.",
        },
        {
          channel: "call",
          label: "ask for fit",
          body: "Hi Clara, saw the case-study research. Are you looking for more accounts like that customer, or testing a new adjacent segment?",
        },
      ],
    },
    {
      name: "Andre Park",
      company: "Waterfall",
      title: "Head of Sales",
      signal: "Demo page",
      subject: "Waterfall’s demo-page visit",
      personalization: "Andre viewed the demo page while Waterfall is hiring growth roles, so the sequence ties intent to faster account prioritization.",
      steps: [
        {
          channel: "email",
          label: "open with demo intent",
          body: "Reference the demo visit and ask whether the team is looking for cleaner signals before expanding outbound coverage.",
        },
        {
          channel: "linkedin",
          label: "share the angle",
          body: "Andre, saw Waterfall checking out the demo while growth hiring is active. I work on turning those signals into researched account clusters without stitching tabs together.",
        },
        {
          channel: "email",
          label: "send the account cut",
          body: "Offer a small list of accounts showing hiring, tech stack, and funding signals in one view.",
        },
        {
          channel: "call",
          label: "ask about timing",
          body: "Hi Andre, saw Waterfall’s demo interest and growth hiring. Is this tied to an active expansion push, or are you mainly tightening account prioritization?",
        },
      ],
    },
    {
      name: "Jamie Chen",
      company: "Square",
      title: "VP Sales",
      signal: "ROI calculator",
      subject: "Saw Square using the ROI calculator",
      personalization: "Jamie used the ROI calculator, so the outreach leads with measurable pipeline coverage and better list quality.",
      steps: [
        {
          channel: "email",
          label: "lead with ROI",
          body: "Connect the calculator visit to the cost of fragmented data and suggest a quick account-quality benchmark.",
        },
        {
          channel: "linkedin",
          label: "use one proof point",
          body: "Jamie, saw Square using the ROI calculator. We help teams turn account-quality questions into researched lists and sequences in one workflow.",
        },
        {
          channel: "email",
          label: "offer benchmark",
          body: "Offer to compare one existing target segment against Unify’s combined intent and company data.",
        },
        {
          channel: "call",
          label: "qualify the metric",
          body: "Hi Jamie, saw Square pressure-testing the ROI calculator. Are you optimizing for more contacts, better account fit, or higher rep throughput?",
        },
      ],
    },
    {
      name: "Nina Kapoor",
      company: "Mercury",
      title: "Sales Director",
      signal: "Security page",
      subject: "Mercury’s security-page research",
      personalization: "Nina looked at security content, so the sequence keeps the value prop practical and trust-forward.",
      steps: [
        {
          channel: "email",
          label: "acknowledge trust",
          body: "Reference the security-page visit and frame Unify as a controlled way to operationalize external data.",
        },
        {
          channel: "linkedin",
          label: "ask the process question",
          body: "Nina, saw Mercury reviewing security content. Curious how your team evaluates new GTM data before it reaches outbound workflows.",
        },
        {
          channel: "email",
          label: "show governance",
          body: "Send a short overview of how Unify routes data work while keeping reps inside one system.",
        },
        {
          channel: "call",
          label: "surface blocker",
          body: "Hi Nina, saw Mercury spending time on security content. Is the bigger blocker for richer GTM data security review, data quality, or operational control?",
        },
      ],
    },
    {
      name: "David Kim",
      company: "Stripe",
      title: "Revenue Lead",
      signal: "Docs",
      subject: "Stripe’s docs-led research",
      personalization: "David came through docs, so the campaign assumes a hands-on evaluation and emphasizes workflow depth.",
      steps: [
        {
          channel: "email",
          label: "start technical",
          body: "Reference the docs visit and offer to show how Unify turns natural language into complete GTM workflows.",
        },
        {
          channel: "linkedin",
          label: "ask about workflow",
          body: "David, saw Stripe come through the docs. Curious whether the team is looking hardest at automating research, enrichment, or sequencing first.",
        },
        {
          channel: "email",
          label: "share workflow map",
          body: "Send a compact workflow map from prompt to table to sequence, using a Stripe-like target segment.",
        },
        {
          channel: "call",
          label: "probe use case",
          body: "Hi David, saw Stripe come through the docs. Are you evaluating this as rep-assist workflow automation, or as fully agentic list building?",
        },
      ],
    },
    {
      name: "Sam Hollis",
      company: "Pylon",
      title: "VP Sales",
      signal: "Comparison",
      subject: "Pylon’s comparison-page visit",
      personalization: "Sam viewed comparison content, so the outreach contrasts Unify’s unified workflow against point-tool switching.",
      steps: [
        {
          channel: "email",
          label: "frame the comparison",
          body: "Acknowledge the comparison visit and focus on reducing tab switching across data, enrichment, and engagement.",
        },
        {
          channel: "linkedin",
          label: "ask what matters",
          body: "Sam, saw Pylon reviewing comparison content. Curious whether the real criteria is coverage, workflow speed, or personalization quality.",
        },
        {
          channel: "email",
          label: "offer side-by-side",
          body: "Offer a short side-by-side showing how one sales request becomes a researched sequence in Unify.",
        },
        {
          channel: "call",
          label: "qualify priority",
          body: "Hi Sam, saw Pylon comparing workflows. Which step is pulling reps out of selling most often: data search, enrichment, or writing the sequence?",
        },
      ],
    },
    {
      name: "Rachel Cho",
      company: "Retool",
      title: "Head of Sales",
      signal: "Pricing page",
      subject: "Retool’s pricing-page intent",
      personalization: "Rachel viewed pricing during a sales hiring push, so the sequence connects team scaling to better prospecting systems.",
      steps: [
        {
          channel: "email",
          label: "tie to scaling",
          body: "Mention pricing interest and hiring signals, then ask if list building is becoming a rep-capacity bottleneck.",
        },
        {
          channel: "linkedin",
          label: "share focused proof",
          body: "Rachel, saw Retool pricing interest during a sales hiring push. We help teams build smaller, higher-fit lists instead of expanding generic coverage.",
        },
        {
          channel: "email",
          label: "send a sample segment",
          body: "Offer a sample segment with account fit, contacts, and ready-to-send messaging angles.",
        },
        {
          channel: "call",
          label: "ask about handoff",
          body: "Hi Rachel, saw Retool’s pricing interest alongside sales hiring. How are intent signals getting handed to reps today, and where does the handoff break?",
        },
      ],
    },
    {
      name: "Owen Lee",
      company: "Linear",
      title: "Sales Lead",
      signal: "Demo page",
      subject: "Linear’s demo-page research",
      personalization: "Owen visited the demo page, so the sequence stays crisp and shows a concrete workflow rather than a broad pitch.",
      steps: [
        {
          channel: "email",
          label: "keep it direct",
          body: "Reference the demo visit and offer one example of Unify building a clean account list from messy GTM signals.",
        },
        {
          channel: "linkedin",
          label: "ask one thing",
          body: "Owen, saw Linear’s demo-page research. Curious if the sales team is prioritizing outbound efficiency or better personalization this quarter.",
        },
        {
          channel: "email",
          label: "show a concrete play",
          body: "Send a specific play for identifying software teams expanding support or sales operations.",
        },
        {
          channel: "call",
          label: "connect to timing",
          body: "Hi Owen, saw Linear’s demo-page visit. Is this tied to an active evaluation window, or are you mapping what a cleaner outbound workflow could look like?",
        },
      ],
    },
  ],
  channels: [],
} satisfies SequenceEngagementConfig;

export const sequencePreviewSandboxConfig = {
  ...ENGAGEMENT_SEQUENCE_LAUNCH,
  initialStepIndex: 1,
} satisfies SequenceEngagementConfig;

const ENGAGEMENT_SEQUENCE_THINKING = {
  id: "visitor-sequence-build",
  title: "building outbound sequence",
  subtitle: "Using Unify’s offering, visitor intent, and role-level context to draft the campaign.",
  templateLabel: "generating sequence template from company offering",
  template: "Using Unify’s offering, visitor intent, role-specific pain, relevant proof, and a low-friction CTA.",
  total: 50,
  tracks: [
    {
      id: "companies",
      label: "researching companies",
      detail: "Reading firmographics, page intent, recent hiring, and relevant account signals.",
    },
    {
      id: "people",
      label: "researching people",
      detail: "Checking role, seniority, likely ownership, and channel-specific personalization angles.",
    },
  ],
} satisfies SequenceBuildThinkingConfig;

const WEBSITE_VISITOR_SALES_COLUMNS = [
  { key: "name", label: "Name", width: "1.2fr", cellType: "person" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" },
] satisfies DataTableConfig["columns"];

const WEBSITE_VISITOR_SALES_PAGE_ONE = [
  { id: "maya-patel-visitor", values: { name: "Maya Patel", company: "OrbitGrid", title: "VP Sales", visit: "12m ago", signal: "Pricing page", source: "signal", avatarTone: "1" } },
  { id: "evan-brooks-visitor", values: { name: "Evan Brooks", company: "Northstar Dev", title: "Head of Sales", visit: "18m ago", signal: "Integrations", source: "signal", avatarTone: "2" } },
  { id: "clara-wong-visitor", values: { name: "Clara Wong", company: "BrightLayer", title: "VP Revenue", visit: "27m ago", signal: "Case study", source: "engage", avatarTone: "3" } },
  { id: "andre-park-visitor", values: { name: "Andre Park", company: "Waterfall", title: "Head of Sales", visit: "33m ago", signal: "Demo page", source: "signal", avatarTone: "4" } },
  { id: "jamie-chen-visitor", values: { name: "Jamie Chen", company: "Square", title: "VP Sales", visit: "42m ago", signal: "ROI calculator", source: "signal", avatarTone: "5" } },
  { id: "nina-kapoor-visitor", values: { name: "Nina Kapoor", company: "Mercury", title: "Sales Director", visit: "51m ago", signal: "Security page", source: "database", avatarTone: "6" } },
  { id: "david-kim-visitor", values: { name: "David Kim", company: "Stripe", title: "Revenue Lead", visit: "1h ago", signal: "Docs", source: "engage", avatarTone: "7" } },
  { id: "sam-hollis-visitor", values: { name: "Sam Hollis", company: "Pylon", title: "VP Sales", visit: "1h ago", signal: "Comparison", source: "signal", avatarTone: "8" } },
  { id: "rachel-cho-visitor", values: { name: "Rachel Cho", company: "Retool", title: "Head of Sales", visit: "2h ago", signal: "Pricing page", source: "database", avatarTone: "9" } },
  { id: "owen-lee-visitor", values: { name: "Owen Lee", company: "Linear", title: "Sales Lead", visit: "2h ago", signal: "Demo page", source: "signal", avatarTone: "1" } },
];

const WEBSITE_VISITOR_SALES_PAGE_TWO = [
  { id: "fatima-ali-visitor", values: { name: "Fatima Ali", company: "Vercel", title: "VP Sales", visit: "2h ago", signal: "Enterprise", source: "signal", avatarTone: "2" } },
  { id: "leo-martin-visitor", values: { name: "Leo Martin", company: "Hex", title: "Head of Sales", visit: "3h ago", signal: "Blog", source: "database", avatarTone: "3" } },
  { id: "priya-rao-visitor", values: { name: "Priya Rao", company: "Census", title: "Sales Director", visit: "3h ago", signal: "Demo page", source: "engage", avatarTone: "4" } },
  { id: "jules-meyer-visitor", values: { name: "Jules Meyer", company: "Notion", title: "VP Sales", visit: "4h ago", signal: "Integrations", source: "signal", avatarTone: "5" } },
  { id: "marcus-reed-visitor", values: { name: "Marcus Reed", company: "Figma", title: "Revenue Lead", visit: "4h ago", signal: "Pricing page", source: "signal", avatarTone: "6" } },
  { id: "zoe-carter-visitor", values: { name: "Zoe Carter", company: "Rippling", title: "Head of Sales", visit: "5h ago", signal: "Case study", source: "engage", avatarTone: "7" } },
  { id: "liam-price-visitor", values: { name: "Liam Price", company: "Webflow", title: "VP Sales", visit: "5h ago", signal: "Security page", source: "database", avatarTone: "8" } },
  { id: "sara-nelson-visitor", values: { name: "Sara Nelson", company: "Airtable", title: "Sales Lead", visit: "6h ago", signal: "Comparison", source: "signal", avatarTone: "9" } },
  { id: "noah-singh-visitor", values: { name: "Noah Singh", company: "dbt Labs", title: "Head of Sales", visit: "6h ago", signal: "ROI calculator", source: "signal", avatarTone: "1" } },
  { id: "ava-garcia-visitor", values: { name: "Ava Garcia", company: "Gusto", title: "VP Revenue", visit: "7h ago", signal: "Demo page", source: "engage", avatarTone: "2" } },
];

const WEBSITE_VISITOR_SALES_TABLE = {
  id: "website-visitors-sales",
  title: "Recent website visitors",
  eyebrow: "Visitor intent",
  count: "50 sales leaders",
  variant: "filtered",
  scrollAlign: "equal-inset",
  footerClearance: 28,
  columns: WEBSITE_VISITOR_SALES_COLUMNS,
  rows: WEBSITE_VISITOR_SALES_PAGE_ONE,
  pagination: {
    pageSize: 10,
    totalRows: 50,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 50 people", rows: WEBSITE_VISITOR_SALES_PAGE_ONE },
      { page: 2, range: "11-20 of 50 people", rows: WEBSITE_VISITOR_SALES_PAGE_TWO },
    ],
  },
  actions: [
    {
      id: "power-dialer",
      label: "Power dial",
      icon: "dialer",
      badge: "Coming soon!",
      variant: "primary",
    },
    {
      id: "email-sequence",
      label: "Outreach sequence",
      icon: "email",
      variant: "secondary",
    },
  ],
} satisfies DataTableConfig;

/* --------------------------------------------------------------------------
   Story 5: cursor leaves -> drags CSV -> drop area -> cleaned table

      0ms   cursor exits the browser and returns carrying a CSV
    500ms   drop area appears as a temporary browser overlay
   1700ms   CSV is dropped and appears as a user-side file
   2600ms   assistant analyzes, cleans, and normalizes attendee data
   5200ms   clean attendee table appears
   -------------------------------------------------------------------------- */

const CSV_RAW_ROWS = [
  {
    id: "raw-maya-rodriguez",
    values: {
      name: "Maya R.",
      email: "MAYA.RODRIGUEZ@NorthStar.ai ",
      company: "northstar ai",
    },
  },
  {
    id: "raw-ethan-cho",
    values: {
      name: "Ethan Cho",
      email: "ethan.cho@gmail.com",
      company: "",
    },
  },
  {
    id: "raw-priya-shah",
    values: {
      name: "Priya Shah",
      email: "priya.shah+webinar@orbitgrid.com",
      company: "Orbitgrid",
    },
  },
  {
    id: "raw-lucas-meyer",
    values: {
      name: "Lucas",
      email: "lucas.meyer@yahoo.com",
      company: "",
    },
  },
  {
    id: "raw-nina-kapoor",
    values: {
      name: "N. Kapoor",
      email: "",
      company: "Mercury",
    },
  },
  {
    id: "raw-anna-li",
    values: {
      name: "Anna Li",
      email: "annali.work@gmail.com",
      company: "",
    },
  },
  {
    id: "raw-devon-park",
    values: {
      name: "Devon Park",
      email: "devon.park@outlook.com",
      company: "",
    },
  },
  {
    id: "raw-rachel-cho",
    values: {
      name: "Rachel C.",
      email: "",
      company: "Figma",
    },
  },
  {
    id: "raw-owen-lee",
    values: {
      name: "Owen Lee",
      email: "owen.lee@icloud.com",
      company: "",
    },
  },
  {
    id: "raw-clara-wong",
    values: {
      name: "Clara Wong",
      email: "clara.wong@proton.me",
      company: "Bright Layer",
    },
  },
  {
    id: "raw-maya-rodriguez-duplicate",
    values: {
      name: "Maya Rodriguez",
      email: "maya.rodriguez@northstar.ai",
      company: "Northstar AI",
    },
  },
  {
    id: "raw-ethan-cho-duplicate",
    values: {
      name: "Ethan Cho",
      email: "",
      company: "Clearbit Inc.",
    },
  },
  {
    id: "raw-fatima-ali",
    values: {
      name: "Fatima Ali",
      email: "fatima.ali@gmail.com",
      company: "",
    },
  },
  {
    id: "raw-leo-martin",
    values: {
      name: "Leo Martin",
      email: "leo.martin@hex.tech",
      company: "Hex",
    },
  },
  {
    id: "raw-priya-rao",
    values: {
      name: "Priya Rao",
      email: "priya.rao@yahoo.com",
      company: "",
    },
  },
  {
    id: "raw-jules-meyer",
    values: {
      name: "Jules Meyer",
      email: "jules@notion.so",
      company: "Notion",
    },
  },
  {
    id: "raw-marcus-reed",
    values: {
      name: "Marcus Reed",
      email: "marcus.reed@icloud.com",
      company: "",
    },
  },
  {
    id: "raw-zoe-carter",
    values: {
      name: "Zoe Carter",
      email: "zoe.carter@rippling.com",
      company: "Rippling",
    },
  },
  {
    id: "raw-liam-price",
    values: {
      name: "Liam Price",
      email: "liam.price@gmail.com",
      company: "",
    },
  },
  {
    id: "raw-sara-nelson",
    values: {
      name: "Sara Nelson",
      email: "sara.nelson@airtable.com",
      company: "Airtable",
    },
  },
];

const CSV_RAW_TABLE = {
  id: "raw-webinar-attendees",
  title: "Raw webinar attendees",
  eyebrow: "CSV import",
  count: "54 records",
  preserveScroll: true,
  columns: [
    { key: "name", label: "Name", width: "110px", cellType: "text" },
    { key: "email", label: "Email", width: "250px" },
    { key: "company", label: "Company", width: "minmax(120px,1fr)" },
  ],
  rows: CSV_RAW_ROWS,
  pagination: {
    pageSize: 10,
    totalRows: 54,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 54 records", rows: CSV_RAW_ROWS.slice(0, 10) },
      { page: 2, range: "11-20 of 54 records", rows: CSV_RAW_ROWS.slice(10, 20) },
    ],
  },
} satisfies DataTableConfig;

const CSV_CLEAN_ROWS = [
  {
    id: "clean-maya-rodriguez",
    values: {
      fullName: "Maya Rodriguez",
      "work-email": "maya.rodriguez@northstar.ai",
      company: "Northstar AI",
      prospectDetail: "VP Marketing",
    },
  },
  {
    id: "clean-ethan-cho",
    values: {
      fullName: "Ethan Cho",
      "work-email": "ethan.cho@clearbit.com",
      company: "Clearbit",
      prospectDetail: "Head of Demand Gen",
    },
  },
  {
    id: "clean-priya-shah",
    values: {
      fullName: "Priya Shah",
      "work-email": "priya.shah@orbitgrid.com",
      company: "OrbitGrid",
      prospectDetail: "Head of Growth",
    },
  },
  {
    id: "clean-lucas-meyer",
    values: {
      fullName: "Lucas Meyer",
      "work-email": "lucas.meyer@waterfall.com",
      company: "Waterfall",
      prospectDetail: "Revenue Operations",
    },
  },
  {
    id: "clean-nina-kapoor",
    values: {
      fullName: "Nina Kapoor",
      "work-email": "nina.kapoor@mercury.com",
      company: "Mercury",
      prospectDetail: "Sales Director",
    },
  },
  {
    id: "clean-sam-hollis",
    values: {
      fullName: "Sam Hollis",
      "work-email": "sam.hollis@usepylon.com",
      company: "Pylon",
      prospectDetail: "VP Sales",
    },
  },
  {
    id: "clean-anna-li",
    values: {
      fullName: "Anna Li",
      "work-email": "anna.li@linear.app",
      company: "Linear",
      prospectDetail: "Growth Marketing",
    },
  },
  {
    id: "clean-devon-park",
    values: {
      fullName: "Devon Park",
      "work-email": "devon.park@brex.com",
      company: "Brex",
      prospectDetail: "RevOps Manager",
    },
  },
  {
    id: "clean-rachel-cho",
    values: {
      fullName: "Rachel Cho",
      "work-email": "rachel.cho@figma.com",
      company: "Figma",
      prospectDetail: "Product Marketing",
    },
  },
  {
    id: "clean-owen-lee",
    values: {
      fullName: "Owen Lee",
      "work-email": "owen.lee@notion.so",
      company: "Notion",
      prospectDetail: "Revenue Lead",
    },
  },
  {
    id: "clean-clara-wong",
    values: {
      fullName: "Clara Wong",
      "work-email": "clara.wong@brightlayer.com",
      company: "BrightLayer",
      prospectDetail: "VP Revenue",
    },
  },
  {
    id: "clean-sara-patel",
    values: {
      fullName: "Sara Patel",
      "work-email": "sara.patel@northstar.ai",
      company: "Northstar AI",
      prospectDetail: "Demand Gen",
    },
  },
  {
    id: "clean-ethan-cho-duplicate",
    values: {
      fullName: "Ethan Cho",
      "work-email": "ethan.cho@clearbit.com",
      company: "Clearbit",
      prospectDetail: "Head of Demand Gen",
    },
  },
  {
    id: "clean-fatima-ali",
    values: {
      fullName: "Fatima Ali",
      "work-email": "fatima.ali@vercel.com",
      company: "Vercel",
      prospectDetail: "VP Sales",
    },
  },
  {
    id: "clean-leo-martin",
    values: {
      fullName: "Leo Martin",
      "work-email": "leo.martin@hex.tech",
      company: "Hex",
      prospectDetail: "Head of Sales",
    },
  },
  {
    id: "clean-priya-rao",
    values: {
      fullName: "Priya Rao",
      "work-email": "priya.rao@census.com",
      company: "Census",
      prospectDetail: "Sales Director",
    },
  },
  {
    id: "clean-jules-meyer",
    values: {
      fullName: "Jules Meyer",
      "work-email": "jules.meyer@notion.so",
      company: "Notion",
      prospectDetail: "VP Sales",
    },
  },
  {
    id: "clean-marcus-reed",
    values: {
      fullName: "Marcus Reed",
      "work-email": "marcus.reed@figma.com",
      company: "Figma",
      prospectDetail: "Revenue Lead",
    },
  },
  {
    id: "clean-zoe-carter",
    values: {
      fullName: "Zoe Carter",
      "work-email": "zoe.carter@rippling.com",
      company: "Rippling",
      prospectDetail: "Head of Sales",
    },
  },
  {
    id: "clean-liam-price",
    values: {
      fullName: "Liam Price",
      "work-email": "liam.price@webflow.com",
      company: "Webflow",
      prospectDetail: "VP Sales",
    },
  },
];

const CSV_CLEAN_TABLE = {
  id: "clean-webinar-attendees",
  title: "Cleaned webinar attendees",
  eyebrow: "CSV cleanup",
  count: "54 records",
  scrollAnchor: "previous-message",
  columns: [
    { key: "fullName", label: "Full name", width: "175px", cellType: "person" },
    { key: "work-email", label: "Work email", width: "215px" },
    { key: "company", label: "Company", width: "minmax(150px,1fr)" },
  ],
  rows: CSV_CLEAN_ROWS,
  pagination: {
    pageSize: 10,
    totalRows: 54,
    activePage: 1,
    pages: [
      { page: 1, range: "1-10 of 54 records", rows: CSV_CLEAN_ROWS.slice(0, 10) },
      { page: 2, range: "11-20 of 54 records", rows: CSV_CLEAN_ROWS.slice(10, 20) },
    ],
  },
} satisfies DataTableConfig;

export const defaultStories: StoryDefinition[] = [
  {
    id: "hit-ground-running",
    label: "Hit the ground running",
    navLabel: "Hit the ground running",
    navDescription: "Unify understands your business like you do. Use the latest frontier models to identify your next campaign ideas.",
    eyebrow: "Business onboarding",
    summary: "The assistant learns the company, researches public signals, and returns three GTM plays.",
    entry: SIGNUP_EMAIL_TARGET,
    entryLeadTime: SIGNUP_ENTRY_LEAD_TIME,
    prepare: (ctx) => {
      ctx.chat.prepareSignup();
    },
    build: (ctx) => {
      return buildStorySteps(ctx, [
        { kind: "status", text: "Sign up" },
        { kind: "cursorClick", nextMode: "text", at: "-=0.04" },
        { kind: "typeSignupEmail", email: "joel@vercel.com", duration: STORY_TIMING.typeShort },
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
        { kind: "status", text: "Researching Vercel", at: "<" },
        { kind: "thinking", steps: GTM_RESEARCH_STEPS, hold: 0.46, at: "<" },
        { kind: "assistant", text: "Here are some ideas I can put into action for you:" },
        { kind: "status", text: "Game plans ready", at: "<" },
        { kind: "strategyPlans", plans: GTM_STRATEGY_PLANS, at: "-=0.08" },
        exitStory(EXIT_TARGETS.right, "+=0.18"),
      ]);
    },
  },
  {
    id: "data-marketplace",
    label: "100+ data sources at your fingertips",
    navLabel: "100+ data sources at your fingertips",
    navDescription:
      "A one-stop shop for your data needs, B2B contacts and companies, e-commerce, local businesses, technographics, and much more in a single natural language search.",
    navDescriptionLink: {
      text: "and much more",
      href: "https://www.unifygtm.com/signals",
      ariaLabel: "Explore Unify signals and data sources",
    },
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
    assetUrls: [
      ...collectDataTableAssetUrls(DATA_MARKETPLACE_INITIAL_TABLE),
      ...collectDataTableAssetUrls(DATA_MARKETPLACE_FUNDED_TABLE),
      ...collectDataTableAssetUrls(DATA_MARKETPLACE_ENRICHED_TABLE),
    ],
    entry: CHAT_INPUT_TARGETS.dataMarketplace,
    entryLeadTime: INPUT_ENTRY_LEAD_TIME,
    build: (ctx) => {
      return buildStorySteps(ctx, [
        {
          kind: "prompt",
          text: "Show me new hires at dev-tool companies with 50+ employees.",
          duration: STORY_TIMING.typeLong,
          sendLabel: "send-data-search",
          statusBefore: "Searching data",
          statusAfter: "Searching 100+ sources",
          fromEntry: true,
        },
        {
          kind: "thinking",
          label: "Searching hiring signals, headcount, and company data",
          hold: STORY_TIMING.thinkingMedium,
        },
        { kind: "dataTable", config: DATA_MARKETPLACE_INITIAL_TABLE, at: "-=0.04" },
        {
          kind: "prompt",
          text: "Filter to the ones that have raised in the past three months.",
          duration: STORY_TIMING.typeMedium,
          sendLabel: "send-data-filter",
          statusAfter: "Filtering by funding",
          at: `+=${STORY_TIMING.beat}`,
        },
        {
          kind: "thinking",
          label: "Checking rounds announced since February 2026",
          hold: STORY_TIMING.thinkingShort,
        },
        { kind: "dataTable", config: DATA_MARKETPLACE_FUNDED_TABLE, at: "-=0.04" },
        {
          kind: "prompt",
          text: "Okay, enrich these contacts.",
          duration: STORY_TIMING.typeShort,
          sendLabel: "send-enrich-contacts",
          statusAfter: "Preparing enrichment",
          postSendCursorMotion: false,
          at: `+=${STORY_TIMING.beat}`,
        },
        { kind: "enrichmentPanel", config: DATA_MARKETPLACE_ENRICHMENT, at: "+=0.12" },
        { kind: "status", text: "Contacts enriched", at: "+=0.86" },
        { kind: "dataTable", config: DATA_MARKETPLACE_ENRICHED_TABLE, at: "-=0.02" },
        exitStory(EXIT_TARGETS.bottomRight, "+=1.1"),
      ]);
    },
  },
  {
    id: "crm-update",
    label: "Agent that knows you",
    navLabel: "An agent that knows you",
    eyebrow: "Context learning",
    summary: "The assistant learns Vercel’s GTM context and ranks leads by relationship proximity.",
    assetUrls: collectProximityAssetUrls(PROXIMITY_LEADS),
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", offset: { x: -48, y: 168 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", offset: { x: -44, y: 144 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", offset: { x: -36, y: 112 } },
    } satisfies ResponsiveTarget,
    entryLeadTime: 0.18,
    build: (ctx) => {
      const dropArea = ctx.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Positioning, AI app playbooks, ICP notes, and enterprise objection context.",
      });
      const cursorFile = ctx.chat.prepareCursorFile("4 context files", ctx.cursor, "DOC", AGENT_CONTEXT_FILES);
      const contextFilePickupTarget = {
        desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 420, y: -74 }, humanOffset: false },
        tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 360, y: -58 }, humanOffset: false },
        mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 280, y: -42 }, humanOffset: false },
      } satisfies ResponsiveTarget;
      const dropTarget = responsiveElementTarget("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 },
      });

      return buildStorySteps(ctx, [
        ...mailboxConnectionSteps(GMAIL_MAILBOX_CONNECTION),
        { kind: "status", text: "waiting for context", at: `+=${STORY_TIMING.beat}` },
        {
          kind: "cursorMove",
          target: contextFilePickupTarget,
          options: {
            mode: "default",
            intent: "exit",
            speed: "slow",
            overshoot: false,
            settle: true,
            label: "context-file-pickup",
          },
          at: "+=0.08",
        },
        { kind: "custom", build: () => cursorFile.startFollow() },
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
            label: "drag-context-files",
          },
          at: "<",
        },
        { kind: "custom", build: () => dropArea.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }) },
        { kind: "custom", build: () => dropArea.complete() },
        { kind: "custom", build: () => cursorFile.releaseAtDrop(), at: "<" },
        { kind: "custom", build: () => cursorFile.landAsUploadedFiles(AGENT_CONTEXT_FILES), at: "<" },
        { kind: "status", text: "Learning Vercel’s business", at: "<" },
        {
          kind: "thinking",
          steps: [
            "Reading Vercel positioning and launch notes",
            "Mapping developer personas and buying committees",
            "Extracting AI app and frontend cloud proof points",
            "Summarizing ICP fit and GTM angles",
          ],
          hold: 0.24,
          at: `+=${STORY_TIMING.beat}`,
        },
        {
          kind: "custom",
          build: () => ctx.chat.outreachStyleProfile(VERCEL_BUSINESS_REPORT, { scrollAlign: "equal-inset" }),
          at: "-=0.02",
        },
        ...styleProfilePerusalSteps(VERCEL_BUSINESS_REPORT.id),
        {
          kind: "prompt",
          text: "Generate leads ranked by how personally connected they are to me.",
          duration: STORY_TIMING.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${STORY_TIMING.beat}`,
        },
        {
          kind: "thinking",
          thinking: {
            title: "Ranking connected leads",
            items: [
              {
                label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
              },
            ],
          },
          hold: STORY_TIMING.thinkingMedium,
        },
        { kind: "custom", build: () => ctx.chat.proximityLeadList(PROXIMITY_LEADS), at: "-=0.04" },
        exitStory(EXIT_TARGETS.bottomRight, "+=0.16"),
      ]);
    },
  },
  {
    id: "research-brief",
    label: "Zero effort engagement",
    navLabel: "Zero effort engagement, built in",
    eyebrow: "Engagement engine",
    summary: "The assistant turns website visitor intent into a paginated list and engagement actions.",
    assetUrls: [
      ...collectDataTableAssetUrls(WEBSITE_VISITOR_SALES_TABLE),
      ...collectSequenceAssetUrls(ENGAGEMENT_SEQUENCE_LAUNCH),
    ],
    entry: CHAT_INPUT_TARGETS.researchBrief,
    entryLeadTime: INPUT_ENTRY_LEAD_TIME,
    build: (ctx) => {
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
      const [sequenceSecondPersonIndex, sequenceThirdPersonIndex] = getPreviewSequenceIndexes(ENGAGEMENT_SEQUENCE_LAUNCH, 2);
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

      return buildStorySteps(ctx, [
        {
          kind: "prompt",
          text: "Show me 50 sales leaders that have recently visited my website.",
          duration: STORY_TIMING.typeLong,
          sendLabel: "send-visitor-sales-list",
          statusBefore: "finding visitors",
          statusAfter: "building visitor list",
          fromEntry: true,
        },
        { kind: "custom", build: () => ctx.chat.dataTable(WEBSITE_VISITOR_SALES_TABLE), at: "-=0.02" },
        dataTableFooterPerusalStep("website-visitors-sales", VISITOR_TABLE_FOOTER_SCROLL_DURATION, "+=0.08", {
          align: "top",
          bottomClearance: VISITOR_TABLE_FOOTER_BOTTOM_CLEARANCE,
        }),
        {
          kind: "cursorMove",
          target: pageTwoTarget,
          options: VISITOR_PAGINATION_CLICK_MOVE,
          at: `+=${VISITOR_PAGINATION_PRE_CLICK_HOLD}`,
        },
        { kind: "cursorClick", at: "+=0.08" },
        { kind: "custom", build: () => ctx.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.02" },
        { kind: "status", text: "ready to engage", at: "+=0.1" },
        {
          kind: "custom",
          build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }),
        },
        {
          kind: "cursorMove",
          target: outreachSequenceTarget,
          options: OUTREACH_SEQUENCE_CURSOR_MOVE,
          at: "+=0.12",
        },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => ctx.chat.dataTableActionSelected("website-visitors-sales", "email-sequence"), at: "<" },
        { kind: "status", text: "building outreach sequence", at: "<" },
        { kind: "custom", build: () => ctx.chat.sequenceBuildThinking(ENGAGEMENT_SEQUENCE_THINKING), at: "+=0.06" },
        { kind: "custom", build: () => ctx.chat.sequenceEngagement(ENGAGEMENT_SEQUENCE_LAUNCH), at: "-=0.02" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }), at: "+=0.04" },
        {
          kind: "custom",
          build: () => ctx.chat.sequencePersonCardIntoView("visitor-outreach-sequences", sequenceSecondPersonIndex),
          at: "+=0.02",
        },
        {
          kind: "cursorMove",
          target: sequenceSecondPersonTarget,
          options: { ...SEQUENCE_PERSON_PREVIEW_MOVE, label: "preview-next-sequence" },
          at: "+=0.02",
        },
        { kind: "cursorClick", at: "+=0.08" },
        { kind: "custom", build: () => ctx.chat.sequencePerson("visitor-outreach-sequences", sequenceSecondPersonIndex), at: "-=0.03" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }), at: "+=0.04" },
        {
          kind: "custom",
          build: () => ctx.chat.sequencePersonCardIntoView("visitor-outreach-sequences", sequenceThirdPersonIndex),
          at: "+=0.02",
        },
        {
          kind: "cursorMove",
          target: sequenceThirdPersonTarget,
          options: { ...SEQUENCE_PERSON_PREVIEW_MOVE, label: "preview-following-sequence" },
          at: "+=0.02",
        },
        { kind: "cursorClick", at: "+=0.08" },
        { kind: "custom", build: () => ctx.chat.sequencePerson("visitor-outreach-sequences", sequenceThirdPersonIndex), at: "-=0.03" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 0.28 }), at: "+=0.04" },
        ...sequenceStepClickSteps("visitor-outreach-sequences", [1, 2, 3], "+=0.22"),
        {
          kind: "cursorMove",
          target: sequenceKickoffTarget,
          options: { ...SEQUENCE_KICKOFF_MOVE, label: "kickoff-visitor-sequence" },
        },
        { kind: "cursorClick", at: "+=0.12" },
        { kind: "custom", build: () => ctx.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.enrollmentProgress({ total: 50 }), at: "+=0.08" },
      ]);
    },
  },
  {
    id: "csv-import-cleanup",
    label: "CSV import cleanup",
    navLabel: "Made for the messiness of the real world",
    eyebrow: "CSV cleanup",
    summary: "The assistant accepts a messy CSV, cleans attendee fields, and returns a normalized table.",
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 270, y: 70 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 224, y: 56 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 172, y: 42 } },
    } satisfies ResponsiveTarget,
    entryLeadTime: 0.18,
    build: (ctx) => {
      const dropArea = ctx.chat.prepareCsvDropArea();
      const cursorFile = ctx.chat.prepareCursorFile("may_webinar_attendees.csv", ctx.cursor);
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
          build: () => cursorFile.landAsUploadedFile("may_webinar_attendees.csv", "54 records", { preserveScroll: true }),
          at: "<",
        },
        { kind: "dataTable", config: CSV_RAW_TABLE, at: `+=${STORY_TIMING.beat}` },
        { kind: "status", text: "Cleaning CSV", at: "<" },
        {
          kind: "thinking",
          steps: [
            "Parsing webinar attendee CSV",
            "Normalizing email addresses",
            "Combining first and last name fields",
            "Removing duplicates and empty rows",
          ],
          hold: 0.34,
          at: `+=${STORY_TIMING.beat}`,
        },
        { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up." },
        { kind: "dataTable", config: CSV_CLEAN_TABLE, at: "-=0.04" },
        exitStory(EXIT_TARGETS.bottomRight, "+=0.18"),
      ]);
    },
  },
];
