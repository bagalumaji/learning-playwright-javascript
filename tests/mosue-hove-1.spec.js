const {test, expect} = require('@playwright/test')
test('mouse hover flipkart test',async function ({page}) {
    await page.goto('https://www.flipkart.com/')
    await page.waitForLoadState();
    await page.locator("//span[text()='Login']").click();
    //await page.press("Enter");
   // await page.reload();
  // await page.pause();
   // await page.getByRole('button',{name:'✕'}).click();
    const electronicsMainMenu = await page.locator("//span[text()='Electronics']");
    await electronicsMainMenu.hover();
   // await page.getByText('Gaming Laptops').hover();
   // await page.getByRole('link',{name:'Laptop and Desktop'}).hover();
    await page.getByRole('link',{name:'Gaming Laptops'}).click();
    await page.waitForLoadState();
    const headingGamingLaptops = await page.getByRole('heading',{name:'Gaming Laptops'}).isVisible();
    await page.pause();
    await expect(headingGamingLaptops).toBeTruthy();
})