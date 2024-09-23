import {test as base} from '@playwright/test'
import LoginPage from "../pageobjects/loginpage";

const test = base.extend({
    loginPage:async ({page},use)=>{
        await page.goto("https://the-internet.herokuapp.com/login");
        const loginPage=new LoginPage(page);
        await loginPage.loginToApplication("abc","abc")
        use(loginPage);
    },
});

test('custom fixture test',async ({loginPage})=>{
    await loginPage.isDisplayedLoginPageHeader();
})