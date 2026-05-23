export const UNIFY_MARK_SVG = `
<svg viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M5.71835 3.84074V0H0V5.12789C0 7.97387 2.13981 10.9988 6.10463 10.9988H8.4998V5.49938L7.40298 5.48406C6.46808 5.4708 5.71706 4.7386 5.71706 3.8395L5.71835 3.84074Z" fill="currentColor"/>
  <path d="M11.2814 7.15899V10.9997H16.9998V5.87225C16.9998 3.02586 14.86 0.000976562 10.8952 0.000976562H8.5V5.50036L9.59682 5.51568C10.5317 5.52893 11.2827 6.26113 11.2827 7.16023L11.2814 7.15899Z" fill="currentColor"/>
</svg>`;

export function createUnifyMarkSvg(className: string): SVGSVGElement {
  const template = document.createElement("template");

  template.innerHTML = UNIFY_MARK_SVG.trim();
  const svg = template.content.firstElementChild as SVGSVGElement;
  svg.classList.add(className);
  return svg;
}
