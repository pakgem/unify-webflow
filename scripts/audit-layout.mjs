import { existsSync } from "node:fs";
import { chromium } from "playwright";

const DEFAULT_URL = process.env.AUDIT_URL ?? "http://127.0.0.1:5173/";
const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const viewports = [
  { width: 1280, height: 900 },
  { width: 768, height: 900 },
  { width: 390, height: 820 },
];

const browser = await chromium.launch({
  headless: true,
  ...(existsSync(CHROME_PATH) ? { executablePath: CHROME_PATH } : {}),
});

const results = [];

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport });
  const pageErrors = [];

  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") pageErrors.push(message.text());
  });

  await page.goto(DEFAULT_URL, { waitUntil: "networkidle" });
  await page.waitForSelector("[data-chatbot-stories-mounted]");
  await page.waitForTimeout(600);

  const audit = await page.evaluate(() => {
    const selectors = ["button", ".wa-stage__label", ".wa-composer__placeholder", ".wa-message__body", ".wa-result-row"];
    const overflowing = [];

    for (const selector of selectors) {
      document.querySelectorAll(selector).forEach((element) => {
        if (element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 2) {
          overflowing.push({
            selector,
            text: element.textContent?.trim().slice(0, 60),
            scrollWidth: element.scrollWidth,
            clientWidth: element.clientWidth,
            scrollHeight: element.scrollHeight,
            clientHeight: element.clientHeight,
          });
        }
      });
    }

    return {
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      overflowing,
    };
  });

  results.push({ ...audit, pageErrors });
  await page.close();
}

await browser.close();

const failed = results.some((result) => result.overflowX || result.overflowing.length > 0 || result.pageErrors.length > 0);
console.log(JSON.stringify(results, null, 2));

if (failed) {
  process.exitCode = 1;
}
