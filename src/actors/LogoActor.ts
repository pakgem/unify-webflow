import { gsap } from "gsap";
import type { LoadingLogoMode, Offset, Point, ResponsiveTarget } from "../core/types";
import type { TargetResolver } from "../core/TargetResolver";
import { clamp } from "../motion/geometry";
import { seededRandom } from "../motion/seededRandom";

type LogoActorOptions = {
  reducedMotion?: boolean;
};

export type LoadingLogoMoveOptions = {
  mode?: LoadingLogoMode;
  shadow?: boolean;
  duration?: number;
  offset?: Offset;
  label?: string;
};

type LogoMotionState = {
  start: Point;
  end: Point;
  progress: number;
  bend: number;
};

/* --------------------------------------------------------------------------
   LOADING LOGO STORYBOARD

      0ms   target resolves against the live layout
      0ms   optional shadow is stamped at the previous resting point
     80ms   logo begins arcing toward the next thinking item
    520ms   logo settles on the item and switches to its requested mode
   -------------------------------------------------------------------------- */

const LOGO_MARK_PATHS = [
  "M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z",
  "M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z",
];

const LOGO_MOTION = {
  duration: 0.46,
  reducedDuration: 0.12,
  ease: "power3.inOut",
  arcMin: 3,
  arcMax: 18,
  arcScale: 0.08,
};

const LOGO_SHADOW = {
  duration: 0.7,
  startOpacity: 0.28,
  endScale: 1.36,
};

const DEFAULT_POINT: Point = { x: 0, y: 0 };

export class LogoActor {
  readonly el: HTMLElement;

  private setX: (value: number) => void;
  private setY: (value: number) => void;
  private currentPosition: Point = { ...DEFAULT_POINT };
  private plannedPosition: Point = { ...DEFAULT_POINT };
  private mode: LoadingLogoMode = "static";
  private moveIndex = 0;
  private storyId = "story";
  private trackedElement: HTMLElement | null = null;
  private trackedOffset: Offset | undefined;
  private trackingFrame = 0;
  private hasPosition = false;

  constructor(
    private root: HTMLElement,
    private resolver: TargetResolver,
    private options: LogoActorOptions = {},
  ) {
    this.el = this.root.querySelector<HTMLElement>("[data-loading-logo]") ?? this.createElement("wa-loading-logo");
    this.setX = gsap.quickSetter(this.el, "x", "px") as (value: number) => void;
    this.setY = gsap.quickSetter(this.el, "y", "px") as (value: number) => void;
    this.setMode("static");
    gsap.set(this.el, { autoAlpha: 0, scale: 0.94 });
  }

  beginBuild(storyId: string): void {
    this.storyId = storyId;
    this.moveIndex = 0;
  }

  setMode(mode: LoadingLogoMode): void {
    this.mode = mode;
    this.el.dataset.logoMode = mode;
  }

  modeTo(mode: LoadingLogoMode): gsap.core.Timeline {
    return gsap.timeline().call(() => this.setMode(mode));
  }

  moveTo(target: ResponsiveTarget, options: LoadingLogoMoveOptions = {}): gsap.core.Timeline {
    const label = options.label ?? `logo-${this.moveIndex}`;
    const seed = `${this.storyId}:${label}:${this.resolver.getBreakpoint()}`;
    const tl = gsap.timeline();
    const state: LogoMotionState = {
      start: { ...this.currentPosition },
      end: { ...this.plannedPosition },
      progress: 0,
      bend: 0,
    };

    this.moveIndex += 1;

    tl.call(() => {
      this.stopTracking();
      this.resolver.refresh();
      state.start = { ...this.currentPosition };
      state.end = this.resolveTarget(target, options.offset, seed);
      state.progress = 0;

      if (!this.hasPosition) {
        state.start = { ...state.end };
        this.currentPosition = { ...state.end };
        this.renderPosition(state.end);
      }

      state.bend = this.getArcBend(state.start, state.end, seed);
      this.plannedPosition = { ...state.end };

      if (options.shadow && this.hasPosition) this.createShadow(state.start);
      if (options.mode) this.setMode(options.mode);
      this.hasPosition = true;
    }, undefined, 0);

    tl.set(this.el, { autoAlpha: 1, scale: 1 }, 0);

    tl.to(state, {
      progress: 1,
      duration: this.options.reducedMotion ? LOGO_MOTION.reducedDuration : options.duration ?? LOGO_MOTION.duration,
      ease: LOGO_MOTION.ease,
      onUpdate: () => {
        this.currentPosition = this.sampleMotion(state);
        this.renderPosition(this.currentPosition);
      },
      onComplete: () => {
        this.currentPosition = { ...state.end };
        this.renderPosition(state.end);
      },
    });

    return tl;
  }

