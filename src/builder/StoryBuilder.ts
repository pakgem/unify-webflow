import type { StoryDefinition } from "../core/types";

type BuilderStepKind =
  | "user"
  | "assistant"
  | "thinking"
  | "component"
  | "cursor"
  | "status"
  | "file";

type BuilderTableComponent = {
  kind: "table";
  title: string;
  columns: string[];
  rows: string[][];
};

type BuilderStrategyComponent = {
  kind: "strategyCards";
  title: string;
  cards: Array<{
    label: string;
    title: string;
    audience: string;
    motion: string;
    proof: string;
  }>;
};

type BuilderEnrichmentComponent = {
  kind: "enrichment";
  title: string;
  subtitle: string;
  fields: Array<{
    title: string;
    steps: string[];
  }>;
};

type BuilderDataSourcesComponent = {
  kind: "dataSources";
  title: string;
  subtitle: string;
  sources: Array<{
    category?: string;
    name: string;
    detail: string;
  }>;
};

type BuilderUploadedFilesComponent = {
  kind: "uploadedFiles";
  title: string;
  files: Array<{
    name: string;
    detail: string;
    type: string;
  }>;
};

type BuilderStyleProfileComponent = {
  kind: "styleProfile";
  title: string;
  subtitle: string;
  signals: Array<{
    label: string;
    value: string;
  }>;
  examples: string[];
};

type BuilderProximityListComponent = {
  kind: "proximityList";
  title: string;
  subtitle: string;
  leads: Array<{
    rank: string;
    name: string;
    company: string;
    title: string;
    proximity: string;
    personalization: string;
    score: string;
  }>;
};

type BuilderSequenceEngagementComponent = {
  kind: "sequenceEngagement";
  title: string;
  subtitle: string;
  peopleCount: string;
  sequences: Array<{
    name: string;
    company: string;
    subject: string;
    personalization: string;
  }>;
  channels: Array<{
    label: string;
    detail: string;
    badge: string;
  }>;
};

type BuilderGenericComponent = {
  kind: "generic";
  title: string;
  items: string[];
};

type BuilderComponent =
  | BuilderTableComponent
  | BuilderStrategyComponent
  | BuilderEnrichmentComponent
  | BuilderDataSourcesComponent
  | BuilderUploadedFilesComponent
  | BuilderStyleProfileComponent
  | BuilderProximityListComponent
  | BuilderSequenceEngagementComponent
  | BuilderGenericComponent;

type BuilderStep = {
  id: string;
  kind: BuilderStepKind;
  text: string;
  note: string;
  component?: BuilderComponent;
};

type BuilderStory = {
  id: string;
  label: string;
  summary: string;
  steps: BuilderStep[];
};

type StoryBuilderRefs = {
  shell: HTMLElement;
  tabs: HTMLElement;
  thread: HTMLElement;
  panel: HTMLElement;
  export: HTMLTextAreaElement;
  copyJson: HTMLButtonElement;
  addRail: HTMLElement;
  status: HTMLElement;
};

