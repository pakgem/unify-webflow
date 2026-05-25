import { getProfilePhotoUrl } from "../assets/profilePhotos";
import type {
  DataSourceGridConfig,
  DataTableConfig,
  ProximityLeadListConfig,
  SequenceEngagementConfig,
  StoryDefinition,
} from "./types";

const preloadedImageUrls = new Set<string>();
const preloadLinkUrls = new Set<string>();

export function preloadStoriesAround(stories: StoryDefinition[], index: number): void {
  if (!stories.length) return;

  preloadStoryAssets(stories[index]);
  preloadStoryAssets(stories[(index + 1) % stories.length]);
}

export function preloadStoryAssets(story: StoryDefinition | undefined): void {
  if (!story?.assetUrls?.length) return;

  for (const url of story.assetUrls) preloadImage(url);
}

export function collectDataTableAssetUrls(table: DataTableConfig): string[] {
  const urls = new Set<string>();
  const addRow = (row: DataTableConfig["rows"][number]) => addDataTableRowAssetUrls(urls, row.values);

  table.rows.forEach(addRow);
  table.pagination?.pages.forEach((page) => page.rows.forEach(addRow));

  return [...urls];
}

export function collectDataSourceAssetUrls(config: DataSourceGridConfig): string[] {
  return config.sources.map((source) => source.logoSrc).filter(isAssetUrl);
}

export function collectProximityAssetUrls(config: ProximityLeadListConfig): string[] {
  return config.leads.map((lead) => getProfilePhotoUrl(lead.name, lead.avatarUrl)).filter(isAssetUrl);
}

export function collectSequenceAssetUrls(config: SequenceEngagementConfig): string[] {
  return config.sequences.map((sequence) => getProfilePhotoUrl(sequence.name, sequence.avatarUrl)).filter(isAssetUrl);
}

function addDataTableRowAssetUrls(urls: Set<string>, values: Record<string, string>): void {
  for (const key of ["avatarUrl", "mutualConnectionAvatarUrl"]) {
    if (isAssetUrl(values[key])) urls.add(values[key]);
  }

  for (const key of ["name", "contact", "prospect", "fullName", "mutualConnection", "connector"]) {
    const name = values[key];
    if (!name) continue;
    if (!shouldPreloadDataTablePerson(key, values)) continue;

    const explicit = key === "mutualConnection" || key === "connector" ? values.mutualConnectionAvatarUrl : values.avatarUrl;
    const url = getProfilePhotoUrl(name, explicit);
    if (isAssetUrl(url)) urls.add(url);
  }
}

function shouldPreloadDataTablePerson(key: string, values: Record<string, string>): boolean {
  if (key === "mutualConnection" || key === "connector") return true;

  return Boolean(
    values.avatarUrl ||
    values.avatar ||
    values.avatarTone ||
    values.source ||
    values.personDetail ||
    values.prospectDetail,
  );
}

function preloadImage(url: string): void {
  if (typeof document === "undefined" || typeof Image === "undefined") return;

  const absoluteUrl = normalizeAssetUrl(url);

  if (!absoluteUrl || preloadedImageUrls.has(absoluteUrl)) return;
  preloadedImageUrls.add(absoluteUrl);

  addPreloadLink(absoluteUrl);

  const image = new Image();
  image.decoding = "async";
  image.loading = "eager";
  image.src = absoluteUrl;
  void image.decode?.().catch(() => undefined);
}

function addPreloadLink(url: string): void {
  if (!preloadLinkUrls.size) {
    for (const link of document.head.querySelectorAll<HTMLLinkElement>('link[rel="preload"][as="image"]')) {
      preloadLinkUrls.add(link.href);
    }
  }

  if (preloadLinkUrls.has(url)) return;
  preloadLinkUrls.add(url);

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = url;
  document.head.append(link);
}

function normalizeAssetUrl(url: string): string | null {
  try {
    return new URL(url, document.baseURI).href;
  } catch {
    return null;
  }
}

function isAssetUrl(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
