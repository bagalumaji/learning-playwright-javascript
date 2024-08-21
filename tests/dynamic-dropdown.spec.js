const {test,expect} = require('@playwright/test')
test('Dynamic drop down test',async ({page})=>{
    await page.goto('https://www.google.co.in/')
    await page.getByTitle("Search").pressSequentially("Playwright",{delay:200});

    await page
        .frame({name:'callout'})
        .locator("button",{hasText:"Stay signed out"})
        .click()


    // await page.pause();
    //const list = await page.locator("//div[@role=\"option\" and @aria-label]");
    const list = await page.$$("//div[@role=\"option\" and @aria-label]");
    console.log(list.length);
    for (let i = 0; i < list.length; i++) {
        // list.first()
        // list.last()
        // console.log(await list.nth(i).textContent());

        // const text = await list[i].innerText();
        // console.log("text : ",text);

        const element=list[i];
        const text = await element.textContent();
        console.log('text : ',text);
      //await page.pause();
        if(text==='playwright meaning'){
            await element.click();
            break;
        }
    }
    const title = await page.title();
    await page.pause();
    console.log(title);

})