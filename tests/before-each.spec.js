const {test,expect} = require('@playwright/test');

test.describe('before each test - 1',function(){
    test.beforeAll(async function(){
        console.log("before all....")
    })
    test.beforeEach(async function({page}){
        await page.goto('https://testautomationpractice.blogspot.com/')
        await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    })
  test("demo test-1",async function({page}){
        const title = await page.title();
        console.log(title)
  })
  test("demo test-2",async function({page}){
    const title = await page.title();
    console.log(title);
})
})
