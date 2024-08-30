const {test, expect} = require('@playwright/test')


test('test file upload without attribute type=file', async function ({page}) {
    const file1 = "./tests/comands.txt";
    await page.goto('https://the-internet.herokuapp.com/upload')

    const fileChooserEventPromise = page.waitForEvent('filechooser');
    await page.locator("id=drag-drop-upload").click();
    const fileChooser = await fileChooserEventPromise;
    await fileChooser.setFiles(file1);

    await page.waitForTimeout(10000);
})