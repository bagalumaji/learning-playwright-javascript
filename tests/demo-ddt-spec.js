const{test,expect}=require('@playwright/test')

test.skip('ddt test',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator("id=username").fill("tomsmith");
    await page.locator("id=password").fill("SuperSecretPassword!");
    await page.locator("//button[normalize-space()=\"Login\"]").click();
    await expect(page.locator('//div[normalize-space(text())="You logged into a secure area!"]')).toBeVisible();
})