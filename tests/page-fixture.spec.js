const {test, expect, chromium} = require('@playwright/test')
let page ;
let browser;
let context;
test.beforeEach(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
})

test("create page fixture test", async function () {
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    let title = await page.title();
    console.log(title);
})
test("create page fixture test-1", async function () {
    await page.goto("https://www.google.com/");
    let title = await page.title();
    console.log(title);
})

test.afterEach(async () => {
    await page.close();
    await context.close();
    await browser.close();
})