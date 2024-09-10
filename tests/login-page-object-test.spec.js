const {test} = require('@playwright/test')
import LoginPage from '../pageobjects/loginpage.js';

test("verify login test with valid credentials", async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const usernmae="tomsmith";
    const password="SuperSecretPassword!";

    const loginPage = new LoginPage(page);
    await loginPage.isDisplayedLoginPageHeader();
    await loginPage.loginToApplication(usernmae,password)
    await page.waitForTimeout(3000);
})