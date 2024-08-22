const {test,expect} = require('@playwright/test')
test('Dynamic drop down test',async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    const frames = page.frames();
    console.log('Frames : ',frames.length);



})

