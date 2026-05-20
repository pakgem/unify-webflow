import type {
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  OutreachStyleProfileConfig,
  PersonalizationSwipeGameConfig,
  ProximityLeadListConfig,
  ResponsiveTarget,
  SequenceEngagementConfig,
  StoryDefinition,
  StrategyPlanConfig,
} from "../core/types";
import {
  buildStorySteps,
  CHAT_INPUT_TARGETS,
  EXIT_TARGETS,
  exitStory,
  INPUT_ENTRY_LEAD_TIME,
  responsiveElementTarget,
  SIGNUP_EMAIL_TARGET,
  SIGNUP_ENTRY_LEAD_TIME,
  STORY_TIMING,
} from "./storySystem";

/* --------------------------------------------------------------------------
   Story 1: sign-up -> research -> GTM strategies

      0ms   cursor heads to first visible sign-up field
    300ms   email typing starts before the cursor fully settles
   1500ms   sign-up scene scrolls up and the chat workspace enters
   2200ms   assistant narrates the company-learning pass
   2900ms   research steps cycle through public company signals
   5700ms   three GTM strategies reveal as compact strategy cards
   -------------------------------------------------------------------------- */

const GTM_RESEARCH_STEPS = [
  "Researching the company profile",
  "Learning the ICP and buyer roles",
  "Reading blog posts for positioning",
  "Scanning careers pages for priorities",
  "Mapping current GTM signals",
];

const GTM_STRATEGY_PLANS = [
  {
    id: "founder-signal",
    label: "Strategy one",
    title: "Founder-led signal capture",
    summary: "Use hiring, funding, and founder activity to catch seed teams right as they start building a repeatable sales motion.",
  },
  {
    id: "revops-consolidation",
    label: "Strategy two",
    title: "RevOps consolidation wedge",
    summary: "Lead with a data-quality audit for teams already showing CRM cleanup pain, then turn the gaps into a consolidation case.",
  },
  {
    id: "pipeline-acceleration",
    label: "Strategy three",
    title: "Pipeline acceleration sprint",
    summary: "Package the strongest buyer and account signals into a short sprint for sales leaders who need near-term pipeline movement.",
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
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" },
] satisfies DataTableConfig["columns"];

const DATA_MARKETPLACE_ENRICHED_COLUMNS = [
  { key: "name", label: "Name", width: "1.55fr" },
  { key: "company", label: "Company", width: "0.9fr" },
  { key: "title", label: "Title", width: "1.35fr" },
  { key: "email", label: "Email", width: "1.28fr" },
  { key: "number", label: "Number", width: "1.48fr" },
] satisfies DataTableConfig["columns"];

const DATA_MARKETPLACE_INITIAL_TABLE = {
  id: "dev-tool-new-hires",
  title: "New hires at dev-tool companies",
  eyebrow: "Natural language search",
  count: "9 records",
  columns: DATA_MARKETPLACE_PRE_ENRICHMENT_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Ramp",
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
        company: "Ramp",
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
        company: "Ramp",
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
        company: "Square",
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
        company: "Square",
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
        company: "Square",
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
    {
      id: "natalie-dank",
      values: {
        name: "Natalie Dank",
        company: "Stripe",
        title: "Money Manager",
        avatarTone: "9",
        avatarUrl: "https://i.pravatar.cc/64?img=49",
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
  columns: DATA_MARKETPLACE_PRE_ENRICHMENT_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Ramp",
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
        company: "Ramp",
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
        company: "Ramp",
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
      steps: ["Unify Data", "5-Step Waterfall", "FullEnrich"],
    },
    {
      title: "Mobile phones",
      steps: ["Unify Data", "5-Step Waterfall", "FullEnrich"],
    },
  ],
} satisfies EnrichmentConfig;

const DATA_MARKETPLACE_SOURCES = {
  id: "data-marketplace-sources",
  title: "Specific vendors by data area",
  subtitle: "Unify routes each search across the right partner sources for the job.",
  sources: [
    {
      id: "apollo",
      category: "People and contacts",
      name: "Apollo",
      detail: "Contacts, roles, emails, and outbound-ready people data.",
    },
    {
      id: "zoominfo",
      category: "People and contacts",
      name: "ZoomInfo",
      detail: "Verified B2B contact and account coverage.",
    },
    {
      id: "crunchbase",
      category: "Company intelligence",
      name: "Crunchbase",
      detail: "Funding rounds, investor signals, and company growth events.",
    },
    {
      id: "linkedin",
      category: "Company intelligence",
      name: "LinkedIn",
      detail: "Hiring movement, role changes, headcount, and profile signals.",
    },
    {
      id: "store-leads",
      category: "Commerce and local",
      name: "Store Leads",
      detail: "E-commerce stores, platforms, categories, and growth signals.",
    },
    {
      id: "google-business-profile",
      category: "Commerce and local",
      name: "Google Business Profile",
      detail: "Local business categories, locations, ratings, and presence.",
    },
    {
      id: "builtwith",
      category: "Technographics and enrichment",
      name: "BuiltWith",
      detail: "Installed tools, web stack, pixels, and infrastructure data.",
    },
    {
      id: "fullenrich",
      category: "Technographics and enrichment",
      name: "FullEnrich",
      detail: "Waterfall enrichment for emails, phones, and missing fields.",
    },
  ],
} satisfies DataSourceGridConfig;

const DATA_MARKETPLACE_ENRICHED_TABLE = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "Ready to engage",
  count: "3 contacts",
  variant: "enriched",
  columns: DATA_MARKETPLACE_ENRICHED_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        company: "Ramp",
        title: "VP of Sales",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal",
      },
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        company: "Ramp",
        title: "Head of Growth",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal",
      },
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        company: "Ramp",
        title: "Head of Revenue",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal",
      },
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        company: "Square",
        title: "VP of Sales",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database",
      },
    },
    {
      id: "ellen-nelle",
      values: {
        name: "Ellen Nelle",
        company: "Square",
        title: "Growth Engineer",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        avatarTone: "5",
        avatarUrl: "https://i.pravatar.cc/64?img=47",
        source: "database",
      },
    },
    {
      id: "chadley-dupre",
      values: {
        name: "Chadley Dupre",
        company: "Square",
        title: "Head of Revops",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
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
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
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
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        avatarTone: "8",
        avatarUrl: "https://i.pravatar.cc/64?img=15",
        source: "engage",
      },
    },
    {
      id: "natalie-dank",
      values: {
        name: "Natalie Dank",
        company: "Stripe",
        title: "Money Manager",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        avatarTone: "9",
        avatarUrl: "https://i.pravatar.cc/64?img=49",
        source: "engage",
      },
    },
  ],
} satisfies DataTableConfig;

