const {test} = require('@playwright/test')
test('test file upload-1', async ({page}) => {
    const file1 = "./tests/comands.txt";
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator("#file-upload").setInputFiles(file1);
   // await page.pause();
})
test('test file upload without attribute type=file', async function ({page}) {
    const file1 = "./tests/comands.txt";
    await page.goto('https://the-internet.herokuapp.com/upload')
    page.on("filechooser", function (filechooser) {
        filechooser.setFiles(file1);
    })
    await page.locator("#drag-drop-upload").click({force: true});
    console.log(await page.title());
    //await page.pause();
    await page.waitForTimeout(2000);
})