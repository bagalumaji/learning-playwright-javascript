const {test,expect} = require('@playwright/test')
test('frame handling test',async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    const frames = page.frames();
    console.log('Frames : ',frames.length);
    const frameBottom = await page.frameLocator("//frame[@name='frame-bottom']");
    const bottomText  = await frameBottom.locator("//body").textContent();
    console.log("bottomText : ",bottomText);
})
test.only('frame handling - 2 test',async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    // const text = await page
    //     .frame('frame-bottom')
    //     .locator("//body")
    //     .textContent();
    // console.log(text);

    // const text = await page
    //     .frame({name:'frame-bottom'})
    //     .locator("//body")
    //     .textContent();
    // console.log(text);

    const bottomFrame = await page.frame({url:'https://the-internet.herokuapp.com/frame_bottom'});
    const bodyLocator =await bottomFrame.locator("//body");
    const text =await bodyLocator.textContent();
    console.log(text);
})
