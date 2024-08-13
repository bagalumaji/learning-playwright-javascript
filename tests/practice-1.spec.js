
const {test, expect}  = require("@playwright/test")

test("demo test for actions",async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")
    const title = await page.title();
    console.log(`title  : ${title}`)

    const textBoxFirstName = await page.locator("//input[@placeholder='First Name']");
    await textBoxFirstName.fill("Ramesh");
    await page.getByPlaceholder("Last Name").fill("Ramesh");
    await page.pause();
    const btnRadioMale = await page.locator("input[name='radiooptions']");
    await btnRadioMale.first().check();
    await expect(btnRadioMale).toBeChecked();
})