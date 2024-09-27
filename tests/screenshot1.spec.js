const {test,expect} = require('@playwright/test')
test('screen shot test',async ({page})=>{
    await page.goto('https://www.google.com')
    const searchBoxLocator = await page.getByRole('button',{name:"Google Search"});
    await page.screenshot({path:'11.png'});
    await page.screenshot({path:'21.png',fullPage: true });
    await searchBoxLocator.screenshot({path:'31.png'});
    const buffer = await searchBoxLocator.screenshot();
    console.log(buffer.toString('base64'));
    await page.waitForTimeout(3000);
})