import {test,expect} from '../fixtures/pagefixtures.js'
test('login test using fixture',async function({loginPage}) {
    await loginPage.open();
    // await expect(loginPage.isDisplayedHeaderText()).toBeTruthy();
    await loginPage.verifyHeaderTextIsVisible();
})