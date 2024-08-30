
const {test} =require('@playwright/test')
test('silder test',async ({page})=> {
    await page.goto('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo');
    const slider1 = await page.locator('#slider1 input');
    const location = await slider1.boundingBox();
    console.log("height : ",location.height);
    console.log("width : ",location.width);
    console.log("X : ",location.x);
    console.log("Y : ",location.y);

    await page.waitForTimeout(10000);

})
