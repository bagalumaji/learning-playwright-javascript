const {test, expect} = require('@playwright/test')
test('mouse hover flipkart test',async function ({page}) {
    await page.goto('https://www.flipkart.com/')
    await page.waitForLoadState();
    await page.locator("//span[text()='Login']").click({button:'left'});
    const electronicsMainMenu = await page.locator("//span[text()='Electronics']");
    await electronicsMainMenu.hover();
    await page.getByRole('link',{name:'Gaming Laptops'}).click();
    await page.waitForLoadState();
    const headingGamingLaptops = await page.getByRole('heading',{name:'Gaming Laptops Store'}).isVisible();
    console.log(headingGamingLaptops);
    // await expect(headingGamingLaptops).toBeTruthy();
})
test('right click test',async function ({page}) {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
   // await page.waitForLoadState("load");
    console.log(await page.title());
    console.log(page.url());
    await page.pause();
    await page.locator("#hot-spot").click({button:"right"});
    await page.pause();
})
test.only('mouser hover test-2',async function ({page}) {
    await page.goto('https://www.automationexercise.com/')
    await page.pause();
    await page.locator("(//h2[text()='Rs. 500']/following-sibling::p[text()='Blue Top'])[1]").hover();
    await page.pause();
})