const {test} = require('@playwright/test')
test.skip('file updload test with file type',async function({page}){
    const file1 = "./tests/demo-1.spec.js";
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator("#file-upload").setInputFiles(file1);

})

test('file updload test without file type',async function({page}){
    const file1 = "./tests/demo-1.spec.js";
    await page.goto('https://the-internet.herokuapp.com/upload')
    page.on("filechooser",function(filechooser){
        filechooser.setFiles(file1);
    })
    await page.locator("#drag-drop-upload").click({force:true});
    await page.pause();

})