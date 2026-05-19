import type { Point } from "../core/types";

export function distance(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function sampleCubicBezier(start: Point, c1: Point, c2: Point, end: Point, t: number): Point {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  return {
    x: uuu * start.x + 3 * uu * t * c1.x + 3 * u * tt * c2.x + ttt * end.x,
    y: uuu * start.y + 3 * uu * t * c1.y + 3 * u * tt * c2.y + ttt * end.y,
  };
}
