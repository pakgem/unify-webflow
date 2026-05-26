import { chromium } from "playwright";

const DEFAULT_URL = "http://127.0.0.1:5173/";
const TEST_URL = process.env.WA_TEST_URL ?? DEFAULT_URL;
const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 960 },
  { name: "tablet", width: 1024, height: 900 },
  { name: "mobile", width: 390, height: 820 },
];

const failures = [];

function assert(condition, message, details = {}) {
  if (!condition) failures.push({ message, ...details });
}

async function wait(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function auditViewport(browser, viewport) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } });
  const pageErrors = [];

  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") pageErrors.push(message.text());
  });

  await page.goto(TEST_URL, { waitUntil: "networkidle" });
  await page.waitForSelector("[data-chat-shell]", { timeout: 10_000 });
  await page.waitForTimeout(250);

  const metrics = await page.evaluate(() => {
    const root = document.querySelector("[data-chatbot-stories]");
    const tabs = [...document.querySelectorAll(".wa-story-tab")];
    const visibleTabs = tabs.filter((tab) => {
      const style = getComputedStyle(tab);
      const rect = tab.getBoundingClientRect();
      return style.display !== "none" && style.visibility !== "hidden" && rect.width > 1 && rect.height > 1;
    });

    return {
      documentWidth: document.documentElement.scrollWidth,
      rootMounted: root?.dataset.chatbotStoriesMounted === "true",
      shellHeight: document.querySelector("[data-chat-shell]")?.getBoundingClientRect().height ?? 0,
      shellCount: document.querySelectorAll("[data-chat-shell]").length,
      storyCountText: document.querySelector("[data-story-count]")?.textContent?.trim() ?? "",
      tabCount: tabs.length,
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
      visibleTabCount: visibleTabs.length,
    };
  });

  assert(metrics.rootMounted, `${viewport.name}: auto root was not marked mounted`, metrics);
  assert(metrics.shellCount === 1, `${viewport.name}: expected one chat shell`, metrics);
  assert(
    metrics.shellHeight <= metrics.viewportHeight * 0.9 + 1,
    `${viewport.name}: fake browser exceeded 90% of viewport height`,
    metrics,
  );
  assert(metrics.documentWidth <= metrics.viewportWidth + 1, `${viewport.name}: document has horizontal overflow`, metrics);
  assert(metrics.tabCount === 5, `${viewport.name}: expected five story tabs`, metrics);
  assert(metrics.storyCountText.includes("/ 5"), `${viewport.name}: story counter was not populated`, metrics);
  if (viewport.width < 700) {
    assert(metrics.visibleTabCount <= 1, `${viewport.name}: mobile should only show the active story title`, metrics);
  }

  await auditMountLifecycle(page, viewport.name);
  await auditStoryControls(page, viewport.name);
  await auditStoryComponents(page, viewport.name);

  assert(pageErrors.length === 0, `${viewport.name}: browser errors were emitted`, { pageErrors });
  await page.close();
}

