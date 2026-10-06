import {Locator, Page} from "@playwright/test"

class CheckoutPage{
    firstname;
    lastname;
    address1;
    city;
    country;
    region;
    continue1;
    continue2;
    textBox1;
    continue3;
    textBox2;
    checkBox;
    continue4;
    confirmBtn;
    SuccessMsg;
    page;
    constructor(page : Page){
        this.page = page
        this.firstname = page.getByPlaceholder("First Name");
        this.lastname = page.getByPlaceholder("Last Name");
        this.address1 = page.getByPlaceholder("Address 1");
        this.city = page.getByPlaceholder("City");
        this.country = (name : string) => page.locator("#input-payment-country").selectOption(name);
        this.region = (name : string) => page.locator("#input-payment-zone").selectOption(name);
        this.continue1 = page.locator("#button-payment-address");
        this.continue2 = page.locator("#button-shipping-address");
        this.textBox1 = page.locator("textarea[name='comment']");
        this.continue3 = page.locator("#button-shipping-method");
        this.textBox2 = page.locator("textarea[name='comment']").last();
        this.checkBox = page.getByRole("checkbox")
        this.continue4 = page.locator("#button-payment-method");
        this.confirmBtn = page.locator("#button-confirm");
        this.SuccessMsg = page.getByText("Your order has been placed!");
    }
    async clickContinue1(page : Page){
        await this.continue1.waitFor({ state: 'visible' });
    await this.continue1.scrollIntoViewIfNeeded();

    console.log("clicking continue1");

    await this.continue1.click();
    }
    async clickContinue2(){
        await this.continue2.click();
    }
    async fillTextBox1(name : string){
        await this.textBox1.fill(name);
    }
    async fillTextBox2(name : string){
        await this.textBox1.fill(name);
    }
    async clickContinue3(){
        await this.continue3.click();
    }
    async clickContinue4(){
        await this.continue4.click();
    }
    async clickTermsandCond(){
        await this.checkBox.check();
    }
    async clickConfirm(){
        await this.confirmBtn.click();
    }
    getSuccessMsg(){
        return this.SuccessMsg;
    }
}

export{CheckoutPage}