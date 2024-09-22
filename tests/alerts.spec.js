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

test('dismis alet test',async function({page}){
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

test.only('dismis prompt test',async function({page}){
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    const value = 'sayaji'
    page.on('dialog',d=>{
        const msg = d.message();
        const dvalue = d.defaultValue();
        console.log(msg);
        console.log(dvalue);
        d.type()
        d.accept(value);
        console.log(d.defaultValue());
    })

    await page.getByRole('button',{name:'Click Me'}).last().click(); 
    await page.waitForTimeout(3000);
    // await expect(page.locator('id=prompt-demo')).toContainText(value)
    // expect(await page.getByText(`You have entered '${value}' !`)).toBeVisible();
    expect(await page.locator(`text=You have entered '${value}' !`)).toBeVisible();
            
    await page.waitForTimeout(3000);
    await page.close({runBeforeUnload:true});
})

    