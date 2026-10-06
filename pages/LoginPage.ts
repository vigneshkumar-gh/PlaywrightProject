import {Page, Locator} from "@playwright/test"

class LoginPage{
    page : Page
    emailId;
    password;
    submit;
    
    constructor(page : Page){
        this.page = page
        this.emailId = page.getByPlaceholder("E-Mail Address")
        this.password = page.getByPlaceholder("Password")
        this.submit = page.locator("input[type = 'submit']")
    }

    async fillEmailId(id : string){
        await this.emailId.fill(id)
    }
    async fillPassword(code : string){
        await this.password.fill(code)
    }
    async clickSubmit(){
        await this.submit.click()
    }    
}

export {LoginPage}
