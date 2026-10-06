import {Locator, Page} from "@playwright/test"

class HomePage{
     page : Page
     myAccount : Locator;
     register;
     login

    constructor(page : Page){
        this.page = page;
        this.myAccount = page.getByTitle("My Account")
        this.register = page.getByRole("link", {name : "Register"})
        this.login = page.getByRole("link", {name : "Login"})
    }
    
    async clickMyAccount(){
        await this.myAccount.click()
    }
    async clickRegister(){
        await this.register.click()
    }
    async clickLogin(){
        await this.login.click()
    }
    
}

export { HomePage };
