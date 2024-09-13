const{test,expect}=require('@playwright/test')
test('Calendar',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    const dateLocator = await page.locator("id=birthday");
    //await dateLocator.click();
  //  await page.waitForTimeout(3000);
    await dateLocator.fill("1994-12-04");
    await page.waitForTimeout(3000);
})
test.only('Calendar -1 test',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    const startDatePickerLocator  = await page.getByPlaceholder("Start date");
    const endDatePickerLocator = await page.getByPlaceholder("End date");
    await startDatePickerLocator.click();
    const startDateSelectLocator  = "//table//td[@class='day' and text()='27']"
    const endDateSelectLocator  = "//table//td[@class='day' and text()='28']"
    const day=""
    const specificDateLocator = await page.locator(startDateSelectLocator);
    await specificDateLocator.click();
    await endDatePickerLocator.click();
    await page.locator(endDateSelectLocator).click();
    await page.waitForTimeout(3000);
})