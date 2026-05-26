import type { ChatbotStoriesConfig } from "./types";

export type AssetUrlResolver = (url: string) => string;

const DEFAULT_MEDIA_BACKGROUND_URL = "/media/chat-background.png";
const WEBFLOW_ASSET_PREFIXES = ["/media/", "/data-logos/", "media/", "data-logos/"];

export const identityAssetUrlResolver: AssetUrlResolver = (url) => url;

export function createAssetUrlResolver(config: Pick<ChatbotStoriesConfig, "assetBaseUrl" | "assetUrlMap">): AssetUrlResolver {
  const assetBaseUrl = normalizeAssetBaseUrl(config.assetBaseUrl);
  const assetUrlMap = normalizeAssetUrlMap(config.assetUrlMap);

  return (url: string): string => {
    const trimmedUrl = url.trim();

    if (!trimmedUrl) return url;

    const mappedUrl = getMappedAssetUrl(trimmedUrl, assetUrlMap);

    if (mappedUrl) return mappedUrl;
    if (!assetBaseUrl || !shouldResolveFromAssetBase(trimmedUrl)) return url;

    return `${assetBaseUrl}/${trimmedUrl.replace(/^\/+/, "")}`;
  };
}

export function applyRuntimeAssetUrls(root: HTMLElement, resolveAssetUrl: AssetUrlResolver): void {
  root.style.setProperty("--wa-media-image", cssUrl(resolveAssetUrl(DEFAULT_MEDIA_BACKGROUND_URL)));
}

function normalizeAssetBaseUrl(value: string | undefined): string {
  return value?.trim().replace(/\/+$/, "") ?? "";
}

function normalizeAssetUrlMap(value: Record<string, string> | undefined): Map<string, string> {
  const map = new Map<string, string>();

  if (!value) return map;

  for (const [rawKey, rawValue] of Object.entries(value)) {
    const key = rawKey.trim();
    const mappedUrl = rawValue.trim();

    if (!key || !mappedUrl) continue;

    map.set(key, mappedUrl);
    map.set(decodeAssetPath(key), mappedUrl);

    const normalizedKey = key.replace(/^\/+/, "");
    map.set(normalizedKey, mappedUrl);
    map.set(`/${normalizedKey}`, mappedUrl);
    map.set(decodeAssetPath(normalizedKey), mappedUrl);
    map.set(`/${decodeAssetPath(normalizedKey).replace(/^\/+/, "")}`, mappedUrl);
  }

  return map;
}

function getMappedAssetUrl(url: string, assetUrlMap: Map<string, string>): string {
  return assetUrlMap.get(url) ?? assetUrlMap.get(decodeAssetPath(url)) ?? "";
}

function decodeAssetPath(value: string): string {
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

function shouldResolveFromAssetBase(url: string): boolean {
  if (isAbsoluteUrl(url) || url.startsWith("//") || url.startsWith("#")) return false;

  return WEBFLOW_ASSET_PREFIXES.some((prefix) => url.startsWith(prefix));
}

function isAbsoluteUrl(url: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(url);
}

function cssUrl(url: string): string {
  return `url("${url
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\a ")}")`;
}
