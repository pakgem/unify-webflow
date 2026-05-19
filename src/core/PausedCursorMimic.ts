import type { CursorActor } from "../actors/CursorActor";
import type { Point } from "./types";

type PausedCursorMimicOptions = {
  onMimicStart?: () => void;
};

type PointerSample = Point & {
  time: number;
};
type MimicMode = "idle" | "follow" | "sniff" | "returnWait" | "return";

const MIMIC_TRIGGER = {
  radius: 48,
  sampleWindowMs: 900,
  minTravel: 34,
  minAxisReversals: 1,
};
const MIMIC_DISMISS = {
  sampleWindowMs: 560,
  minTravel: 300,
  minAxisReversals: 4,
  minAverageSpeed: 0.58,
  minTravelToNetRatio: 2.25,
  maxNetDistance: 180,
};

const MIMIC_FOLLOW = {
  smoothing: 0.22,
  trailDistance: 60,
  minPointerDistance: 44,
  momentumScale: 0.2,
  momentumDecay: 0.88,
  minMomentum: 0.35,
  maxMomentumStep: 18,
  idleTimeoutMs: 1800,
  reengageRadius: 84,
  maxBrowserDistance: 600,
  returnDelayMs: 320,
};
const MIMIC_SNIFF = {
  durationMs: 920,
  pointIntervalMs: 155,
  radius: 24,
  smoothing: 0.2,
};
const MIMIC_RETURN = {
  smoothing: 0.18,
  arriveDistance: 3.5,
};

export class PausedCursorMimic {
  private paused = false;
  private active = false;
  private mode: MimicMode = "idle";
  private listening = false;
  private samples: PointerSample[] = [];
  private dismissSamples: PointerSample[] = [];
  private target: Point | null = null;
  private pointer: Point | null = null;
  private homePoint: Point | null = null;
  private sniffAnchor: Point | null = null;
  private sniffStartedAt = 0;
  private nextSniffAt = 0;
  private sniffIndex = 0;
  private returnAt = 0;
  private lastPointer: Point | null = null;
  private trailDirection: Point = { x: -0.94, y: 0.34 };
  private velocity: Point = { x: 0, y: 0 };
  private frame = 0;
  private lastMoveAt = 0;

  constructor(
    private root: HTMLElement,
    private cursor: CursorActor,
    private options: PausedCursorMimicOptions = {},
  ) {}

  setPaused(paused: boolean): void {
    if (this.paused === paused) return;

    this.paused = paused;
    this.samples = [];
    this.dismissSamples = [];

    if (paused) {
      this.listen();
      return;
    }

    this.stopMimicking();
    this.unlisten();
  }

  destroy(): void {
    this.setPaused(false);
  }

