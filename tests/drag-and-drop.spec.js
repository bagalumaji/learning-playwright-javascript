const{test} = require('@playwright/test')
test('drag-and-drop', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo')
    const sourceDraggable1Locator = await page.locator("id=draggable")//await page.getByText("Draggable 1");
    const destinationDroppableLocator = await page.locator("id=droppable");
    const sourceDraggable1BoundingBox=await sourceDraggable1Locator.boundingBox();
    const destinationDroppableBoundingBox = await destinationDroppableLocator.boundingBox();
    //await page.pause();

    if(sourceDraggable1BoundingBox) {
        console.log(sourceDraggable1BoundingBox);
        await page.mouse.move(sourceDraggable1BoundingBox.x, sourceDraggable1BoundingBox.y);
    }
    await page.mouse.down();
    if(destinationDroppableBoundingBox) {
        console.log(destinationDroppableBoundingBox);
        await page.mouse.move(destinationDroppableBoundingBox.x + 20  , destinationDroppableBoundingBox.y+20);
        await page.mouse.up();
    }

    await page.pause();
    await page.waitForTimeout(4000);
})