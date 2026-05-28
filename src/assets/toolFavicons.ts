import builtWith from "./tool-favicons/BuiltWith.png";
import contactOut from "./tool-favicons/ContactOut.png";
import exa from "./tool-favicons/Exa.png";
import fullEnrich from "./tool-favicons/FullEnrich.png";
import harmonic from "./tool-favicons/Harmonic.png";
import hubSpot from "./tool-favicons/HubSpot.png";
import oceanIo from "./tool-favicons/Ocean_io.png";
import predictLeads from "./tool-favicons/PredictLeads.png";
import salesforce from "./tool-favicons/Salesforce.png";
import theSwarm from "./tool-favicons/The_Swarm.png";
import v0 from "./tool-favicons/V0.png";
import vercel from "./tool-favicons/Vercel.png";
import waterfallIo from "./tool-favicons/Waterfall_io.png";

const TOOL_FAVICON_ALIASES = [
  { url: builtWith, keys: ["builtwith", "built with"] },
  { url: contactOut, keys: ["contactout", "contact out"] },
  { url: exa, keys: ["exa", "exa ai", "exa.ai"] },
  { url: fullEnrich, keys: ["fullenrich", "full enrich"] },
  { url: harmonic, keys: ["harmonic"] },
  { url: hubSpot, keys: ["hubspot", "hub spot"] },
  { url: oceanIo, keys: ["ocean", "ocean io", "ocean.io", "oceanio"] },
  { url: predictLeads, keys: ["predictleads", "predict leads"] },
  { url: salesforce, keys: ["salesforce"] },
  { url: theSwarm, keys: ["the swarm", "swarm"] },
  { url: v0, keys: ["v0", "v0 app", "v0.app"] },
  { url: vercel, keys: ["vercel", "vercel com", "vercel.com"] },
  { url: waterfallIo, keys: ["waterfall", "waterfall io", "waterfall.io", "waterfallio"] },
] as const;

const TOOL_FAVICON_URLS = new Map<string, string>(
  TOOL_FAVICON_ALIASES.flatMap(({ url, keys }) => keys.map((key) => [normalizeToolFaviconKey(key), url])),
);

const TOOL_FAVICON_MATCHERS = TOOL_FAVICON_ALIASES.map(({ url, keys }) => {
  const normalizedKeys = keys.map(normalizeToolFaviconKey);
  const compactKeys = normalizedKeys.map(compactToolFaviconKey);

  return { url, normalizedKeys, compactKeys };
});

const TOOL_SERVICE_KEY_ALIASES = new Map<string, string>([
  ["builtwith", "builtwith"],
  ["builtwithio", "builtwith"],
  ["contactout", "contactout"],
  ["fullenrich", "fullenrich"],
  ["fullenrichio", "fullenrich"],
  ["predictleads", "predictleads"],
  ["predictleadsio", "predictleads"],
  ["theirstack", "theirstack"],
  ["theirdata", "theirstack"],
  ["waterfallio", "waterfall"],
]);

export function getToolFaviconUrl(name: string): string {
  const normalizedName = normalizeToolFaviconKey(name);
  const exactUrl = TOOL_FAVICON_URLS.get(normalizedName);

  if (exactUrl) return exactUrl;

  const compactName = compactToolFaviconKey(normalizedName);

  if (!compactName) return "";

  for (const { url, normalizedKeys, compactKeys } of TOOL_FAVICON_MATCHERS) {
    if (normalizedKeys.some((key) => key && normalizedName.includes(key))) return url;
    if (compactKeys.some((key) => key && compactName.includes(key))) return url;
  }

  return "";
}

export function getToolFallbackInitial(name: string): string {
  return name.trim().charAt(0) || "?";
}

export function getToolServiceKey(name: string): string {
  const key = normalizeToolFaviconKey(name).replace(/\s+/g, "");

  if (!key) return "unknown";
  if (key.includes("unify") || key.includes("onprem")) return "on-prem";
  if (key.includes("waterfall")) return "waterfall";

  return TOOL_SERVICE_KEY_ALIASES.get(key) ?? key;
}

function normalizeToolFaviconKey(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(inc|llc|ltd|corp|corporation|company)\b\.?/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function compactToolFaviconKey(name: string): string {
  return name.replace(/\s+/g, "");
}
