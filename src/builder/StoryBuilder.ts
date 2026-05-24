import type { StoryDefinition } from "../core/types";
import {
  DEFAULT_THINKING_COLLAPSED_DISCLOSURE,
  DEFAULT_THINKING_DISCLOSURE,
  DEFAULT_THINKING_TITLE,
  createThinkingItems,
  getDefaultThinkingDetail,
  getThinkingElapsedLabel,
} from "../stories/thinkingText";
import { createUnifyMarkSvg } from "../assets/unifyMark";
import {
  BUILDER_DRAFT_SCHEMA_VERSION,
  clonePlainObject,
  isBuilderStepKind,
  isRecord,
  normalizeBuilderDraftPayload,
  type BuilderComponent,
  type BuilderDataSourcesComponent,
  type BuilderEnrichmentComponent,
  type BuilderMailboxConnectionComponent,
  type BuilderPersonalizationSwipeComponent,
  type BuilderProximityListComponent,
  type BuilderSequenceEngagementComponent,
  type BuilderStep,
  type BuilderStepKind,
  type BuilderStory,
  type BuilderStrategyComponent,
  type BuilderStyleProfileComponent,
  type BuilderTableComponent,
  type BuilderThinkingState,
  type BuilderUploadedFilesComponent,
} from "./draftTypes";

type StoryBuilderRefs = {
  shell: HTMLElement;
  tabs: HTMLElement;
  storyMeta: HTMLElement;
  thread: HTMLElement;
  panel: HTMLElement;
  export: HTMLTextAreaElement;
  copyJson: HTMLButtonElement;
  addRail: HTMLElement;
  status: HTMLElement;
};

type StoryBuilderOptions = {
  onStorySelect?: (storyId: string) => void;
  onStoriesChange?: (stories: BuilderStory[], options?: { source?: "load" | "edit" }) => void;
  draftEndpoint?: string | false;
  draftAutoSave?: boolean;
};

const STEP_KIND_LABELS: Record<BuilderStepKind, string> = {
  user: "User",
  assistant: "AI",
  thinking: "Thinking",
  component: "Component",
  cursor: "Cursor",
  status: "State",
  file: "File",
};

const ADDABLE_STEP_KINDS: BuilderStepKind[] = ["user", "assistant", "thinking", "component", "cursor", "file"];
const DEFAULT_DRAFT_ENDPOINT = "/api/story-draft";
const DRAFT_SAVE_DEBOUNCE_MS = 800;
const MAILBOX_LEARNING_READY_DETAIL = "73 tone & tactic rules defined";

export class StoryBuilder {
  private refs: StoryBuilderRefs | null = null;
  private stories: BuilderStory[];
  private activeStoryIndex = 0;
  private selectedStepId: string | null = null;
  private listeners: Array<() => void> = [];
  private draggedStepId: string | null = null;
  private copyResetTimer: number | null = null;
  private saveTimer: number | null = null;
  private loadingRemoteDraft = false;
  private pendingSaveAfterLoad = false;
  private readonly draftEndpoint: string | false;
  private readonly draftAutoSave: boolean;

  constructor(
    private root: HTMLElement,
    private sourceStories: StoryDefinition[],
    private options: StoryBuilderOptions = {},
  ) {
    this.stories = createBuilderStories(sourceStories);
    this.selectedStepId = this.stories[0]?.steps[0]?.id ?? null;
    this.draftEndpoint = options.draftEndpoint ?? DEFAULT_DRAFT_ENDPOINT;
    this.draftAutoSave = options.draftAutoSave ?? true;
  }

  mount(): void {
    const shell = this.root.querySelector<HTMLElement>("[data-story-builder]");

    if (!shell) return;

    this.refs = {
      shell,
      tabs: this.required(shell, "[data-builder-tabs]"),
      storyMeta: this.required(shell, "[data-builder-story-meta]"),
      thread: this.required(shell, "[data-builder-thread]"),
      panel: this.required(shell, "[data-builder-panel]"),
      export: this.required(shell, "[data-builder-export]"),
      copyJson: this.required(shell, "[data-builder-copy-json]"),
      addRail: this.required(shell, "[data-builder-add-rail]"),
      status: this.required(shell, "[data-builder-status]"),
    };

    this.attachEvents();
    this.render();
    void this.loadRemoteDraft();
  }

  destroy(): void {
    for (const remove of this.listeners) remove();
    this.listeners = [];
    if (this.copyResetTimer !== null) window.clearTimeout(this.copyResetTimer);
    this.copyResetTimer = null;
    if (this.saveTimer !== null) window.clearTimeout(this.saveTimer);
    this.saveTimer = null;
  }

  private attachEvents(): void {
    const refs = this.refs;

    if (!refs) return;

    this.on(refs.tabs, "click", (event) => {
      const button = closestButton(event.target, "[data-builder-story-tab]");

      if (!button) return;

      this.selectStory(Number(button.dataset.builderStoryTab));
    });

    this.on(refs.addRail, "click", (event) => {
      const button = closestButton(event.target, "[data-builder-add]");
      const kind = button?.dataset.builderAdd as BuilderStepKind | undefined;

      if (!kind || !isBuilderStepKind(kind)) return;

      this.addStep(kind);
    });

    this.on(refs.copyJson, "click", () => {
      void this.copyExportJson();
    });

    this.on(refs.thread, "click", (event) => {
      const button = closestButton(event.target, "[data-builder-action]");

      if (button) {
        this.handleStepAction(button);
        return;
      }

      const step = (event.target as Element | null)?.closest<HTMLElement>("[data-builder-step]");

      if (step?.dataset.builderStep) {
        this.selectStep(step.dataset.builderStep, { renderThread: false });
      }
    });

    this.on(refs.thread, "input", (event) => {
      const thinkingField = (event.target as Element | null)?.closest<
        HTMLInputElement | HTMLTextAreaElement
      >("[data-builder-thinking-field]");

      if (thinkingField) {
        this.handleThinkingInput(thinkingField);
        if (thinkingField instanceof HTMLTextAreaElement) this.autoSize(thinkingField);
        return;
      }

      const componentField = (event.target as Element | null)?.closest<
        HTMLInputElement | HTMLTextAreaElement
      >("[data-builder-component-field]");

      if (componentField) {
        this.handleComponentInput(componentField);
        if (componentField instanceof HTMLTextAreaElement) this.autoSize(componentField);
        return;
      }

      const field = (event.target as Element | null)?.closest<HTMLTextAreaElement>("[data-builder-step-field]");

      if (!field) return;

      const stepId = field.dataset.builderStepField;

      if (!stepId) return;

      this.updateStep(stepId, { text: field.value }, { renderThread: false });
      this.autoSize(field);
    });

    this.on(refs.thread, "dragstart", (event) => this.handleDragStart(event));
    this.on(refs.thread, "dragover", (event) => this.handleDragOver(event));
    this.on(refs.thread, "drop", (event) => this.handleDrop(event));
    this.on(refs.thread, "dragend", () => this.clearDragState());
    this.on(refs.thread, "dragleave", (event) => {
      if (!refs.thread.contains(event.relatedTarget as Node | null)) this.clearDropMarkers();
    });

    this.on(refs.panel, "input", (event) => {
      const target = event.target;

      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;

      this.handlePanelInput(target);
    });

    this.on(refs.storyMeta, "input", (event) => {
      const target = event.target;

      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return;

      this.handlePanelInput(target);
    });

    this.on(refs.panel, "change", (event) => {
      const target = event.target;

      if (!(target instanceof HTMLSelectElement)) return;

      this.handlePanelSelect(target);
    });
  }

  private render(): void {
    this.renderTabs();
    this.renderStoryMeta();
    this.renderAddRail();
    this.renderThread();
    this.renderPanel();
    this.renderExport();
  }

  private renderTabs(): void {
    const refs = this.refs;

    if (!refs) return;

    const tabs = this.stories.map((story, index) => {
      const button = document.createElement("button");
      button.className = "wa-builder-tab";
      button.type = "button";
      button.dataset.builderStoryTab = String(index);
      button.classList.toggle("is-active", index === this.activeStoryIndex);
      button.setAttribute("aria-pressed", String(index === this.activeStoryIndex));

      const title = document.createElement("span");
      title.className = "wa-builder-tab__title";
      title.textContent = story.label;

      const count = document.createElement("span");
      count.className = "wa-builder-tab__count";
      count.textContent = `${story.steps.length} messages`;

      button.append(title, count);
      return button;
    });

    refs.tabs.replaceChildren(...tabs);
  }

  private renderStoryMeta(): void {
    const refs = this.refs;

    if (!refs) return;

    const story = this.activeStory;

    refs.storyMeta.replaceChildren(
      this.createField("Story title", "input", "story-label", story.label),
      this.createField("Story summary", "textarea", "story-summary", story.summary),
    );
    refs.storyMeta.querySelectorAll<HTMLTextAreaElement>("textarea").forEach((field) => this.autoSize(field));
  }

  private renderAddRail(): void {
    const refs = this.refs;

    if (!refs || refs.addRail.childElementCount) return;

    const buttons = ADDABLE_STEP_KINDS.map((kind) => {
      const button = document.createElement("button");
      button.className = "wa-builder-add-button";
      button.type = "button";
      button.dataset.builderAdd = kind;
      button.textContent = `+ ${STEP_KIND_LABELS[kind]}`;
      return button;
    });

    refs.addRail.replaceChildren(...buttons);
  }

  private renderThread(): void {
    const refs = this.refs;

    if (!refs) return;

    const story = this.activeStory;
    const nodes = story.steps.map((step, index) =>
      this.createStepNode(step, index, story.steps.length, story.steps[index - 1]?.kind),
    );
    refs.thread.replaceChildren(...nodes);

    refs.thread.querySelectorAll<HTMLTextAreaElement>("[data-builder-step-field], [data-builder-thinking-field]").forEach((field) => {
      this.autoSize(field);
    });
  }

  private renderPanel(): void {
    const refs = this.refs;

    if (!refs) return;

    const selectedStep = this.selectedStep;
    const fragment = document.createDocumentFragment();

    if (selectedStep) {
      const kindField = document.createElement("label");
      kindField.className = "wa-builder-field";

      const label = document.createElement("span");
      label.className = "wa-builder-field__label";
      label.textContent = "Selected message";

      const select = document.createElement("select");
      select.className = "wa-builder-field__control";
      select.dataset.builderPanelSelect = "step-kind";

      for (const kind of Object.keys(STEP_KIND_LABELS) as BuilderStepKind[]) {
        const option = document.createElement("option");
        option.value = kind;
        option.textContent = STEP_KIND_LABELS[kind];
        option.selected = selectedStep.kind === kind;
        select.append(option);
      }

      kindField.append(label, select);
      fragment.append(
        kindField,
        this.createField("Message text", "textarea", "step-text", selectedStep.text),
        this.createField("Internal note", "textarea", "step-note", selectedStep.note),
      );
    } else {
      const empty = document.createElement("p");
      empty.className = "wa-builder-panel__empty";
      empty.textContent = "No message selected.";
      fragment.append(empty);
    }

    refs.panel.replaceChildren(fragment);
    refs.panel.querySelectorAll<HTMLTextAreaElement>("textarea").forEach((field) => this.autoSize(field));
  }

  private renderExport(): void {
    const refs = this.refs;

    if (!refs) return;
    if (this.isExportHidden()) return;

    refs.export.value = this.getExportJson();
    this.autoSize(refs.export);
  }

  private getExportJson(): string {
    return JSON.stringify({
      schemaVersion: BUILDER_DRAFT_SCHEMA_VERSION,
      stories: this.stories,
    }, null, 2);
  }

  private isExportHidden(): boolean {
    return Boolean(this.refs?.export.closest(".wa-builder-export")?.hasAttribute("hidden"));
  }

  private async copyExportJson(): Promise<void> {
    const refs = this.refs;

    if (!refs) return;

    const text = refs.export.value || this.getExportJson();
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) copied = this.copyWithFallback(text);

