const{test,chromium} = require('@playwright/test')
test('tab test - 1',async function(){

    const browser = await chromium.launch({headless: false,channel:'chrome'});
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);
    await page1.goto('https://the-internet.herokuapp.com/windows')
    await page2.goto('https://www.google.com/')
    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

    const title = await page1.title();
    console.log('page 2 title : ',await page2.title());
    console.log("title : ",title);
    await page1.waitForTimeout(3000);
    const clickHereLink = await page1.getByText("Click Here");
    await clickHereLink.focus();
    await page1.waitForTimeout(3000);
    await clickHereLink.click();
    await page1.waitForTimeout(3000);

    //await page1.focus();
    await page2.close();
    await page1.close();
    await context.close();
    await browser.close();

})

test.only('tab-test-2',async function({browser}){
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/windows");
    const clickHereLink = await page.getByText("Click Here");
    const pageEventPromise = context.waitForEvent('page');
    await clickHereLink.click();
    await page.waitForTimeout(3000);
    //const page2 = await pageEventPromise;
    //await page2.waitForTimeout(3000);
    // console.log(await page2.title());
    const allPages=context.pages();
    console.log(await allPages[0].title());


    await allPages[0].waitForTimeout(3000);
    console.log(await allPages[1].title());

    // await page2.close();
    await page.close();
    await context.close();

})