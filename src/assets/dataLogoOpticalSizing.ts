// Scales were calculated from each rendered logo's visible alpha/contrast-weighted ink area,
// then normalized toward the median visual mass and clamped for layout stability.
export const DATA_LOGO_OPTICAL_SCALES: Record<string, number> = {
  "5x5": 1.32,
  adbeat: 0.81,
  adyntel: 0.92,
  builtwith: 0.79,
  buyercaddy: 1.12,
  demandbase: 1.02,
  harmonic: 1,
  hubspot: 0.78,
  mixrank: 0.96,
  "ocean-io": 1.14,
  openmart: 0.97,
  pdl: 1.38,
  posthog: 0.98,
  predictleads: 1.39,
  salesforce: 0.78,
  segment: 1.25,
  serpstat: 1.12,
  snitcher: 0.78,
  "store-leads": 1.03,
  "the-swarm": 0.8,
  theirstack: 1.06,
  trigify: 1.02,
  upriver: 0.78,
  "waterfall-io": 1.07,
  zerobounce: 0.95,
};

export function getDataLogoOpticalScale(sourceId: string): number {
  return DATA_LOGO_OPTICAL_SCALES[sourceId] ?? 1;
}
