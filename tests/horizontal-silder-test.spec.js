const {test} = require('@playwright/test')
test('horizontal-silder test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/horizontal_slider');
    const sliderLocator = await page.locator("input[type=\"range\"]");
    const valueLocator = await page.locator('span#range');
    await sliderLocator.click();
    const value = '0';
    const val = Number(await valueLocator.textContent());

    const k = value>val ?'ArrowRight':'ArrowLeft';
    while (true) {
        const text = await valueLocator.textContent();
        console.log("value of the slider : ", text);
        if (text === value) {
            break;
        }

        await sliderLocator.press(k);
        await page.waitForTimeout(2000);
    }
})