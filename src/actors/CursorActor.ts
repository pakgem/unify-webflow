import { gsap } from "gsap";
import type { CursorMode, CursorMoveOptions, Point, ResponsiveTarget } from "../core/types";
import type { TargetResolver } from "../core/TargetResolver";
import { createHumanCursorPath, type CursorPathPlan } from "../motion/createHumanCursorPath";
import { clamp, sampleCubicBezier } from "../motion/geometry";

type CursorActorOptions = {
  reducedMotion?: boolean;
};

type CursorScanOptions = {
  label?: string;
  duration?: number;
  match?: "first" | "last";
  passes?: number;
};

const POINTER_TARGET_SELECTOR = "button, a, [role='button'], [data-send-button], [data-result-action]";
const TEXT_TARGET_SELECTOR =
  "[data-chat-input][data-visible='true'], [data-signup-field], input, textarea, [contenteditable='true']";
const IDLE_FLOAT = {
  delay: 0.42,
  returnDuration: 0.18,
  segments: [
    { x: 1.6, y: -2.4, rotation: 0.28, duration: 1.55 },
    { x: -1.2, y: -3.1, rotation: -0.18, duration: 1.9 },
    { x: 0.8, y: -1.2, rotation: 0.16, duration: 1.45 },
    { x: 0, y: 0, rotation: 0, duration: 1.7 },
  ],
};
const HISTORY_PARK = {
  outsideOffset: 24,
  topRatio: 0.3,
  minTopInset: 74,
  maxTopInset: 190,
};
const DEFAULT_CURSOR_POINT_ANGLE = -135;
const MIMIC_ROTATION_SMOOTHING = 0.34;

export class CursorActor {
  readonly el: HTMLElement;

  private floatLayer: HTMLElement;
  private setX: (value: number) => void;
  private setY: (value: number) => void;
  private setRotation: (value: number) => void;
  private idleFloat: gsap.core.Timeline | null = null;
  private idleFloatDelay: gsap.core.Tween | null = null;
  private transformState = { x: 0, y: 0 };
  private rotationState = 0;
  private plannedPosition: Point = { x: 0, y: 0 };
  private currentPosition: Point = { x: 0, y: 0 };
  private storyId = "story";
  private moveIndex = 0;
  private mode: CursorMode = "default";
  private modeOverride: CursorMode | null = null;
  private modeTargetsDirty = true;
  private pointerTargets: Element[] = [];
  private textTargets: Element[] = [];
  private targetObserver: MutationObserver | null = null;
  private lastModeSyncAt = 0;
  private lastModeSyncPoint: Point = { x: Number.NaN, y: Number.NaN };
  private modeWatchFrame = 0;

  constructor(
    private root: HTMLElement,
    private resolver: TargetResolver,
    private options: CursorActorOptions = {},
  ) {
    this.el = this.root.querySelector<HTMLElement>("[data-cursor]") ?? this.createElement();
    this.floatLayer = this.ensureFloatLayer();
    this.setX = gsap.quickSetter(this.el, "x", "px") as (value: number) => void;
    this.setY = gsap.quickSetter(this.el, "y", "px") as (value: number) => void;
    this.setRotation = gsap.quickSetter(this.el, "rotation", "deg") as (value: number) => void;

    const start = this.resolver.resolve({ target: "[data-chat-shell]", anchor: "center" }, "cursor:start");
    this.setPosition(start);
    this.setMode("default");
    this.observeModeTargets();
    this.queueIdleFloat();
  }

  beginBuild(start: Point, storyId: string): void {
    this.storyId = storyId;
    this.moveIndex = 0;
    this.plannedPosition = { ...start };
  }

  getPosition(): Point {
    return { ...this.currentPosition };
  }

  readPosition(): Readonly<Point> {
    return this.currentPosition;
  }

  getHistoryParkViewportPoint(): Point {
    const rootRect = this.root.getBoundingClientRect();
    const point = this.resolveHistoryParkPoint();

    return {
      x: rootRect.left + point.x,
      y: rootRect.top + point.y,
    };
  }

