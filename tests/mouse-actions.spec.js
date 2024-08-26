const {test,expect} = require('@playwright/test')

test('double click test',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator("text=Copy Text").dblclick();

    const textBox1 = await page.locator('#field1').inputValue();
    expect(await page.locator('#field1')).toHaveValue('Hello World!');
    console.log(textBox1);
    const textBox2 = await page.locator('#field2').inputValue();
    console.log("text box 2 : ",textBox2);

    expect(await page.locator('#field2')).toHaveValue('Hello World!');
    await page.pause();
})