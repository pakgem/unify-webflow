import type {
  DataSourceGridConfig,
  DataTableConfig,
  EnrichmentConfig,
  OutreachStyleProfileConfig,
  PersonalizationSwipeGameConfig,
  ProximityLeadListConfig,
  ResponsiveTarget,
  SequenceBuildThinkingConfig,
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
  id: "visitor-outreach-sequences",
  title: "Personalized sequence preview",
  subtitle: "Each visitor gets a channel plan based on company fit, page intent, and the person’s role.",
  peopleCount: "50 people",
  launchLabel: "Kick off sequence",
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
          channel: "Email",
          label: "Lead with the trigger",
          body: "Mention the pricing visit and RevOps hiring pattern; ask if their team is evaluating ways to source better-fit accounts.",
        },
        {
          channel: "LinkedIn",
          label: "Light proof",
          body: "Reference a similar sales team using Unify to turn inbound intent into researched outbound lists.",
        },
        {
          channel: "Email",
          label: "Offer the play",
          body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion.",
        },
        {
          channel: "Call",
          label: "Use context",
          body: "Open with the pricing visit and ask whether pipeline quality or source coverage is the bigger gap.",
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
          channel: "Email",
          label: "Anchor to integrations",
          body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts.",
        },
        {
          channel: "LinkedIn",
          label: "Ask a narrow question",
          body: "Ask whether partner signals are already part of Northstar Dev’s outbound scoring.",
        },
        {
          channel: "Email",
          label: "Show the workflow",
          body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list.",
        },
        {
          channel: "Call",
          label: "Reference the path",
          body: "Mention the integrations research and ask if sales is prioritizing ecosystem-led campaigns this quarter.",
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
          channel: "Email",
          label: "Mirror the proof",
          body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern.",
        },
        {
          channel: "LinkedIn",
          label: "Share a takeaway",
          body: "Send one concise observation about BrightLayer’s likely expansion motion based on the page viewed.",
        },
        {
          channel: "Email",
          label: "Personalized follow-up",
          body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment.",
        },
        {
          channel: "Call",
          label: "Ask for fit",
          body: "Ask whether revenue is looking for more accounts like the case-study customer or a new adjacent segment.",
        },
      ],
    },
  ],
  channels: [],
} satisfies SequenceEngagementConfig;

const ENGAGEMENT_SEQUENCE_THINKING = {
  id: "visitor-sequence-build",
  title: "Building outbound sequence",
  subtitle: "Using Unify’s offering, visitor intent, and role-level context to draft the campaign.",
  templateLabel: "Generating sequence template from company offering",
  template: "Using Unify’s offering, visitor intent, role-specific pain, relevant proof, and a low-friction CTA.",
  total: 50,
  tracks: [
    {
      id: "companies",
      label: "Researching companies",
      detail: "Reading firmographics, page intent, recent hiring, and relevant account signals.",
    },
    {
      id: "people",
      label: "Researching people",
      detail: "Checking role, seniority, likely ownership, and channel-specific personalization angles.",
    },
  ],
} satisfies SequenceBuildThinkingConfig;

const WEBSITE_VISITOR_SALES_COLUMNS = [
  { key: "name", label: "Name", width: "1.2fr" },
  { key: "company", label: "Company", width: "0.95fr" },
  { key: "title", label: "Title", width: "1.15fr" },
  { key: "visit", label: "Last visit", width: "0.86fr" },
  { key: "signal", label: "Signal", width: "1.18fr" },
] satisfies DataTableConfig["columns"];