  beginMimicControl(): void {
    this.stopIdleFloat(true);
    this.modeOverride = "default";
    this.setMode("default");
    this.el.dataset.cursorMimicking = "true";
    gsap.killTweensOf(this.el);
    gsap.set(this.el, { autoAlpha: 1, scale: 1 });
  }

  mimicViewportPoint(viewportPoint: Point, smoothing = 0.42, lookAtViewportPoint = viewportPoint): void {
    const rootRect = this.root.getBoundingClientRect();
    const target = {
      x: viewportPoint.x - rootRect.left,
      y: viewportPoint.y - rootRect.top,
    };
    const lookAt = {
      x: lookAtViewportPoint.x - rootRect.left,
      y: lookAtViewportPoint.y - rootRect.top,
    };
    const point = {
      x: this.currentPosition.x + (target.x - this.currentPosition.x) * smoothing,
      y: this.currentPosition.y + (target.y - this.currentPosition.y) * smoothing,
    };

    this.modeOverride = "default";
    this.currentPosition = point;
    this.plannedPosition = { ...point };
    this.renderPosition(point);
    this.setMode("default");
    this.renderMimicRotation(point, lookAt);
  }

  endMimicControl(): void {
    this.modeOverride = null;
    delete this.el.dataset.cursorMimicking;
    this.resetRotation();
    this.syncModeToPoint(this.currentPosition);
    this.queueIdleFloat();
  }

  setPosition(point: Point): void {
    this.currentPosition = { ...point };
    this.plannedPosition = { ...point };
    this.renderPosition(point);
  }

  setMode(mode: CursorMode): void {
    if (this.mode === mode && this.el.dataset.cursorMode === mode) {
      this.updateModeWatch();
      return;
    }

    this.mode = mode;
    this.el.dataset.cursorMode = mode;
    this.updateModeWatch();
  }

  moveTo(target: ResponsiveTarget, options: CursorMoveOptions = {}): gsap.core.Timeline {
    const label = options.label ?? `move-${this.moveIndex}`;
    const targetMode = options.mode ?? "default";
    const seed = `${this.storyId}:${label}:${this.resolver.getBreakpoint()}`;
    const initialEnd = this.resolver.resolve(target, seed);
    const initialStart = { ...this.plannedPosition };
    const initialPlan = createHumanCursorPath(initialStart, initialEnd, {
      seed,
      intent: options.intent,
      speed: options.speed,
      curve: options.curve,
      overshoot: options.overshoot,
      settle: options.settle,
      reducedMotion: this.options.reducedMotion,
    });
    const tl = gsap.timeline();
    let livePlan: CursorPathPlan | null = null;

    this.moveIndex += 1;
    this.plannedPosition = { ...initialEnd };

    tl.call(() => {
      this.stopIdleFloat();
      this.resetRotation();
    }, undefined, 0);
    tl.set(this.el, { autoAlpha: 1 }, 0);

    tl.call(() => {
      this.modeOverride = targetMode === "drag" ? "drag" : null;
      if (this.modeOverride) {
        this.setMode(this.modeOverride);
      } else {
        this.syncModeToPoint(this.currentPosition);
      }
    }, undefined, 0);

    tl.add(
      this.pathTweenFromFactory(
        () => {
          this.resolver.refresh();
          const end = this.resolver.resolve(target, seed);
          livePlan = createHumanCursorPath(this.currentPosition, end, {
            seed,
            intent: options.intent,
            speed: options.speed,
            curve: options.curve,
            overshoot: options.overshoot,
            settle: options.settle,
            reducedMotion: this.options.reducedMotion,
          });
          this.plannedPosition = { ...end };
          return livePlan;
        },
        initialPlan.duration,
      ),
    );

    if (initialPlan.settle) {
      tl.add(
        this.pathTweenFromFactory(
          () =>
            livePlan?.settle ?? {
              start: this.currentPosition,
              c1: this.currentPosition,
              c2: this.currentPosition,
              end: this.currentPosition,
              duration: 0.01,
            },
          initialPlan.settle.duration,
          "power2.out",
        ),
      );
    }

    if (!options.preserveMode) {
      tl.call(() => {
        this.modeOverride = null;
        this.syncModeToPoint(this.currentPosition);
        this.queueIdleFloat();
      });
    }

    return tl;
  }

