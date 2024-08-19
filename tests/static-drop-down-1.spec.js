const {test,expect} = require('@playwright/test')

test('static drop dwon test',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const countryLocator = '#country';
    const country = await page.locator(countryLocator);
    //await page.pause();
    await country.selectOption("Japan");
    await country.selectOption('india');
    await country.selectOption({index:2});
    await country.selectOption({label:"Canada"});
    await country.selectOption({value:'uk'});

    await page.selectOption(countryLocator,'Canada');
    await page.selectOption(countryLocator,{index:2});
    await page.selectOption(countryLocator,'india');

    await expect(country).toHaveValue('india')
    const text = await country.textContent();
    console.log("country drp down : ",text);
    console.log(typeof text);

    await expect(text.includes("India")).toBeTruthy();

    const selectedValue = await page.$eval(countryLocator,element=>element.value);
    console.log("selected value from eval  ",selectedValue);
    const selectedVisibleText = await page.$eval(countryLocator,element=>element.options[element.selectedIndex].textContent);
    console.log("selected visible text from eval  ",selectedVisibleText);

    await expect(selectedVisibleText).toBe('India');
    await expect(selectedVisibleText).toEqual('India');
    // await page.$("");
    // await page.$$("");
    console.log("end ...")
})