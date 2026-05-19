import type { AnchorName, BreakpointName, Point, ResponsiveTarget, TargetSpec } from "./types";
import { seededRandom } from "../motion/seededRandom";

const BREAKPOINT_ORDER: BreakpointName[] = ["mobile", "tablet", "desktop", "wide"];

export class TargetResolver {
  private rootRect: DOMRect | null = null;

  constructor(private root: HTMLElement) {}

  refresh(): void {
    this.rootRect = this.root.getBoundingClientRect();
  }

  getBreakpoint(): BreakpointName {
    const width = this.getRootRect().width;

    if (width < 680) return "mobile";
    if (width < 980) return "tablet";
    if (width < 1280) return "desktop";
    return "wide";
  }

  resolve(target: ResponsiveTarget, seed = "target"): Point {
    const spec = this.pickTarget(target);
    const rootRect = this.getRootRect();

    if (typeof spec.x === "number" && typeof spec.y === "number" && !spec.target) {
      return {
        x: spec.x + (spec.offset?.x ?? 0),
        y: spec.y + (spec.offset?.y ?? 0),
      };
    }

    const element = this.findElement(spec.target);

    if (!element) {
      return this.resolveFallbackPoint(spec, rootRect);
    }

    const rect = element.getBoundingClientRect();
    let point = this.anchorPoint(rect, spec.anchor ?? "center");

    point = {
      x: point.x - rootRect.left,
      y: point.y - rootRect.top,
    };

    if (spec.outside) {
      point = this.outsidePoint(point, rect, rootRect, spec.outside);
    }

    if (spec.humanOffset) {
      const random = seededRandom(seed);
      const maxX = Math.min(rect.width * 0.18, 18);
      const maxY = Math.min(rect.height * 0.18, 14);

      point.x += (random() - 0.5) * maxX;
      point.y += (random() - 0.5) * maxY;
    }

    return {
      x: point.x + (spec.offset?.x ?? 0),
      y: point.y + (spec.offset?.y ?? 0),
    };
  }

  private getRootRect(): DOMRect {
    if (!this.rootRect) this.refresh();
    return this.rootRect as DOMRect;
  }

  private pickTarget(target: ResponsiveTarget): TargetSpec {
    if (this.isBreakpointMap(target)) {
      const current = this.getBreakpoint();
      const currentIndex = BREAKPOINT_ORDER.indexOf(current);
      const fallbacks = [
        current,
        ...BREAKPOINT_ORDER.slice(0, currentIndex).reverse(),
        ...BREAKPOINT_ORDER.slice(currentIndex + 1),
      ];

      for (const key of fallbacks) {
        if (target[key]) return target[key] as TargetSpec;
      }

      return {};
    }

    return target;
  }

  private isBreakpointMap(target: ResponsiveTarget): target is Partial<Record<BreakpointName, TargetSpec>> {
    return BREAKPOINT_ORDER.some((key) => key in target);
  }

  private findElement(target?: string | HTMLElement): HTMLElement | null {
    if (!target) return this.getMotionFallbackElement();
    if (target instanceof HTMLElement) return target;
    return this.root.querySelector<HTMLElement>(target);
  }

  private getMotionFallbackElement(): HTMLElement {
    return (
      this.root.querySelector<HTMLElement>("[data-chat-shell]") ??
      this.root.querySelector<HTMLElement>(".wa-stage") ??
      this.root
    );
  }

  private resolveFallbackPoint(spec: TargetSpec, rootRect: DOMRect): Point {
    const fallbackRect = this.getMotionFallbackElement().getBoundingClientRect();
    let point = this.anchorPoint(fallbackRect, spec.anchor ?? "center");

    point = {
      x: point.x - rootRect.left,
      y: point.y - rootRect.top,
    };

    if (spec.outside) {
      point = this.outsidePoint(point, fallbackRect, rootRect, spec.outside);
    }

    return {
      x: point.x + (spec.offset?.x ?? 0),
      y: point.y + (spec.offset?.y ?? 0),
    };
  }

  private anchorPoint(rect: DOMRect, anchor: AnchorName): Point {
    const midX = rect.left + rect.width * 0.5;
    const midY = rect.top + rect.height * 0.5;

    switch (anchor) {
      case "topLeft":
        return { x: rect.left, y: rect.top };
      case "topRight":
        return { x: rect.right, y: rect.top };
      case "bottomLeft":
        return { x: rect.left, y: rect.bottom };
      case "bottomRight":
        return { x: rect.right, y: rect.bottom };
      case "left":
        return { x: rect.left, y: midY };
      case "right":
        return { x: rect.right, y: midY };
      case "top":
        return { x: midX, y: rect.top };
      case "bottom":
        return { x: midX, y: rect.bottom };
      case "center":
      default:
        return { x: midX, y: midY };
    }
  }

  private outsidePoint(point: Point, rect: DOMRect, rootRect: DOMRect, outside: TargetSpec["outside"]): Point {
    const localLeft = rect.left - rootRect.left;
    const localRight = rect.right - rootRect.left;
    const localTop = rect.top - rootRect.top;
    const localBottom = rect.bottom - rootRect.top;

    switch (outside) {
      case "left":
        return { ...point, x: localLeft - 42 };
      case "right":
        return { ...point, x: localRight + 42 };
      case "top":
        return { ...point, y: localTop - 42 };
      case "bottom":
        return { ...point, y: localBottom + 42 };
      default:
        return point;
    }
  }
}
