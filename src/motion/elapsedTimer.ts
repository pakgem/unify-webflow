import type { gsap } from "gsap";

export function parseElapsedSeconds(label: string): number | null {
  const text = label.trim().toLowerCase();
  const minuteMatch = text.match(/(\d+(?:\.\d+)?)\s*m/);
  const secondMatch = text.match(/(\d+(?:\.\d+)?)\s*s/);
  let totalSeconds = 0;
  let hasElapsedUnit = false;

  if (minuteMatch) {
    totalSeconds += Number(minuteMatch[1]) * 60;
    hasElapsedUnit = true;
  }

  if (secondMatch) {
    totalSeconds += Number(secondMatch[1]);
    hasElapsedUnit = true;
  }

  if (!hasElapsedUnit) {
    const numericValue = Number(text);
    return Number.isFinite(numericValue) ? Math.max(0, numericValue) : null;
  }

  return Number.isFinite(totalSeconds) ? Math.max(0, totalSeconds) : null;
}

export function formatElapsedSeconds(value: number): string {
  const totalSeconds = Math.max(0, Math.floor(value));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
}

export function addTimelineElapsedTimer(
  tl: gsap.core.Timeline,
  elapsed: HTMLElement,
  finalLabel: string,
  options: { reducedMotion?: boolean } = {},
): void {
  const finalSeconds = parseElapsedSeconds(finalLabel);

  if (finalSeconds === null) {
    elapsed.textContent = finalLabel;
    return;
  }

  elapsed.textContent = "0s";

  if (options.reducedMotion || finalSeconds <= 0) {
    elapsed.textContent = formatElapsedSeconds(finalSeconds);
    return;
  }

  const duration = tl.duration();

  if (duration <= 0) {
    elapsed.textContent = formatElapsedSeconds(finalSeconds);
    return;
  }

  const timer = { seconds: 0 };

  tl.to(
    timer,
    {
      seconds: finalSeconds,
      duration,
      ease: "none",
      onUpdate: () => {
        elapsed.textContent = formatElapsedSeconds(timer.seconds);
      },
      onComplete: () => {
        elapsed.textContent = formatElapsedSeconds(finalSeconds);
      },
      onReverseComplete: () => {
        elapsed.textContent = "0s";
      },
    },
    0,
  );
}