type StoryBuilderOptions = {
  onStorySelect?: (storyId: string) => void;
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

export class StoryBuilder {
  private refs: StoryBuilderRefs | null = null;
  private stories: BuilderStory[];
  private activeStoryIndex = 0;
  private selectedStepId: string | null = null;
  private listeners: Array<() => void> = [];
  private draggedStepId: string | null = null;
  private copyResetTimer: number | null = null;

  constructor(
    private root: HTMLElement,
    sourceStories: StoryDefinition[],
    private options: StoryBuilderOptions = {},
  ) {
    this.stories = createBuilderStories(sourceStories);
    this.selectedStepId = this.stories[0]?.steps[0]?.id ?? null;
  }

  mount(): void {
    const shell = this.root.querySelector<HTMLElement>("[data-story-builder]");

    if (!shell) return;

    this.refs = {
      shell,
      tabs: this.required(shell, "[data-builder-tabs]"),
      thread: this.required(shell, "[data-builder-thread]"),
      panel: this.required(shell, "[data-builder-panel]"),
      export: this.required(shell, "[data-builder-export]"),
      copyJson: this.required(shell, "[data-builder-copy-json]"),
      addRail: this.required(shell, "[data-builder-add-rail]"),
      status: this.required(shell, "[data-builder-status]"),
    };

    this.attachEvents();
    this.render();
  }

  destroy(): void {
    for (const remove of this.listeners) remove();
    this.listeners = [];
    if (this.copyResetTimer !== null) window.clearTimeout(this.copyResetTimer);
    this.copyResetTimer = null;
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

    this.on(refs.panel, "change", (event) => {
      const target = event.target;

      if (!(target instanceof HTMLSelectElement)) return;

      this.handlePanelSelect(target);
    });
  }

  private render(): void {
    this.renderTabs();
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

    refs.thread.querySelectorAll<HTMLTextAreaElement>("[data-builder-step-field]").forEach((field) => {
      this.autoSize(field);
    });
  }

  private renderPanel(): void {
    const refs = this.refs;

    if (!refs) return;

    const story = this.activeStory;
    const selectedStep = this.selectedStep;
    const fragment = document.createDocumentFragment();

    fragment.append(
      this.createField("Story title", "input", "story-label", story.label),
      this.createField("Story summary", "textarea", "story-summary", story.summary),
    );

    const divider = document.createElement("div");
    divider.className = "wa-builder-panel__divider";
    fragment.append(divider);

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

    refs.export.value = JSON.stringify({ stories: this.stories }, null, 2);
    this.autoSize(refs.export);
  }

  private async copyExportJson(): Promise<void> {
    const refs = this.refs;

    if (!refs) return;

    const text = refs.export.value;
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
    const block = document.createElement("div");
    block.className = "wa-thinking-block wa-builder-thinking";

    const header = document.createElement("div");
    header.className = "wa-thinking";

    const glyph = document.createElement("span");
    glyph.className = "wa-thinking__glyph";
    glyph.setAttribute("aria-hidden", "true");

    const title = document.createElement("span");
    title.className = "wa-thinking__title";
    title.textContent = "Thinking";

    const elapsed = document.createElement("span");
    elapsed.className = "wa-thinking__elapsed";
    elapsed.textContent = "4m 20s";

    const steps = document.createElement("div");
    steps.className = "wa-research-steps";

    const item = document.createElement("div");
    item.className = "wa-research-step wa-builder-research-step";
    item.dataset.stepState = "current";

    const check = document.createElement("span");
    check.className = "wa-research-step__check";
    check.setAttribute("aria-hidden", "true");

    const copy = document.createElement("div");
    copy.className = "wa-research-step__body";

    const label = document.createElement("div");
    label.className = "wa-research-step__label";
    label.append(this.createInlineTextarea(step));

    const detail = document.createElement("div");
    detail.className = "wa-research-step__detail";
    detail.textContent = step.note || "Add the evidence, source, or transformation this thinking step should reveal.";

    copy.append(label, detail);
    item.append(check, copy);
    steps.append(item);
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
    if (step.component.kind === "styleProfile") return this.createStyleProfileComponentBody(step, step.component);
    if (step.component.kind === "proximityList") return this.createProximityListComponentBody(step, step.component);
    if (step.component.kind === "sequenceEngagement") {
      return this.createSequenceEngagementComponentBody(step, step.component);
    }

    const card = document.createElement("div");
    card.className = "wa-builder-component-card";

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = "Component";

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

    content.append(label, title, items);
    card.append(content);
    return card;
  }

  private createTableComponentBody(step: BuilderStep, component: BuilderTableComponent): HTMLElement {
    const card = document.createElement("div");
    card.className = "wa-builder-component-card wa-builder-component-card--table";

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = "Table";

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
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

    content.append(label, title, table);
    card.append(content);
    return card;
  }

  private createStrategyComponentBody(step: BuilderStep, component: BuilderStrategyComponent): HTMLElement {
    const card = document.createElement("div");
    card.className = "wa-builder-component-card wa-builder-component-card--strategy";

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = "Strategy cards";

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
        this.createLabeledComponentField(step.id, "Audience", "cardAudience", strategy.audience, cardIndex),
        this.createLabeledComponentField(step.id, "Motion", "cardMotion", strategy.motion, cardIndex),
        this.createLabeledComponentField(step.id, "Proof", "cardProof", strategy.proof, cardIndex),
      );

      grid.append(strategyCard);
    });

    content.append(label, title, grid);
    card.append(content);
    return card;
  }

  private createEnrichmentComponentBody(step: BuilderStep, component: BuilderEnrichmentComponent): HTMLElement {
    const card = document.createElement("div");
    card.className = "wa-builder-component-card wa-builder-component-card--enrichment";

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = "Enrichment";

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

    content.append(label, title, subtitle, fields);
    card.append(content);
    return card;
  }

  private createDataSourcesComponentBody(step: BuilderStep, component: BuilderDataSourcesComponent): HTMLElement {
    const card = document.createElement("div");
    card.className = "wa-builder-component-card wa-builder-component-card--sources";

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = "Data sources";

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

    content.append(label, title, subtitle, grid);
    card.append(content);
    return card;
  }

  private createUploadedFilesComponentBody(step: BuilderStep, component: BuilderUploadedFilesComponent): HTMLElement {
    const card = this.createStructuredComponentCard("Files");
    const content = card.querySelector<HTMLElement>(".wa-builder-component-card__content")!;

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

  private createStyleProfileComponentBody(step: BuilderStep, component: BuilderStyleProfileComponent): HTMLElement {
    const card = this.createStructuredComponentCard("Style profile");
    const content = card.querySelector<HTMLElement>(".wa-builder-component-card__content")!;

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
    const card = this.createStructuredComponentCard("Proximity list");
    const content = card.querySelector<HTMLElement>(".wa-builder-component-card__content")!;

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

  private createSequenceEngagementComponentBody(
    step: BuilderStep,
    component: BuilderSequenceEngagementComponent,
  ): HTMLElement {
    const card = this.createStructuredComponentCard("Sequence engagement");
    const content = card.querySelector<HTMLElement>(".wa-builder-component-card__content")!;

    const title = this.createComponentField(step.id, "title", component.title, {
      className: "wa-builder-component-card__title",
    });
    const subtitle = this.createComponentField(step.id, "subtitle", component.subtitle, {
      className: "wa-builder-component-card__subtitle",
    });
    const peopleCount = this.createComponentInput(step.id, "peopleCount", component.peopleCount, {
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
        this.createComponentInput(step.id, "sequenceSubject", sequence.subject, {
          itemIndex,
          className: "wa-builder-sequence-editor__subject",
        }),
        this.createComponentField(step.id, "sequencePersonalization", sequence.personalization, {
          itemIndex,
          className: "wa-builder-sequence-editor__personalization",
        }),
      );
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

    content.append(title, subtitle, peopleCount, sequences, channels);
    return card;
  }

  private createStructuredComponentCard(labelText: string): HTMLElement {
    const card = document.createElement("div");
    card.className = "wa-builder-component-card";

    const content = document.createElement("div");
    content.className = "wa-builder-component-card__content";

    const label = document.createElement("span");
    label.className = "wa-builder-step__kind";
    label.textContent = labelText;

    content.append(label);
    card.append(content);
    return card;
  }

  private createLabeledComponentField(
    stepId: string,
    labelText: string,
    fieldName: string,
    value: string,
    cardIndex: number,
  ): HTMLElement {
    const row = document.createElement("label");
    row.className = "wa-builder-strategy-editor__row";

    const label = document.createElement("span");
    label.className = "wa-builder-strategy-editor__row-label";
    label.textContent = labelText;

    row.append(
      label,
      this.createComponentInput(stepId, fieldName, value, {
        cardIndex,
        className: "wa-builder-strategy-editor__input",
      }),
    );

    return row;
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
      this.syncThreadStepText(this.selectedStep.id, target.value);
      this.autoSize(target as HTMLTextAreaElement);
      return;
    }

    if (field === "step-note") {
      this.updateStep(this.selectedStep.id, { note: target.value }, { renderThread: false });
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

    const field = Array.from(refs.thread.querySelectorAll<HTMLTextAreaElement>("[data-builder-step-field]")).find(
      (candidate) => candidate.dataset.builderStepField === stepId,
    );

    if (!field || field.value === value) return;

    field.value = value;
    this.autoSize(field);
  }

  private syncPanelStepText(value: string): void {
    const refs = this.refs;

    if (!refs) return;

    const field = refs.panel.querySelector<HTMLTextAreaElement>("[data-builder-panel-input='step-text']");

    if (!field || field.value === value) return;

    field.value = value;
    this.autoSize(field);
  }

  private emitChange(status: string, updateStatus = true): void {
    const refs = this.refs;

    if (!refs) return;

    if (updateStatus) this.setStatus(status);
    refs.shell.dispatchEvent(
      new CustomEvent("chatbot-story-builder:change", {
        bubbles: true,
        detail: {
          story: this.activeStory,
          stories: this.stories,
        },
      }),
    );
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
      { kind: "assistant", text: "I’ll learn Acme first, then turn the signal into launch-ready GTM paths.", note: "" },
      { kind: "thinking", text: "Researching the company profile", note: "Read site copy, metadata, category, and recent announcements." },
      { kind: "thinking", text: "Learning the ICP and buyer roles", note: "Infer accounts, personas, and likely pains from public signals." },
      { kind: "thinking", text: "Reading blog posts and careers pages", note: "Find positioning themes and current priorities." },
      { kind: "assistant", text: "I found three go-to-market game plans worth testing first.", note: "" },
      {
        kind: "component",
        text: "Three compact GTM strategy cards",
        note: "Founder-led signal capture, RevOps consolidation, and pipeline acceleration.",
        component: createStrategyComponent(),
      },
    ],
    "data-marketplace": [
      { kind: "user", text: "Show me new hires at dev-tool companies with 50+ employees.", note: "" },
      { kind: "thinking", text: "Searching hiring signals across data sources", note: "Companies, contacts, jobs, LinkedIn, funding, and technographics." },
      {
        kind: "component",
        text: "Table: matching new hires",
        note: "No chrome around the table.",
        component: createPeopleTableComponent("Matching new hires", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"],
          ["Chandler Bree", "Square", "VP of Sales"],
          ["Ellen Nelle", "Square", "Growth Engineer"],
        ]),
      },
      { kind: "user", text: "Filter to the ones that have raised in the past three months.", note: "" },
      { kind: "thinking", text: "Checking recent funding events", note: "Keep the earlier table visible above this transformation." },
      {
        kind: "component",
        text: "Table: recently funded matches",
        note: "A smaller table appears after the filter message.",
        component: createPeopleTableComponent("Recently funded matches", [
          ["Jamie Chen", "Ramp", "VP of Sales"],
          ["Andre Park", "Ramp", "Head of Growth"],
          ["David Kim", "Ramp", "Head of Revenue"],
        ]),
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
          columns: ["Name", "Company", "Title", "Email", "Number"],
          rows: [
            ["Jamie Chen", "Ramp", "VP of Sales", "jamie@ramp.com", "+1 (628) 240-2744"],
            ["Andre Park", "Ramp", "Head of Growth", "andre@ramp.com", "+1 (210) 555-2341"],
            ["David Kim", "Ramp", "Head of Revenue", "david@ramp.com", "+1 (628) 230-9962"],
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
        text: "Uploaded business context files",
        note: "Dragged in as a bundle before the agent learns the business.",
        component: createUploadedFilesComponent(),
      },
      { kind: "thinking", text: "Reading battle cards and competitive traps", note: "Extract competitive positioning, landmines, and proof points." },
      { kind: "thinking", text: "Extracting voice and tone rules", note: "Learn phrasing, CTA patterns, and words to avoid." },
      { kind: "thinking", text: "Learning ICP disqualifiers", note: "Understand who the company should not sell to." },
      {
        kind: "component",
        text: "Learned outreach style",
        note: "Shows the style and qualification rules the AI learned.",
        component: createStyleProfileComponent(),
      },
      { kind: "user", text: "Write a sequence for consumer fintech founders.", note: "This is intentionally outside the learned ICP." },
      { kind: "assistant", text: "Are you sure? this doesn't fit your ICP", note: "Guardrail response based on the uploaded context." },
      { kind: "user", text: "Okay, generate leads ranked by how personally connected they are to us.", note: "" },
      {
        kind: "component",
        text: "Ranked leads with proximity fields",
        note: "Personalization is ranked by relationship proximity.",
        component: createProximityListComponent(),
      },
    ],
    "research-brief": [
      { kind: "user", text: "Start with these 10 best-fit buyers.", note: "" },
      {
        kind: "component",
        text: "Table: 10 best-fit buyers",
        note: "Starting list before expansion.",
        component: createEngagementTableComponent("10 best-fit buyers", [
          ["Maya Patel", "OrbitGrid", "VP Revenue", "High"],
          ["Evan Brooks", "Northstar Dev", "Head of Growth", "High"],
          ["Clara Wong", "BrightLayer", "RevOps Lead", "Med"],
          ["Sam Hollis", "Apollo", "Growth Lead", "Med"],
          ["Nina Kapoor", "Mercury", "Sales Ops", "High"],
        ]),
      },
      { kind: "user", text: "Expand this to 50 people and personalize outreach for each.", note: "" },
      {
        kind: "thinking",
        text: "Finding 40 more lookalike buyers and account triggers",
        note: "Use firmographic fit, role match, hiring signals, and account similarity.",
      },
      {
        kind: "component",
        text: "Table: 50-person expanded list",
        note: "The story shows the expanded audience before sequence generation.",
        component: createEngagementTableComponent("50-person expanded list", [
          ["Maya Patel", "OrbitGrid", "VP Revenue", "High"],
          ["Evan Brooks", "Northstar Dev", "Head of Growth", "High"],
          ["Clara Wong", "BrightLayer", "RevOps Lead", "Med"],
          ["Sam Hollis", "Apollo", "Growth Lead", "Med"],
          ["Nina Kapoor", "Mercury", "Sales Ops", "High"],
          ["Andre Park", "Ramp", "Head of Growth", "High"],
          ["Jamie Chen", "Square", "VP Sales", "High"],
          ["David Kim", "Stripe", "Revenue Lead", "Med"],
        ]),
      },
      {
        kind: "thinking",
        text: "Generating personalized sequences for all 50 people",
        note: "Create a reason, opener, and engagement path for every person.",
      },
      {
        kind: "component",
        text: "50 personalized sequences ready",
        note: "The in-app dialer action should carry the Soon badge.",
        component: createSequenceEngagementComponent(),
      },
    ],
    "csv-import-cleanup": [
      { kind: "cursor", text: "Cursor exits right and drags a CSV into the browser.", note: "Drop overlay appears as soon as the file enters." },
      { kind: "file", text: "webinar_attendees.csv", note: "File appears as a user-side message after release." },
      { kind: "thinking", text: "Analyzing imported rows", note: "Parse headers, remove junk rows, and infer schema." },
      { kind: "thinking", text: "Cleaning and normalizing contact fields", note: "Normalize email addresses, names, company fields, and duplicates." },
      {
        kind: "component",
        text: "Clean attendee table",
        note: "Shows normalized emails and full names.",
        component: {
          kind: "table",
          title: "Clean attendee table",
          columns: ["Full name", "Email", "Company", "Status"],
          rows: [
            ["Jamie Chen", "jamie@acme.co", "Acme", "Normalized"],
            ["Andre Park", "andre@northstar.dev", "Northstar", "Deduped"],
            ["David Kim", "david@brightlayer.io", "Brightlayer", "Validated"],
          ],
        },
      },
      { kind: "assistant", text: "The CSV is clean and ready to route into a campaign.", note: "" },
    ],
  };

  const steps = seed[storyId] ?? [{ kind: "assistant", text: fallbackSummary, note: "" }];

  return steps.map((step, index) => ({
    ...step,
    id: `${storyId}-step-${index + 1}`,
  }));
}

function createStep(kind: BuilderStepKind, text: string, note: string): BuilderStep {
  return {
    id: createId("step"),
    kind,
    text,
    note,
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

function createFallbackComponent(title: string): BuilderComponent {
  return {
    kind: "generic",
    title,
    items: ["Primary result", "Supporting detail", "Next action"],
  };
}

function createPeopleTableComponent(title: string, rows: string[][]): BuilderTableComponent {
  return {
    kind: "table",
    title,
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

function createStrategyComponent(): BuilderStrategyComponent {
  return {
    kind: "strategyCards",
    title: "Three go-to-market game plans",
    cards: [
      {
        label: "Plan 01",
        title: "Founder-led signal capture",
        audience: "Seed founders hiring sales",
        motion: "Trigger-based outbound",
        proof: "Funding + new sales roles",
      },
      {
        label: "Plan 02",
        title: "RevOps consolidation wedge",
        audience: "RevOps leaders cleaning CRM",
        motion: "Audit-led pain sequence",
        proof: "Data-quality blog themes",
      },
      {
        label: "Plan 03",
        title: "Pipeline acceleration sprint",
        audience: "Sales VPs with stalled pipeline",
        motion: "14-day account sprint",
        proof: "Demand-gen hiring signals",
      },
    ],
  };
}

function createEnrichmentComponent(): BuilderEnrichmentComponent {
  return {
    kind: "enrichment",
    title: "I’m about to run an enrichment",
    subtitle: "Up to 84 credits could be spent across 2 fields on 14 records.",
    fields: [
      {
        title: "Business emails",
        steps: ["Unify Data", "5-Step Waterfall", "FullEnrich", "ZeroBounce"],
      },
      {
        title: "Mobile phones",
        steps: ["Unify Data", "5-Step Waterfall", "FullEnrich"],
      },
    ],
  };
}

function createDataSourcesComponent(): BuilderDataSourcesComponent {
  return {
    kind: "dataSources",
    title: "Specific vendors by data area",
    subtitle: "Unify routes each search across the right partner sources for the job.",
    sources: [
      {
        category: "People and contacts",
        name: "Apollo",
        detail: "Contacts, roles, emails, and outbound-ready people data.",
      },
      {
        category: "People and contacts",
        name: "ZoomInfo",
        detail: "Verified B2B contact and account coverage.",
      },
      {
        category: "Company intelligence",
        name: "Crunchbase",
        detail: "Funding rounds, investor signals, and company growth events.",
      },
      {
        category: "Company intelligence",
        name: "LinkedIn",
        detail: "Hiring movement, role changes, headcount, and profile signals.",
      },
      {
        category: "Commerce and local",
        name: "Store Leads",
        detail: "E-commerce stores, platforms, categories, and growth signals.",
      },
      {
        category: "Commerce and local",
        name: "Google Business Profile",
        detail: "Local business categories, locations, ratings, and presence.",
      },
      {
        category: "Technographics and enrichment",
        name: "BuiltWith",
        detail: "Installed tools, web stack, pixels, and infrastructure data.",
      },
      {
        category: "Technographics and enrichment",
        name: "FullEnrich",
        detail: "Waterfall enrichment for emails, phones, and missing fields.",
      },
    ],
  };
}

function createUploadedFilesComponent(): BuilderUploadedFilesComponent {
  return {
    kind: "uploadedFiles",
    title: "Business context files",
    files: [
      { name: "battlecards.pdf", detail: "Competitive traps, landmines, proof points", type: "PDF" },
      { name: "voice-and-tone.docx", detail: "Founder voice, pacing, taboo phrases", type: "DOC" },
      { name: "outbound-playbook.pdf", detail: "Sequences, objection handling, CTA rules", type: "PDF" },
      { name: "icp-context.md", detail: "Best-fit accounts, disqualifiers, buyer pains", type: "MD" },
    ],
  };
}

function createStyleProfileComponent(): BuilderStyleProfileComponent {
  return {
    kind: "styleProfile",
    title: "Learned outreach style",
    subtitle: "The agent extracts how your team writes, qualifies, and earns replies.",
    signals: [
      { label: "Voice", value: "Plainspoken, specific, no inflated urgency" },
      { label: "CTA", value: "Low-friction question before calendar asks" },
      { label: "Proof", value: "Lead with trigger + relevant customer pattern" },
      { label: "Guardrail", value: "Rejects weak ICP fit before drafting" },
    ],
    examples: [
      "Keep the opener grounded in a real business trigger.",
      "Avoid generic automation language unless the account shows ops pain.",
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
    title: "50 personalized sequences ready",
    subtitle: "Each person gets a reason, opener, and channel plan from the same workflow.",
    peopleCount: "50 people",
    sequences: [
      {
        name: "Maya Patel",
        company: "OrbitGrid",
        subject: "RevOps hiring + data quality",
        personalization: "Opens with the new RevOps roles and their public data-quality push.",
      },
      {
        name: "Evan Brooks",
        company: "Northstar Dev",
        subject: "PLG growth handoff",
        personalization: "References the growth team expansion and routes to a low-friction benchmark CTA.",
      },
      {
        name: "Nina Kapoor",
        company: "Mercury",
        subject: "Sales ops cleanup",
        personalization: "Leads with CRM hygiene language pulled from similar hiring patterns.",
      },
    ],
    channels: [
      { label: "Email sequences", detail: "Launch all 50 now", badge: "" },
      { label: "LinkedIn tasks", detail: "Create follow-up steps", badge: "" },
      { label: "In-app dialer", detail: "Call queue from this list", badge: "Soon" },
    ],
  };
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

  if (component.kind === "sequenceEngagement") {
    if (field === "subtitle") component.subtitle = value;
    if (field === "peopleCount") component.peopleCount = value;

    if (indexes.itemIndex !== null) {
      const sequence = component.sequences[indexes.itemIndex];
      if (sequence) {
        if (field === "sequenceName") sequence.name = value;
        if (field === "sequenceCompany") sequence.company = value;
        if (field === "sequenceSubject") sequence.subject = value;
        if (field === "sequencePersonalization") sequence.personalization = value;
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
    if (field === "column" && indexes.columnIndex !== null) {
      component.columns[indexes.columnIndex] = value;
    }

    if (field === "cell" && indexes.rowIndex !== null && indexes.columnIndex !== null) {
      component.rows[indexes.rowIndex] ??= [];
      component.rows[indexes.rowIndex][indexes.columnIndex] = value;
    }
  }

  if (component.kind === "strategyCards" && indexes.cardIndex !== null) {
    const card = component.cards[indexes.cardIndex];

    if (!card) return;

    if (field === "cardLabel") card.label = value;
    if (field === "cardTitle") card.title = value;
    if (field === "cardAudience") card.audience = value;
    if (field === "cardMotion") card.motion = value;
    if (field === "cardProof") card.proof = value;
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
  if (component.kind === "styleProfile") return component.title;
  if (component.kind === "proximityList") return component.title;
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
  return JSON.parse(JSON.stringify(component)) as BuilderComponent;
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

function isBuilderStepKind(value: string): value is BuilderStepKind {
  return value in STEP_KIND_LABELS;
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
