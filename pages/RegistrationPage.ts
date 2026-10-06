import {Page, Locator} from "@playwright/test"

class RegistrationPage{
    page : Page
    firstname;
    lastname;
    emailId;
    password;
    confirmPassword;
    telephone;
    submit;
    policyButton;

    constructor(page : Page){
        this.page = page;
        this.firstname = page.getByPlaceholder("First Name");
        this.lastname = page.getByPlaceholder("Last Name");
        this.emailId = page.getByPlaceholder("E-Mail");
        this.password = page.getByPlaceholder('Password', { exact: true });
        this.confirmPassword = page.getByPlaceholder('Password Confirm', { exact: true });
        this.telephone = page.getByPlaceholder("Telephone");
        this.policyButton = page.locator("input[type='checkbox']");
        this.submit = page.locator("input[type = 'submit']");
    }
    
    async fillFirstName(fname : string){
        await this.firstname.fill(fname)
    }
    async fillLastName(lname : string){
        await this.lastname.fill(lname)
    }
    async fillEmailId(id : string){
        await this.emailId.fill(id)
    }
    async fillPassword(code : string){
        await this.password.fill(code)
    }
    async fillConfirmPassword(code : string){
        await this.confirmPassword.fill(code)
    }
    async fillTelephoneNo(no : string){
        await this.telephone.fill(no)
    }
    async clickPolicy(){
        await this.policyButton.click()
    }
    async clickSubmit(){
        await this.submit.click()
    }    
}

export {RegistrationPage}