  parkForChatHistory(): gsap.core.Timeline {
    const label = `history-park-${this.moveIndex}`;
    const seed = `${this.storyId}:${label}:${this.resolver.getBreakpoint()}`;
    const initialStart = { ...this.currentPosition };
    const initialEnd = this.resolveHistoryParkPoint();
    const initialPlan = createHumanCursorPath(initialStart, initialEnd, {
      seed,
      intent: "hover",
      speed: "quick",
      overshoot: false,
      settle: false,
      reducedMotion: this.options.reducedMotion,
    });
    const tl = gsap.timeline();

    this.moveIndex += 1;
    this.plannedPosition = { ...initialEnd };

    tl.call(() => {
      this.stopIdleFloat();
      this.modeOverride = null;
      this.setMode("default");
    }, undefined, 0);

    tl.add(
      this.pathTweenFromFactory(
        () => this.createHistoryParkPlan(seed),
        initialPlan.duration,
        "sine.inOut",
      ),
    );

    tl.call(() => {
      this.modeOverride = null;
      this.syncModeToPoint(this.currentPosition);
      this.queueIdleFloat();
    });

    return tl;
  }

  scanAcross(target: string | HTMLElement, options: CursorScanOptions = {}): gsap.core.Timeline {
    const label = options.label ?? `scan-${this.moveIndex}`;
    const tl = gsap.timeline();

    this.moveIndex += 1;

    if (this.options.reducedMotion) {
      return tl.to({}, { duration: 0.08 });
    }

    tl.call(() => {
      this.stopIdleFloat();
      this.modeOverride = "default";
      this.setMode("default");
    });

    tl.add(
      this.pathTweenFromFactory(
        () => this.resolveScanPath(target, `${this.storyId}:${label}:scan`, options.match),
        options.duration ?? 0.78,
        "sine.inOut",
      ),
    ).to({}, { duration: 0.08 });

    tl.call(() => {
      this.modeOverride = null;
      this.syncModeToPoint(this.currentPosition);
      this.queueIdleFloat();
    });

    return tl;
  }

  click(_nextMode: CursorMode = "pointer"): gsap.core.Timeline {
    const tl = gsap.timeline();

    tl.call(() => {
      this.stopIdleFloat();
      const canShowClick = this.getModeForPoint(this.currentPosition) === "pointer";
      this.modeOverride = canShowClick ? "click" : null;
      if (canShowClick) {
        this.setMode("click");
      } else {
        this.syncModeToPoint(this.currentPosition);
      }
    }, undefined, 0)
      .to(this.el, {
        scale: 0.86,
        duration: this.options.reducedMotion ? 0.03 : 0.095,
        ease: "power2.out",
      })
      .to(this.el, {
        scale: 1,
        duration: this.options.reducedMotion ? 0.05 : 0.21,
        ease: "back.out(4)",
      })
      .call(() => {
        this.modeOverride = null;
        this.syncModeToPoint(this.currentPosition);
        this.queueIdleFloat();
      });

    return tl;
  }

  dragTo(target: ResponsiveTarget, options: CursorMoveOptions = {}): gsap.core.Timeline {
    const tl = gsap.timeline();

    tl.call(() => {
      this.stopIdleFloat();
      this.modeOverride = "drag";
      this.setMode("drag");
    })
      .to(this.el, {
        scale: 0.9,
        duration: this.options.reducedMotion ? 0.04 : 0.16,
        ease: "power2.out",
      })
      .add(
        this.moveTo(target, {
          ...options,
          mode: "drag",
          intent: "drag",
          speed: options.speed ?? "slow",
          overshoot: false,
          settle: false,
          preserveMode: true,
        }),
        this.options.reducedMotion ? 0 : 0.03,
      )
      .call(() => {
        this.modeOverride = "drag";
        this.setMode("drag");
      })
      .to({}, { duration: options.releaseHold ?? 0 })
      .call(() => {
        this.modeOverride = "release";
        this.setMode("release");
      })
      .to(this.el, {
        scale: 1.04,
        duration: this.options.reducedMotion ? 0.03 : 0.1,
        ease: "power2.out",
      })
      .to(this.el, {
        scale: 1,
        duration: this.options.reducedMotion ? 0.05 : 0.18,
        ease: "back.out(2.5)",
      })
      .call(() => {
        this.modeOverride = null;
        this.syncModeToPoint(this.currentPosition);
        this.queueIdleFloat();
      });

    return tl;
  }

