export type ParsedPaginationRange = {
  start: number;
  end: number;
  total?: number;
};

export function normalizePaginationRanges(value: unknown): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter((range): range is string => typeof range === "string")
    .map((range) => range.trim())
    .filter(Boolean);
}

export function normalizePageSize(value: unknown): number | null {
  const pageSize =
    typeof value === "number"
      ? value
      : typeof value === "string" && value.trim()
        ? Number(value)
        : NaN;

  return Number.isFinite(pageSize) && pageSize > 0 ? Math.floor(pageSize) : null;
}

export function inferPageSizeFromRanges(ranges: string[] | undefined): number | null {
  const range = parsePaginationRange(ranges?.[0]);
  const pageSize = range ? range.end - range.start + 1 : null;

  return pageSize !== null && Number.isFinite(pageSize) && pageSize > 0 ? pageSize : null;
}

export function getRowsForPaginationRange<T>(rows: T[], range: string, pageIndex: number, pageSize: number): T[] {
  const parsedRange = parsePaginationRange(range);

  if (!parsedRange) return rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

  return rows.slice(parsedRange.start - 1, parsedRange.end);
}

export function parsePaginationRange(range: string | undefined): ParsedPaginationRange | null {
  const match = range?.match(/^\s*(\d+)\s*[-–]\s*(\d+)(?:\s+of\s+(\d+))?/i);

  if (!match) return null;

  const start = Number(match[1]);
  const end = Number(match[2]);
  const total = match[3] ? Number(match[3]) : undefined;

  if (!Number.isFinite(start) || !Number.isFinite(end) || start <= 0 || end < start) return null;

  return {
    start,
    end,
    ...(total !== undefined && Number.isFinite(total) && total >= end ? { total } : {}),
  };
}
