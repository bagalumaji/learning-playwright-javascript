const {test, expect} = require("@playwright/test")

// import test from '@playwright/test';

test("verify browser launch test", async function ({page}) {
    await page.goto("https://www.google.com");
    const title = await page.title();

    console.log(`title : ${title}`);
    expect(title).toBe("Google");
    expect(page)
}, {timeout: 40000})