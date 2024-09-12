class LoginPage {
    #page;
    loginPageLocator={
        loginPageHeader:"text=Login Page",
        textBoxUsername:"id=username",
        textBoxPassword:"id=password",
        btnLogin:"//button[normalize-space()='Login']"
    }
    constructor(page) {
        this.#page=page;
    }

    async open(){
        await this.#page.goto("https://the-internet.herokuapp.com/login");
    }

    async enterUsername(username){
        await this.#page.locator(this.loginPageLocator.textBoxUsername).fill(username);
    }

    async enterPassword(password){
        await this.#page.locator(this.loginPageLocator.textBoxPassword).fill(password);
    }

    async clickOnLoginButton(){
        await this.#page.locator(this.loginPageLocator.btnLogin).click();
    }

    async isDisplayedLoginPageHeader(){
        return await this.#page.locator(this.loginPageLocator.loginPageHeader).isVisible();
    }
}

export default LoginPage;