const AGENT_CONTEXT_FILES = [
  {
    name: "battlecards.pdf",
    detail: "Competitive traps, landmines, proof points",
    type: "PDF",
  },
  {
    name: "voice-and-tone.docx",
    detail: "Founder voice, pacing, taboo phrases",
    type: "DOC",
  },
  {
    name: "outbound-playbook.pdf",
    detail: "Sequences, objection handling, CTA rules",
    type: "PDF",
  },
  {
    name: "icp-context.md",
    detail: "Best-fit accounts, disqualifiers, buyer pains",
    type: "MD",
  },
];

const OUTREACH_STYLE_PROFILE = {
  id: "learned-outreach-style",
  title: "Learned outreach style",
  subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
  signals: [
    { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
    { label: "CTA", value: "Low-friction question before calendar asks" },
    { label: "Proof", value: "Lead with trigger + relevant customer pattern" },
    { label: "Guardrail", value: "Rejects weak ICP fit before drafting" },
  ],
  examples: [
    "Keep the opener grounded in a real business trigger.",
    "Avoid generic automation language unless the account shows ops pain.",
  ],
} satisfies OutreachStyleProfileConfig;

const PERSONALIZATION_SWIPE_GAME = {
  id: "personalization-swipe-calibration",
  title: "Personalization preferences",
  subtitle: "A tiny game teaches the agent what should and should not show up in outreach.",
  prompt: "Swipe toward the personalization you would actually use.",
  labels: {
    avoid: "Never me",
    use: "I'd use it",
  },
  completeLabel: "3 personalization rules captured",
  signals: [
    {
      id: "recent-post-topic",
      label: "{{reference something they recently posted}}",
      detail: "Use a real public post when it connects to the reason for reaching out.",
      decision: "use",
    },
    {
      id: "local-weather",
      label: "Hope the weather in {{city}} is treating you well",
      detail: "A location warm-up that adds words without adding context.",
      decision: "avoid",
    },
    {
      id: "mutual-connection",
      label: "{{mention a mutual connection}}",
      detail: "Useful when the shared contact creates a credible reason to compare notes.",
      decision: "use",
    },
  ],
} satisfies PersonalizationSwipeGameConfig;

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
      company: "Apollo",
      title: "Growth Lead",
      proximity: "Warm signal",
      personalization: "They follow two of your customers and recently posted about data quality.",
      score: "76",
    },
  ],
} satisfies ProximityLeadListConfig;