  private listen(): void {
    if (this.listening) return;

    document.addEventListener("pointermove", this.handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", this.handlePointerLeave, { passive: true });
    this.listening = true;
  }

  private unlisten(): void {
    if (!this.listening) return;

    document.removeEventListener("pointermove", this.handlePointerMove);
    document.removeEventListener("pointerleave", this.handlePointerLeave);
    this.listening = false;
  }

  private handlePointerMove = (event: PointerEvent): void => {
    if (!this.paused) return;

    const point = { x: event.clientX, y: event.clientY };

    if (!this.isPointInsideViewport(point)) {
      if (this.active) {
        this.startSniffing();
      }
      this.samples = [];
      this.dismissSamples = [];
      return;
    }

    if (this.active) {
      const now = performance.now();

      if (this.mode === "follow") {
        this.updateFollowTarget(point);
        this.lastMoveAt = now;
        this.trackDismissShake(point, now);

        if (this.hasDismissShake()) {
          this.startReturnAfterPause(0);
        }
      } else if (this.mode === "sniff" && this.isPointNearStoryCursor(point, MIMIC_FOLLOW.reengageRadius)) {
        this.resumeFollowing(point);
      }
      this.scheduleFollow();
      return;
    }

    if (!this.isPointNearStoryCursor(point)) {
      this.pruneSamples(performance.now());
      return;
    }

    this.samples.push({ ...point, time: performance.now() });
    this.pruneSamples(performance.now());

    if (this.hasMimicGesture()) {
      this.startMimicking(point);
    }
  };

  private handlePointerLeave = (): void => {
    if (this.active) {
      this.startSniffing();
    }
    this.samples = [];
    this.dismissSamples = [];
  };

  private startMimicking(point: Point): void {
    if (this.active) return;

    this.active = true;
    this.mode = "follow";
    this.homePoint = this.getCursorViewportPoint();
    this.lastPointer = this.samples[this.samples.length - 2] ?? null;
    this.updateFollowTarget(point);
    this.lastMoveAt = performance.now();
    this.samples = [];
    this.dismissSamples = [];
    this.root.dataset.cursorMimicking = "true";
    this.options.onMimicStart?.();
    this.cursor.beginMimicControl();
    this.scheduleFollow();
  }

  private stopMimicking(): void {
    if (!this.active) return;

    this.active = false;
    this.mode = "idle";
    this.target = null;
    this.pointer = null;
    this.homePoint = null;
    this.sniffAnchor = null;
    this.lastPointer = null;
    this.velocity = { x: 0, y: 0 };
    this.dismissSamples = [];
    delete this.root.dataset.cursorMimicking;
    window.cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.cursor.endMimicControl();
  }

  private scheduleFollow(): void {
    if (this.frame || !this.active) return;

    this.frame = window.requestAnimationFrame(this.followPointer);
  }

  private followPointer = (): void => {
    this.frame = 0;

    if (!this.active) return;

    const now = performance.now();

    if (this.mode === "returnWait") {
      if (now >= this.returnAt) {
        this.mode = "return";
        this.target = this.homePoint ?? this.getCursorViewportPoint();
      }
      this.scheduleFollow();
      return;
    }

    if (this.mode === "sniff") {
      this.updateSniffTarget(now);
      if (this.target) this.cursor.mimicViewportPoint(this.target, MIMIC_SNIFF.smoothing, this.target);
      if (now - this.sniffStartedAt >= MIMIC_SNIFF.durationMs) this.startReturnAfterPause();
      this.scheduleFollow();
      return;
    }

    if (this.mode === "return") {
      const home = this.homePoint ?? this.getCursorViewportPoint();
      this.target = home;
      this.cursor.mimicViewportPoint(home, MIMIC_RETURN.smoothing, home);

      if (distance(this.getCursorViewportPoint(), home) <= MIMIC_RETURN.arriveDistance) {
        this.completeReturn();
        return;
      }

      this.scheduleFollow();
      return;
    }

    if (this.mode !== "follow" || !this.target) return;

    if (this.isCursorTooFarFromBrowser()) {
      this.startReturnAfterPause();
      return;
    }

    if (now - this.lastMoveAt > MIMIC_FOLLOW.idleTimeoutMs) {
      this.stopMimicking();
      return;
    }

    this.applyMomentum(now);
    this.cursor.mimicViewportPoint(this.target, MIMIC_FOLLOW.smoothing, this.pointer ?? this.target);
    this.scheduleFollow();
  };

  private updateFollowTarget(point: Point): void {
    if (!this.isPointInsideViewport(point)) {
      this.startSniffing();
      return;
    }

    if (this.lastPointer) {
      const delta = {
        x: point.x - this.lastPointer.x,
        y: point.y - this.lastPointer.y,
      };
      const length = Math.hypot(delta.x, delta.y);

      if (length > 1.5) {
        this.trailDirection = {
          x: delta.x / length,
          y: delta.y / length,
        };
        this.velocity = clampVector(delta, MIMIC_FOLLOW.maxMomentumStep);
      }
    }

    const target = {
      x: point.x - this.trailDirection.x * MIMIC_FOLLOW.trailDistance,
      y: point.y - this.trailDirection.y * MIMIC_FOLLOW.trailDistance,
    };

    if (distance(point, target) < MIMIC_FOLLOW.minPointerDistance) {
      target.x = point.x - this.trailDirection.x * MIMIC_FOLLOW.minPointerDistance;
      target.y = point.y - this.trailDirection.y * MIMIC_FOLLOW.minPointerDistance;
    }

    this.target = target;
    this.pointer = point;
    this.lastPointer = point;
  }

  private resumeFollowing(point: Point): void {
    this.mode = "follow";
    this.sniffAnchor = null;
    this.nextSniffAt = 0;
    this.sniffIndex = 0;
    this.returnAt = 0;
    this.lastPointer = point;
    this.updateFollowTarget(point);
    this.dismissSamples = [];
    this.lastMoveAt = performance.now();
  }

  private startSniffing(): void {
    if (!this.active || this.mode === "sniff" || this.mode === "return" || this.mode === "returnWait") return;

    const now = performance.now();
    this.mode = "sniff";
    this.sniffAnchor = this.getCursorViewportPoint();
    this.sniffStartedAt = now;
    this.nextSniffAt = 0;
    this.sniffIndex = 0;
    this.pointer = null;
    this.velocity = { x: 0, y: 0 };
    this.dismissSamples = [];
    this.scheduleFollow();
  }

  private updateSniffTarget(now: number): void {
    if (!this.sniffAnchor) this.sniffAnchor = this.getCursorViewportPoint();
    if (this.target && now < this.nextSniffAt) return;

    const phase = this.sniffIndex;
    const angle = phase * 1.92;
    const radius = MIMIC_SNIFF.radius * (phase % 2 === 0 ? 1 : 0.58);

    this.target = {
      x: this.sniffAnchor.x + Math.cos(angle) * radius,
      y: this.sniffAnchor.y + Math.sin(angle) * radius * 0.62,
    };
    this.sniffIndex += 1;
    this.nextSniffAt = now + MIMIC_SNIFF.pointIntervalMs;
  }

  private applyMomentum(now: number): void {
    if (!this.target || now - this.lastMoveAt < 48) return;

    const speed = Math.hypot(this.velocity.x, this.velocity.y);

    if (speed < MIMIC_FOLLOW.minMomentum) return;

    this.target = {
      x: this.target.x + this.velocity.x * MIMIC_FOLLOW.momentumScale,
      y: this.target.y + this.velocity.y * MIMIC_FOLLOW.momentumScale,
    };
    this.velocity = {
      x: this.velocity.x * MIMIC_FOLLOW.momentumDecay,
      y: this.velocity.y * MIMIC_FOLLOW.momentumDecay,
    };
  }

  private startReturnAfterPause(delayMs = MIMIC_FOLLOW.returnDelayMs): void {
    if (!this.active) return;

    this.mode = "returnWait";
    this.target = null;
    this.pointer = null;
    this.lastPointer = null;
    this.velocity = { x: 0, y: 0 };
    this.dismissSamples = [];
    window.cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.returnAt = performance.now() + delayMs;
    this.scheduleFollow();
  }

  private completeReturn(): void {
    this.active = false;
    this.mode = "idle";
    this.target = null;
    this.pointer = null;
    this.homePoint = null;
    this.sniffAnchor = null;
    this.lastPointer = null;
    this.velocity = { x: 0, y: 0 };
    this.dismissSamples = [];
    delete this.root.dataset.cursorMimicking;
    window.cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.cursor.endMimicControl();
  }

  private isCursorTooFarFromBrowser(): boolean {
    const shellRect = this.root.querySelector<HTMLElement>("[data-chat-shell]")?.getBoundingClientRect();

    if (!shellRect) return false;

    const rootRect = this.root.getBoundingClientRect();
    const cursorPoint = this.cursor.readPosition();
    const viewportCursor = {
      x: rootRect.left + cursorPoint.x,
      y: rootRect.top + cursorPoint.y,
    };

    return distanceToRect(viewportCursor, shellRect) > MIMIC_FOLLOW.maxBrowserDistance;
  }

  private isPointNearStoryCursor(point: Point, radius = MIMIC_TRIGGER.radius): boolean {
    const rootRect = this.root.getBoundingClientRect();
    const cursorPoint = this.cursor.readPosition();
    const viewportCursor = {
      x: rootRect.left + cursorPoint.x,
      y: rootRect.top + cursorPoint.y,
    };

    return distance(point, viewportCursor) <= radius;
  }

  private isPointInsideViewport(point: Point): boolean {
    return (
      point.x >= 0 &&
      point.x <= window.innerWidth &&
      point.y >= 0 &&
      point.y <= window.innerHeight
    );
  }

  private getCursorViewportPoint(): Point {
    const rootRect = this.root.getBoundingClientRect();
    const cursorPoint = this.cursor.readPosition();

    return {
      x: rootRect.left + cursorPoint.x,
      y: rootRect.top + cursorPoint.y,
    };
  }

  private pruneSamples(now: number): void {
    this.samples = this.samples.filter((sample) => now - sample.time <= MIMIC_TRIGGER.sampleWindowMs);
  }

  private trackDismissShake(point: Point, now: number): void {
    this.dismissSamples.push({ ...point, time: now });
    this.dismissSamples = this.dismissSamples.filter((sample) => now - sample.time <= MIMIC_DISMISS.sampleWindowMs);
  }

  private hasMimicGesture(): boolean {
    if (this.samples.length < 4) return false;

    const travel = this.samples.reduce((sum, sample, index) => {
      const previous = this.samples[index - 1];

      return previous ? sum + distance(sample, previous) : sum;
    }, 0);

    return travel >= MIMIC_TRIGGER.minTravel && this.countAxisReversals(this.samples) >= MIMIC_TRIGGER.minAxisReversals;
  }

  private hasDismissShake(): boolean {
    if (this.dismissSamples.length < 6) return false;

    for (let startIndex = 0; startIndex <= this.dismissSamples.length - 6; startIndex += 1) {
      if (this.isDismissShakeWindow(this.dismissSamples.slice(startIndex))) return true;
    }

    return false;
  }

  private isDismissShakeWindow(samples: PointerSample[]): boolean {
    const first = samples[0];
    const last = samples[samples.length - 1];
    const duration = Math.max(1, last.time - first.time);
    const travel = samples.reduce((sum, sample, index) => {
      const previous = samples[index - 1];

      return previous ? sum + distance(sample, previous) : sum;
    }, 0);
    const netDistance = distance(first, last);
    const travelToNetRatio = travel / Math.max(netDistance, 1);

    return (
      travel >= MIMIC_DISMISS.minTravel &&
      netDistance <= MIMIC_DISMISS.maxNetDistance &&
      travel / duration >= MIMIC_DISMISS.minAverageSpeed &&
      travelToNetRatio >= MIMIC_DISMISS.minTravelToNetRatio &&
      this.countAxisReversals(samples) >= MIMIC_DISMISS.minAxisReversals
    );
  }

  private countAxisReversals(samples: PointerSample[]): number {
    let reversals = 0;
    let previousXDirection = 0;
    let previousYDirection = 0;

    for (let index = 1; index < samples.length; index += 1) {
      const previous = samples[index - 1];
      const current = samples[index];
      const xDirection = signWithDeadzone(current.x - previous.x);
      const yDirection = signWithDeadzone(current.y - previous.y);

      if (xDirection && previousXDirection && xDirection !== previousXDirection) reversals += 1;
      if (yDirection && previousYDirection && yDirection !== previousYDirection) reversals += 1;

      if (xDirection) previousXDirection = xDirection;
      if (yDirection) previousYDirection = yDirection;
    }

    return reversals;
  }
}

function distance(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

function distanceToRect(point: Point, rect: DOMRect): number {
  const dx = Math.max(rect.left - point.x, 0, point.x - rect.right);
  const dy = Math.max(rect.top - point.y, 0, point.y - rect.bottom);

  return Math.hypot(dx, dy);
}

function clampVector(vector: Point, maxLength: number): Point {
  const length = Math.hypot(vector.x, vector.y);

  if (length <= maxLength || length === 0) return vector;

  return {
    x: vector.x / length * maxLength,
    y: vector.y / length * maxLength,
  };
}

function signWithDeadzone(value: number): number {
  if (Math.abs(value) < 2) return 0;
  return Math.sign(value);
}
