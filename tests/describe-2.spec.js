const {test} = require('@playwright/test')

test.describe('smoke test', ()=>{
    test('login test',async ({page})=>{
        await page.goto('https://www.google.com')
    })
})

test.describe('sanity test', ()=>{
    test.describe('sanity test', ()=>{})
    test('login test - 1',async ({page})=>{
        await page.goto('https://www.google.com')
    })

})
