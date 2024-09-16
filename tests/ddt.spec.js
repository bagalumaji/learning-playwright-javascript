const {test, expect} = require('@playwright/test')
import testdata from '../testdata/testdata.json';
// const testdata = [
//     {
//         id: 1,
//         username: "tomsmith",
//         password: "SuperSecretPassword!",
//         message: "You logged into a secure area!"
//     },
//     {
//         id: 2,
//         username: "tomsmith12345",
//         password: "SuperSecretPassword!",
//         message: "Your username is invalid!"
//     },
//     {
//         id: 3,
//         username: "tomsmith",
//         password: "Super",
//         message: "Your password is invalid!"
//     }
// ]

for(let data of testdata) {
    test(`${data.id} - verify login functionality`, async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login');
        await page.locator("id=username").fill(data.username);
        await page.locator("id=password").fill(data.password);
        await page.locator("//button[normalize-space()=\"Login\"]").click();
        const msg=`//div[normalize-space(text())="${data.message}"]`;
        console.log(msg);
        await expect(page.locator(msg)).toBeVisible({timeout:20000});
    })
}