const ENGAGEMENT_LIST_COLUMNS = [
  { key: "name", label: "Name", width: "1.35fr" },
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
    { id: "sam-hollis", values: { name: "Sam Hollis", company: "Apollo", title: "Growth Lead", fit: "Med", source: "database" } },
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
    { id: "andre-park", values: { name: "Andre Park", company: "Ramp", title: "Head of Growth", fit: "High", source: "signal" } },
    { id: "jamie-chen", values: { name: "Jamie Chen", company: "Square", title: "VP Sales", fit: "High", source: "signal" } },
    { id: "david-kim", values: { name: "David Kim", company: "Stripe", title: "Revenue Lead", fit: "Med", source: "database" } },
  ],
} satisfies DataTableConfig;

const ENGAGEMENT_SEQUENCE_LAUNCH = {
  id: "zero-effort-sequences",
  title: "50 personalized sequences ready",
  subtitle: "Each person gets a reason, opener, and channel plan from the same workflow.",
  peopleCount: "50 people",
  sequences: [
    {
      name: "Maya Patel",
      company: "OrbitGrid",
      subject: "RevOps hiring + data quality",
      personalization: "Opens with the new RevOps roles and their public data-quality push.",
    },
    {
      name: "Evan Brooks",
      company: "Northstar Dev",
      subject: "PLG growth handoff",
      personalization: "References the growth team expansion and routes to a low-friction benchmark CTA.",
    },
    {
      name: "Nina Kapoor",
      company: "Mercury",
      subject: "Sales ops cleanup",
      personalization: "Leads with CRM hygiene language pulled from similar hiring patterns.",
    },
  ],
  channels: [
    { label: "Email sequences", detail: "Launch all 50 now" },
    { label: "LinkedIn tasks", detail: "Create follow-up steps" },
    { label: "In-app dialer", detail: "Call queue from this list", badge: "Soon" },
  ],
} satisfies SequenceEngagementConfig;

/* --------------------------------------------------------------------------
   Story 5: cursor leaves -> drags CSV -> drop area -> cleaned table

      0ms   cursor exits the browser and returns carrying a CSV
    500ms   drop area appears as a temporary browser overlay
   1700ms   CSV is dropped and appears as a user-side file
   2600ms   assistant analyzes, cleans, and normalizes attendee data
   5200ms   clean attendee table appears
   -------------------------------------------------------------------------- */