  destroy(): void {
    this.targetObserver?.disconnect();
    this.stopModeWatch();
    this.stopIdleFloat();
    this.el.remove();
  }

  resetInteraction(): void {
    this.stopIdleFloat(true);
    this.modeOverride = null;
    delete this.el.dataset.cursorMimicking;
    gsap.killTweensOf(this.el);
    gsap.set(this.el, { scale: 1 });
    this.resetRotation(true);
    this.syncModeToPoint(this.currentPosition);
    this.queueIdleFloat();
  }

  private pathTween(
    start: Point,
    c1: Point,
    c2: Point,
    end: Point,
    duration: number,
    ease = "power2.inOut",
  ): gsap.core.Tween {
    const proxy = { t: 0 };

    return gsap.fromTo(
      proxy,
      { t: 0 },
      {
        t: 1,
        duration,
        ease,
        onUpdate: () => {
          const point = sampleCubicBezier(start, c1, c2, end, proxy.t);
          this.currentPosition = point;
          this.renderPosition(point);
          if (!this.modeOverride) this.maybeSyncModeToPoint(point);
        },
        onComplete: () => {
          this.currentPosition = { ...end };
          this.renderPosition(end);
          if (!this.modeOverride) this.syncModeToPoint(end);
        },
      },
    );
  }

  private pathTweenFromFactory(
    factory: () => {
      start: Point;
      c1: Point;
      c2: Point;
      end: Point;
    },
    duration: number,
    ease = "power2.inOut",
  ): gsap.core.Tween {
    const proxy = { t: 0 };
    let segment: ReturnType<typeof factory> | null = null;

    return gsap.fromTo(
      proxy,
      { t: 0 },
      {
        t: 1,
        duration,
        ease,
        onStart: () => {
          proxy.t = 0;
          segment = factory();
        },
        onUpdate: () => {
          if (!segment) return;

          const point = sampleCubicBezier(segment.start, segment.c1, segment.c2, segment.end, proxy.t);
          this.currentPosition = point;
          this.renderPosition(point);
          if (!this.modeOverride) this.maybeSyncModeToPoint(point);
        },
        onComplete: () => {
          if (!segment) return;

          this.currentPosition = { ...segment.end };
          this.plannedPosition = { ...segment.end };
          this.renderPosition(segment.end);
          if (!this.modeOverride) this.syncModeToPoint(segment.end);
        },
      },
    );
  }

  private createHistoryParkPlan(seed: string): CursorPathPlan {
    this.resolver.refresh();

    const end = this.resolveHistoryParkPoint();
    const plan = createHumanCursorPath(this.currentPosition, end, {
      seed,
      intent: "hover",
      speed: "quick",
      overshoot: false,
      settle: false,
      reducedMotion: this.options.reducedMotion,
    });

    this.plannedPosition = { ...end };
    return plan;
  }

  private resolveHistoryParkPoint(): Point {
    const rootRect = this.root.getBoundingClientRect();
    const shellRect = this.root.querySelector<HTMLElement>("[data-chat-shell]")?.getBoundingClientRect();

    if (!shellRect) return { ...this.currentPosition };

    const topInset = clamp(
      shellRect.height * HISTORY_PARK.topRatio,
      HISTORY_PARK.minTopInset,
      HISTORY_PARK.maxTopInset,
    );

    return {
      x: shellRect.right - rootRect.left + HISTORY_PARK.outsideOffset,
      y: shellRect.top - rootRect.top + topInset,
    };
  }