  moveToElement(element: HTMLElement | null, options: LoadingLogoMoveOptions = {}): gsap.core.Timeline {
    if (!element) return gsap.timeline();

    return this.moveTo(
      {
        target: element,
        anchor: "center",
        humanOffset: false,
      },
      options,
    ).call(() => this.startTracking(element, options.offset));
  }

  resetInteraction(): void {
    this.stopTracking();
    gsap.killTweensOf(this.el);
    this.root.querySelectorAll("[data-loading-logo-shadow]").forEach((shadow) => {
      gsap.killTweensOf(shadow);
      shadow.remove();
    });
  }

  destroy(): void {
    this.resetInteraction();
    this.el.remove();
  }

  private resolveTarget(target: ResponsiveTarget, offset: Offset | undefined, seed: string): Point {
    const point = this.resolver.resolve(target, seed);

    return {
      x: point.x + (offset?.x ?? 0),
      y: point.y + (offset?.y ?? 0),
    };
  }

  private sampleMotion(state: LogoMotionState): Point {
    const progress = state.progress;
    const dx = state.end.x - state.start.x;
    const dy = state.end.y - state.start.y;
    const distance = Math.hypot(dx, dy);
    const px = distance > 0 ? -dy / distance : 0;
    const py = distance > 0 ? dx / distance : 0;
    const arc = Math.sin(Math.PI * progress) * state.bend;

    return {
      x: state.start.x + dx * progress + px * arc,
      y: state.start.y + dy * progress + py * arc,
    };
  }

  private getArcBend(start: Point, end: Point, seed: string): number {
    const distance = Math.hypot(end.x - start.x, end.y - start.y);
    if (distance < 12 || this.options.reducedMotion) return 0;

    const random = seededRandom(seed);
    const direction = random() > 0.5 ? 1 : -1;

    return clamp(distance * LOGO_MOTION.arcScale, LOGO_MOTION.arcMin, LOGO_MOTION.arcMax) * direction;
  }

  private renderPosition(point: Point): void {
    this.setX(point.x);
    this.setY(point.y);
  }

  private startTracking(element: HTMLElement, offset?: Offset): void {
    this.trackedElement = element;
    this.trackedOffset = offset;
    this.scheduleTracking();
  }

  private stopTracking(): void {
    this.trackedElement = null;
    this.trackedOffset = undefined;

    if (!this.trackingFrame) return;

    window.cancelAnimationFrame(this.trackingFrame);
    this.trackingFrame = 0;
  }

  private scheduleTracking(): void {
    if (this.trackingFrame) return;

    this.trackingFrame = window.requestAnimationFrame(this.trackElement);
  }

  private trackElement = (): void => {
    this.trackingFrame = 0;

    if (!this.trackedElement?.isConnected) {
      this.stopTracking();
      return;
    }

    this.resolver.refresh();
    const point = this.resolveTarget(
      {
        target: this.trackedElement,
        anchor: "center",
        humanOffset: false,
      },
      this.trackedOffset,
      `${this.storyId}:logo-track`,
    );

    this.currentPosition = point;
    this.plannedPosition = point;
    this.renderPosition(point);
    this.scheduleTracking();
  };

  private createShadow(point: Point): void {
    const shadow = this.createElement("wa-loading-logo-shadow");

    shadow.dataset.loadingLogoShadow = "";
    shadow.dataset.logoMode = this.mode;
    this.root.append(shadow);
    gsap.set(shadow, {
      x: point.x,
      y: point.y,
      autoAlpha: LOGO_SHADOW.startOpacity,
      scale: 1,
    });
    gsap.to(shadow, {
      autoAlpha: 0,
      scale: LOGO_SHADOW.endScale,
      duration: this.options.reducedMotion ? LOGO_MOTION.reducedDuration : LOGO_SHADOW.duration,
      ease: "power2.out",
      onComplete: () => shadow.remove(),
    });
  }

  private createElement(className: string): HTMLElement {
    const el = document.createElement("span");
    el.className = className;
    el.setAttribute("aria-hidden", "true");

    const body = document.createElement("span");
    body.className = `${className}__body`;
    body.append(createLogoSvg());
    el.append(body);

    if (className === "wa-loading-logo") {
      el.dataset.loadingLogo = "";
      this.root.append(el);
    }

    return el;
  }
}

function createLogoSvg(): SVGSVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 18 11");
  svg.setAttribute("fill", "none");
  svg.setAttribute("focusable", "false");
  svg.classList.add("wa-loading-logo__mark");

  for (const pathValue of LOGO_MARK_PATHS) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathValue);
    path.setAttribute("fill", "currentColor");
    svg.append(path);
  }

  return svg;
}
