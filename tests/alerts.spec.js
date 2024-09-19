const {test, expect} = require('@playwright/test');


test('alert test -1', async function ({page}) {
  
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
   console.log('1');


   page.on('dialog',d=>{
    console.log(d.message());
    d.accept();
   })
   
    await page.getByRole('button',{name:'Click Me'}).first().click();
    
    alertDialogPromise.accept()
    console.log(msg);
    
    await page.waitForTimeout(3000);
    await page.close({runBeforeUnload:true});
})