    this.setCopyButtonState(copied);
    this.setStatus(copied ? "Story JSON copied" : "Could not copy Story JSON");
  }

  private copyWithFallback(text: string): boolean {
    const refs = this.refs;

    if (!refs) return false;

    const field = document.createElement("textarea");
    field.value = text;
    field.readOnly = true;
    field.tabIndex = -1;
    field.setAttribute("aria-hidden", "true");
    field.style.position = "fixed";
    field.style.top = "0";
    field.style.left = "-9999px";
    field.style.width = "1px";
    field.style.height = "1px";
    field.style.opacity = "0";

    refs.shell.append(field);
    field.select();
    field.setSelectionRange(0, field.value.length);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }

    field.remove();
    return copied;
  }

  private setCopyButtonState(copied: boolean): void {
    const refs = this.refs;

    if (!refs) return;

    const label = refs.copyJson.querySelector<HTMLElement>("[data-builder-copy-label]");
    refs.copyJson.dataset.copyState = copied ? "copied" : "idle";
    if (label) label.textContent = copied ? "Copied" : "Copy";

    if (this.copyResetTimer !== null) window.clearTimeout(this.copyResetTimer);

    this.copyResetTimer = window.setTimeout(() => {
      if (!this.refs) return;

      delete this.refs.copyJson.dataset.copyState;
      const currentLabel = this.refs.copyJson.querySelector<HTMLElement>("[data-builder-copy-label]");
      if (currentLabel) currentLabel.textContent = "Copy";
      this.copyResetTimer = null;
    }, 1400);
  }

  private createStepNode(
    step: BuilderStep,
    index: number,
    stepCount: number,
    previousKind?: BuilderStepKind,
  ): HTMLElement {
    const wrapper = document.createElement("article");
    wrapper.className = "wa-builder-step";
    wrapper.dataset.builderStep = step.id;
    wrapper.dataset.builderKind = step.kind;
    wrapper.draggable = true;
    wrapper.setAttribute("aria-grabbed", "false");
    wrapper.classList.toggle("is-selected", step.id === this.selectedStepId);

    const message = document.createElement("div");
    message.className = "wa-message wa-builder-message";
    message.dataset.messageRole = step.kind === "user" || step.kind === "file" ? "user" : "assistant";

    if (step.kind === "component" || step.kind === "thinking") {
      message.classList.add("wa-message--component");
    }

    const avatar = document.createElement("div");
    avatar.className = "wa-message__avatar";

    const body = document.createElement("div");
    body.className = "wa-message__body wa-builder-message__body";
    body.dataset.messageBody = "";
    body.append(this.createStepBody(step, previousKind === "thinking"));

    message.append(avatar, body);
    wrapper.append(message, this.createStepToolbar(step, stepCount));
    return wrapper;
  }

  private createStepBody(step: BuilderStep, suppressThinkingHeader = false): HTMLElement {
    if (step.kind === "thinking") return this.createThinkingBody(step, suppressThinkingHeader);
    if (step.kind === "component") return this.createComponentBody(step);
    if (step.kind === "cursor") return this.createCursorBody(step);
    if (step.kind === "file") return this.createFileBody(step);

    const body = document.createElement("div");
    body.className = "wa-builder-bubble";

    const chip = document.createElement("span");
    chip.className = "wa-builder-step__kind";
    chip.textContent = STEP_KIND_LABELS[step.kind];

    body.append(chip, this.createInlineTextarea(step));
    return body;
  }

  private createThinkingBody(step: BuilderStep, suppressHeader = false): HTMLElement {
    step.thinking ??= createThinkingState(step.text, step.note);

    const block = document.createElement("div");
    block.className = "wa-thinking-block wa-builder-thinking";

    const header = document.createElement("div");
    header.className = "wa-thinking";

    const glyph = document.createElement("span");
    glyph.className = "wa-thinking__glyph";
    glyph.dataset.logoRole = "shadow";
    glyph.setAttribute("aria-hidden", "true");
    glyph.append(createUnifyMarkSvg("wa-thinking__logo-mark"));

    const title = document.createElement("span");
    title.className = "wa-thinking__title";
    title.append(
      this.createThinkingInput(step.id, "title", step.thinking.title, {
        className: "wa-builder-thinking__header-input",
      }),
    );

    const elapsed = document.createElement("span");
    elapsed.className = "wa-thinking__elapsed";
    elapsed.append(
      this.createThinkingInput(step.id, "elapsed", step.thinking.elapsed, {
        className: "wa-builder-thinking__elapsed-input",
      }),
    );

    const steps = document.createElement("div");
    steps.className = "wa-research-steps";

    step.thinking.items.forEach((thinkingItem, itemIndex) => {
      const item = document.createElement("div");
      item.className = "wa-research-step wa-builder-research-step";
      item.dataset.stepState = "complete";

      const marker = document.createElement("span");
      marker.className = "wa-research-step__marker";
      marker.setAttribute("aria-hidden", "true");

      const copy = document.createElement("div");
      copy.className = "wa-research-step__body";

      const label = document.createElement("div");
      label.className = "wa-research-step__label";
      label.append(
        this.createThinkingField(step.id, "label", thinkingItem.label, {
          itemIndex,
          className: "wa-builder-step__textarea wa-builder-thinking__label-input",
        }),
      );

      const detail = document.createElement("div");
      detail.className = "wa-research-step__detail";
      detail.append(
        this.createThinkingField(step.id, "detail", thinkingItem.detail, {
          itemIndex,
          className: "wa-builder-thinking__detail-input",
        }),
      );

      copy.append(label, detail);
      item.append(marker, copy);
      steps.append(item);
    });

    header.append(glyph, title, elapsed);
    if (suppressHeader) {
      block.dataset.thinkingHeaderSuppressed = "true";
      block.append(steps);
    } else {
      block.append(header, steps);
    }
    return block;
  }

  private createComponentBody(step: BuilderStep): HTMLElement {
    step.component ??= createFallbackComponent(step.text);

    if (step.component.kind === "table") return this.createTableComponentBody(step, step.component);
    if (step.component.kind === "strategyCards") return this.createStrategyComponentBody(step, step.component);
    if (step.component.kind === "enrichment") return this.createEnrichmentComponentBody(step, step.component);
    if (step.component.kind === "dataSources") return this.createDataSourcesComponentBody(step, step.component);
    if (step.component.kind === "uploadedFiles") return this.createUploadedFilesComponentBody(step, step.component);
    if (step.component.kind === "mailboxConnection") {
      return this.createMailboxConnectionComponentBody(step, step.component);
    }
    if (step.component.kind === "styleProfile") return this.createStyleProfileComponentBody(step, step.component);
    if (step.component.kind === "proximityList") return this.createProximityListComponentBody(step, step.component);
    if (step.component.kind === "personalizationSwipeGame") {
      return this.createPersonalizationSwipeComponentBody(step, step.component);
    }
    if (step.component.kind === "sequenceEngagement") {
      return this.createSequenceEngagementComponentBody(step, step.component);
    }

    const { card, content } = this.createStructuredComponentParts("Component");

    const title = this.createComponentField(step.id, "title", step.component.title, {
      className: "wa-builder-component-card__title",
    });

    const items = document.createElement("div");
    items.className = "wa-builder-component-list";
    step.component.items.forEach((item, index) => {
      items.append(
        this.createComponentField(step.id, "item", item, {
          itemIndex: index,
          className: "wa-builder-component-list__item",
        }),
      );
    });

    content.append(title, items);
    return card;
  }

  private createTableComponentBody(step: BuilderStep, component: BuilderTableComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Table", "table");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const eyebrow = this.createComponentInput(step.id, "eyebrow", component.eyebrow ?? "", {
      className: "wa-builder-table-editor__meta",
    });
    const count = this.createComponentInput(step.id, "count", component.count ?? "", {
      className: "wa-builder-table-editor__meta",
    });

    const table = document.createElement("div");
    table.className = "wa-builder-table-editor";
    table.style.setProperty("--wa-builder-table-columns", `repeat(${component.columns.length}, minmax(112px, 1fr))`);

    const header = document.createElement("div");
    header.className = "wa-builder-table-editor__row";
    header.dataset.header = "true";

    component.columns.forEach((column, columnIndex) => {
      header.append(
        this.createComponentInput(step.id, "column", column, {
          columnIndex,
          className: "wa-builder-table-editor__cell",
        }),
      );
    });

    table.append(header);

    component.rows.forEach((row, rowIndex) => {
      const rowEl = document.createElement("div");
      rowEl.className = "wa-builder-table-editor__row";

      component.columns.forEach((_column, columnIndex) => {
        rowEl.append(
          this.createComponentInput(step.id, "cell", row[columnIndex] ?? "", {
            rowIndex,
            columnIndex,
            className: "wa-builder-table-editor__cell",
          }),
        );
      });

      table.append(rowEl);
    });

    const footerFields = document.createElement("div");
    footerFields.className = "wa-builder-table-editor__footer-fields";

    component.actions?.forEach((action, itemIndex) => {
      const actionRow = document.createElement("div");
      actionRow.className = "wa-builder-table-editor__action-row";
      actionRow.append(
        this.createComponentInput(step.id, "actionLabel", action.label, {
          itemIndex,
          className: "wa-builder-table-editor__cell",
        }),
        this.createComponentInput(step.id, "actionTooltip", action.tooltip, {
          itemIndex,
          className: "wa-builder-table-editor__cell",
        }),
        this.createComponentInput(step.id, "actionBadge", action.badge, {
          itemIndex,
          className: "wa-builder-table-editor__cell",
        }),
      );
      footerFields.append(actionRow);
    });

    component.pagination?.ranges.forEach((range, itemIndex) => {
      footerFields.append(
        this.createComponentInput(step.id, "pageRange", range, {
          itemIndex,
          className: "wa-builder-table-editor__meta",
        }),
      );
    });

    content.append(title, eyebrow, count, table, footerFields);
    return card;
  }

  private createStrategyComponentBody(step: BuilderStep, component: BuilderStrategyComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Strategy cards", "strategy");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });

    const grid = document.createElement("div");
    grid.className = "wa-builder-strategy-editor";

    component.cards.forEach((strategy, cardIndex) => {
      const strategyCard = document.createElement("div");
      strategyCard.className = "wa-builder-strategy-editor__card";

      strategyCard.append(
        this.createComponentInput(step.id, "cardLabel", strategy.label, {
          cardIndex,
          className: "wa-builder-strategy-editor__label",
        }),
        this.createComponentField(step.id, "cardTitle", strategy.title, {
          cardIndex,
          className: "wa-builder-strategy-editor__title",
        }),
        this.createComponentField(step.id, "cardSummary", strategy.summary, {
          cardIndex,
          className: "wa-builder-strategy-editor__summary",
        }),
      );

      grid.append(strategyCard);
    });

    content.append(title, grid);
    return card;
  }

  private createEnrichmentComponentBody(step: BuilderStep, component: BuilderEnrichmentComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Enrichment", "enrichment");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });

    const fields = document.createElement("div");
    fields.className = "wa-builder-enrichment-editor";

    component.fields.forEach((field, fieldIndex) => {
      const group = document.createElement("div");
      group.className = "wa-builder-enrichment-editor__group";
      group.append(
        this.createComponentInput(step.id, "fieldTitle", field.title, {
          fieldIndex,
          className: "wa-builder-enrichment-editor__title",
        }),
      );

      field.steps.forEach((fieldStep, itemIndex) => {
        group.append(
          this.createComponentInput(step.id, "fieldStep", fieldStep, {
            fieldIndex,
            itemIndex,
            className: "wa-builder-enrichment-editor__step",
          }),
        );
      });

      fields.append(group);
    });

    content.append(title, subtitle, fields);
    return card;
  }

  private createDataSourcesComponentBody(step: BuilderStep, component: BuilderDataSourcesComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Data sources", "sources");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });

    const grid = document.createElement("div");
    grid.className = "wa-builder-data-sources-editor";

    component.sources.forEach((source, itemIndex) => {
      const sourceCard = document.createElement("div");
      sourceCard.className = "wa-builder-data-sources-editor__card";
      sourceCard.append(
        this.createComponentInput(step.id, "sourceCategory", source.category ?? "Data partners", {
          itemIndex,
          className: "wa-builder-data-sources-editor__category",
        }),
        this.createComponentInput(step.id, "sourceName", source.name, {
          itemIndex,
          className: "wa-builder-data-sources-editor__name",
        }),
        this.createComponentField(step.id, "sourceDetail", source.detail, {
          itemIndex,
          className: "wa-builder-data-sources-editor__detail",
        }),
      );
      grid.append(sourceCard);
    });

    content.append(title, subtitle, grid);
    return card;
  }

  private createUploadedFilesComponentBody(step: BuilderStep, component: BuilderUploadedFilesComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Files");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const grid = document.createElement("div");
    grid.className = "wa-builder-file-list-editor";

    component.files.forEach((file, itemIndex) => {
      const fileCard = document.createElement("div");
      fileCard.className = "wa-builder-file-list-editor__card";
      fileCard.append(
        this.createComponentInput(step.id, "fileType", file.type, {
          itemIndex,
          className: "wa-builder-file-list-editor__type",
        }),
        this.createComponentInput(step.id, "fileName", file.name, {
          itemIndex,
          className: "wa-builder-file-list-editor__name",
        }),
        this.createComponentField(step.id, "fileDetail", file.detail, {
          itemIndex,
          className: "wa-builder-file-list-editor__detail",
        }),
      );
      grid.append(fileCard);
    });

    content.append(title, grid);
    return card;
  }

  private createMailboxConnectionComponentBody(
    step: BuilderStep,
    component: BuilderMailboxConnectionComponent,
  ): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Mailbox connection");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });
    const meta = document.createElement("div");
    meta.className = "wa-builder-mailbox-editor__meta";
    meta.append(
      this.createComponentInput(step.id, "mailboxProvider", component.provider, {
        className: "wa-builder-mailbox-editor__provider",
      }),
      this.createComponentInput(step.id, "mailboxAccount", component.account, {
        className: "wa-builder-mailbox-editor__account",
      }),
      this.createComponentInput(step.id, "mailboxStatus", component.status, {
        className: "wa-builder-mailbox-editor__status",
      }),
    );
    const cta = document.createElement("div");
    cta.className = "wa-builder-mailbox-editor__cta";
    cta.append(
      this.createComponentInput(step.id, "mailboxCtaLabel", component.ctaLabel, {
        className: "wa-builder-mailbox-editor__button-label",
      }),
      this.createComponentInput(step.id, "mailboxSecondaryCtaLabel", component.secondaryCtaLabel ?? "Outlook", {
        className: "wa-builder-mailbox-editor__button-label",
      }),
      this.createComponentInput(step.id, "mailboxLoadingLabel", component.loadingLabel, {
        className: "wa-builder-mailbox-editor__button-label",
      }),
    );
    const learningTitle = this.createComponentInput(step.id, "mailboxLearningTitle", component.learningTitle, {
      className: "wa-builder-mailbox-editor__learning-title",
    });
    const learningDetail = this.createComponentField(step.id, "mailboxLearningDetail", component.learningDetail, {
      className: "wa-builder-mailbox-editor__learning-detail",
    });
    const learningReadyDetail = this.createComponentField(
      step.id,
      "mailboxLearningReadyDetail",
      component.learningReadyDetail ?? MAILBOX_LEARNING_READY_DETAIL,
      {
        className: "wa-builder-mailbox-editor__learning-detail",
      },
    );

    const signals = document.createElement("div");
    signals.className = "wa-builder-mailbox-editor__signals";
    component.signals.forEach((signal, itemIndex) => {
      signals.append(
        this.createComponentInput(step.id, "mailboxSignal", signal, {
          itemIndex,
          className: "wa-builder-mailbox-editor__signal",
        }),
      );
    });

    content.append(title, subtitle, meta, cta, learningTitle, learningDetail, learningReadyDetail, signals);
    return card;
  }

  private createStyleProfileComponentBody(step: BuilderStep, component: BuilderStyleProfileComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Report");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });
    const signals = document.createElement("div");
    signals.className = "wa-builder-style-profile-editor";

    component.signals.forEach((signal, itemIndex) => {
      const row = document.createElement("div");
      row.className = "wa-builder-style-profile-editor__row";
      row.append(
        this.createComponentInput(step.id, "signalLabel", signal.label, {
          itemIndex,
          className: "wa-builder-style-profile-editor__label",
        }),
        this.createComponentField(step.id, "signalValue", signal.value, {
          itemIndex,
          className: "wa-builder-style-profile-editor__value",
        }),
      );
      signals.append(row);
    });

    const examples = document.createElement("div");
    examples.className = "wa-builder-style-profile-editor__examples";
    component.examples.forEach((example, itemIndex) => {
      examples.append(
        this.createComponentField(step.id, "styleExample", example, {
          itemIndex,
          className: "wa-builder-style-profile-editor__example",
        }),
      );
    });

    content.append(title, subtitle, signals, examples);
    return card;
  }

  private createProximityListComponentBody(step: BuilderStep, component: BuilderProximityListComponent): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Proximity list");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });
    const list = document.createElement("div");
    list.className = "wa-builder-proximity-editor";

    component.leads.forEach((lead, itemIndex) => {
      const row = document.createElement("div");
      row.className = "wa-builder-proximity-editor__row";
      row.append(
        this.createComponentInput(step.id, "leadRank", lead.rank, {
          itemIndex,
          className: "wa-builder-proximity-editor__rank",
        }),
        this.createComponentInput(step.id, "leadScore", lead.score, {
          itemIndex,
          className: "wa-builder-proximity-editor__score",
        }),
        this.createComponentInput(step.id, "leadName", lead.name, {
          itemIndex,
          className: "wa-builder-proximity-editor__name",
        }),
        this.createComponentInput(step.id, "leadCompany", lead.company, {
          itemIndex,
          className: "wa-builder-proximity-editor__company",
        }),
        this.createComponentInput(step.id, "leadTitle", lead.title, {
          itemIndex,
          className: "wa-builder-proximity-editor__title",
        }),
        this.createComponentInput(step.id, "leadProximity", lead.proximity, {
          itemIndex,
          className: "wa-builder-proximity-editor__proximity",
        }),
        this.createComponentField(step.id, "leadPersonalization", lead.personalization, {
          itemIndex,
          className: "wa-builder-proximity-editor__personalization",
        }),
      );
      list.append(row);
    });

    content.append(title, subtitle, list);
    return card;
  }

  private createPersonalizationSwipeComponentBody(
    step: BuilderStep,
    component: BuilderPersonalizationSwipeComponent,
  ): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Personalization swipe game");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });
    const prompt = this.createComponentField(step.id, "prompt", component.prompt, {
      className: "wa-builder-component-card__subtitle",
    });
    const list = document.createElement("div");
    list.className = "wa-builder-swipe-game-editor";

    component.signals.forEach((signal, itemIndex) => {
      const row = document.createElement("div");
      row.className = "wa-builder-swipe-game-editor__row";
      row.append(
        this.createComponentInput(step.id, "swipeDecision", signal.decision, {
          itemIndex,
          className: "wa-builder-swipe-game-editor__decision",
        }),
        this.createComponentField(step.id, "swipeLabel", signal.label, {
          itemIndex,
          className: "wa-builder-swipe-game-editor__label",
        }),
        this.createComponentField(step.id, "swipeDetail", signal.detail, {
          itemIndex,
          className: "wa-builder-swipe-game-editor__detail",
        }),
      );
      list.append(row);
    });

    content.append(title, subtitle, prompt, list);
    return card;
  }

  private createSequenceEngagementComponentBody(
    step: BuilderStep,
    component: BuilderSequenceEngagementComponent,
  ): HTMLElement {
    const { card, content } = this.createStructuredComponentParts("Sequence engagement");

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });
    const peopleCount = this.createComponentInput(step.id, "peopleCount", component.peopleCount, {
      className: "wa-builder-sequence-editor__count",
    });
    const launchLabel = this.createComponentInput(step.id, "launchLabel", component.launchLabel ?? "", {
      className: "wa-builder-sequence-editor__count",
    });

    const sequences = document.createElement("div");
    sequences.className = "wa-builder-sequence-editor";

    component.sequences.forEach((sequence, itemIndex) => {
      const sequenceCard = document.createElement("div");
      sequenceCard.className = "wa-builder-sequence-editor__card";
      sequenceCard.append(
        this.createComponentInput(step.id, "sequenceName", sequence.name, {
          itemIndex,
          className: "wa-builder-sequence-editor__name",
        }),
        this.createComponentInput(step.id, "sequenceCompany", sequence.company, {
          itemIndex,
          className: "wa-builder-sequence-editor__company",
        }),
        this.createComponentInput(step.id, "sequenceTitle", sequence.title ?? "", {
          itemIndex,
          className: "wa-builder-sequence-editor__company",
        }),
        this.createComponentInput(step.id, "sequenceSignal", sequence.signal ?? "", {
          itemIndex,
          className: "wa-builder-sequence-editor__subject",
        }),
        this.createComponentInput(step.id, "sequenceSubject", sequence.subject, {
          itemIndex,
          className: "wa-builder-sequence-editor__subject",
        }),
        this.createComponentField(step.id, "sequencePersonalization", sequence.personalization, {
          itemIndex,
          className: "wa-builder-sequence-editor__personalization",
        }),
      );
      sequence.steps?.forEach((sequenceStep, fieldIndex) => {
        sequenceCard.append(
          this.createComponentInput(step.id, "sequenceStepChannel", sequenceStep.channel, {
            itemIndex,
            fieldIndex,
            className: "wa-builder-sequence-editor__subject",
          }),
          this.createComponentInput(step.id, "sequenceStepLabel", sequenceStep.label, {
            itemIndex,
            fieldIndex,
            className: "wa-builder-sequence-editor__subject",
          }),
          this.createComponentField(step.id, "sequenceStepBody", sequenceStep.body, {
            itemIndex,
            fieldIndex,
            className: "wa-builder-sequence-editor__personalization",
          }),
          this.createComponentInput(step.id, "sequenceStepWaitDays", sequenceStep.waitDays ?? "", {
            itemIndex,
            fieldIndex,
            className: "wa-builder-sequence-editor__count",
          }),
        );
      });
      sequences.append(sequenceCard);
    });

    const channels = document.createElement("div");
    channels.className = "wa-builder-channel-editor";

    component.channels.forEach((channel, itemIndex) => {
      const channelCard = document.createElement("div");
      channelCard.className = "wa-builder-channel-editor__card";
      channelCard.append(
        this.createComponentInput(step.id, "channelLabel", channel.label, {
          itemIndex,
          className: "wa-builder-channel-editor__label",
        }),
        this.createComponentInput(step.id, "channelBadge", channel.badge, {
          itemIndex,
          className: "wa-builder-channel-editor__badge",
        }),
        this.createComponentField(step.id, "channelDetail", channel.detail, {
          itemIndex,
          className: "wa-builder-channel-editor__detail",
        }),
      );
      channels.append(channelCard);
    });

    content.append(title, subtitle, peopleCount, launchLabel, sequences, channels);
    return card;
  }

  private createStructuredComponentParts(
    labelText: string,
    modifier?: string,
  ): { card: HTMLElement; content: HTMLElement } {
    const card = document.createElement("div");
    card.className = "wa-builder-component-card";
    if (modifier) card.classList.add(`wa-builder-component-card--${modifier}`);

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = labelText;

    content.append(label);
    card.append(content);
    return { card, content };
  }

  private createThinkingField(
    stepId: string,
    fieldName: string,
    value: string,
    options: {
      itemIndex?: number;
      className: string;
    },
  ): HTMLTextAreaElement {
    const field = document.createElement("textarea");
    field.className = options.className;
    field.dataset.builderThinkingField = fieldName;
    field.dataset.builderThinkingStep = stepId;
    field.value = value;
    field.rows = 1;
    field.spellcheck = true;
    if (options.itemIndex !== undefined) field.dataset.builderThinkingItem = String(options.itemIndex);
    return field;
  }

  private createThinkingInput(
    stepId: string,
    fieldName: string,
    value: string,
    options: {
      itemIndex?: number;
      className: string;
    },
  ): HTMLInputElement {
    const field = document.createElement("input");
    field.className = options.className;
    field.dataset.builderThinkingField = fieldName;
    field.dataset.builderThinkingStep = stepId;
    field.value = value;
    field.type = "text";
    field.spellcheck = true;
    if (options.itemIndex !== undefined) field.dataset.builderThinkingItem = String(options.itemIndex);
    return field;
  }

  private createComponentField(
    stepId: string,
    fieldName: string,
    value: string,
    options: {
      rowIndex?: number;
      columnIndex?: number;
      cardIndex?: number;
      fieldIndex?: number;
      itemIndex?: number;
      className: string;
    },
  ): HTMLTextAreaElement {
    const field = document.createElement("textarea");
    field.className = options.className;
    field.dataset.builderComponentField = fieldName;
    field.dataset.builderComponentStep = stepId;
    field.value = value;
    field.rows = 1;
    field.spellcheck = true;
    this.applyComponentIndexes(field, options);
    return field;
  }

  private createComponentInput(
    stepId: string,
    fieldName: string,
    value: string,
    options: {
      rowIndex?: number;
      columnIndex?: number;
      cardIndex?: number;
      fieldIndex?: number;
      itemIndex?: number;
      className: string;
    },
  ): HTMLInputElement {
    const field = document.createElement("input");
    field.className = options.className;
    field.dataset.builderComponentField = fieldName;
    field.dataset.builderComponentStep = stepId;
    field.value = value;
    field.type = "text";
    field.spellcheck = true;
    this.applyComponentIndexes(field, options);
    return field;
  }

  private applyComponentIndexes(
    field: HTMLElement,
    options: {
      rowIndex?: number;
      columnIndex?: number;
      cardIndex?: number;
      fieldIndex?: number;
      itemIndex?: number;
    },
  ): void {
    if (options.rowIndex !== undefined) field.dataset.builderComponentRow = String(options.rowIndex);
    if (options.columnIndex !== undefined) field.dataset.builderComponentColumn = String(options.columnIndex);
    if (options.cardIndex !== undefined) field.dataset.builderComponentCard = String(options.cardIndex);
    if (options.fieldIndex !== undefined) field.dataset.builderComponentGroup = String(options.fieldIndex);
    if (options.itemIndex !== undefined) field.dataset.builderComponentItem = String(options.itemIndex);
  }

  private createCursorBody(step: BuilderStep): HTMLElement {
    const body = document.createElement("div");
    body.className = "wa-builder-cursor-line";

    const cursor = document.createElement("span");
    cursor.className = "wa-builder-cursor-line__cursor";
    cursor.setAttribute("aria-hidden", "true");

    body.append(cursor, this.createInlineTextarea(step));
    return body;
  }

  private createFileBody(step: BuilderStep): HTMLElement {
    const body = document.createElement("div");
    body.className = "wa-builder-file-pill";

    const icon = document.createElement("span");
    icon.className = "wa-builder-file-pill__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "CSV";

    body.append(icon, this.createInlineTextarea(step));
    return body;
  }

  private createInlineTextarea(step: BuilderStep): HTMLTextAreaElement {
    const field = document.createElement("textarea");
    field.className = "wa-builder-step__textarea";
    field.dataset.builderStepField = step.id;
    field.value = step.text;
    field.rows = 1;
    field.spellcheck = true;
    field.setAttribute("aria-label", `${STEP_KIND_LABELS[step.kind]} message text`);
    return field;
  }

  private createStepToolbar(step: BuilderStep, stepCount: number): HTMLElement {
    const toolbar = document.createElement("div");
    toolbar.className = "wa-builder-step__toolbar";

    toolbar.append(
      this.createDragHandle(step.id),
      this.createActionButton(step.id, "duplicate", "Duplicate message", "copy"),
      this.createActionButton(step.id, "delete", "Delete message", "x", stepCount <= 1),
    );

    return toolbar;
  }

  private createDragHandle(stepId: string): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "wa-builder-step__action wa-builder-step__drag";
    button.type = "button";
    button.draggable = true;
    button.dataset.builderDragHandle = stepId;
    button.setAttribute("aria-label", "Drag to reorder message");
    button.append(createIcon("grip"));
    return button;
  }

  private createActionButton(
    stepId: string,
    action: string,
    label: string,
    icon: "copy" | "x",
    disabled = false,
  ): HTMLButtonElement {
    const button = document.createElement("button");
    button.className = "wa-builder-step__action";
    button.type = "button";
    button.dataset.builderAction = action;
    button.dataset.builderActionStep = stepId;
    button.disabled = disabled;
    button.setAttribute("aria-label", label);
    button.append(createIcon(icon));
    return button;
  }

  private createField(
    labelText: string,
    type: "input" | "textarea" | "color",
    fieldName: string,
    value: string,
  ): HTMLLabelElement {
    const label = document.createElement("label");
    label.className = "wa-builder-field";

    const caption = document.createElement("span");
    caption.className = "wa-builder-field__label";
    caption.textContent = labelText;

    const field =
      type === "textarea"
        ? document.createElement("textarea")
        : document.createElement("input");

    field.className = "wa-builder-field__control";
    field.dataset.builderPanelInput = fieldName;
    field.value = value;

    if (field instanceof HTMLInputElement) {
      field.type = type === "color" ? "color" : "text";
    }

    if (field instanceof HTMLTextAreaElement) {
      field.rows = 2;
    }

    label.append(caption, field);
    return label;
  }

  private selectStory(index: number): void {
    if (!this.stories[index]) return;

    this.activeStoryIndex = index;
    this.selectedStepId = this.activeStory.steps[0]?.id ?? null;
    this.options.onStorySelect?.(this.activeStory.id);
    this.render();
    this.setStatus(`Editing ${this.activeStory.label}`);
  }

  private selectStep(stepId: string, options: { renderThread?: boolean } = {}): void {
    if (!this.activeStory.steps.some((step) => step.id === stepId)) return;
    if (this.selectedStepId === stepId && options.renderThread === false) return;

    this.selectedStepId = stepId;
    if (options.renderThread === false) {
      this.updateSelectedStepClass();
    } else {
      this.renderThread();
    }
    this.renderPanel();
  }

  private updateSelectedStepClass(): void {
    const refs = this.refs;

    if (!refs) return;

    refs.thread.querySelectorAll<HTMLElement>("[data-builder-step]").forEach((step) => {
      step.classList.toggle("is-selected", step.dataset.builderStep === this.selectedStepId);
    });
  }

  private addStep(kind: BuilderStepKind): void {
    const nextStep = createStep(kind, createDefaultStepText(kind), "");
    const steps = this.activeStory.steps;
    const selectedIndex = steps.findIndex((step) => step.id === this.selectedStepId);
    const insertIndex = selectedIndex >= 0 ? selectedIndex + 1 : steps.length;

    steps.splice(insertIndex, 0, nextStep);
    this.selectedStepId = nextStep.id;
    this.render();
    this.emitChange(`Added ${STEP_KIND_LABELS[kind]} message`);
  }

  private updateStep(
    stepId: string,
    patch: Partial<Pick<BuilderStep, "kind" | "text" | "note">>,
    options: { renderThread?: boolean } = {},
  ): void {
    const step = this.activeStory.steps.find((candidate) => candidate.id === stepId);

    if (!step) return;

    Object.assign(step, patch);
    if (step.kind === "thinking") syncThinkingFromStep(step, patch);
    this.renderExport();
    this.emitChange("Draft updated", false);

    if (options.renderThread !== false) {
      this.renderThread();
      this.renderPanel();
    }
  }

  private handleStepAction(button: HTMLButtonElement): void {
    const action = button.dataset.builderAction;
    const stepId = button.dataset.builderActionStep;

    if (!action || !stepId) return;

    const steps = this.activeStory.steps;
    const index = steps.findIndex((step) => step.id === stepId);

    if (index < 0) return;

    if (action === "duplicate") {
      steps.splice(index + 1, 0, cloneStep(steps[index]));
      this.selectedStepId = steps[index + 1]?.id ?? stepId;
    }

    if (action === "delete" && steps.length > 1) {
      steps.splice(index, 1);
      this.selectedStepId = steps[Math.min(index, steps.length - 1)]?.id ?? null;
    }

    this.render();
    this.emitChange("Draft updated");
  }

  private handleDragStart(event: DragEvent): void {
    const target = event.target as Element | null;
    const step = target?.closest<HTMLElement>("[data-builder-step]");

    if (!step?.dataset.builderStep) {
      event.preventDefault();
      return;
    }

    if (isInteractiveTarget(target) && !target?.closest("[data-builder-drag-handle]")) {
      event.preventDefault();
      return;
    }

    this.draggedStepId = step.dataset.builderStep;
    this.selectedStepId = this.draggedStepId;
    step.classList.add("is-dragging");
    step.setAttribute("aria-grabbed", "true");
    this.refs?.thread.setAttribute("data-builder-dragging", "true");
    event.dataTransfer?.setData("text/plain", this.draggedStepId);
    if (event.dataTransfer) event.dataTransfer.effectAllowed = "move";
  }

  private handleDragOver(event: DragEvent): void {
    if (!this.draggedStepId) return;

    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = "move";

    const targetStep = (event.target as Element | null)?.closest<HTMLElement>("[data-builder-step]");

    this.clearDropMarkers();

    if (!targetStep?.dataset.builderStep || targetStep.dataset.builderStep === this.draggedStepId) return;

    const rect = targetStep.getBoundingClientRect();
    const position = event.clientY < rect.top + rect.height / 2 ? "before" : "after";
    targetStep.classList.add(position === "before" ? "is-drop-before" : "is-drop-after");
  }

  private handleDrop(event: DragEvent): void {
    if (!this.draggedStepId) return;

    event.preventDefault();

    const targetStep = (event.target as Element | null)?.closest<HTMLElement>("[data-builder-step]");
    const targetId = targetStep?.dataset.builderStep;
    const position = targetStep?.classList.contains("is-drop-before") ? "before" : "after";

    this.moveStep(this.draggedStepId, targetId ?? null, position);
    this.clearDragState();
  }

  private moveStep(draggedStepId: string, targetStepId: string | null, position: "before" | "after"): void {
    const steps = this.activeStory.steps;
    const fromIndex = steps.findIndex((step) => step.id === draggedStepId);

    if (fromIndex < 0) return;

    const [draggedStep] = steps.splice(fromIndex, 1);
    let toIndex = targetStepId ? steps.findIndex((step) => step.id === targetStepId) : steps.length;

    if (toIndex < 0) toIndex = steps.length;
    if (position === "after") toIndex += 1;

    steps.splice(Math.min(toIndex, steps.length), 0, draggedStep);
    this.selectedStepId = draggedStep.id;
    this.render();
    this.emitChange("Reordered message");
  }

  private clearDragState(): void {
    this.draggedStepId = null;
    this.refs?.thread.removeAttribute("data-builder-dragging");
    this.clearDropMarkers();
    this.refs?.thread.querySelectorAll<HTMLElement>("[data-builder-step]").forEach((step) => {
      step.classList.remove("is-dragging");
      step.setAttribute("aria-grabbed", "false");
    });
  }

  private clearDropMarkers(): void {
    this.refs?.thread.querySelectorAll<HTMLElement>(".is-drop-before, .is-drop-after").forEach((step) => {
      step.classList.remove("is-drop-before", "is-drop-after");
    });
  }

  private handleThinkingInput(target: HTMLInputElement | HTMLTextAreaElement): void {
    const stepId = target.dataset.builderThinkingStep;
    const field = target.dataset.builderThinkingField;
    const itemIndex = toIndex(target.dataset.builderThinkingItem);
    const step = stepId ? this.activeStory.steps.find((candidate) => candidate.id === stepId) : null;

    if (!step || !field) return;

    step.thinking ??= createThinkingState(step.text, step.note);
    updateThinkingValue(step.thinking, field, target.value, itemIndex);
    syncStepFromThinking(step);

    if (this.selectedStepId === step.id) {
      this.syncPanelStepText(step.text);
      this.syncPanelStepNote(step.note);
    }

    this.renderExport();
    this.emitChange("Thinking updated", false);
  }

  private handleComponentInput(target: HTMLInputElement | HTMLTextAreaElement): void {
    const stepId = target.dataset.builderComponentStep;
    const field = target.dataset.builderComponentField;
    const step = stepId ? this.activeStory.steps.find((candidate) => candidate.id === stepId) : null;

    if (!step?.component || !field) return;

    updateComponentValue(step.component, field, target.value, {
      rowIndex: toIndex(target.dataset.builderComponentRow),
      columnIndex: toIndex(target.dataset.builderComponentColumn),
      cardIndex: toIndex(target.dataset.builderComponentCard),
      fieldIndex: toIndex(target.dataset.builderComponentGroup),
      itemIndex: toIndex(target.dataset.builderComponentItem),
    });

    step.text = getComponentDisplayText(step.component);
    if (this.selectedStepId === step.id) this.syncPanelStepText(step.text);
    this.renderExport();
    this.emitChange("Component updated", false);
  }

  private handlePanelInput(target: HTMLInputElement | HTMLTextAreaElement): void {
    const field = target.dataset.builderPanelInput;

    if (!field) return;

    if (field === "story-label") {
      this.activeStory.label = target.value;
      this.renderTabs();
      this.renderExport();
      this.emitChange("Story title updated", false);
      return;
    }

    if (field === "story-summary") {
      this.activeStory.summary = target.value;
      this.autoSize(target as HTMLTextAreaElement);
      this.renderExport();
      this.emitChange("Story summary updated", false);
      return;
    }

    if (!this.selectedStep) return;

    if (field === "step-text") {
      this.updateStep(this.selectedStep.id, { text: target.value }, { renderThread: false });
      if (this.selectedStep.kind === "thinking") {
        this.syncThreadThinking(this.selectedStep);
      } else {
        this.syncThreadStepText(this.selectedStep.id, target.value);
      }
      this.autoSize(target as HTMLTextAreaElement);
      return;
    }

    if (field === "step-note") {
      this.updateStep(this.selectedStep.id, { note: target.value }, { renderThread: false });
      if (this.selectedStep.kind === "thinking") this.syncThreadThinking(this.selectedStep);
      this.autoSize(target as HTMLTextAreaElement);
    }
  }

  private handlePanelSelect(target: HTMLSelectElement): void {
    const field = target.dataset.builderPanelSelect;

    if (field !== "step-kind" || !this.selectedStep || !isBuilderStepKind(target.value)) return;

    this.updateStep(this.selectedStep.id, { kind: target.value });
  }

  private setStatus(text: string): void {
    const refs = this.refs;

    if (!refs) return;

    refs.status.textContent = text;
  }

  private syncThreadStepText(stepId: string, value: string): void {
    const refs = this.refs;

    if (!refs) return;

    const field = refs.thread.querySelector<HTMLTextAreaElement>(
      `[data-builder-step-field="${this.escapeSelectorValue(stepId)}"]`,
    );

    if (!field || field.value === value) return;

    field.value = value;
    this.autoSize(field);
  }

  private escapeSelectorValue(value: string): string {
    return typeof CSS !== "undefined" && "escape" in CSS
      ? CSS.escape(value)
      : value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  private syncThreadThinking(step: BuilderStep): void {
    const refs = this.refs;

    if (!refs || !step.thinking) return;

    refs.thread.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      `[data-builder-thinking-step="${step.id}"]`,
    ).forEach((field) => {
      const fieldName = field.dataset.builderThinkingField;
      const itemIndex = toIndex(field.dataset.builderThinkingItem);
      const value = getThinkingValue(step.thinking!, fieldName, itemIndex);

      if (value === null || field.value === value) return;

      field.value = value;
      if (field instanceof HTMLTextAreaElement) this.autoSize(field);
    });
  }

  private syncPanelStepText(value: string): void {
    const refs = this.refs;

    if (!refs) return;

    const field = refs.panel.querySelector<HTMLTextAreaElement>("[data-builder-panel-input='step-text']");

    if (!field || field.value === value) return;

    field.value = value;
    this.autoSize(field);
  }

  private syncPanelStepNote(value: string): void {
    const refs = this.refs;

    if (!refs) return;

    const field = refs.panel.querySelector<HTMLTextAreaElement>("[data-builder-panel-input='step-note']");

    if (!field || field.value === value) return;

    field.value = value;
    this.autoSize(field);
  }

  private emitChange(status: string, updateStatus = true): void {
    const refs = this.refs;

    if (!refs) return;

    if (updateStatus) this.setStatus(status);
    this.options.onStoriesChange?.(this.stories, { source: "edit" });
    refs.shell.dispatchEvent(
      new CustomEvent("chatbot-story-builder:change", {
        bubbles: true,
        detail: {
          story: this.activeStory,
          stories: this.stories,
        },
      }),
    );
    this.queueRemoteSave();
  }

  private async loadRemoteDraft(): Promise<void> {
    if (!this.draftEndpoint) return;

    this.loadingRemoteDraft = true;
    this.setStatus("loading draft");

    try {
      const response = await fetch(this.draftEndpoint, {
        method: "GET",
        cache: "no-store",
        headers: { Accept: "application/json" },
      });

      if (response.status === 404) {
        const payload = await readJsonResponse(response);

        if (isRecord(payload) && payload.error === "not_found") {
          this.setStatus("seeding blob draft");
          this.loadingRemoteDraft = false;
          this.queueRemoteSave();
          return;
        }

        throw new Error("draft endpoint unavailable");
      }

      if (!response.ok) {
        throw new Error(`draft load failed with ${response.status}`);
      }

      const payload = await response.json() as unknown;
      const remoteDraft = normalizeBuilderDraftPayload(payload);
      const remoteStories = remoteDraft?.stories;

      if (!remoteDraft || !remoteStories?.length) {
        throw new Error("draft payload did not include stories");
      }

      this.stories = remoteDraft.schemaVersion === BUILDER_DRAFT_SCHEMA_VERSION
        ? remoteStories
        : createBuilderStories(this.sourceStories);
      this.activeStoryIndex = Math.min(this.activeStoryIndex, Math.max(0, this.stories.length - 1));
      this.selectedStepId = this.activeStory.steps[0]?.id ?? null;
      this.render();
      this.setStatus(remoteDraft.schemaVersion === BUILDER_DRAFT_SCHEMA_VERSION ? "draft loaded" : "draft upgraded");
      this.options.onStoriesChange?.(this.stories, { source: "load" });
      if (remoteDraft.schemaVersion !== BUILDER_DRAFT_SCHEMA_VERSION) this.queueRemoteSave();
    } catch {
      this.setStatus("remote draft unavailable; using local draft");
    } finally {
      this.loadingRemoteDraft = false;
      if (this.pendingSaveAfterLoad) {
        this.pendingSaveAfterLoad = false;
        this.queueRemoteSave();
      }
    }
  }

  private queueRemoteSave(): void {
    if (!this.draftEndpoint || !this.draftAutoSave) return;

    if (this.loadingRemoteDraft) {
      this.pendingSaveAfterLoad = true;
      return;
    }

    if (this.saveTimer !== null) window.clearTimeout(this.saveTimer);

    this.saveTimer = window.setTimeout(() => {
      this.saveTimer = null;
      void this.saveRemoteDraft();
    }, DRAFT_SAVE_DEBOUNCE_MS);
  }

  private async saveRemoteDraft(): Promise<void> {
    if (!this.draftEndpoint) return;

    try {
      const response = await fetch(this.draftEndpoint, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...getDraftWriteHeaders(),
        },
        body: JSON.stringify({
          schemaVersion: BUILDER_DRAFT_SCHEMA_VERSION,
          stories: this.stories,
        }),
      });

      if (!response.ok) {
        throw new Error(`draft save failed with ${response.status}`);
      }

      this.setStatus("draft saved");
    } catch {
      this.setStatus("could not save draft");
    }
  }

  private autoSize(field: HTMLTextAreaElement): void {
    field.style.height = "auto";
    field.style.height = `${field.scrollHeight}px`;
  }

  private required<T extends Element>(root: ParentNode, selector: string): T {
    const element = root.querySelector<T>(selector);

    if (!element) {
      throw new Error(`StoryBuilder: missing required element "${selector}"`);
    }

    return element;
  }

  private on<K extends keyof HTMLElementEventMap>(
    element: HTMLElement,
    eventName: K,
    handler: (event: HTMLElementEventMap[K]) => void,
  ): void {
    element.addEventListener(eventName, handler as EventListener);
    this.listeners.push(() => element.removeEventListener(eventName, handler as EventListener));
  }

  private get activeStory(): BuilderStory {
    return this.stories[this.activeStoryIndex];
  }

  private get selectedStep(): BuilderStep | null {
    return this.activeStory.steps.find((step) => step.id === this.selectedStepId) ?? null;
  }
}

