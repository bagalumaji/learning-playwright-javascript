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