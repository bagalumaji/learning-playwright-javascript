import { chromium, test } from "@playwright/test";

test("demo test", async function () {
  const browser = await chromium.launch();
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
});