async function auditMountLifecycle(page, label) {
  const result = await page.evaluate(() => {
    const root = document.querySelector("[data-chatbot-stories]");
    const shellCountBefore = root.querySelectorAll("[data-chat-shell]").length;
    const first = window.ChatbotStories.init(root, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const second = window.ChatbotStories.init(root, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const shellCountAfter = root.querySelectorAll("[data-chat-shell]").length;

    const isolatedRoot = document.createElement("section");
    isolatedRoot.dataset.chatbotStories = "";
    document.body.append(isolatedRoot);

    const isolatedFirst = window.ChatbotStories.init(isolatedRoot, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const isolatedSecond = window.ChatbotStories.init(isolatedRoot, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const isolatedShellsAfterDoubleInit = isolatedRoot.querySelectorAll("[data-chat-shell]").length;
    const isolatedSameInstance = isolatedFirst === isolatedSecond;

    isolatedFirst.destroy();
    const mountedAfterDestroy = isolatedRoot.dataset.chatbotStoriesMounted === "true";
    const isolatedShellsAfterDestroy = isolatedRoot.querySelectorAll("[data-chat-shell]").length;

    const isolatedThird = window.ChatbotStories.init(isolatedRoot, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const isolatedShellsAfterRemount = isolatedRoot.querySelectorAll("[data-chat-shell]").length;
    const remountedStory = isolatedThird.getState().story.id;
    isolatedThird.destroy();
    isolatedRoot.remove();

    return {
      isolatedSameInstance,
      isolatedShellsAfterDestroy,
      isolatedShellsAfterDoubleInit,
      isolatedShellsAfterRemount,
      mountedAfterDestroy,
      remountedStory,
      sameAutoInstance: first === second,
      shellCountAfter,
      shellCountBefore,
    };
  });

  assert(result.shellCountBefore === 1 && result.shellCountAfter === 1, `${label}: repeated init duplicated the auto root`, result);
  assert(result.sameAutoInstance, `${label}: repeated init should return the existing auto-root instance`, result);
  assert(result.isolatedSameInstance, `${label}: isolated repeated init should return the existing instance`, result);
  assert(result.isolatedShellsAfterDoubleInit === 1, `${label}: isolated repeated init duplicated markup`, result);
  assert(!result.mountedAfterDestroy, `${label}: destroy left the mounted marker behind`, result);
  assert(result.isolatedShellsAfterDestroy === 1, `${label}: destroy should not churn reusable markup`, result);
  assert(result.isolatedShellsAfterRemount === 1, `${label}: remount created an unexpected shell count`, result);
  assert(Boolean(result.remountedStory), `${label}: remount did not expose state`, result);
}

async function auditStoryControls(page, label) {
  const switchResults = await page.evaluate(async () => {
    const root = document.querySelector("[data-chatbot-stories]");
    const api = window.ChatbotStories.init(root, { autoplay: false, builderDraftEndpoint: false });
    const results = [];

    api.pause();
    for (let index = 0; index < 5; index += 1) {
      api.goTo(index);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      results.push({
        activeStory: root.dataset.activeStory,
        activeTabs: [...root.querySelectorAll(".wa-story-tab.is-active")].map((tab) => tab.dataset.storyTab),
        index,
        stateIndex: api.getState().index,
      });
    }

    return results;
  });

  for (const result of switchResults) {
    assert(result.activeTabs.length === 1, `${label}: story switch left the wrong active tab count`, result);
    assert(result.stateIndex === result.index, `${label}: story switch state index mismatch`, result);
    assert(Boolean(result.activeStory), `${label}: story switch did not set data-active-story`, result);
  }

  const titleClickResults = await page.evaluate(async () => {
    if (window.innerWidth < 700) return { skipped: true };

    const root = document.querySelector("[data-chatbot-stories]");
    const api = window.ChatbotStories.init(root, { autoplay: false, builderDraftEndpoint: false });
    const firstTitle = [...root.querySelectorAll(".wa-story-tab__title")].find(
      (title) => title.textContent.trim() === "Hit the ground running",
    );
    const firstTab = firstTitle?.closest(".wa-story-tab");
    const scrubber = root.querySelector("[data-story-scrubber]");

    api.pause();
    api.goTo(1);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    firstTitle?.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const switchedToFirst = api.getState().index === 0 && firstTab?.classList.contains("is-active");

    scrubber.value = "650";
    scrubber.dispatchEvent(new Event("input", { bubbles: true }));
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const progressedBeforeRestart = api.getState().progress;
    firstTitle?.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const restartedProgress = api.getState().progress;

    return {
      firstTitleExists: Boolean(firstTitle),
      restartedProgress,
      switchedToFirst,
      progressedBeforeRestart,
    };
  });

  if (!titleClickResults.skipped) {
    assert(titleClickResults.firstTitleExists, `${label}: first story title was not rendered`, titleClickResults);
    assert(titleClickResults.switchedToFirst, `${label}: clicking the first story title did not switch stories`, titleClickResults);
    assert(
      titleClickResults.progressedBeforeRestart > 0.5 && titleClickResults.restartedProgress < 0.08,
      `${label}: clicking the active first story title did not restart it`,
      titleClickResults,
    );
  }

  const scrubResults = await page.evaluate(async () => {
    const root = document.querySelector("[data-chatbot-stories]");
    const api = window.ChatbotStories.init(root, { autoplay: false, builderDraftEndpoint: false });
    const scrubber = root.querySelector("[data-story-scrubber]");
    const states = [];

    api.pause();
    for (const value of [0, 250, 500, 850, 1000, 100]) {
      scrubber.value = String(value);
      scrubber.dispatchEvent(new Event("input", { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 20));
      states.push({ playing: api.getState().playing, progress: api.getState().progress, value });
    }

    return states;
  });

  assert(scrubResults.every((state) => state.progress >= 0 && state.progress <= 1), `${label}: scrub progress left bounds`, { scrubResults });
  assert(scrubResults.every((state) => !state.playing), `${label}: paused scrub unexpectedly resumed playback`, { scrubResults });

  const scrubIntegrity = await page.evaluate(async () => {
    const host = document.createElement("section");
    host.dataset.chatbotStories = "";
    document.body.append(host);

    const api = window.ChatbotStories.init(host, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const scrubber = host.querySelector("[data-story-scrubber]");
    const anomalies = [];
    const isVisible = (element) => {
      if (!element) return false;
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();

      return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity) > 0.01 && rect.width > 0 && rect.height > 0;
    };
    const collectThinkingAnomalies = (storyIndex, value) => {
      host.querySelectorAll(".wa-thinking-block").forEach((block, blockIndex) => {
        const message = block.closest(".wa-message");

        if (!isVisible(message)) return;

        const title = block.querySelector(".wa-thinking__title")?.textContent?.trim() ?? "";
        const steps = block.querySelector(".wa-research-steps");
        const traveler = block.querySelector(".wa-thinking-logo-traveler");
        const header = block.querySelector(".wa-thinking");
        const visibleStepCount = [...block.querySelectorAll(".wa-research-step")]
          .filter((step) => isVisible(step)).length;
        const isCollapsed = /^Thought(?:\s|$)/.test(title);
        const travelerRect = traveler?.getBoundingClientRect();
        const headerRect = header?.getBoundingClientRect();
        const stepsRect = steps?.getBoundingClientRect();
        const stepsStyle = steps ? getComputedStyle(steps) : null;
        const travelerIsStranded = Boolean(
          travelerRect &&
          headerRect &&
          isVisible(traveler) &&
          travelerRect.top - headerRect.bottom > 24,
        );

        if (!isCollapsed && travelerIsStranded && visibleStepCount === 0) {
          anomalies.push({
            storyIndex,
            value,
            blockIndex,
            title,
            stepsDisplay: steps ? getComputedStyle(steps).display : null,
            travelerOffset: travelerRect.top - headerRect.bottom,
          });
        }

        if (isCollapsed && steps && stepsStyle?.visibility === "hidden" && (stepsRect?.height ?? 0) < 1) {
          anomalies.push({
            storyIndex,
            value,
            blockIndex,
            title,
            reason: "collapsed thinking steps lost reserved layout height",
            stepsHeight: stepsRect?.height ?? 0,
          });
        }

        block.querySelectorAll('.wa-research-step[data-step-state="complete"] .wa-research-step__detail').forEach((detail) => {
          const detailStyle = getComputedStyle(detail);
          const detailRect = detail.getBoundingClientRect();
          const isVisuallyFolded = detailStyle.visibility === "hidden" || Number(detailStyle.opacity) < 0.01;

          if (isVisuallyFolded && detailRect.height < 1) {
            anomalies.push({
              storyIndex,
              value,
              blockIndex,
              title,
              reason: "folded thinking detail lost reserved layout height",
              detailText: detail.textContent?.trim() ?? "",
              detailHeight: detailRect.height,
            });
          }
        });
      });
    };

    api.pause();
    for (let storyIndex = 0; storyIndex < 5; storyIndex += 1) {
      api.goTo(storyIndex);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      for (const value of [120, 520, 880, 240, 760, 340, 920, 180, 610, 1000, 420, 0, 730]) {
        scrubber.value = String(value);
        scrubber.dispatchEvent(new Event("input", { bubbles: true }));
        await new Promise((resolve) => setTimeout(resolve, 30));
        collectThinkingAnomalies(storyIndex, value);
      }
    }

    api.destroy();
    host.remove();

    return anomalies;
  });

  assert(scrubIntegrity.length === 0, `${label}: scrub left a thinking logo stranded with hidden steps`, { scrubIntegrity });
}

async function auditStoryComponents(page, label) {
  const result = await page.evaluate(async () => {
    const host = document.createElement("section");
    host.dataset.chatbotStories = "";
    document.body.append(host);

    const api = window.ChatbotStories.init(host, {
      autoplay: false,
      builderDraftEndpoint: false,
      showBuilder: false,
    });
    const scrubber = host.querySelector("[data-story-scrubber]");

    const seek = async (storyIndex, progress = 1000) => {
      api.pause();
      api.goTo(storyIndex);
      await new Promise((resolve) => setTimeout(resolve, 60));
      scrubber.value = String(progress);
      scrubber.dispatchEvent(new Event("input", { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 900));
    };

    const tableSummary = (id) => {
      const table = host.querySelector(`[data-data-table="${id}"]`);
      if (!table) return null;
      const visibleRows = [...table.querySelectorAll(".wa-data-table__row")]
        .filter((row) => getComputedStyle(row).display !== "none");

      return {
        header: [...table.querySelectorAll('.wa-data-table__row[data-header="true"] .wa-data-table__cell')]
          .map((cell) => cell.textContent.trim()),
        personCells: table.querySelectorAll(".wa-data-table-person").length,
        rowCount: visibleRows.length,
        sourceLogos: table.querySelectorAll(".wa-data-table-person__source-logo").length,
      };
    };

    await seek(1);
    const dataStory = {
      enriched: tableSummary("enriched-dev-tool-contacts"),
      funded: tableSummary("recently-funded-dev-tools"),
      initial: tableSummary("dev-tool-new-hires"),
    };

    await seek(3);
    const engagementStory = {
      activeSequenceCards: host.querySelectorAll('[data-sequence-person-card][data-active="true"]').length,
      sales: tableSummary("website-visitors-sales"),
      sequenceCards: host.querySelectorAll("[data-sequence-person-card]").length,
    };

    await seek(4);
    const messinessStory = {
      clean: tableSummary("clean-webinar-attendees"),
      raw: tableSummary("raw-webinar-attendees"),
    };

    api.destroy();
    host.remove();

    return { dataStory, engagementStory, messinessStory };
  });

  assert(result.dataStory.initial?.personCells === 8, `${label}: initial data table lost person cells`, result.dataStory.initial ?? {});
  assert(result.dataStory.funded?.rowCount === 5, `${label}: funded table row count changed`, result.dataStory.funded ?? {});
  assert(result.dataStory.enriched?.header.join("|") === "Prospect|Work email|Mobile|Connector", `${label}: enriched table headers changed`, result.dataStory.enriched ?? {});
  assert(result.engagementStory.sales?.personCells === 20, `${label}: sales leader table lost avatars/source badges`, result.engagementStory.sales ?? {});
  assert(result.engagementStory.sequenceCards === 10, `${label}: sequence rail card count changed`, result.engagementStory);
  assert(result.engagementStory.activeSequenceCards === 1, `${label}: sequence rail should have exactly one selected card`, result.engagementStory);
  assert(result.messinessStory.raw?.personCells === 0, `${label}: raw CSV table should not render avatars`, result.messinessStory.raw ?? {});
  assert(result.messinessStory.clean?.personCells === 6, `${label}: cleaned CSV table should render avatars`, result.messinessStory.clean ?? {});
}

try {
  const browser = await chromium.launch({ headless: true });

  for (const viewport of VIEWPORTS) {
    await auditViewport(browser, viewport);
  }

  await browser.close();
} catch (error) {
  failures.push({
    message: "pressure test runner failed",
    error: error instanceof Error ? error.message : String(error),
  });
}

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ok: true, checkedUrl: TEST_URL, viewports: VIEWPORTS.map((viewport) => viewport.name) }, null, 2));
