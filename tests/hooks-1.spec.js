const {test, expect} = require('@playwright/test')
let title='';
test.beforeEach('launch',async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/");
     title = await page.title();
})
test('before each hook test',async function({page}){
    await expect(title.includes("Selenium")).toBeTruthy();
})
test('before each hook test-1',async function({page}){
    await expect(title.includes("Selenium")).toBeTruthy();
})

test.afterEach(async function(){
    console.log("after each executed.....")
})