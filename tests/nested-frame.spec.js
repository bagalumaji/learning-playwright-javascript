const {test} = require('@playwright/test')
test('nested frmae test',async function({page}){
    await page.goto('https://the-internet.herokuapp.com/nested_frames')
    const frameset = await page.frame("frame-top");
  //  const childFrames = frameset.childFrames();
    // const text = await childFrames[0].locator('//body').textContent();
    //const text = await childFrames.

    const childMiddleFrame = frameset.frameLocator("//frame[@name='frame-middle']");
    const bodyLocator =await childMiddleFrame.locator("//body");
   const text =  await bodyLocator.textContent();
    console.log("text :",text);
})
