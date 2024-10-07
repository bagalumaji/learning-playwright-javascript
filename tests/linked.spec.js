const {test} = require('@playwright/test')

test("linked bday test", async ({page}) => {
    // Navigate to LinkedIn
    await page.goto('https://www.linkedin.com/login');
    await page.pause();
    // Find all birthday contacts
    const birthdayMessagesLocator = await page.locator("//span[normalize-space()=\"Wishing you a very happy birthday!\"]");
    let birthdayCount = birthdayMessagesLocator.count();


    while (birthdayCount!==0){
       // let nameHeadingLocator = await page.locator('//span[normalize-space()="Wishing you a very happy birthday!"]/preceding::span[@class="props-s-card-content__headline"]').first();
         await birthdayMessagesLocator.first().click();
        let nameHeadingLocator = await page.locator('//*[contains(@class,"artdeco-pill--dismiss") or contains(@class,"msg-overlay-bubble-header__title") and not(normalize-space()="New message")]').first();

        const nameHeadingText = await nameHeadingLocator.textContent();
        // const bdMessageLocator = `//span[normalize-space()="${nameHeadingText.trim()}"]/following::span[normalize-space()="Wishing you a very happy birthday!"]`;
        // await page.locator(bdMessageLocator).first().click();

        const firstname = nameHeadingText.trim().split(" ")[0].trim().toUpperCase();
        const birthDayMessage = `A very Happy Birthday to you, ${firstname} 🎈🎂🥳\nI hope this year is filled with love, great success, and plenty of cherished moments. Have a wonderful day and an amazing year ahead!`;
        const msgTextBox=await page.locator('//div[@aria-label="Write a message…"]');
        await msgTextBox.clear();
        await page.waitForTimeout(1000);
        await msgTextBox.fill(birthDayMessage);
        await page.waitForTimeout(1000);

        await page.locator('//button[normalize-space()="Send"]').click();
        await page.waitForTimeout(6000);
        await page.locator('//*[local-name()="svg"][@data-test-icon="close-small"]').click();
        await page.waitForTimeout(1000);
        birthdayCount = await page.locator("//span[normalize-space()=\"Wishing you a very happy birthday!\"]").count();
    }
})