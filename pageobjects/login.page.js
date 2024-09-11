export default class LoginPage {
    #headerTextSelector="";
    #textBoxUserNameSelector="";
    #textBoxPasswordSelector="";
    #btnLoginSelector="";

    constructor(page) {
        this.page = page;
    }

    async open(){
        await this.page.goto("");
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
        return this.page.locator(this.loginButtonSelector);
    }

    async isDisplayedHeaderText(){
        return await this.#headerTextLocator.isVisible();
    }
    async enterUserName(username){
        await this.#textBoxUserNameLocator.fill(username);
    }
}