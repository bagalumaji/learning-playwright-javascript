const {test,expect}=require("@playwright/test")

test("demo test",async function ({page}){
   await page.goto("https://www.google.com")
},{timeout:20000})