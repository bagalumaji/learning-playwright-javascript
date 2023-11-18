import test from "@playwright/test";
const { chromium } = require("playwright");

test("drop down test", async function () {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.amazon.in");
  page.close();
});
