const {test, expect} = require('@playwright/test')
test.describe("select dropdown test", () => {
    test('verify selected dropdown value', async function ({page}) {
        await page.goto('https://www.lambdatest.com/selenium-playground/')
        await page.getByText("Select Dropdown List").click();
        const pageTitle = await page.title();
        console.log(pageTitle);

        const drpdownSelect = await page.locator("#select-demo");
        //await page.pause();
        await drpdownSelect.selectOption("Sunday");
        await drpdownSelect.selectOption({index: 3});
        await drpdownSelect.selectOption({label: "Monday"});
        await expect(drpdownSelect).toHaveValue('Monday');

        // 2nd way

        const allTextContent = await drpdownSelect.textContent();
        await expect(allTextContent.includes("Monday")).toBeTruthy();


        const dropDownDay = await page.$("#select-demo");
        const dropDownDays = await dropDownDay.$$("option")
        for (const day of dropDownDays) {
            console.log(await day.textContent());
        }

        const selectedValue = await page.$eval('#select-demo', ele => ele.value);
        console.log(`selectedValue : ${selectedValue}`);
        console.log("end of the test...")

        const selectedValue1 = await page.$eval('#select-demo', ele => ele.options[ele.selectedIndex].textContent);
        console.log(selectedValue1);
    })
    test('verify selected dropdown value - 1', async function ({page}) {
        await page.goto('https://www.facebook.com/');
        await page.getByRole("button", {name: 'Create new account'}).click();
        const drpdwnMonth = await page.getByTitle("Month");
        await page.pause();
        await drpdwnMonth.selectOption('3');
        await expect(drpdwnMonth).toHaveValue('3');
        await drpdwnMonth.selectOption("Jun");
        await drpdwnMonth.selectOption({index: 6});
        const visibleText = await page.$eval("#month", element => element.options[element.selectedIndex].textContent);
        await expect(visibleText).toEqual('Mar')
        await expect(visibleText).toBe('Mar')

    })
    test('verify selected dropdown value - 2', async function ({page}) {
        await page.goto('https://www.facebook.com/');
        await page.getByRole("button", {name: 'Create new account'}).click();
        const drpdwnMonth = await page.getByTitle("Month");

        const selectedText = await page.locator('#month > option:checked').innerText();
        await page.pause();
        console.log(selectedText);
        await drpdwnMonth.selectOption('10');
        const selectedText1 = await page.locator('#month > option:checked').innerText();

        console.log(selectedText1);
        console.log("end")
    })
})
