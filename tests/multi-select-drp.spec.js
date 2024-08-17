const {test, expect} = require('@playwright/test')

test.describe('multi select drop down test', function () {
    test('multi select drop down values', async function ({page}) {
        await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
        const drpDownCountry = await page.locator("#multi-select");
        const allText = await drpDownCountry.textContent();
        console.log(allText);
        //await page.pause();
        const val = ['Florida', 'Texas'];
        await drpDownCountry.selectOption(val);

        await drpDownCountry.selectOption([{label: 'Florida'}, {value: 'Texas'}, {index: 4}]);

        //  await expect(drpDownCountry).toHaveValues(val);
        const selectedOptions = await drpDownCountry.locator('option:checked').allInnerTexts();
        const v1 = await page.$$eval('#multi-select option:checked', options => {
            return options.map(option => option.textContent);
        });
        console.log(selectedOptions);
        console.log("v1....",v1);
        await page.selectOption('#multi-select', []);

        console.log("end...")
    })
})