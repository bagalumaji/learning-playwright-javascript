const {test,expect} =require("@playwright/test")
test('Verify title test',async ({page})=>{
        await page.goto('http://www.testfire.net/index.jsp');
        const title = await page.title();
        expect(title).toBe('Altoro Mutual')
})