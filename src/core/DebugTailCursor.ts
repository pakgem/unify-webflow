import { gsap } from "gsap";
import { createMimicCursorLayers } from "../actors/CursorActor";
import type { Point } from "./types";

const DEBUG_TAIL_CURSOR = {
  offsetX: 22,
  offsetY: 18,
  smoothing: 0.62,
  settleDistance: 0.08,
};

export class DebugTailCursor {
  private el: HTMLElement;
  private setX: (value: number) => void;
  private setY: (value: number) => void;
  private frame = 0;
  private visible = false;
  private current: Point = { x: -80, y: -80 };
  private target: Point = { x: -80, y: -80 };

  constructor(private root: HTMLElement) {
    this.el = this.createElement();
    this.setX = gsap.quickSetter(this.el, "x", "px") as (value: number) => void;
    this.setY = gsap.quickSetter(this.el, "y", "px") as (value: number) => void;
    document.addEventListener("pointermove", this.handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", this.handlePointerLeave, { passive: true });
  }

  destroy(): void {
    document.removeEventListener("pointermove", this.handlePointerMove);
    document.removeEventListener("pointerleave", this.handlePointerLeave);
    window.cancelAnimationFrame(this.frame);
    this.el.remove();
  }

  private handlePointerMove = (event: PointerEvent): void => {
    this.target = {
      x: event.clientX + DEBUG_TAIL_CURSOR.offsetX,
      y: event.clientY + DEBUG_TAIL_CURSOR.offsetY,
    };

    if (!this.visible) {
      this.visible = true;
      this.current = { ...this.target };
      this.render();
      gsap.set(this.el, { autoAlpha: 1 });
    }

    this.schedule();
  };

  private handlePointerLeave = (): void => {
    this.visible = false;
    gsap.set(this.el, { autoAlpha: 0 });
  };

  private schedule(): void {
    if (this.frame) return;

    this.frame = window.requestAnimationFrame(this.follow);
  }

  private follow = (): void => {
    this.frame = 0;

    this.current = {
      x: this.current.x + (this.target.x - this.current.x) * DEBUG_TAIL_CURSOR.smoothing,
      y: this.current.y + (this.target.y - this.current.y) * DEBUG_TAIL_CURSOR.smoothing,
    };
    this.render();

    const dx = this.target.x - this.current.x;
    const dy = this.target.y - this.current.y;
    if (dx * dx + dy * dy > DEBUG_TAIL_CURSOR.settleDistance) this.schedule();
  };

  private render(): void {
    this.setX(this.current.x);
    this.setY(this.current.y);
  }

  private createElement(): HTMLElement {
    const el = document.createElement("div");
    el.className = "wa-cursor wa-tail-debug-cursor";
    el.dataset.cursorMimicking = "true";
    el.dataset.cursorMode = "default";
    el.setAttribute("aria-hidden", "true");

    const floatLayer = document.createElement("div");
    floatLayer.className = "wa-cursor__float";

    const glyph = document.createElement("div");
    glyph.className = "wa-cursor__glyph";
    glyph.append(createMimicCursorLayers());

    floatLayer.append(glyph);
    el.append(floatLayer);
    this.root.append(el);
    gsap.set(el, { x: this.current.x, y: this.current.y, autoAlpha: 0 });
    return el;
  }
}
