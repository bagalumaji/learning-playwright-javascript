const { test, expect } = require('@playwright/test')
const person = {
    name: 'Sayaji',
    email: 'sayajibagal@gmail.com',
    password: 'Sayaji@123456',
    company: 'Student',
    website: 'https://www.google.com',
    country: 'India',
    city: 'Pune',
    address1: 'Hapasar',
    address2: 'Hapasar',
    state: 'Maharashtra',
    zipcode: '411028'
};

test.only('end to end test with data', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.getByText('Input Form Submit').click();
    await page.waitForLoadState();
    const headingFormDemo = await page.getByRole("heading", { name: 'Form Demo' }).isVisible();
    await expect(headingFormDemo).toBeTruthy();
    
    await page.getByRole('textbox', { name: 'Name' }).fill(person.name);
    await page.getByPlaceholder('Email',{exact:true}).fill(person.email);
    await page.locator('#inputPassword4').fill(person.password);
    await page.locator("#company").fill(person.company)
    await page.locator('#websitename').fill(person.website);
    const comboxCountry = await page.locator("//select[@name='country']");
    await comboxCountry.selectOption(person.country);
    await expect(comboxCountry).toHaveValue('IN');
    await page.locator('#inputCity').fill(person.city);
    await page.locator('#inputAddress1').fill(person.address1);
    await page.locator('#inputAddress2').fill(person.address2);
    await page.locator('#inputState').fill(person.state);
    await page.locator('#inputZip').fill(person.zipcode);
    await page.getByRole('button', { name: 'Submit' }).click();
    // await page.pause();
    const isVisibleText = await page.getByText('Thanks for contacting us, we will get back to you shortly.').isVisible();
    await expect(isVisibleText).toBeTruthy();
})
test('end to end test', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground');
    await page.getByText('Input Form Submit').click();
    await page.waitForLoadState();
    const headingFormDemo = await page.getByRole("heading", { name: 'Form Demo' }).isVisible();
    await expect(headingFormDemo).toBeTruthy();
    
    await page.getByRole('textbox', { name: 'Name' }).fill('sayaji');
    await page.getByPlaceholder('Email',{exact:true}).fill('sayajibagal@gmail.com');
    await page.locator('#inputPassword4').fill('Sayaji@123456');
    await page.locator("#company").fill('Self Employee')
    await page.locator('#websitename').fill('https://www.google.com');
    const comboxCountry = await page.locator("//select[@name='country']");
    await comboxCountry.selectOption("India");
    await expect(comboxCountry).toHaveValue('IN');
    await page.locator('#inputCity').fill('Pune');
    await page.locator('#inputAddress1').fill('Hadapsar');
    await page.locator('#inputAddress2').fill('Hadapsar');
    await page.locator('#inputState').fill('Maharashtra');
    await page.locator('#inputZip').fill('411028');
    await page.getByRole('button', { name: 'Submit' }).click();
    // await page.pause();
    const isVisibleText = await page.getByText('Thanks for contacting us, we will get back to you shortly.').isVisible();
    await expect(isVisibleText).toBeTruthy();
})