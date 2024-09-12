const{test,expect}=require('@playwright/test')
import LoginPage from '../pageobjects/login-1.page.js'

test('login test 3',async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.open();
    const isDisplayedLoginHeader = await loginPage.isDisplayedLoginPageHeader();
    await expect(isDisplayedLoginHeader).toBeTruthy();
    await loginPage.enterUsername("tomsmith");
    await loginPage.enterPassword("SuperSecretPassword!");
    await loginPage.clickOnLoginButton();

})