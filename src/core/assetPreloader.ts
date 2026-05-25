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
const DATA_TABLE_DIRECT_AVATAR_KEYS = ["avatarUrl", "mutualConnectionAvatarUrl"] as const;
const DATA_TABLE_PERSON_KEYS = ["name", "contact", "prospect", "fullName", "mutualConnection", "connector"] as const;

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
  return collectUniqueAssetUrls(getDataTableRows(table).flatMap((row) => getDataTableRowAssetUrlCandidates(row.values)));
}

export function collectDataSourceAssetUrls(config: DataSourceGridConfig): string[] {
  return collectUniqueAssetUrls(config.sources.map((source) => source.logoSrc));
}

export function collectProximityAssetUrls(config: ProximityLeadListConfig): string[] {
  return collectUniqueAssetUrls(config.leads.map((lead) => getProfilePhotoUrl(lead.name, lead.avatarUrl)));
}

export function collectSequenceAssetUrls(config: SequenceEngagementConfig): string[] {
  return collectUniqueAssetUrls(config.sequences.map((sequence) => getProfilePhotoUrl(sequence.name, sequence.avatarUrl)));
}

function getDataTableRows(table: DataTableConfig): DataTableConfig["rows"] {
  return [
    ...table.rows,
    ...(table.pagination?.pages.flatMap((page) => page.rows) ?? []),
  ];
}

function getDataTableRowAssetUrlCandidates(values: Record<string, string>): Array<string | undefined> {
  const urls: Array<string | undefined> = DATA_TABLE_DIRECT_AVATAR_KEYS.map((key) => values[key]);

  for (const key of DATA_TABLE_PERSON_KEYS) {
    const name = values[key];
    if (!name) continue;
    if (!shouldPreloadDataTablePerson(key, values)) continue;

    const explicit = key === "mutualConnection" || key === "connector" ? values.mutualConnectionAvatarUrl : values.avatarUrl;
    urls.push(getProfilePhotoUrl(name, explicit));
  }

  return urls;
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

function collectUniqueAssetUrls(values: unknown[]): string[] {
  const urls = new Set<string>();

  for (const value of values) {
    if (isAssetUrl(value)) urls.add(value);
  }

  return [...urls];
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
