const {test,expect} = require('@playwright/test')
import LoginPage from "../pageobjects/login.page.js";
test('login test', async ({page}) => {
    const loginPage = new LoginPage();

})