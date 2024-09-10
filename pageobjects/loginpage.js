const {expect} = require('@playwright/test')

export default class LoginPage {
    #page;

    constructor(page) {
        this.#page = page;
        this.loginHeaderSelector = "//h2[text()='Login Page']";
        this.usernameSelector = "#username";
        this.passwordSelector = "id=password";
        this.loginButtonSelector = "//button[normalize-space()='Login']";
    }

    async isDisplayedLoginPageHeader() {
        await expect(this.#page.locator(this.loginHeaderSelector)).toBeVisible();
    }

    async loginToApplication(username,password){
        await this.#enterUserName(username);
        await this.#enterPassword(password);
        await this.#clickOnLoginButton();
    }

    async #enterUserName(username){
        await this.#page.locator(this.usernameSelector).fill(username);
    }
    async #enterPassword(password){
        await this.#page.locator(this.passwordSelector).fill(password);
    }
    async #clickOnLoginButton(){
        await this.#page.locator(this.loginButtonSelector).click();
    }
}
