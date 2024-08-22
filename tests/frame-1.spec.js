const {test} = require('@playwright/test')
test('frame - 1 test ',async ({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo/')
    const textBox = await page
        .frameLocator("#iFrame1")
        .locator("text=Your content.");
    console.log(await textBox.textContent());
    await textBox.fill("Java script");

    //await page.pause();
})