const {test} = require("@playwright/test")
test.describe('demo suite',()=>{
    const data=[{},{}]
    test.describe('demo inner suite',()=>{
        test('demo test - 2',async ({page})=>{
            await page.goto("https://www.google.com")
        })
    })

    test('demo test - 1',async ({page})=>{
        await  page.goto('https://www.amazon.com');
    })

    test('demo test',async ({page})=>{
        await  page.goto('https://www.flipkart.com');
    })
})
