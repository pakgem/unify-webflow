const PROFILE_PHOTO_BASE = "https://i.pravatar.cc/96";

const PROFILE_PHOTO_BY_NAME: Record<string, string> = {
  "andre park": `${PROFILE_PHOTO_BASE}?img=52`,
  "ava garcia": `${PROFILE_PHOTO_BASE}?img=46`,
  "chadley dupre": `${PROFILE_PHOTO_BASE}?img=59`,
  "chandler bree": `${PROFILE_PHOTO_BASE}?img=11`,
  "clara wong": `${PROFILE_PHOTO_BASE}?img=32`,
  "david kim": `${PROFILE_PHOTO_BASE}?img=33`,
  "ellen nelle": `${PROFILE_PHOTO_BASE}?img=47`,
  "evan brooks": `${PROFILE_PHOTO_BASE}?img=8`,
  "fatima ali": `${PROFILE_PHOTO_BASE}?img=45`,
  "jamie chen": `${PROFILE_PHOTO_BASE}?img=12`,
  "jules meyer": `${PROFILE_PHOTO_BASE}?img=14`,
  "leo martin": `${PROFILE_PHOTO_BASE}?img=56`,
  "liam price": `${PROFILE_PHOTO_BASE}?img=6`,
  "marcus reed": `${PROFILE_PHOTO_BASE}?img=53`,
  "maya patel": `${PROFILE_PHOTO_BASE}?img=5`,
  "miles kibble iii": `${PROFILE_PHOTO_BASE}?img=15`,
  "miles kibbles iii": `${PROFILE_PHOTO_BASE}?img=15`,
  "mr kibbles iii": `${PROFILE_PHOTO_BASE}?img=15`,
  "natalie dank": `${PROFILE_PHOTO_BASE}?img=49`,
  "nina kapoor": `${PROFILE_PHOTO_BASE}?img=31`,
  "noah singh": `${PROFILE_PHOTO_BASE}?img=4`,
  "owen lee": `${PROFILE_PHOTO_BASE}?img=7`,
  "patrick bateman": `${PROFILE_PHOTO_BASE}?img=68`,
  "priya rao": `${PROFILE_PHOTO_BASE}?img=21`,
  "rachel cho": `${PROFILE_PHOTO_BASE}?img=44`,
  "sam hollis": `${PROFILE_PHOTO_BASE}?img=13`,
  "sara nelson": `${PROFILE_PHOTO_BASE}?img=41`,
  "zoe carter": `${PROFILE_PHOTO_BASE}?img=23`,
};

function normalizeProfileName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

function seededProfilePhotoUrl(name: string): string {
  const seed = normalizeProfileName(name).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return seed ? `${PROFILE_PHOTO_BASE}?u=${encodeURIComponent(seed)}` : "";
}

export function getProfilePhotoUrl(name: string, explicitUrl?: string): string {
  const normalized = normalizeProfileName(name);
  const explicit = explicitUrl?.trim() || undefined;

  return PROFILE_PHOTO_BY_NAME[normalized] ?? explicit ?? seededProfilePhotoUrl(name);
}
