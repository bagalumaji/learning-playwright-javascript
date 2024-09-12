const{test,expect}=require('@playwright/test')
import LoginPage from '../pageobjects/login.page.js'

test('login test 2',async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.open();
    const isDisplayedLoginHeader = await loginPage.isDisplayedHeaderText();
    await expect(isDisplayedLoginHeader).toBeTruthy();
    await loginPage.enterUserName("tomsmith");
    await loginPage.enterPassword("SuperSecretPassword!");
    await loginPage.clickOnLoginButton();
    await page.waitForTimeout(3000);
})