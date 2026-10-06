import { Page } from "@playwright/test"

class CartPage{
    cartProducts
    productRow
    page
    updateProductQuantity
    updateBtn
    remove
    price
    totalPrice
    checkOutBtn
    constructor(page : Page){
        this.page = page
        this.cartProducts = page.locator(".table-responsive tbody tr");
        this.productRow = (name : string) => this.cartProducts.filter({hasText: name});
        this.updateProductQuantity = (name : string) => this.productRow(name).locator(".form-control")
        this.updateBtn = (name : string) => this.productRow(name).locator(".btn.btn-primary")
        this.remove = (name : string) => this.productRow(name).locator(".btn.btn-danger");
        this.price = (name : string) => this.productRow(name).locator("td:last-child");
        this.totalPrice = page.locator("div[class$='col-sm-4 col-sm-offset-8'] tr td").last();
        this.checkOutBtn = page.locator("a[class='btn btn-primary']")
    }

    async getProductsName(){
        if(await this.cartProducts.count() != 0){
            return this.cartProducts.locator("td:nth-child(2) a");
        }
        return this.cartProducts;
    }
    async updateQuantity(name : string,no : string){
        await this.updateProductQuantity(name).fill(no);
        await this.updateBtn(name).click()
    }

    getQuantity(name : string){
        return this.updateProductQuantity(name);
    }
    async removeProduct(name : string){
        if(await this.remove(name).isVisible())
            await this.remove(name).click();
        return this.remove(name);
    }

    getProductPrice(name : string){
        return this.price(name);
    }
    
    getTotalListedProductPrice(){
        return this.totalPrice;
    }

    async clickCheckOut(){
        if(await this.cartProducts.count() != 0)
            await this.checkOutBtn.click();
    }
}


export{CartPage}