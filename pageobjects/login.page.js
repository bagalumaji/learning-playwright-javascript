import { expect } from "@playwright/test";
export default class LoginPage {
    #headerText="Login Page";
    #textBoxUserNameSelector="id=username";
    #textBoxPasswordSelector="id=password";
    #btnLoginSelector="//button[normalize-space()='Login']";

    constructor(page) {
        this.page = page;
    }

    async open(){
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }
    get #headerTextLocator(){
        return this.page.getByRole('heading',{name:this.#headerText});
    }
    get #textBoxUserNameLocator(){
        return this.page.locator(this.#textBoxUserNameSelector);
    }
    get #textBoxPasswordLocator(){
        return this.page.locator(this.#textBoxPasswordSelector);
    }
    get #btnLoginLocator(){
        return this.page.locator(this.#btnLoginSelector);
    }

    async verifyHeaderTextIsVisible() {
        // return await this.#headerTextLocator.isVisible({ timeout: 20000 }); 
        await expect(this.#headerTextLocator).toBeVisible({timeout:5000});
    }
    async enterUserName(username){
        await this.#textBoxUserNameLocator.fill(username);
    }
    async enterPassword(password){
        await this.#textBoxPasswordLocator.fill(password);
    }
    async clickOnLoginButton(){
        await this.#btnLoginLocator.click();
    }
}