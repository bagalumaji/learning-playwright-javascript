import { chromium, test } from "@playwright/test";

test("demo test", async function () {
  const browser = await chromium.launch({
    headless: false,
  });
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("(//span[@class='title' and contains(.,'My account')])[2]");
  await page.click("'Login'"); //span[@class='title' and contains(.,'Login')]");
  const title = await page.title();
  console.log(title);
});
