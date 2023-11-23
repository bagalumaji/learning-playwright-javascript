import {chromium, test} from "@playwright/test";

test("select dropdown test",async function(){
    const browser = await chromium.launch({headless:false});
    const context  = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in");

    const title = await page.title();
    const searchDropdownDescription = await page.locator("id=searchDropdownBox");
    await searchDropdownDescription.selectOption("search-alias=fashion");
    await page.waitForTimeout(6000);
    page.close();
    context.close();

})