import type { SequenceEngagementConfig } from "./types";

export function getInitialSequenceIndex(config: Pick<SequenceEngagementConfig, "sequences">): number {
  return Math.max(0, Math.floor((config.sequences.length - 1) / 2));
}

export function getPreviewSequenceIndexes(
  config: Pick<SequenceEngagementConfig, "sequences">,
  count: number,
): number[] {
  const initialIndex = getInitialSequenceIndex(config);
  const indexes: number[] = [];

  for (let index = initialIndex + 1; index < config.sequences.length && indexes.length < count; index += 1) {
    indexes.push(index);
  }

  for (let index = initialIndex - 1; index >= 0 && indexes.length < count; index -= 1) {
    indexes.push(index);
  }

  while (indexes.length < count) indexes.push(initialIndex);

  return indexes;
}
