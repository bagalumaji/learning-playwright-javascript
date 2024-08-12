const {test,expect} = require("@playwright/test");

test('verify sign test',async ({page})=>{
    await page.goto("http://www.testfire.net/index.jsp")
    await page.locator("#LoginLink").click();
    await page.locator("id=uid").fill("jsmith")
    await page.locator("//input[@id='passw']").fill("demo1234")
    await page.locator("input[value='Login']").click();
    await  page.locator("xpath=//*[text()='Sign Off']").isVisible();
})
