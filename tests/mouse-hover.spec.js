const{test} = require('@playwright/test')
test('mosue hover test',async function({page}){
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const mosueHover=await page.locator('id=mousehover');
    await page.pause();
    await mosueHover.hover(); await mosueHover.textContent();
    await page.getByRole("link",{name:'Top'}).click();

   
   const mousehoverTextContent = await mosueHover.textContent();

   console.log(mousehoverTextContent);
  

})