
const {test,expect,chromium} = require('@playwright/test')

test('create a chromium context', async ()=>{
    const  browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/windows")
    const title = await page.title();
    console.log(title);

    await page.close();
    await context.close();
    await browser.close();
})