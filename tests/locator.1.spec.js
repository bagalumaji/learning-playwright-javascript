const {test} = require('@playwright/test')

//page.getByRole() to locate by explicit and implicit accessibility attributes.
test.describe('locator test',()=>{
    test('page.getByRole() locator  test',async ({page})=>{
        await page.goto("https://www.lambdatest.com/selenium-playground/");
        const radioMale = await page.getByRole("link",{name:'Ajax Form Submit'});
        await radioMale.check();
        console.log("end....")

    })

    test.only('page.getByRole() locator test -2',async ({page})=>{
        await page.goto("https://demo.automationtesting.in/Register.html");
        const radioFeMale = await page.getByRole("radio",{name:'FeMale',exact:true});
        await radioFeMale.check();
        console.log("end....")

    })
})