const WEBSITE_VISITOR_SALES_PAGE_ONE = [
  { id: "maya-patel-visitor", values: { name: "Maya Patel", company: "OrbitGrid", title: "VP Sales", visit: "12m ago", signal: "Pricing page", source: "signal", avatarTone: "1" } },
  { id: "evan-brooks-visitor", values: { name: "Evan Brooks", company: "Northstar Dev", title: "Head of Sales", visit: "18m ago", signal: "Integrations", source: "signal", avatarTone: "2" } },
  { id: "clara-wong-visitor", values: { name: "Clara Wong", company: "BrightLayer", title: "VP Revenue", visit: "27m ago", signal: "Case study", source: "engage", avatarTone: "3" } },
  { id: "andre-park-visitor", values: { name: "Andre Park", company: "Ramp", title: "Head of Sales", visit: "33m ago", signal: "Demo page", source: "signal", avatarTone: "4" } },
  { id: "jamie-chen-visitor", values: { name: "Jamie Chen", company: "Square", title: "VP Sales", visit: "42m ago", signal: "ROI calculator", source: "signal", avatarTone: "5" } },
  { id: "nina-kapoor-visitor", values: { name: "Nina Kapoor", company: "Mercury", title: "Sales Director", visit: "51m ago", signal: "Security page", source: "database", avatarTone: "6" } },
  { id: "david-kim-visitor", values: { name: "David Kim", company: "Stripe", title: "Revenue Lead", visit: "1h ago", signal: "Docs", source: "engage", avatarTone: "7" } },
  { id: "sam-hollis-visitor", values: { name: "Sam Hollis", company: "Apollo", title: "VP Sales", visit: "1h ago", signal: "Comparison", source: "signal", avatarTone: "8" } },
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
      label: "Power dialer",
      icon: "dialer",
      tooltip: "Start power dialing",
      badge: "Coming soon",
      variant: "primary",
    },
    {
      id: "email-sequence",
      label: "Create outreach sequence",
      icon: "email",
      tooltip: "Build outreach sequence",
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
        { kind: "status", text: "Researching Acme", at: "<" },
        { kind: "thinking", steps: GTM_RESEARCH_STEPS, hold: 0.46, at: "+=0.04" },
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
    summary: "The assistant turns website visitor intent into a paginated list and engagement actions.",
    entry: CHAT_INPUT_TARGETS.researchBrief,
    entryLeadTime: INPUT_ENTRY_LEAD_TIME,
    build: (ctx) => {
      const pageTwoTarget = responsiveElementTarget(
        '[data-data-table="website-visitors-sales"] [data-table-page-button="2"]',
        "center",
      );
      const pageOneTarget = responsiveElementTarget(
        '[data-data-table="website-visitors-sales"] [data-table-page-button="1"]',
        "center",
      );
      const powerDialerTarget = responsiveElementTarget(
        '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
        "center",
      );
      const emailSequenceTarget = responsiveElementTarget(
        '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
        "center",
      );
      const sequenceNextTarget = responsiveElementTarget(
        '[data-sequence-person-button="visitor-outreach-sequences:next"]',
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
          statusBefore: "Finding visitors",
          statusAfter: "Building visitor list",
          fromEntry: true,
        },
        { kind: "dataTable", config: WEBSITE_VISITOR_SALES_TABLE, at: "-=0.02" },
        {
          kind: "cursorMove",
          target: pageTwoTarget,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "open-visitor-page-2" },
          at: "+=0.2",
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.dataTablePage("website-visitors-sales", 2), at: "-=0.03" },
        {
          kind: "custom",
          build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat }),
        },
        {
          kind: "cursorMove",
          target: pageOneTarget,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "return-visitor-page-1" },
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.dataTablePage("website-visitors-sales", 1), at: "-=0.03" },
        { kind: "status", text: "Ready to engage", at: "<" },
        {
          kind: "cursorMove",
          target: powerDialerTarget,
          options: { mode: "pointer", intent: "hover", speed: "normal", label: "hover-power-dialer" },
          at: "+=0.24",
        },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", true), at: "<+=0.04" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 1 }), at: "+=0.12" },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", false), at: "<" },
        {
          kind: "cursorMove",
          target: emailSequenceTarget,
          options: { mode: "pointer", intent: "hover", speed: "normal", label: "hover-email-sequence" },
        },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", true), at: "<+=0.04" },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", false), at: "<+=0.02" },
        { kind: "status", text: "Building outreach sequence", at: "<" },
        { kind: "custom", build: () => ctx.chat.sequenceBuildThinking(ENGAGEMENT_SEQUENCE_THINKING), at: "+=0.06" },
        { kind: "sequenceEngagement", config: ENGAGEMENT_SEQUENCE_LAUNCH, at: "-=0.02" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: sequenceNextTarget,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-evan-sequence" },
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.sequencePerson("visitor-outreach-sequences", 1), at: "-=0.03" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 0.24 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: sequenceNextTarget,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "preview-clara-sequence" },
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.sequencePerson("visitor-outreach-sequences", 2), at: "-=0.03" },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 0.28 }), at: "+=0.04" },
        {
          kind: "cursorMove",
          target: sequenceKickoffTarget,
          options: { mode: "pointer", intent: "click", speed: "normal", label: "kickoff-visitor-sequence" },
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.sequenceKickoff("visitor-outreach-sequences"), at: "-=0.04" },
        { kind: "status", text: "Sequence kicked off", at: "<" },
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
