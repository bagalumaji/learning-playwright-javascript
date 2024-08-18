const {test, expect} = require('@playwright/test')
test.describe('auto suggestions ', () => {
    test('spicejet auto suggestion',async ({page})=>{
        await  page.goto('https://www.spicejet.com/')
        const from=await page.locator('//div[text()=\'From\']/following::div/input[@value]');
        await from.first().click();
        await from.first().pressSequentially("ag",{delay:300});
        const drp=await page.$$("//div[text()='Cities']/../following-sibling::div/div");
        for (let i = 0; i < drp.length; i++) {

            const text=await drp[i].innerText();
            console.log(text);
            if(text.includes("Agra")) {
                await drp[i].click();
                break;
            }
        }
        await page.pause();
        console.log("eng...")

    })
})