const {test,expect} = require('@playwright/test')
import {setTimeout} from "node:timers/promises";

test.describe("select drop down test",function(){
    test.beforeEach(async ({page})=>{
         await page.goto('https://testautomationpractice.blogspot.com/');
          await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    })
    test("select dropdown test",async({page})=>{
        const dropdownCountry = await page.getByRole("combobox",{name:"Country"});
        await dropdownCountry.selectOption({index:3});
        const text = await dropdownCountry.textContent();
        console.log(text);
        await setTimeout(5000);
    })
})