  private pointTweenFromFactory(
    factory: () => Point,
    duration: number,
    ease = "power2.inOut",
  ): gsap.core.Tween {
    const proxy = { t: 0 };
    let start: Point = { ...this.currentPosition };
    let end: Point = { ...this.currentPosition };

    return gsap.fromTo(proxy, { t: 0 }, {
      t: 1,
      duration,
      ease,
      onStart: () => {
        proxy.t = 0;
        start = { ...this.currentPosition };
        end = factory();
      },
      onUpdate: () => {
        const point = {
          x: start.x + (end.x - start.x) * proxy.t,
          y: start.y + (end.y - start.y) * proxy.t,
        };
        this.currentPosition = point;
        this.renderPosition(point);
      },
      onComplete: () => {
        this.currentPosition = { ...end };
        this.plannedPosition = { ...this.currentPosition };
        this.renderPosition(this.currentPosition);
      },
    });
  }

  private resolveScanPath(
    target: string | HTMLElement,
    seed: string,
    match: CursorScanOptions["match"] = "first",
  ): {
    start: Point;
    c1: Point;
    c2: Point;
    end: Point;
  } {
    const start = { ...this.currentPosition };
    const guideStart = this.resolveScanPoint(target, `${seed}:start`, "start", match);
    const end = this.resolveScanPoint(target, `${seed}:end`, "end", match);

    return {
      start,
      c1: interpolatePoint(start, guideStart, 0.64),
      c2: interpolatePoint(guideStart, end, 0.42),
      end,
    };
  }

  private resolveScanPoint(
    target: string | HTMLElement,
    seed: string,
    side: "start" | "end",
    match: CursorScanOptions["match"] = "first",
  ): Point {
    const element = typeof target === "string" ? this.findVisibleScanElement(target, match) : target;

    if (!element) return this.currentPosition;

    this.resolver.refresh();

    const random = this.seededScanRandom(seed);
    const rootRect = this.root.getBoundingClientRect();
    const rect = element.getBoundingClientRect();
    const shellRect = this.root.querySelector<HTMLElement>("[data-chat-shell]")?.getBoundingClientRect();
    const left = shellRect ? Math.max(rect.left, shellRect.left + 18) : rect.left;
    const right = shellRect ? Math.min(rect.right, shellRect.right - 18) : rect.right;
    const top = shellRect ? Math.max(rect.top, shellRect.top + 58) : rect.top;
    const bottom = shellRect ? Math.min(rect.bottom, shellRect.bottom - 34) : rect.bottom;
    const width = Math.max(1, right - left);
    const height = Math.max(1, bottom - top);
    const xRatio = side === "start" ? 0.16 + random() * 0.08 : 0.76 + random() * 0.12;
    const yRatio = 0.34 + random() * 0.32;

    return {
      x: left - rootRect.left + width * xRatio,
      y: top - rootRect.top + height * yRatio,
    };
  }

  private findVisibleScanElement(selector: string, match: CursorScanOptions["match"] = "first"): HTMLElement | null {
    const elements = Array.from(this.root.querySelectorAll<HTMLElement>(selector));
    const visible = elements.filter((element) => {
      const style = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();

      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        Number(style.opacity) > 0.01 &&
        rect.width > 0 &&
        rect.height > 0
      );
    });

