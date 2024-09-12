export default class LoginPage {
    #headerTextSelector="text=Login Page";
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
        return this.page.locator(this.#headerTextSelector);
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

    async isDisplayedHeaderText(){
        return await this.#headerTextLocator.isVisible();
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