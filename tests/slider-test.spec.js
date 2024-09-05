const{test} = require('@playwright/test')
test('slider test',async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
    const slider = await page.locator('input[type="range"]');
    const sliderValue= await page.locator("//span[@id=\"range\"]");
    const value='4';
    await slider.click();
    while(true){
        if(await sliderValue.textContent()===value){
            break;
        }
        await slider.press("ArrowRight");
        await page.waitForTimeout(2000);
    }

})
test.only('slider test-1',async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo");
    const slider = await page.locator('input[type="range"]');
    const sliderValue= await page.locator("//output[@id=\"range\"]");
    const value='80';
    await slider.first().click();
    while(true){
        if(await sliderValue.first().textContent()===value){
            break;
        }
        await slider.first().press("ArrowRight");
        await page.waitForTimeout(500);
    }

})
