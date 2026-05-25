import { ChatActor } from "../actors/ChatActor";
import { renderPlaybackMarkup } from "../core/renderPlaybackMarkup";
import { sequencePreviewSandboxConfig } from "../stories";

export function mountSequencePreviewSandbox(target: string | HTMLElement = "[data-chatbot-stories]"): void {
  const root = typeof target === "string"
    ? document.querySelector<HTMLElement>(target)
    : target;

  if (!root) {
    throw new Error(`Sequence preview sandbox target not found: ${String(target)}`);
  }

  root.removeAttribute("data-auto-init");
  root.classList.add("wa-sequence-sandbox");
  root.dataset.sandbox = "sequence-preview";
  renderPlaybackMarkup(root);
  renderSequenceSandboxHeader(root);

  const chat = new ChatActor(root);
  const timeline = chat.sequenceEngagement(sequencePreviewSandboxConfig);

  timeline.progress(1).kill();
  root.querySelector<HTMLElement>("[data-chat-thread]")?.scrollTo({ top: 0, left: 0 });
}

function renderSequenceSandboxHeader(root: HTMLElement): void {
  const inner = root.querySelector<HTMLElement>(".wa-section__inner");

  if (!inner || inner.querySelector("[data-sequence-sandbox-header]")) return;

  const header = document.createElement("header");
  const copy = document.createElement("div");
  const eyebrow = document.createElement("p");
  const title = document.createElement("h1");
  const note = document.createElement("p");
  const link = document.createElement("a");

  header.className = "wa-sequence-sandbox__header";
  header.dataset.sequenceSandboxHeader = "";
  copy.className = "wa-sequence-sandbox__copy";
  eyebrow.className = "wa-sequence-sandbox__eyebrow";
  eyebrow.textContent = "Temporary sandbox";
  title.className = "wa-sequence-sandbox__title";
  title.textContent = "Sequence preview";
  note.className = "wa-sequence-sandbox__note";
  note.textContent = "Click the person rail and sequence steps directly. This page uses the production sequence component and data without running the homepage story timeline.";
  link.className = "wa-sequence-sandbox__back";
  link.href = "/";
  link.textContent = "Back to homepage";

  copy.append(eyebrow, title, note);
  header.append(copy, link);
  inner.prepend(header);
}
