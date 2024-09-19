const {test, expect} = require('@playwright/test');


test('alert test -1', async function ({page}) {
  
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
   
   page.on('dialog',d=>{
    console.log(d.message());
    d.accept();
   })
    await page.getByRole('button',{name:'Click Me'}).first().click(); 
    await page.waitForTimeout(3000);
    await page.close({runBeforeUnload:true});
})

test.only('dismis alet test',async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on('dialog',d=>{
        const msg = d.message();
        console.log(msg);
        d.dismiss();
    })

    await page.getByRole('button',{name:'Click Me'}).nth(1).click(); 
    await page.waitForTimeout(3000);
    await page.close({runBeforeUnload:true});
})