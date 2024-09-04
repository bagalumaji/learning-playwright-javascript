const {test} = require('@playwright/test')
test('context demo test', async function ({browser}) {
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();
    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto("https://www.google.com");
    await page1.waitForTimeout(3000);
    await page2.goto("https://www.google.com");
    await page1.waitForTimeout(3000);
    console.log("end of test...")
    await context1.close();
    await context2.close();
    await browser.close();
})