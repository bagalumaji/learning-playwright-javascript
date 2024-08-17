const {test, expect} = require('@playwright/test')

test.describe('auto suggested drop down', function () {
    test('auto suggested drop down test', async function ({page}) {
        await page.goto("https://www.google.co.in/")

        await page
            .frame({name:'callout'})
            .locator("button",{hasText:"Stay signed out"})
            .click();
        await page.getByTitle("Search").pressSequentially("umaji bagal linkedin",{delay:200});
        await page.getByText("linkedin profile").click();
        const currentUrl = await page.url();
        console.log(currentUrl);

        await expect(currentUrl).toContain('umaji+bagal');
        //await expect(title.includes("umaji bagal")).toBeTruthy()

    })
})
