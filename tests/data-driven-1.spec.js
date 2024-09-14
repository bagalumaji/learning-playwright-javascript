const {test,expect} = require("@playwright/test")
test.describe("data-driven-1", ()=>{
    const data = {
        username:"tomsmith",
        password:"SuperSecretPassword!",
        message:"You logged into a secure area!"
    };
    test(`test for user : ${data.username}`,async ({page})=>{
        await page.goto("https://the-internet.herokuapp.com/login");
        await page.locator("id=username").fill(data.username);
        await page.locator("id=password").fill(data.password)
        await page.locator("//button[normalize-space()='Login']").click();
        await page.waitForLoadState();
        const msg=`//div[normalize-space(text())="${data.message}"]`;
        console.log(msg);
        const isMessageVisible=await page.locator(msg).isVisible();
        await expect(isMessageVisible).toBeTruthy();
    })
})