const CSV_CLEAN_TABLE = {
  id: "clean-webinar-attendees",
  title: "Cleaned webinar attendees",
  eyebrow: "CSV cleanup",
  count: "6 normalized records",
  variant: "filtered",
  columns: [
    { key: "fullName", label: "Full name", width: "1.25fr" },
    { key: "email", label: "Email", width: "1.55fr" },
    { key: "company", label: "Company", width: "1fr" },
    { key: "status", label: "Status", width: "0.85fr" },
  ],
  rows: [
    {
      id: "maya-rodriguez",
      values: {
        fullName: "Maya Rodriguez",
        email: "maya.rodriguez@northstar.ai",
        company: "Northstar AI",
        status: "Normalized",
      },
    },
    {
      id: "ethan-cho",
      values: {
        fullName: "Ethan Cho",
        email: "ethan.cho@clearbit.dev",
        company: "Clearbit",
        status: "Normalized",
      },
    },
    {
      id: "priya-shah",
      values: {
        fullName: "Priya Shah",
        email: "priya.shah@orbitgrid.com",
        company: "OrbitGrid",
        status: "Deduped",
      },
    },
    {
      id: "lucas-meyer",
      values: {
        fullName: "Lucas Meyer",
        email: "lucas.meyer@ramp.com",
        company: "Ramp",
        status: "Fixed case",
      },
    },
    {
      id: "nina-kapoor",
      values: {
        fullName: "Nina Kapoor",
        email: "nina.kapoor@mercury.com",
        company: "Mercury",
        status: "Filled name",
      },
    },
    {
      id: "sam-hollis",
      values: {
        fullName: "Sam Hollis",
        email: "sam.hollis@apollo.io",
        company: "Apollo",
        status: "Normalized",
      },
    },
  ],
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
        { kind: "typeSignupEmail", email: "joel@acme.co", duration: STORY_TIMING.typeShort },
        { kind: "status", text: "Building workspace", at: "-=0.16" },
        { kind: "transitionSignupToChat", at: `+=${STORY_TIMING.beat}` },
        { kind: "assistant", text: "I’ll learn Acme first, then suggest the cleanest GTM plays." },
        { kind: "status", text: "Researching Acme", at: "<" },
        { kind: "thinking", steps: GTM_RESEARCH_STEPS, hold: 0.46, at: "+=0.02" },
        { kind: "assistant", text: "I found three GTM paths worth testing first." },
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
      "A one-stop shop for your data needs, B2B contacts and companies, e-commerce, local businesses, technographics, and more in a single natural language search.",
    eyebrow: "Data marketplace",
    summary: "The assistant searches, filters, and enriches B2B company and contact data.",
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
          at: `+=${STORY_TIMING.beat}`,
        },
        { kind: "enrichmentPanel", config: DATA_MARKETPLACE_ENRICHMENT, at: "+=0.12" },
        { kind: "status", text: "Contacts enriched", at: "+=0.86" },
        { kind: "dataTable", config: DATA_MARKETPLACE_ENRICHED_TABLE, at: "-=0.02" },
        { kind: "marketingDataSourcesGrid", config: DATA_MARKETPLACE_SOURCES, at: "+=0.44" },
        exitStory(EXIT_TARGETS.bottomRight),
      ]);
    },
  },
  {
    id: "crm-update",
    label: "Agent that knows you",
    navLabel: "An agent that knows you",
    eyebrow: "Context learning",
    summary: "The assistant learns your sales context, protects ICP fit, and ranks leads by relationship proximity.",
    entry: {
      desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 270, y: -68 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 224, y: -54 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 172, y: -42 } },
    } satisfies ResponsiveTarget,
    entryLeadTime: 0.18,
    build: (ctx) => {
      const dropArea = ctx.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Battle cards, playbooks, ICP notes, voice docs, and messaging context.",
      });
      const cursorFile = ctx.chat.prepareCursorFile("4 context files", ctx.cursor, "DOC");
      const dropTarget = responsiveElementTarget("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 },
      });

      return buildStorySteps(ctx, [
        { kind: "status", text: "Waiting for context" },
        { kind: "custom", build: () => cursorFile.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => dropArea.revealWhenCursorEnters(ctx.cursor), at: "<" },
        {
          kind: "cursorDrag",
          target: dropTarget,
          options: { mode: "drag", speed: "slow", releaseHold: 0.34, label: "drag-context-files" },
          at: "<+=0.1",
        },
        { kind: "custom", build: () => dropArea.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => dropArea.complete(), at: "-=0.18" },
        { kind: "custom", build: () => cursorFile.landAsUploadedFiles(AGENT_CONTEXT_FILES), at: "<" },
        { kind: "status", text: "Learning outreach style", at: "<" },
        {
          kind: "thinking",
          steps: [
            "Reading battle cards and competitive traps",
            "Extracting voice and tone rules",
            "Learning ICP disqualifiers",
            "Mapping playbook CTAs and objection handling",
          ],
          hold: 0.24,
          at: `+=${STORY_TIMING.beat}`,
        },
        { kind: "custom", build: () => ctx.chat.outreachStyleProfile(OUTREACH_STYLE_PROFILE), at: "-=0.02" },
        {
          kind: "assistant",
          text: "Before drafting, I’ll calibrate which personalization patterns sound like you.",
          at: `+=${STORY_TIMING.beat}`,
        },
        {
          kind: "personalizationSwipeGame",
          config: PERSONALIZATION_SWIPE_GAME,
          at: "+=0.06",
        },
        { kind: "status", text: "Personalization rules learned", at: "+=0.12" },
        {
          kind: "prompt",
          text: "Write a sequence for consumer fintech founders.",
          duration: STORY_TIMING.typeShort,
          sendLabel: "send-bad-icp-request",
          statusAfter: "Checking ICP fit",
          at: `+=${STORY_TIMING.beat}`,
        },
        { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", at: "+=0.08" },
        {
          kind: "prompt",
          text: "Okay, generate leads ranked by how personally connected they are to us.",
          duration: STORY_TIMING.typeMedium,
          sendLabel: "send-proximity-list",
          statusAfter: "Ranking proximity",
          at: `+=${STORY_TIMING.beat}`,
        },
        {
          kind: "thinking",
          label: "Scoring shared schools, fields of study, mutual contacts, and warm signals",
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
    summary: "The assistant expands an outbound list, writes personalized sequences, and starts engagement from one workflow.",
    entry: CHAT_INPUT_TARGETS.researchBrief,
    entryLeadTime: INPUT_ENTRY_LEAD_TIME,
    build: (ctx) => {
      return buildStorySteps(ctx, [
        {
          kind: "prompt",
          text: "Start with these 10 best-fit buyers.",
          duration: STORY_TIMING.typeShort,
          sendLabel: "send-start-list",
          statusBefore: "Building list",
          fromEntry: true,
        },
        { kind: "dataTable", config: ENGAGEMENT_LIST_10, at: "-=0.02" },
        {
          kind: "prompt",
          text: "Expand this to 50 people and personalize outreach for each.",
          duration: STORY_TIMING.typeMedium,
          sendLabel: "send-expand-list",
          statusAfter: "Expanding audience",
          at: `+=${STORY_TIMING.beat}`,
        },
        {
          kind: "thinking",
          label: "Finding 40 more lookalike buyers and account triggers",
          hold: STORY_TIMING.thinkingShort,
        },
        { kind: "dataTable", config: ENGAGEMENT_LIST_50, at: "-=0.04" },
        { kind: "status", text: "Writing sequences", at: "<" },
        {
          kind: "thinking",
          label: "Generating personalized sequences for all 50 people",
          hold: STORY_TIMING.thinkingMedium,
        },
        { kind: "sequenceEngagement", config: ENGAGEMENT_SEQUENCE_LAUNCH, at: "-=0.04" },
        exitStory(EXIT_TARGETS.bottomRight, "+=0.14"),
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
      const cursorFile = ctx.chat.prepareCursorFile("webinar_attendees.csv", ctx.cursor);
      const dropTarget = responsiveElementTarget("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 82 },
        tablet: { x: 0, y: 72 },
        mobile: { x: 0, y: 64 },
      });

      return buildStorySteps(ctx, [
        { kind: "status", text: "Waiting for CSV" },
        { kind: "custom", build: () => cursorFile.startFollow(), at: "+=0.04" },
        { kind: "custom", build: () => dropArea.revealWhenCursorEnters(ctx.cursor), at: "<" },
        {
          kind: "cursorDrag",
          target: dropTarget,
          options: { mode: "drag", speed: "slow", releaseHold: 0.46, label: "drag-webinar-csv" },
          at: "<+=0.1",
        },
        { kind: "custom", build: () => dropArea.activate(), at: "<+=0.02" },
        { kind: "custom", build: () => dropArea.complete(), at: "-=0.24" },
        { kind: "custom", build: () => cursorFile.landAsUploadedFile("webinar_attendees.csv", "1,284 attendees"), at: "<" },
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
