import type {
  DataSourceGridConfig,
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
    label: "Idea one",
    title: "Target DevOps teams outgrowing AWS complexity",
    bullets: [
      "I'll find mid-market SaaS companies with heavy AWS footprints and hiring DevOps",
      "I'll run a 3-step email + LinkedIn sequence using the Notion infra efficiency angle",
    ],
  },
  {
    id: "revops-consolidation",
    label: "Idea two",
    title: "Intercept AI teams burning cycles on LLM infra",
    bullets: [
      "I'll identify companies building AI products, showing LLM/ML engineering hiring signals",
      "I'll craft a sequence leading with AI infra complexity pain and Vercel AI SDK as the path",
    ],
  },
  {
    id: "pipeline-acceleration",
    label: "Idea three",
    title: "Hit e-commerce teams before peak season",
    bullets: [
      "I'll find ecom and DTC brands with 50+ engineers and upcoming high-traffic events",
      "I'll lead with PAIGE's Black Friday results in a short sequence timed to pre-peak urgency",
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
  { key: "name", label: "Name", width: "1.45fr" },
  { key: "company", label: "Company", width: "1fr" },
  { key: "title", label: "Title", width: "1.45fr" },
] satisfies DataTableConfig["columns"];

const DATA_MARKETPLACE_ENRICHED_COLUMNS = [
  { key: "name", label: "Prospect", width: "minmax(220px,0.95fr)" },
  { key: "email", label: "Work email", width: "minmax(190px,0.95fr)" },
  { key: "number", label: "Mobile", width: "minmax(150px,0.72fr)" },
  { key: "connector", label: "Connector", width: "minmax(170px,0.78fr)" },
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
  title: "Ask complex questions across diverse data sets",
  subtitle: "Unify routes each search across the right partner sources for the job.",
  sources: [
    {
      id: "hubspot",
      category: "CRM",
      name: "HubSpot",
      detail: "CRM, marketing, and sales engagement records.",
      logoSrc: "/data-logos/HubSpot.svg",
    },
    {
      id: "salesforce",
      category: "CRM",
      name: "Salesforce",
      detail: "CRM account, contact, and activity data.",
      logoSrc: "/data-logos/Salesforce.svg",
    },
    {
      id: "5x5",
      category: "Core Data",
      name: "Five by Five",
      detail: "On-premise company and contact datasets.",
      logoSrc: "/data-logos/5x5.svg",
    },
    {
      id: "mixrank",
      category: "Core Data",
      name: "MixRank",
      detail: "Company, app, and advertising intelligence.",
      logoSrc: "/data-logos/mixrank.svg",
    },
    {
      id: "pdl",
      category: "Core Data",
      name: "People Data Labs",
      detail: "People and company records for core B2B coverage.",
      logoSrc: "/data-logos/People%20Data%20Labs.svg",
    },
    {
      id: "adyntel",
      category: "Ad Intelligence",
      name: "Adyntel",
      detail: "Ad spend, messaging, and competitive advertising signals.",
      logoSrc: "/data-logos/Adyntel.svg",
    },
    {
      id: "adbeat",
      category: "Ad Intelligence",
      name: "Adbeat",
      detail: "Digital ad creatives, publishers, and campaign intelligence.",
      logoSrc: "/data-logos/Adbeat.svg",
    },
    {
      id: "upriver",
      category: "Ad Intelligence",
      name: "Upriver",
      detail: "Ad strategy and competitive demand generation signals.",
      logoSrc: "/data-logos/UpRiver.svg",
    },
    {
      id: "snitcher",
      category: "Web Intent",
      name: "Snitcher",
      detail: "Website visitor identification and account intent.",
      logoSrc: "/data-logos/Snitcher.svg",
    },
    {
      id: "demandbase",
      category: "Web Intent",
      name: "Demandbase",
      detail: "Account identification and intent signals.",
      logoSrc: "/data-logos/Demandbase.svg",
    },
    {
      id: "posthog",
      category: "Product Analytics",
      name: "PostHog",
      detail: "Product events, usage, and conversion behavior.",
      logoSrc: "/data-logos/PostHog.svg",
    },
    {
      id: "segment",
      category: "Product Analytics",
      name: "Segment",
      detail: "Customer event pipelines and audience traits.",
      logoSrc: "/data-logos/Segment.svg",
    },
    {
      id: "openmart",
      category: "SMB Data",
      name: "OpenMart",
      detail: "Small business discovery and merchant data.",
      logoSrc: "/data-logos/OpenMart.svg",
    },
    {
      id: "store-leads",
      category: "Ecommerce",
      name: "Store Leads",
      detail: "E-commerce stores, platforms, categories, and growth signals.",
      logoSrc: "/data-logos/Store%20Leads.svg",
    },
    {
      id: "ramp",
      category: "Enrichment",
      name: "Ramp",
      detail: "Financial and business context enrichment.",
      logoSrc: "/data-logos/Ramp.svg",
    },
    {
      id: "fullenrich",
      category: "Enrichment",
      name: "FullEnrich",
      detail: "Email and phone enrichment across multiple providers.",
      logoSrc: "/data-logos/FullEnrich.svg",
    },
    {
      id: "ocean-io",
      category: "Company / Fundraising",
      name: "Ocean.io",
      detail: "Company lookalikes, segments, and account discovery.",
      logoSrc: "/data-logos/Oceanio.svg",
    },
    {
      id: "harmonic",
      category: "Company / Fundraising",
      name: "Harmonic",
      detail: "Startup company signals, growth, and fundraising data.",
      logoSrc: "/data-logos/Harmonic.svg",
    },
    {
      id: "theirstack",
      category: "Tech Stack",
      name: "Theirstack",
      detail: "Technology install, job-posting, and stack signals.",
      logoSrc: "/data-logos/TheirStack.svg",
    },
    {
      id: "predictleads",
      category: "Tech Stack",
      name: "PredictLeads",
      detail: "Hiring, technology, product, and business event signals.",
      logoSrc: "/data-logos/PredictLeads.svg",
    },
    {
      id: "builtwith",
      category: "Tech Stack",
      name: "BuiltWith",
      detail: "Installed tools, web stack, pixels, and infrastructure data.",
      logoSrc: "/data-logos/Built%20With.svg",
    },
    {
      id: "serpstat",
      category: "Web / SEO",
      name: "Serpstat",
      detail: "SEO, PPC, and content intelligence.",
      logoSrc: "/data-logos/Serpstat.svg",
    },
    {
      id: "se-ranking",
      category: "Web / SEO",
      name: "SE Ranking",
      detail: "Search visibility, keyword, and competitor SEO data.",
      logoSrc: "/data-logos/SE%20Ranking.svg",
    },
    {
      id: "linkedin",
      category: "Relationships",
      name: "LinkedIn",
      detail: "Professional relationship and profile context.",
      logoSrc: "/data-logos/LinkedIn.png",
    },
    {
      id: "the-swarm",
      category: "Relationships",
      name: "The Swarm",
      detail: "Network, relationship, and warm-introduction context.",
      logoSrc: "/data-logos/The%20Swarm.svg",
    },
    {
      id: "trigify",
      category: "And more",
      name: "Trigify",
      detail: "Social buying signals and engagement events.",
      logoSrc: "/data-logos/Trigify.svg",
    },
    {
      id: "zerobounce",
      category: "And more",
      name: "ZeroBounce",
      detail: "Email validation and deliverability checks.",
      logoSrc: "/data-logos/zerobounce.svg",
    },
    {
      id: "buyercaddy",
      category: "And more",
      name: "BuyerCaddy",
      detail: "Buyer tracking and sales workflow support.",
      logoSrc: "/data-logos/BuyerCaddy.svg",
    },
  ],
} satisfies DataSourceGridConfig;

const DATA_MARKETPLACE_ENRICHED_TABLE = {
  id: "enriched-dev-tool-contacts",
  title: "Enriched contacts",
  eyebrow: "ready to engage",
  count: "3 contacts",
  variant: "enriched",
  columns: DATA_MARKETPLACE_ENRICHED_COLUMNS,
  rows: [
    {
      id: "jamie-chen",
      values: {
        name: "Jamie Chen",
        prospectDetail: "VP of Sales at Ramp",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        connector: "Priya Shah (Unify)",
        avatarTone: "1",
        avatarUrl: "https://i.pravatar.cc/64?img=12",
        source: "signal",
      },
    },
    {
      id: "andre-park",
      values: {
        name: "Andre Park",
        prospectDetail: "Head of Growth at Ramp",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        connector: "Marco Liu (Unify)",
        avatarTone: "2",
        avatarUrl: "https://i.pravatar.cc/64?img=52",
        source: "signal",
      },
    },
    {
      id: "david-kim",
      values: {
        name: "David Kim",
        prospectDetail: "Head of Revenue at Ramp",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        connector: "Dev Singh (Unify)",
        avatarTone: "3",
        avatarUrl: "https://i.pravatar.cc/64?img=33",
        source: "signal",
      },
    },
    {
      id: "chandler-bree",
      values: {
        name: "Chandler Bree",
        prospectDetail: "VP of Sales at Square",
        email: "jamie@ramp.com",
        number: "+1 (628) 240-2744",
        connector: "Jenna Park (Unify)",
        avatarTone: "4",
        avatarUrl: "https://i.pravatar.cc/64?img=11",
        source: "database",
      },
    },
    {
      id: "ellen-nelle",
      values: {
        name: "Ellen Nelle",
        prospectDetail: "Growth Engineer at Square",
        email: "andre@ramp.com",
        number: "+1 (210) 555-2341",
        connector: "Owen Lee (Unify)",
        avatarTone: "5",
        avatarUrl: "https://i.pravatar.cc/64?img=47",
        source: "database",
      },
    },
    {
      id: "chadley-dupre",
      values: {
        name: "Chadley Dupre",
        prospectDetail: "Head of Revops at Square",
        email: "david@ramp.com",
        number: "+1 (628) 230-9962",
        connector: "Rachel Cho (Unify)",
        avatarTone: "6",
        avatarUrl: "https://i.pravatar.cc/64?img=59",
        source: "database",
      },
    },
    {
      id: "patrick-bateman",
      values: {
        name: "Patrick Bateman",
        prospectDetail: "COO at Stripe",
        email: "pbateman@stripe.com",
        number: "+1 (415) 555-0142",
        connector: "Evan Brooks (Unify)",
        avatarTone: "7",
        avatarUrl: "https://i.pravatar.cc/64?img=68",
        source: "engage",
      },
    },
    {
      id: "miles-kibble",
      values: {
        name: "Miles Kibble III",
        prospectDetail: "Head of Chaos at Stripe",
        email: "mkibble@stripe.com",
        number: "+1 (628) 555-2210",
        connector: "Sam Hollis (Unify)",
        avatarTone: "8",
        avatarUrl: "https://i.pravatar.cc/64?img=15",
        source: "engage",
      },
    },
    {
      id: "natalie-dank",
      values: {
        name: "Natalie Dank",
        prospectDetail: "Money Manager at Stripe",
        email: "ndank@stripe.com",
        number: "+1 (415) 555-7733",
        connector: "Noah Singh (Unify)",
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

const GMAIL_MAILBOX_CONNECTION = {
  id: "gmail-mailbox-connection",
  title: "Connect a mailbox",
  subtitle: "Unify will recent emails, replies, and meeting context to learn how you actually communicate",
  provider: "Gmail",
  account: "joel@unifygtm.com",
  status: "Connected",
  ctaLabel: "Gmail",
  secondaryCtaLabel: "Outlook",
  loadingLabel: "connecting",
  learningTitle: "Learning your style",
  learningDetail: "Analyzing vocabulary...",
  learningReadyDetail: "73 tone & tactic rules defined",
  signals: ["sent emails", "reply patterns", "calendar context", "signature and tone"],
} satisfies MailboxConnectionConfig;

const OUTREACH_STYLE_PROFILE = {
  id: "learned-outreach-style",
  title: "Learned outreach style",
  subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
  signals: [
    { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
    { label: "CTA", value: "Low-friction question before calendar asks" },
    { label: "proof", value: "lead with trigger + relevant customer pattern" },
    { label: "Guardrail", value: "Rejects weak ICP fit before drafting" },
  ],
  examples: [
    "Keep the opener grounded in a real business trigger.",
    "Avoid generic automation language unless the account shows ops pain.",
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
          body: "Reference a similar sales team using Unify to turn inbound intent into researched outbound lists.",
        },
        {
          channel: "email",
          label: "offer the play",
          body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion.",
        },
        {
          channel: "call",
          label: "use context",
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
          channel: "email",
          label: "anchor to integrations",
          body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts.",
        },
        {
          channel: "linkedin",
          label: "ask a narrow question",
          body: "Ask whether partner signals are already part of Northstar Dev’s outbound scoring.",
        },
        {
          channel: "email",
          label: "show the workflow",
          body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list.",
        },
        {
          channel: "call",
          label: "reference the path",
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
          channel: "email",
          label: "mirror the proof",
          body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern.",
        },
        {
          channel: "linkedin",
          label: "share a takeaway",
          body: "Send one concise observation about BrightLayer’s likely expansion motion based on the page viewed.",
        },
        {
          channel: "email",
          label: "personalized follow-up",
          body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment.",
        },
        {
          channel: "call",
          label: "ask for fit",
          body: "Ask whether revenue is looking for more accounts like the case-study customer or a new adjacent segment.",
        },
      ],
    },
  ],
  channels: [],
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
        exitStory(EXIT_TARGETS.bottomRight, "+=3"),
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
      desktop: { target: "[data-chat-shell]", anchor: "right", offset: { x: -48, y: 168 } },
      tablet: { target: "[data-chat-shell]", anchor: "right", offset: { x: -44, y: 144 } },
      mobile: { target: "[data-chat-shell]", anchor: "right", offset: { x: -36, y: 112 } },
    } satisfies ResponsiveTarget,
    entryLeadTime: 0.18,
    build: (ctx) => {
      const dropArea = ctx.chat.prepareCsvDropArea({
        title: "Drop business context files",
        detail: "Battle cards, playbooks, ICP notes, voice docs, and messaging context.",
      });
      const cursorFile = ctx.chat.prepareCursorFile("4 context files", ctx.cursor, "DOC", AGENT_CONTEXT_FILES);
      const mailboxButtonTarget = responsiveElementTarget(
        `[data-mailbox-connect="${GMAIL_MAILBOX_CONNECTION.id}"]`,
        "center",
        {
          desktop: { x: 2, y: 0 },
          tablet: { x: 1, y: 0 },
          mobile: { x: 0, y: 0 },
        },
        false,
      );
      const contextFilePickupTarget = {
        desktop: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 180, y: -74 }, humanOffset: false },
        tablet: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 144, y: -58 }, humanOffset: false },
        mobile: { target: "[data-chat-shell]", anchor: "right", outside: "right", offset: { x: 96, y: -42 }, humanOffset: false },
      } satisfies ResponsiveTarget;
      const dropTarget = responsiveElementTarget("[data-chat-shell]", "center", {
        desktop: { x: 0, y: 74 },
        tablet: { x: 0, y: 64 },
        mobile: { x: 0, y: 56 },
      });

      return buildStorySteps(ctx, [
        { kind: "status", text: "connect mailbox" },
        { kind: "custom", build: () => ctx.chat.mailboxConnection(GMAIL_MAILBOX_CONNECTION), at: "+=0.04" },
        {
          kind: "custom",
          build: () =>
            ctx.cursor.scanAcross(`[data-mailbox-connection="${GMAIL_MAILBOX_CONNECTION.id}"]`, {
              label: `mailbox-cta-skim-${GMAIL_MAILBOX_CONNECTION.id}`,
              duration: 0.68,
            }),
          at: "+=0.16",
        },
        {
          kind: "cursorMove",
          target: mailboxButtonTarget,
          options: {
            mode: "pointer",
            intent: "hover",
            speed: "normal",
            overshoot: false,
            settle: true,
            label: `mailbox-connect-${GMAIL_MAILBOX_CONNECTION.id}`,
          },
          at: "+=0.08",
        },
        { kind: "cursorClick", at: "-=0.02" },
        { kind: "custom", build: () => ctx.chat.connectMailbox(GMAIL_MAILBOX_CONNECTION.id), at: "<+=0.08" },
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
        { kind: "custom", build: () => cursorFile.startFollow(), at: "-=0.04" },
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
      const powerDialerTarget = responsiveElementTarget(
        '[data-data-table="website-visitors-sales"] [data-table-action="power-dialer"]',
        "center",
        { desktop: { x: 5, y: 0 }, tablet: { x: 4, y: 0 }, mobile: { x: 3, y: 0 } },
        false,
      );
      const emailSequenceTarget = responsiveElementTarget(
        '[data-data-table="website-visitors-sales"] [data-table-action="email-sequence"]',
        "center",
        {},
        false,
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
          statusBefore: "finding visitors",
          statusAfter: "building visitor list",
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
        { kind: "status", text: "ready to engage", at: "+=0.1" },
        {
          kind: "custom",
          build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 0.58 }),
        },
        {
          kind: "cursorMove",
          target: powerDialerTarget,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-power-dialer" },
          at: "+=0.42",
        },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", true) },
        { kind: "custom", build: () => ctx.timeline().to({}, { duration: STORY_TIMING.beat + 1 }), at: "+=0.12" },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "power-dialer", false) },
        {
          kind: "cursorMove",
          target: emailSequenceTarget,
          options: { mode: "pointer", intent: "hover", speed: "slow", label: "hover-email-sequence" },
        },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", true) },
        { kind: "cursorClick", at: "+=0.18" },
        { kind: "custom", build: () => ctx.chat.dataTableActionTooltip("website-visitors-sales", "email-sequence", false), at: "<+=0.02" },
        { kind: "status", text: "building outreach sequence", at: "<" },
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
        { kind: "status", text: "sequence kicked off", at: "<" },
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
        { kind: "status", text: "waiting for CSV" },
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
