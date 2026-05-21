import type { ThinkingItemConfig } from "../core/types";

export const DEFAULT_THINKING_TITLE = "Thinking";
export const DEFAULT_THINKING_DISCLOSURE = "Show more";
export const DEFAULT_THINKING_COLLAPSED_DISCLOSURE = "Show less";

export function createThinkingItems(labels: string[]): ThinkingItemConfig[] {
  return labels.map((label, index) => ({
    label,
    detail: getDefaultThinkingDetail(label, index),
    disclosure: index === 0 ? DEFAULT_THINKING_DISCLOSURE : DEFAULT_THINKING_COLLAPSED_DISCLOSURE,
  }));
}

export function getDefaultThinkingDetail(labelText: string, index: number): string {
  const label = labelText.toLowerCase();

  if (label.includes("source") || label.includes("data")) return "Searching across company records, contact databases, technographics, commerce signals, and local business indexes to find matches.";
  if (label.includes("company")) return "Reviewing public company information, website copy, firmographics, and recent external signals to understand the account context.";
  if (label.includes("icp") || label.includes("buyer")) return "Mapping personas, buying committees, seniority, department ownership, and account-fit signals from the available evidence.";
  if (label.includes("blog")) return "Reading launch notes, blog posts, category language, and positioning themes to infer the strongest outreach angles.";
  if (label.includes("career") || label.includes("hiring")) return "Checking careers pages, new roles, team growth, and hiring language to understand near-term operating priorities.";
  if (label.includes("gtm")) return "Connecting signal strength, audience fit, and likely urgency to decide which outbound motion is most likely to convert.";
  if (label.includes("funding") || label.includes("round")) return "Reviewing recent funding announcements, raise dates, investor notes, and company updates from the past three months.";
  if (label.includes("transcript") || label.includes("notes")) return "Extracting CRM fields, next steps, risk language, and owner context from the conversation transcript.";
  if (label.includes("logs") || label.includes("auth")) return "Inspecting connector logs, authentication events, permission changes, and recent workspace activity.";
  if (label.includes("account") || label.includes("signals")) return "Combining account history with public source changes and recent activity to prepare a concise research brief.";

  return index % 2 === 0
    ? "Inspecting relevant records, comparing source confidence, and filtering out low-quality matches before returning results."
    : "Cross-checking the strongest evidence across sources so the final answer only includes useful, defensible results.";
}

export function getThinkingElapsedLabel(stepCount: number): string {
  if (stepCount <= 1) return "4m 12s";
  if (stepCount <= 3) return "4m 20s";
  return "4m 50s";
}