function createBuilderStories(stories: StoryDefinition[]): BuilderStory[] {
  return stories.map((story) => ({
    id: story.id,
    label: story.navLabel ?? story.label,
    summary: story.navDescription ?? story.summary,
    steps: createSeedSteps(story.id, story.summary),
  }));
}

function createSeedSteps(storyId: string, fallbackSummary: string): BuilderStep[] {
  const seed: Record<string, Array<Omit<BuilderStep, "id">>> = {
    "hit-ground-running": [
      { kind: "status", text: "Sign up", note: "Start in the browser sign-up screen." },
      { kind: "user", text: "joel@acme.co", note: "Typed into the sign-up field." },
      createThinkingStepSeed([
        "Researching the company profile",
        "Learning the ICP and buyer roles",
        "Reading blog posts for positioning",
        "Scanning careers pages for priorities",
        "Mapping current GTM signals",
      ]),
      { kind: "assistant", text: "Here are some ideas I can put into action for you:", note: "" },
      {
        kind: "component",
        text: "Three compact GTM strategy cards",
        note: "Founder-led signal capture, RevOps consolidation, and pipeline acceleration.",
        component: createStrategyComponent(),
      },
    ],
    "data-marketplace": [
      { kind: "user", text: "Show me new hires at dev-tool companies with 50+ employees.", note: "" },
      createThinkingStepSeed(["Searching hiring signals, headcount, and company data"]),
      {
        kind: "component",
        text: "Table: New hires at dev-tool companies",
        note: "No chrome around the table.",
        component: createPeopleTableComponent("New hires at dev-tool companies", [
          ["Jamie Chen", "Stripe", "VP of Sales"],
          ["Andre Park", "Stripe", "Head of Growth"],
          ["David Kim", "Stripe", "Head of Revenue"],
          ["Chandler Bree", "Stripe", "VP of Sales"],
          ["Ellen Nelle", "Stripe", "Growth Engineer"],
          ["Chadley Dupre", "Stripe", "Head of Revops"],
          ["Patrick Bateman", "Stripe", "COO"],
          ["Miles Kibble III", "Stripe", "Head of Chaos"],
        ], { eyebrow: "Natural language search", count: "8 records" }),
      },
      { kind: "user", text: "Filter to the ones that have raised in the past three months.", note: "" },
      createThinkingStepSeed(["Checking rounds announced since February 2026"]),
      {
        kind: "component",
        text: "Table: Raised in the past three months",
        note: "A smaller table appears after the filter message.",
        component: createPeopleTableComponent("Raised in the past three months", [
          ["Jamie Chen", "Stripe", "VP of Sales"],
          ["Andre Park", "Stripe", "Head of Growth"],
          ["David Kim", "Stripe", "Head of Revenue"],
          ["Patrick Bateman", "Stripe", "COO"],
        ], { eyebrow: "Filtered results", count: "3 records" }),
      },
      { kind: "user", text: "Okay, enrich these contacts.", note: "" },
      {
        kind: "component",
        text: "Enrichment waterfall",
        note: "Business emails and mobile phones.",
        component: createEnrichmentComponent(),
      },
      {
        kind: "component",
        text: "Enriched table with emails and phone numbers",
        note: "",
        component: {
          kind: "table",
          title: "Enriched contacts",
          eyebrow: "ready to engage",
          count: "4 contacts",
          columns: ["Name", "Role", "Work email", "Mobile", "Connector"],
          rows: [
            ["Jamie Chen", "VP of Sales at Stripe", "jamie@stripe.com", "+1 (628) 240-2744", "Priya Shah (VP Sales @ Plaid)"],
            ["Andre Park", "Head of Growth at Stripe", "andre@stripe.com", "+1 (210) 555-2341", "Marco Liu (Partner @ Sequoia)"],
            ["David Kim", "Head of Revenue at Stripe", "david@stripe.com", "+1 (628) 230-9962", "Dev Singh (RevOps Lead @ Brex)"],
            ["Chandler Bree", "VP of Sales at Stripe", "chandler@stripe.com", "+1 (628) 240-2744", "Jenna Park (VP Marketing @ Square)"],
          ],
        },
      },
      {
        kind: "component",
        text: "Grid: specific vendor partners",
        note: "Marketing page grid of vendor partners grouped by data area.",
        component: createDataSourcesComponent(),
      },
    ],
    "crm-update": [
      {
        kind: "component",
        text: "Connect a mailbox",
        note: "Mailbox connection happens before the business context files are dragged in.",
        component: createMailboxConnectionComponent(),
      },
      {
        kind: "component",
        text: "Uploaded business context files",
        note: "Dragged in as a bundle before the agent learns the business.",
        component: createUploadedFilesComponent(),
      },
      createThinkingStepSeed([
        "Reading Pylon battle cards and market notes",
        "Mapping competitors and positioning",
        "Extracting messaging pillars and proof points",
        "Summarizing ICP fit and GTM angles",
      ]),
      {
        kind: "component",
        text: "Pylon business report",
        note: "Single report focused on the winning wedge, GTM motion, displacement angle, and proof to use.",
        component: createStyleProfileComponent(),
      },
      { kind: "user", text: "Write a sequence for consumer fintech founders.", note: "This is intentionally outside the learned ICP." },
      { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", note: "Guardrail response based on the uploaded context." },
      { kind: "user", text: "Okay, generate leads ranked by how personally connected they are to us.", note: "" },
      createThinkingStepSeed(["Scoring shared schools, fields of study, mutual contacts, and warm signals"]),
      {
        kind: "component",
        text: "Ranked leads with proximity fields",
        note: "Personalization is ranked by relationship proximity.",
        component: createProximityListComponent(),
      },
    ],
    "research-brief": [
      { kind: "user", text: "Show me 50 sales leaders that have recently visited my website.", note: "" },
      {
        kind: "component",
        text: "Table: Recent website visitors",
        note: "Shows 10 rows at a time with pagination, power dialer, and outreach sequence actions.",
        component: createWebsiteVisitorTableComponent("Recent website visitors", [
          ["Maya Patel", "OrbitGrid", "VP Sales", "12m ago", "Pricing page"],
          ["Evan Brooks", "Northstar Dev", "Head of Sales", "18m ago", "Integrations"],
          ["Clara Wong", "BrightLayer", "VP Revenue", "27m ago", "Case study"],
          ["Andre Park", "Ramp", "Head of Sales", "33m ago", "Demo page"],
          ["Jamie Chen", "Square", "VP Sales", "42m ago", "ROI calculator"],
          ["Nina Kapoor", "Mercury", "Sales Director", "51m ago", "Security page"],
          ["David Kim", "Stripe", "Revenue Lead", "1h ago", "Docs"],
          ["Sam Hollis", "Apollo", "VP Sales", "1h ago", "Comparison"],
          ["Rachel Cho", "Retool", "Head of Sales", "2h ago", "Pricing page"],
          ["Owen Lee", "Linear", "Sales Lead", "2h ago", "Demo page"],
          ["Fatima Ali", "Vercel", "VP Sales", "2h ago", "Enterprise"],
          ["Leo Martin", "Hex", "Head of Sales", "3h ago", "Blog"],
          ["Priya Rao", "Census", "Sales Director", "3h ago", "Demo page"],
          ["Jules Meyer", "Notion", "VP Sales", "4h ago", "Integrations"],
          ["Marcus Reed", "Figma", "Revenue Lead", "4h ago", "Pricing page"],
          ["Zoe Carter", "Rippling", "Head of Sales", "5h ago", "Case study"],
          ["Liam Price", "Webflow", "VP Sales", "5h ago", "Security page"],
          ["Sara Nelson", "Airtable", "Sales Lead", "6h ago", "Comparison"],
          ["Noah Singh", "dbt Labs", "Head of Sales", "6h ago", "ROI calculator"],
          ["Ava Garcia", "Gusto", "VP Revenue", "7h ago", "Demo page"],
        ]),
      },
      { kind: "cursor", text: "Cursor clicks page 2, hovers the dialer icon, then clicks the email icon.", note: "Dialer tooltip reads “Coming soon!”; the outreach sequence button has no tooltip." },
      createThinkingStepSeed(
        [
          "generating sequence template from company offering",
          "researching companies",
          "researching people",
        ],
        {
          "generating sequence template from company offering": "Using Unify’s offering, visitor intent, role-specific pain, relevant proof, and a low-friction CTA.",
          "researching companies": "Reading firmographics, page intent, recent hiring, and relevant account signals.",
          "researching people": "Checking role, seniority, likely ownership, and channel-specific personalization angles.",
        },
      ),
      {
        kind: "component",
        text: "Personalized sequence preview",
        note: "Switch between people to inspect tailored email, LinkedIn, email, and call steps before kickoff.",
        component: createSequenceEngagementComponent(),
      },
    ],
    "csv-import-cleanup": [
      { kind: "cursor", text: "Cursor exits right and drags a CSV into the browser.", note: "Drop overlay appears as soon as the file enters." },
      { kind: "file", text: "may_webinar_attendees.csv", note: "54 records" },
      {
        kind: "component",
        text: "Raw attendee table",
        note: "Names and emails need normalization.",
        component: createRawWebinarAttendeesTableComponent(),
      },
      createThinkingStepSeed([
        "Parsing webinar attendee CSV",
        "Normalizing email addresses",
        "Combining first and last name fields",
        "Removing duplicates and empty rows",
      ]),
      { kind: "assistant", text: "I cleaned the attendee list and normalized the fields that matter for routing and follow-up.", note: "" },
      {
        kind: "component",
        text: "Clean attendee table",
        note: "Shows normalized emails and full names.",
        component: {
          kind: "table",
          title: "Cleaned webinar attendees",
          eyebrow: "CSV cleanup",
          count: "54 records",
          columns: ["Full name", "Work email", "Company", "Title"],
          rows: [
            ["Maya Rodriguez", "maya.rodriguez@northstar.ai", "Northstar AI", "VP Marketing"],
            ["Ethan Cho", "ethan.cho@clearbit.com", "Clearbit", "Head of Demand Gen"],
            ["Priya Shah", "priya.shah@orbitgrid.com", "OrbitGrid", "Head of Growth"],
            ["Lucas Meyer", "lucas.meyer@ramp.com", "Ramp", "Revenue Operations"],
            ["Nina Kapoor", "nina.kapoor@mercury.com", "Mercury", "Sales Director"],
            ["Sam Hollis", "sam.hollis@apollo.io", "Apollo", "VP Sales"],
          ],
        },
      },
    ],
  };

  const steps = seed[storyId] ?? [{ kind: "assistant", text: fallbackSummary, note: "" }];

  return steps.map((step, index) => ({
    ...step,
    id: `${storyId}-step-${index + 1}`,
  }));
}

function createStep(kind: BuilderStepKind, text: string, note: string): BuilderStep {
  const step: BuilderStep = {
    id: createId("step"),
    kind,
    text,
    note,
  };

  if (kind === "thinking") step.thinking = createThinkingState(text, note);

  return step;
}

function createThinkingState(text: string, note = ""): BuilderThinkingState {
  const items = createThinkingItems([text || "Thinking"]).map((item, index) => ({
    label: item.label,
    detail: note || item.detail || getDefaultThinkingDetail(item.label, index),
    disclosure: item.disclosure || (index === 0 ? DEFAULT_THINKING_DISCLOSURE : DEFAULT_THINKING_COLLAPSED_DISCLOSURE),
  }));

  return {
    title: DEFAULT_THINKING_TITLE,
    elapsed: getThinkingElapsedLabel(items.length),
    items,
  };
}

function createThinkingStateFromLabels(labels: string[], overrides: Record<string, string> = {}): BuilderThinkingState {
  const items = createThinkingItems(labels).map((item, index) => ({
    label: item.label,
    detail: overrides[item.label] || item.detail || getDefaultThinkingDetail(item.label, index),
    disclosure: item.disclosure || (index === 0 ? DEFAULT_THINKING_DISCLOSURE : DEFAULT_THINKING_COLLAPSED_DISCLOSURE),
  }));

  return {
    title: DEFAULT_THINKING_TITLE,
    elapsed: getThinkingElapsedLabel(items.length),
    items,
  };
}

function createDefaultStepText(kind: BuilderStepKind): string {
  const defaults: Record<BuilderStepKind, string> = {
    user: "Ask the assistant to transform the current result.",
    assistant: "The assistant responds with the next useful result.",
    thinking: "Researching the next signal",
    component: "Visual result component",
    cursor: "Move cursor to the next interaction target.",
    status: "Update state",
    file: "uploaded_file.csv",
  };

  return defaults[kind];
}

function createThinkingStepSeed(
  labels: string[],
  overrides: Record<string, string> = {},
): Omit<BuilderStep, "id"> {
  const thinking = createThinkingStateFromLabels(labels, overrides);
  const firstItem = thinking.items[0];

  return {
    kind: "thinking",
    text: firstItem?.label ?? "",
    note: firstItem?.detail ?? "",
    thinking,
  };
}

function createFallbackComponent(title: string): BuilderComponent {
  return {
    kind: "generic",
    title,
    items: ["Primary result", "Supporting detail", "Next action"],
  };
}

function createPeopleTableComponent(
  title: string,
  rows: string[][],
  options: Pick<BuilderTableComponent, "eyebrow" | "count"> = {},
): BuilderTableComponent {
  return {
    kind: "table",
    title,
    ...options,
    columns: ["Name", "Company", "Title"],
    rows,
  };
}

function createEngagementTableComponent(title: string, rows: string[][]): BuilderTableComponent {
  return {
    kind: "table",
    title,
    columns: ["Name", "Company", "Title", "Fit"],
    rows,
  };
}

function createWebsiteVisitorTableComponent(title: string, rows: string[][]): BuilderTableComponent {
  return {
    kind: "table",
    title,
    eyebrow: "Visitor intent",
    count: "50 sales leaders",
    columns: ["Name", "Company", "Title", "Last visit", "Signal"],
    rows,
    actions: [
      {
        label: "Power dialer",
        tooltip: "Coming soon!",
        badge: "",
      },
      {
        label: "Create outreach sequence",
        tooltip: "",
        badge: "",
      },
    ],
    pagination: {
      ranges: ["1-10 of 50 people", "11-20 of 50 people"],
    },
  };
}

function createRawWebinarAttendeesTableComponent(): BuilderTableComponent {
  return {
    kind: "table",
    title: "Raw webinar attendees",
    eyebrow: "CSV import",
    count: "54 records",
    columns: ["Name", "Email", "Company"],
    rows: [
      ["Maya R.", "MAYA.RODRIGUEZ@NorthStar.ai ", "northstar ai"],
      ["Ethan Cho", "ethan.cho@gmail.com", "Clearbit Inc."],
      ["Priya Shah", "priya.shah+webinar@orbitgrid.com", "Orbitgrid"],
      ["Lucas", "lucas.meyer@ramp.com", "Ramp"],
      ["N. Kapoor", "", "Mercury"],
      ["sam hollis", "sam.hollis@apollo.io", "Apollo.io"],
      ["Anna Li", "", "Linear"],
      ["Devon Park", "devon.park@brex.com", "Brex"],
      ["Rachel C.", "rcho@figma.com", "Figma"],
      ["Owen Lee", "owen.lee@icloud.com", "Notion"],
      ["Clara Wong", "clara.wong@brightlayer.com", "Bright Layer"],
      ["Maya Rodriguez", "maya.rodriguez@northstar.ai", "Northstar AI"],
      ["Ethan Cho", "ethan.cho+events@gmail.com", "Clearbit Inc."],
    ],
    pagination: {
      pageSize: 6,
      ranges: ["1-6 of 54 records", "7-13 of 54 records"],
    },
  };
}

function createStrategyComponent(): BuilderStrategyComponent {
  return {
    kind: "strategyCards",
    title: "Three go-to-market strategies",
    cards: [
      {
        label: "Idea one",
        title: "Target DevOps teams outgrowing AWS complexity",
        summary: [
          "I'll find mid-market SaaS companies with heavy AWS footprints and hiring DevOps",
          "I'll run a 3-step email + LinkedIn sequence using the Notion infra efficiency angle",
        ].join("\n"),
      },
      {
        label: "Idea two",
        title: "Intercept AI teams burning cycles on LLM infra",
        summary: [
          "I'll identify companies building AI products, showing LLM/ML engineering hiring signals",
          "I'll craft a sequence leading with AI infra complexity pain and Vercel AI SDK as the path",
        ].join("\n"),
      },
      {
        label: "Idea three",
        title: "Hit e-commerce teams before peak season",
        summary: [
          "I'll find ecom and DTC brands with 50+ engineers and upcoming high-traffic events",
          "I'll lead with PAIGE's Black Friday results in a short sequence timed to pre-peak urgency",
        ].join("\n"),
      },
    ],
  };
}

function createEnrichmentComponent(): BuilderEnrichmentComponent {
  return {
    kind: "enrichment",
    title: "Enriching",
    subtitle: "4m 20s",
    fields: [
      {
        title: "Work email",
        steps: ["Apollo", "ZoomInfo"],
      },
      {
        title: "Mobile number",
        steps: ["Apollo", "FullEnrich"],
      },
      {
        title: "LinkedIn",
        steps: ["Apollo", "ZoomInfo"],
      },
      {
        title: "Title",
        steps: ["Apollo", "ZoomInfo", "FullEnrich"],
      },
    ],
  };
}

function createDataSourcesComponent(): BuilderDataSourcesComponent {
  return {
    kind: "dataSources",
    title: "Ask complex questions across diverse data sets",
    subtitle: "Unify routes each search across the right partner sources for the job.",
    sources: [
      {
        category: "CRM",
        name: "HubSpot",
        detail: "CRM, marketing, and sales engagement records.",
        logoSrc: "/data-logos/HubSpot.svg",
      },
      {
        category: "CRM",
        name: "Salesforce",
        detail: "CRM account, contact, and activity data.",
        logoSrc: "/data-logos/Salesforce.svg",
      },
      {
        category: "Core Data",
        name: "5x5",
        detail: "On-premise company and contact datasets.",
        logoSrc: "/data-logos/5x5.svg",
      },
      {
        category: "Core Data",
        name: "MixRank",
        detail: "Company, app, and advertising intelligence.",
        logoSrc: "/data-logos/mixrank.svg",
      },
      {
        category: "Core Data",
        name: "People Data Labs",
        detail: "People and company records for core B2B coverage.",
        logoSrc: "/data-logos/People%20Data%20Labs.svg",
      },
      {
        category: "Ad Intelligence",
        name: "Adyntel",
        detail: "Ad spend, messaging, and competitive advertising signals.",
        logoSrc: "/data-logos/Adyntel.svg",
      },
      {
        category: "Ad Intelligence",
        name: "Adbeat",
        detail: "Digital ad creatives, publishers, and campaign intelligence.",
        logoSrc: "/data-logos/Adbeat.svg",
      },
      {
        category: "Ad Intelligence",
        name: "Upriver",
        detail: "Ad strategy and competitive demand generation signals.",
        logoSrc: "/data-logos/UpRiver.svg",
      },
      {
        category: "Web Intent",
        name: "Snitcher",
        detail: "Website visitor identification and account intent.",
        logoSrc: "/data-logos/Snitcher.svg",
      },
      {
        category: "Web Intent",
        name: "Demandbase",
        detail: "Account identification and intent signals.",
        logoSrc: "/data-logos/Demandbase.svg",
      },
      {
        category: "Product Analytics",
        name: "PostHog",
        detail: "Product events, usage, and conversion behavior.",
        logoSrc: "/data-logos/PostHog.svg",
      },
      {
        category: "Product Analytics",
        name: "Segment",
        detail: "Customer event pipelines and audience traits.",
        logoSrc: "/data-logos/Segment.svg",
      },
      {
        category: "SMB Data",
        name: "OpenMart",
        detail: "Small business discovery and merchant data.",
        logoSrc: "/data-logos/OpenMart.svg",
      },
      {
        category: "Ecommerce",
        name: "Store Leads",
        detail: "E-commerce stores, platforms, categories, and growth signals.",
        logoSrc: "/data-logos/Store%20Leads.svg",
      },
      {
        category: "Enrichment",
        name: "Ramp",
        detail: "Financial and business context enrichment.",
        logoSrc: "/data-logos/Ramp.svg",
      },
      {
        category: "Enrichment",
        name: "FullEnrich",
        detail: "Email and phone enrichment across multiple providers.",
        logoSrc: "/data-logos/FullEnrich.svg",
      },
      {
        category: "Company / Fundraising",
        name: "Ocean.io",
        detail: "Company lookalikes, segments, and account discovery.",
        logoSrc: "/data-logos/Oceanio.svg",
      },
      {
        category: "Company / Fundraising",
        name: "Harmonic",
        detail: "Startup company signals, growth, and fundraising data.",
        logoSrc: "/data-logos/Harmonic.svg",
      },
      {
        category: "Tech Stack",
        name: "Theirstack",
        detail: "Technology install, job-posting, and stack signals.",
        logoSrc: "/data-logos/TheirStack.svg",
      },
      {
        category: "Tech Stack",
        name: "PredictLeads",
        detail: "Hiring, technology, product, and business event signals.",
        logoSrc: "/data-logos/PredictLeads.svg",
      },
      {
        category: "Tech Stack",
        name: "BuiltWith",
        detail: "Installed tools, web stack, pixels, and infrastructure data.",
        logoSrc: "/data-logos/Built%20With.svg",
      },
      {
        category: "Web / SEO",
        name: "Serpstat",
        detail: "SEO, PPC, and content intelligence.",
        logoSrc: "/data-logos/Serpstat.svg",
      },
      {
        category: "Web / SEO",
        name: "SE Ranking",
        detail: "Search visibility, keyword, and competitor SEO data.",
        logoSrc: "/data-logos/SE%20Ranking.svg",
      },
      {
        category: "Relationships",
        name: "LinkedIn",
        detail: "Professional relationship and profile context.",
        logoSrc: "/data-logos/LinkedIn.png",
      },
      {
        category: "Relationships",
        name: "The Swarm",
        detail: "Network, relationship, and warm-introduction context.",
        logoSrc: "/data-logos/The%20Swarm.svg",
      },
      {
        category: "And more",
        name: "Trigify",
        detail: "Social buying signals and engagement events.",
        logoSrc: "/data-logos/Trigify.svg",
      },
      {
        category: "And more",
        name: "ZeroBounce",
        detail: "Email validation and deliverability checks.",
        logoSrc: "/data-logos/zerobounce.svg",
      },
      {
        category: "And more",
        name: "BuyerCaddy",
        detail: "Buyer tracking and sales workflow support.",
        logoSrc: "/data-logos/BuyerCaddy.svg",
      },
    ],
  };
}

function createUploadedFilesComponent(): BuilderUploadedFilesComponent {
  return {
    kind: "uploadedFiles",
    title: "Business context files",
    files: [
      { name: "battlecards.pdf", detail: "Competitors, traps, objections, displacement plays", type: "PDF" },
      { name: "positioning-memo.docx", detail: "Category narrative, buyer pains, proof points", type: "DOC" },
      { name: "outbound-playbook.pdf", detail: "Sequences, objection handling, CTA rules", type: "PDF" },
      { name: "icp-context.md", detail: "Best-fit accounts, disqualifiers, buyer pains", type: "MD" },
    ],
  };
}

function createMailboxConnectionComponent(): BuilderMailboxConnectionComponent {
  return {
    kind: "mailboxConnection",
    title: "Connect a mailbox",
    subtitle: "Unify will recent emails, replies, and meeting context to learn how you actually communicate",
    provider: "Gmail",
    account: "joel@unifygtm.com",
    status: "Connected",
    ctaLabel: "Gmail",
    secondaryCtaLabel: "Outlook",
    loadingLabel: "Connecting",
    learningTitle: "Learning your style",
    learningDetail: "Analyzing vocabulary...",
    learningReadyDetail: MAILBOX_LEARNING_READY_DETAIL,
    signals: ["sent emails", "reply patterns", "calendar context", "signature and tone"],
  };
}

function createStyleProfileComponent(): BuilderStyleProfileComponent {
  return {
    kind: "styleProfile",
    title: "Pylon business report",
    subtitle: "How to win Pylon's market from the uploaded business context.",
    signals: [
      {
        label: "Winning wedge",
        value: "Sell Pylon as the revenue layer for post-sale conversations: support signals become expansion, renewal, and risk plays before competitors see them.",
      },
      {
        label: "Primary motion",
        value: "Target VP CS, RevOps, and founders at B2B SaaS companies where Slack, tickets, and call notes hide account-level next actions.",
      },
      {
        label: "Displacement angle",
        value: "Against Zendesk and Intercom, avoid ticketing arguments. Show where they break: account context, revenue handoffs, and renewal escalation.",
      },
      {
        label: "Proof to use",
        value: "Lead with fewer missed expansion signals, faster executive escalation, cleaner CS-to-sales handoffs, and one shared customer timeline.",
      },
    ],
    examples: [
      "Open with a customer moment: repeated feature requests, renewal risk, or stalled onboarding that should have triggered a revenue play.",
      "Package the CTA as a quick account review: show hidden risks and expansion signals pulled from recent customer conversations.",
      "Keep the copy specific: account visibility, post-sale intelligence, executive escalation, and revenue timing beats generic AI language.",
    ],
  };
}

function createPersonalizationSwipeComponent(): BuilderPersonalizationSwipeComponent {
  return {
    kind: "personalizationSwipeGame",
    title: "Personalization preferences",
    subtitle: "A tiny game teaches the agent what should and should not show up in outreach.",
    prompt: "Swipe toward the personalization you would actually use.",
    signals: [
      {
        label: "{{reference something they recently posted}}",
        detail: "Use a real public post when it connects to the reason for reaching out.",
        decision: "use",
      },
      {
        label: "Hope the weather in {{city}} is treating you well",
        detail: "A location warm-up that adds words without adding context.",
        decision: "avoid",
      },
      {
        label: "{{mention a mutual connection}}",
        detail: "Useful when the shared contact creates a credible reason to compare notes.",
        decision: "use",
      },
    ],
  };
}

function createProximityListComponent(): BuilderProximityListComponent {
  return {
    kind: "proximityList",
    title: "Ranked leads with proximity fields",
    subtitle: "Each lead gets a relationship-aware reason to personalize the first touch.",
    leads: [
      {
        rank: "01",
        name: "Maya Patel",
        company: "OrbitGrid",
        title: "VP Revenue",
        proximity: "Same school",
        personalization: "Hey, you went to the same school as Joel and both studied systems design.",
        score: "94",
      },
      {
        rank: "02",
        name: "Evan Brooks",
        company: "Northstar Dev",
        title: "Head of Growth",
        proximity: "Mutual connection",
        personalization: "You both know Priya Shah from the early PLG operators group.",
        score: "89",
      },
      {
        rank: "03",
        name: "Clara Wong",
        company: "BrightLayer",
        title: "RevOps Lead",
        proximity: "Shared background",
        personalization: "You both studied economics before moving into revenue operations.",
        score: "82",
      },
      {
        rank: "04",
        name: "Sam Hollis",
        company: "Apollo",
        title: "Growth Lead",
        proximity: "Warm signal",
        personalization: "They follow two of your customers and recently posted about data quality.",
        score: "76",
      },
    ],
  };
}

function createSequenceEngagementComponent(): BuilderSequenceEngagementComponent {
  return {
    kind: "sequenceEngagement",
    title: "Personalized sequence preview",
    subtitle: "Each visitor gets a channel plan based on company fit, page intent, and the person’s role.",
    peopleCount: "50 people",
    launchLabel: "kick off sequence",
    sequences: [
      {
        name: "Maya Patel",
        company: "OrbitGrid",
        title: "VP Sales",
        signal: "Pricing page",
        subject: "OrbitGrid’s pricing-page interest",
        personalization: "Maya viewed pricing after OrbitGrid added two RevOps roles, so the opener ties visitor intent to cleaner account research.",
        steps: [
          {
            channel: "email",
            label: "lead with the trigger",
            body: "Mention the pricing visit and RevOps hiring pattern; ask if their team is evaluating ways to source better-fit accounts.",
            waitDays: "2",
          },
          {
            channel: "linkedin",
            label: "light proof",
            body: "Reference a similar sales team using Unify to turn inbound intent into researched outbound lists.",
            waitDays: "3",
          },
          {
            channel: "email",
            label: "offer the play",
            body: "Send a short teardown of three accounts showing why they match OrbitGrid’s current motion.",
            waitDays: "2",
          },
          {
            channel: "call",
            label: "use context",
            body: "Open with the pricing visit and ask whether pipeline quality or source coverage is the bigger gap.",
            waitDays: "",
          },
        ],
      },
      {
        name: "Evan Brooks",
        company: "Northstar Dev",
        title: "Head of Sales",
        signal: "Integrations",
        subject: "Northstar Dev’s integration-led growth",
        personalization: "Evan came through integrations after Northstar Dev expanded sales leadership, so the sequence frames Unify as a way to find accounts already showing ecosystem fit.",
        steps: [
          {
            channel: "email",
            label: "anchor to integrations",
            body: "Point to their integrations-page visit and the likely need to prioritize partner-fit accounts.",
            waitDays: "2",
          },
          {
            channel: "linkedin",
            label: "ask a narrow question",
            body: "Ask whether partner signals are already part of Northstar Dev’s outbound scoring.",
            waitDays: "3",
          },
          {
            channel: "email",
            label: "show the workflow",
            body: "Share how Unify can pull partner usage, firmographics, and contact data into one sequence-ready list.",
            waitDays: "2",
          },
          {
            channel: "call",
            label: "reference the path",
            body: "Mention the integrations research and ask if sales is prioritizing ecosystem-led campaigns this quarter.",
            waitDays: "",
          },
        ],
      },
      {
        name: "Clara Wong",
        company: "BrightLayer",
        title: "VP Revenue",
        signal: "Case study",
        subject: "BrightLayer’s case-study research",
        personalization: "Clara read a customer story, so the sequence mirrors the proof format and offers a concise account-selection playbook.",
        steps: [
          {
            channel: "email",
            label: "mirror the proof",
            body: "Reference the case study visit and connect it to finding more accounts that match the same buying pattern.",
            waitDays: "2",
          },
          {
            channel: "linkedin",
            label: "share a takeaway",
            body: "Send one concise observation about BrightLayer’s likely expansion motion based on the page viewed.",
            waitDays: "3",
          },
          {
            channel: "email",
            label: "personalized follow-up",
            body: "Offer a mini list of 10 lookalike companies with the reason each one matches BrightLayer’s best-fit segment.",
            waitDays: "2",
          },
          {
            channel: "call",
            label: "ask for fit",
            body: "Ask whether revenue is looking for more accounts like the case-study customer or a new adjacent segment.",
            waitDays: "",
          },
        ],
      },
    ],
    channels: [],
  };
}

function updateThinkingValue(
  thinking: BuilderThinkingState,
  field: string,
  value: string,
  itemIndex: number | null,
): void {
  if (field === "title") thinking.title = value;
  if (field === "elapsed") thinking.elapsed = value;

  if (itemIndex === null) return;

  const item = thinking.items[itemIndex];
  if (!item) return;

  if (field === "label") item.label = value;
  if (field === "detail") item.detail = value;
  if (field === "disclosure") item.disclosure = value;
}

function syncStepFromThinking(step: BuilderStep): void {
  if (!step.thinking) return;

  const firstItem = step.thinking.items[0];
  step.text = firstItem?.label ?? "";
  step.note = firstItem?.detail ?? "";
}

function syncThinkingFromStep(step: BuilderStep, patch: Partial<Pick<BuilderStep, "kind" | "text" | "note">>): void {
  if (step.kind !== "thinking") return;

  step.thinking ??= createThinkingState(step.text, step.note);
  step.thinking.items[0] ??= {
    label: step.text,
    detail: step.note || getDefaultThinkingDetail(step.text, 0),
    disclosure: DEFAULT_THINKING_DISCLOSURE,
  };

  if (patch.text !== undefined) step.thinking.items[0].label = patch.text;
  if (patch.note !== undefined) step.thinking.items[0].detail = patch.note;
}

function getThinkingValue(thinking: BuilderThinkingState, field: string | undefined, itemIndex: number | null): string | null {
  if (field === "title") return thinking.title;
  if (field === "elapsed") return thinking.elapsed;

  if (itemIndex === null) return null;

  const item = thinking.items[itemIndex];
  if (!item) return null;

  if (field === "label") return item.label;
  if (field === "detail") return item.detail;
  if (field === "disclosure") return item.disclosure;

  return null;
}

function updateComponentValue(
  component: BuilderComponent,
  field: string,
  value: string,
  indexes: {
    rowIndex: number | null;
    columnIndex: number | null;
    cardIndex: number | null;
    fieldIndex: number | null;
    itemIndex: number | null;
  },
): void {
  if (field === "title") component.title = value;

  if (component.kind === "generic" && field === "item" && indexes.itemIndex !== null) {
    component.items[indexes.itemIndex] = value;
  }

  if (component.kind === "dataSources") {
    if (field === "subtitle") component.subtitle = value;

    if (indexes.itemIndex !== null) {
      const source = component.sources[indexes.itemIndex];
      if (!source) return;

      if (field === "sourceCategory") source.category = value;
      if (field === "sourceName") source.name = value;
      if (field === "sourceDetail") source.detail = value;
    }
  }

  if (component.kind === "uploadedFiles" && indexes.itemIndex !== null) {
    const file = component.files[indexes.itemIndex];
    if (!file) return;

    if (field === "fileType") file.type = value;
    if (field === "fileName") file.name = value;
    if (field === "fileDetail") file.detail = value;
  }

  if (component.kind === "mailboxConnection") {
    if (field === "subtitle") component.subtitle = value;
    if (field === "mailboxProvider") component.provider = value;
    if (field === "mailboxAccount") component.account = value;
    if (field === "mailboxStatus") component.status = value;
    if (field === "mailboxCtaLabel") component.ctaLabel = value;
    if (field === "mailboxSecondaryCtaLabel") component.secondaryCtaLabel = value;
    if (field === "mailboxLoadingLabel") component.loadingLabel = value;
    if (field === "mailboxLearningTitle") component.learningTitle = value;
    if (field === "mailboxLearningDetail") component.learningDetail = value;
    if (field === "mailboxLearningReadyDetail") component.learningReadyDetail = value;

    if (field === "mailboxSignal" && indexes.itemIndex !== null) {
      component.signals[indexes.itemIndex] = value;
    }
  }

  if (component.kind === "styleProfile") {
    if (field === "subtitle") component.subtitle = value;

    if (indexes.itemIndex !== null) {
      const signal = component.signals[indexes.itemIndex];
      if (signal) {
        if (field === "signalLabel") signal.label = value;
        if (field === "signalValue") signal.value = value;
      }

      if (field === "styleExample") component.examples[indexes.itemIndex] = value;
    }
  }

  if (component.kind === "proximityList") {
    if (field === "subtitle") component.subtitle = value;

    if (indexes.itemIndex !== null) {
      const lead = component.leads[indexes.itemIndex];
      if (!lead) return;

      if (field === "leadRank") lead.rank = value;
      if (field === "leadScore") lead.score = value;
      if (field === "leadName") lead.name = value;
      if (field === "leadCompany") lead.company = value;
      if (field === "leadTitle") lead.title = value;
      if (field === "leadProximity") lead.proximity = value;
      if (field === "leadPersonalization") lead.personalization = value;
    }
  }

  if (component.kind === "personalizationSwipeGame") {
    if (field === "subtitle") component.subtitle = value;
    if (field === "prompt") component.prompt = value;

    if (indexes.itemIndex !== null) {
      const signal = component.signals[indexes.itemIndex];
      if (!signal) return;

      if (field === "swipeDecision") signal.decision = value === "avoid" ? "avoid" : "use";
      if (field === "swipeLabel") signal.label = value;
      if (field === "swipeDetail") signal.detail = value;
    }
  }

  if (component.kind === "sequenceEngagement") {
    if (field === "subtitle") component.subtitle = value;
    if (field === "peopleCount") component.peopleCount = value;
    if (field === "launchLabel") component.launchLabel = value;

    if (indexes.itemIndex !== null) {
      const sequence = component.sequences[indexes.itemIndex];
      if (sequence) {
        if (field === "sequenceName") sequence.name = value;
        if (field === "sequenceCompany") sequence.company = value;
        if (field === "sequenceTitle") sequence.title = value;
        if (field === "sequenceSignal") sequence.signal = value;
        if (field === "sequenceSubject") sequence.subject = value;
        if (field === "sequencePersonalization") sequence.personalization = value;

        const sequenceStep = indexes.fieldIndex !== null ? sequence.steps?.[indexes.fieldIndex] : null;
        if (sequenceStep) {
          if (field === "sequenceStepChannel") sequenceStep.channel = value;
          if (field === "sequenceStepLabel") sequenceStep.label = value;
          if (field === "sequenceStepBody") sequenceStep.body = value;
          if (field === "sequenceStepWaitDays") sequenceStep.waitDays = value;
        }
      }

      const channel = component.channels[indexes.itemIndex];
      if (channel) {
        if (field === "channelLabel") channel.label = value;
        if (field === "channelDetail") channel.detail = value;
        if (field === "channelBadge") channel.badge = value;
      }
    }
  }

  if (component.kind === "table") {
    if (field === "eyebrow") component.eyebrow = value;
    if (field === "count") component.count = value;

    if (field === "column" && indexes.columnIndex !== null) {
      component.columns[indexes.columnIndex] = value;
    }

    if (field === "cell" && indexes.rowIndex !== null && indexes.columnIndex !== null) {
      component.rows[indexes.rowIndex] ??= [];
      component.rows[indexes.rowIndex][indexes.columnIndex] = value;
    }

    if (indexes.itemIndex !== null) {
      const action = component.actions?.[indexes.itemIndex];
      if (action) {
        if (field === "actionLabel") action.label = value;
        if (field === "actionTooltip") action.tooltip = value;
        if (field === "actionBadge") action.badge = value;
      }

      if (field === "pageRange" && component.pagination) {
        component.pagination.ranges[indexes.itemIndex] = value;
      }
    }
  }

  if (component.kind === "strategyCards" && indexes.cardIndex !== null) {
    const card = component.cards[indexes.cardIndex];

    if (!card) return;

    if (field === "cardLabel") card.label = value;
    if (field === "cardTitle") card.title = value;
    if (field === "cardSummary") card.summary = value;
  }

  if (component.kind === "enrichment") {
    if (field === "subtitle") component.subtitle = value;

    if (field === "fieldTitle" && indexes.fieldIndex !== null) {
      const group = component.fields[indexes.fieldIndex];
      if (group) group.title = value;
    }

    if (field === "fieldStep" && indexes.fieldIndex !== null && indexes.itemIndex !== null) {
      const group = component.fields[indexes.fieldIndex];
      if (group) group.steps[indexes.itemIndex] = value;
    }
  }
}

function getComponentDisplayText(component: BuilderComponent): string {
  if (component.kind === "table") return `Table: ${component.title}`;
  if (component.kind === "strategyCards") return component.title;
  if (component.kind === "enrichment") return component.title;
  if (component.kind === "dataSources") return component.title;
  if (component.kind === "uploadedFiles") return component.title;
  if (component.kind === "mailboxConnection") return component.title;
  if (component.kind === "styleProfile") return component.title;
  if (component.kind === "proximityList") return component.title;
  if (component.kind === "personalizationSwipeGame") return component.title;
  if (component.kind === "sequenceEngagement") return component.title;

  return component.title;
}

function cloneStep(step: BuilderStep): BuilderStep {
  return {
    ...step,
    id: createId("step"),
    component: step.component ? cloneComponent(step.component) : undefined,
  };
}

function cloneComponent(component: BuilderComponent): BuilderComponent {
  return clonePlainObject(component);
}

async function readJsonResponse(response: Response): Promise<unknown> {
  try {
    return await response.clone().json() as unknown;
  } catch {
    return null;
  }
}

function toIndex(value: string | undefined): number | null {
  if (value === undefined) return null;

  const index = Number(value);
  return Number.isFinite(index) ? index : null;
}

function createId(prefix: string): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function closestButton(target: EventTarget | null, selector: string): HTMLButtonElement | null {
  return target instanceof Element ? target.closest<HTMLButtonElement>(selector) : null;
}

function isInteractiveTarget(target: Element | null): boolean {
  return Boolean(target?.closest("textarea, input, select, button, [contenteditable='true']"));
}

function getDraftWriteHeaders(): Record<string, string> {
  const token = getDraftWriteToken();

  return token ? { "x-story-draft-token": token } : {};
}

function getDraftWriteToken(): string | null {
  try {
    return window.localStorage.getItem("storyDraftWriteToken");
  } catch {
    return null;
  }
}

function createIcon(name: "copy" | "x" | "grip"): SVGSVGElement {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  if (name === "copy") {
    appendSvgPath(svg, "M7 7.5h8v8H7z M5 13H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H12a1 1 0 0 1 1 1V5");
  }

  if (name === "x") {
    appendSvgPath(svg, "M5.5 5.5l9 9 M14.5 5.5l-9 9");
  }

  if (name === "grip") {
    for (const x of [7, 13]) {
      for (const y of [5, 10, 15]) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(x));
        circle.setAttribute("cy", String(y));
        circle.setAttribute("r", "1.25");
        circle.setAttribute("fill", "currentColor");
        svg.append(circle);
      }
    }
  }

  return svg;
}

function appendSvgPath(svg: SVGSVGElement, d: string): void {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.7");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  svg.append(path);
}
