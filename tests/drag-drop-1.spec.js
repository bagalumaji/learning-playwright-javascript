const {test,expect} =require('@playwright/test')
test('drag and drop test',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const sourceLocator =await page.locator("#column-a");
    const destinationLocator =await page.locator("#column-b");
    await sourceLocator.dragTo(destinationLocator);
    const draggedLocatorText = (await page.locator("//div[@id='column-b']/header").textContent()).trim();
    console.log(draggedLocatorText);
    await expect(draggedLocatorText).toBe("A");
    await expect(draggedLocatorText.includes("A")).toBeTruthy();
    await expect(draggedLocatorText).toEqual("A");
    await expect(draggedLocatorText).not.toBe("B");
})