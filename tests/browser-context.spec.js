const {test, expect, chromium} = require('@playwright/test')

let page = null;
let context = null;
let browser = null;
test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
})
test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
})

test('create a chromium context', async () => {
    await page.goto("https://the-internet.herokuapp.com/windows")
    const title = await page.title();
    console.log(title);
})