import {test as baseTest,expect} from '@playwright/test'
import LoginPage from '../pageobjects/login.page'

 export const test=baseTest.extend({
    loginPage:async function({page},use){
        const loginPage=new LoginPage(page);
        use(loginPage)
    },
});

export {expect};