const {test,expect} = require('@playwright/test')
test('multi select drop down test',async ({page})=>{

    const multiDropDown="#multi-select";

    await page.goto("https://www.lambdatest.com/selenium-playground/")
    await page.getByRole("link",{name:"Select Dropdown List"}).click();
    const values = ["California",'New Jersey','Washington'];
   // await page.locator(multiDropDown);
    //await page.selectOption(multiDropDown,["California",'New Jersey','Washington']);
    const multiLocator = await page.locator(multiDropDown);
    // await multiLocator.selectOption(values);
    await multiLocator.selectOption([{index:3},{label:"Washington"},{value:"Texas"}])

    const allText = await multiLocator.textContent();
    console.log("all values : ",allText);

    const selectedValues = await page.$$eval("#multi-select option:checked",elements=> elements.map(element=>element.value));
    console.log('selected Values : ',selectedValues);
// 2nd way
    const allVisible  = await multiLocator.locator("option:checked").allInnerTexts();
    console.log("all visible",allVisible);
    await page.pause();
})