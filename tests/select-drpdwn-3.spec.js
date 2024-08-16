const{test,expect} = require('@playwright/test')
test.describe('select - drop down suite',()=>{
    test.beforeEach('before test',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
    })
    test('select drop down test',async({page})=>{
        const dropdownCountry = await page.getByRole("combobox",{name:'Country'});
        //await page.pause();
        await dropdownCountry.selectOption("United Kingdom");
        await expect(dropdownCountry).toHaveValue("uk");
      
        await dropdownCountry.selectOption('brazil');
        
        const values = await dropdownCountry.textContent();
        console.log(typeof values);
        console.log(values);
        
        const country = await page.$("#country");
        const countries = await country.$$("options");
        for(let ele of countries){
            console.log(ele.textContent);
        }

    })

})