    return match === "last" ? visible[visible.length - 1] ?? null : visible[0] ?? null;
  }

  private seededScanRandom(seed: string): () => number {
    let value = 2166136261;

    for (let index = 0; index < seed.length; index += 1) {
      value ^= seed.charCodeAt(index);
      value = Math.imul(value, 16777619);
    }

    return () => {
      value += 0x6d2b79f5;
      let next = value;
      next = Math.imul(next ^ (next >>> 15), next | 1);
      next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
      return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
    };
  }

  private renderPosition(point: Point): void {
    if (point.x !== this.transformState.x) {
      this.transformState.x = point.x;
      this.setX(point.x);
    }

    if (point.y !== this.transformState.y) {
      this.transformState.y = point.y;
      this.setY(point.y);
    }
  }

  private renderMimicRotation(point: Point, lookAt: Point): void {
    const dx = lookAt.x - point.x;
    const dy = lookAt.y - point.y;

    if (dx * dx + dy * dy < 4) return;

    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const targetRotation = normalizeAngle(angle - DEFAULT_CURSOR_POINT_ANGLE);
    const nextRotation =
      this.rotationState + shortestAngleDelta(this.rotationState, targetRotation) * MIMIC_ROTATION_SMOOTHING;

    this.renderRotation(nextRotation);
  }

  private resetRotation(immediate = false): void {
    gsap.killTweensOf(this.el, "rotation");

    if (immediate || this.options.reducedMotion) {
      this.renderRotation(0);
      return;
    }

    gsap.to(this.el, {
      rotation: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        this.rotationState = Number(gsap.getProperty(this.el, "rotation")) || 0;
      },
      onComplete: () => {
        this.rotationState = 0;
      },
    });
  }

  private renderRotation(rotation: number): void {
    if (Math.abs(rotation - this.rotationState) < 0.1) return;

    this.rotationState = rotation;
    this.setRotation(rotation);
  }

  private queueIdleFloat(delay = IDLE_FLOAT.delay): void {
    if (this.options.reducedMotion) return;

    this.idleFloatDelay?.kill();
    this.idleFloatDelay = gsap.delayedCall(delay, () => this.startIdleFloat());
  }

  private startIdleFloat(): void {
    if (this.options.reducedMotion || this.idleFloat?.isActive()) return;

    gsap.killTweensOf(this.floatLayer);

    const tl = gsap.timeline({ repeat: -1 });

    for (const segment of IDLE_FLOAT.segments) {
      tl.to(this.floatLayer, {
        x: segment.x,
        y: segment.y,
        rotation: segment.rotation,
        duration: segment.duration,
        ease: "sine.inOut",
      });
    }

    this.idleFloat = tl;
  }

  private stopIdleFloat(immediate = false): void {
    this.idleFloatDelay?.kill();
    this.idleFloatDelay = null;
    this.idleFloat?.kill();
    this.idleFloat = null;

    if (immediate || this.options.reducedMotion) {
      gsap.set(this.floatLayer, { x: 0, y: 0, rotation: 0 });
      return;
    }

    gsap.to(this.floatLayer, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: IDLE_FLOAT.returnDuration,
      ease: "power2.out",
      overwrite: "auto",
    });
  }

  private maybeSyncModeToPoint(point: Point): void {
    const now = performance.now();
    const dx = point.x - this.lastModeSyncPoint.x;
    const dy = point.y - this.lastModeSyncPoint.y;
    const movedEnough = Number.isNaN(dx) || dx * dx + dy * dy >= 24 * 24;

    if (!movedEnough && now - this.lastModeSyncAt < 72) return;

    this.lastModeSyncAt = now;
    this.lastModeSyncPoint = { ...point };
    this.syncModeToPoint(point);
  }

  private updateModeWatch(): void {
    if (this.mode !== "default" && !this.modeOverride) {
      this.scheduleModeWatch();
      return;
    }

    this.stopModeWatch();
  }

  private scheduleModeWatch(): void {
    if (this.modeWatchFrame) return;

    this.modeWatchFrame = window.requestAnimationFrame(this.watchModeTarget);
  }

  private watchModeTarget = (): void => {
    this.modeWatchFrame = 0;

    if (this.modeOverride || this.mode === "default") return;

    this.syncModeToPoint(this.currentPosition);
    if (this.el.dataset.cursorMode !== "default" && !this.modeOverride) this.scheduleModeWatch();
  };

  private stopModeWatch(): void {
    if (!this.modeWatchFrame) return;

    window.cancelAnimationFrame(this.modeWatchFrame);
    this.modeWatchFrame = 0;
  }

  private syncModeToPoint(point: Point): void {
    const mode = this.getModeForPoint(point);

    if (mode !== this.mode) this.setMode(mode);
  }

  private getModeForPoint(point: Point): CursorMode {
    const rootRect = this.root.getBoundingClientRect();
    const viewportPoint = {
      x: rootRect.left + point.x,
      y: rootRect.top + point.y,
    };
    const viewportTarget =
      viewportPoint.x >= 0 &&
      viewportPoint.x <= window.innerWidth &&
      viewportPoint.y >= 0 &&
      viewportPoint.y <= window.innerHeight
        ? document.elementFromPoint(viewportPoint.x, viewportPoint.y)
        : null;
    const viewportMode = this.getModeForElement(viewportTarget);

    if (viewportMode !== "default") return viewportMode;

    return this.getModeForLocalPoint(point, rootRect);
  }

  private getModeForElement(target: Element | null): CursorMode {
    if (!target) return "default";

    if (target.closest(POINTER_TARGET_SELECTOR)) {
      return "pointer";
    }

    if (target.closest(TEXT_TARGET_SELECTOR)) {
      return "text";
    }

    return "default";
  }

  private getModeForLocalPoint(point: Point, rootRect: DOMRect): CursorMode {
    this.refreshModeTargetCache();

    if (this.findLocalHit(this.pointerTargets, point, rootRect, POINTER_TARGET_SELECTOR)) return "pointer";
    if (this.findLocalHit(this.textTargets, point, rootRect, TEXT_TARGET_SELECTOR)) return "text";

    return "default";
  }

  private findLocalHit(candidates: Element[], point: Point, rootRect: DOMRect, selector: string): Element | null {
    return (
      candidates.find((candidate) => {
        if (!candidate.matches(selector)) return false;

        const style = window.getComputedStyle(candidate);
        if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) < 0.01) return false;

        const rect = candidate.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return false;

        const left = rect.left - rootRect.left;
        const right = rect.right - rootRect.left;
        const top = rect.top - rootRect.top;
        const bottom = rect.bottom - rootRect.top;

        return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
      }) ?? null
    );
  }

  private refreshModeTargetCache(): void {
    if (!this.modeTargetsDirty) return;

    this.pointerTargets = Array.from(this.root.querySelectorAll(POINTER_TARGET_SELECTOR)).reverse();
    this.textTargets = Array.from(this.root.querySelectorAll(TEXT_TARGET_SELECTOR)).reverse();
    this.modeTargetsDirty = false;
  }

  private observeModeTargets(): void {
    if (!("MutationObserver" in window)) return;

    this.targetObserver = new MutationObserver(() => {
      this.modeTargetsDirty = true;
    });
    this.targetObserver.observe(this.root, {
      attributes: true,
      attributeFilter: ["class", "style", "data-visible"],
      childList: true,
      subtree: true,
    });
  }

  private createElement(): HTMLElement {
    const el = document.createElement("div");
    el.className = "wa-cursor";
    el.dataset.cursor = "";
    el.dataset.cursorMode = "default";
    el.setAttribute("aria-hidden", "true");

    const floatLayer = document.createElement("div");
    floatLayer.className = "wa-cursor__float";
    floatLayer.dataset.cursorFloat = "";

    const glyph = document.createElement("div");
    glyph.className = "wa-cursor__glyph";
    glyph.append(createMimicCursorLayers());
    floatLayer.append(glyph);
    el.append(floatLayer);

    this.root.append(el);
    return el;
  }

  private ensureFloatLayer(): HTMLElement {
    const existing = this.el.querySelector<HTMLElement>("[data-cursor-float]");

    if (existing) return existing;

    const glyph = this.el.querySelector<HTMLElement>(".wa-cursor__glyph") ?? document.createElement("div");
    if (!glyph.classList.contains("wa-cursor__glyph")) glyph.className = "wa-cursor__glyph";
    if (!glyph.querySelector(".wa-cursor__mimic-head")) glyph.append(createMimicCursorLayers());

    const floatLayer = document.createElement("div");
    floatLayer.className = "wa-cursor__float";
    floatLayer.dataset.cursorFloat = "";
    floatLayer.append(glyph);
    this.el.append(floatLayer);
    return floatLayer;
  }

}

export function createMimicCursorLayers(): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const tail = document.createElement("span");
  const head = document.createElement("span");

  tail.className = "wa-cursor__mimic-tail";
  head.className = "wa-cursor__mimic-head";
  tail.setAttribute("aria-hidden", "true");
  head.setAttribute("aria-hidden", "true");
  fragment.append(tail, head);
  return fragment;
}

function interpolatePoint(start: Point, end: Point, amount: number): Point {
  return {
    x: start.x + (end.x - start.x) * amount,
    y: start.y + (end.y - start.y) * amount,
  };
}

function normalizeAngle(angle: number): number {
  return ((angle % 360) + 360) % 360;
}

function shortestAngleDelta(from: number, to: number): number {
  return ((to - from + 540) % 360) - 180;
}
