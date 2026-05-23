export function injectStyleText(id: string, text: string): void {
  const existing = document.getElementById(id);

  if (existing instanceof HTMLStyleElement) {
    if (existing.textContent !== text) existing.textContent = text;
    return;
  }

  const style = document.createElement("style");
  style.id = id;
  style.textContent = text;
  document.head.append(style);
}
