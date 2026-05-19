import type { CursorIntent, CursorSpeed, Point } from "../core/types";
import { clamp, distance } from "./geometry";
import { seededRandom } from "./seededRandom";

export type CursorPathPlan = {
  start: Point;
  c1: Point;
  c2: Point;
  end: Point;
  duration: number;
  settle?: {
    start: Point;
    c1: Point;
    c2: Point;
    end: Point;
    duration: number;
  };
};

type PathOptions = {
  seed: string;
  speed?: CursorSpeed;
  intent?: CursorIntent;
  curve?: number;
  overshoot?: number | false;
  settle?: boolean;
  reducedMotion?: boolean;
};

const SPEED_PIXELS_PER_SECOND: Record<CursorSpeed, number> = {
  slow: 560,
  normal: 860,
  quick: 1220,
};

const INTENT_DURATION_MULTIPLIER: Record<CursorIntent, number> = {
  entry: 1.08,
  hover: 0.96,
  click: 0.9,
  drag: 1.18,
  text: 1.04,
  exit: 1.0,
};

const CURSOR_DURATION_SCALE = 1.24;

export function createHumanCursorPath(start: Point, end: Point, options: PathOptions): CursorPathPlan {
  const random = seededRandom(options.seed);
  const dist = distance(start, end);
  const speed = options.speed ?? "normal";
  const intent = options.intent ?? "hover";

  if (options.reducedMotion || dist < 2) {
    return {
      start,
      c1: start,
      c2: end,
      end,
      duration: options.reducedMotion ? 0.12 : 0.08,
    };
  }

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const nx = dx / dist;
  const ny = dy / dist;
  const px = -ny;
  const py = nx;
  const curveSign = random() > 0.5 ? 1 : -1;
  const curveAmount = options.curve ?? 1;
  const intentCurve = intent === "drag" ? 0.1 : intent === "click" ? 0.17 : 0.22;
  const curve = clamp(dist * intentCurve * curveAmount, 18, 150) * curveSign * (0.72 + random() * 0.44);
  const baseDuration = dist / SPEED_PIXELS_PER_SECOND[speed] + 0.16;
  const duration = clamp(baseDuration * INTENT_DURATION_MULTIPLIER[intent] * CURSOR_DURATION_SCALE, 0.3, 1.66);
  const overshootDistance =
    options.overshoot === false || dist < 120
      ? 0
      : typeof options.overshoot === "number"
        ? options.overshoot
        : clamp(dist * 0.026, 4, 18);

  const primaryEnd =
    overshootDistance > 0
      ? {
          x: end.x + nx * overshootDistance,
          y: end.y + ny * overshootDistance,
        }
      : end;

  const c1 = {
    x: start.x + dx * (0.25 + random() * 0.08) + px * curve,
    y: start.y + dy * (0.25 + random() * 0.08) + py * curve,
  };

  const c2 = {
    x: start.x + dx * (0.68 + random() * 0.12) - px * curve * 0.42,
    y: start.y + dy * (0.68 + random() * 0.12) - py * curve * 0.42,
  };

  const shouldSettle = options.settle !== false && overshootDistance > 0;

  return {
    start,
    c1,
    c2,
    end: primaryEnd,
    duration: shouldSettle ? duration * 0.86 : duration,
    settle: shouldSettle
      ? {
          start: primaryEnd,
          c1: {
            x: primaryEnd.x - nx * overshootDistance * 0.45 + px * curve * 0.04,
            y: primaryEnd.y - ny * overshootDistance * 0.45 + py * curve * 0.04,
          },
          c2: {
            x: end.x + nx * overshootDistance * 0.16,
            y: end.y + ny * overshootDistance * 0.16,
          },
          end,
          duration: clamp(duration * 0.18, 0.1, 0.24),
        }
      : undefined,
  };
}
