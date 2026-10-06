import { Locator, Page } from "@playwright/test"
class ProductPage{
    ProductName
    ProductPrice
    ProductQuantity : Locator;
    AddToCartBtn
    CartSuccessMsg
    ProductImage
    page
    constructor(page : Page){
        this.page = page
        this.ProductName = page.locator("#product-product h1");
        this.ProductImage = (name : string) => page.getByAltText(name);
        this.ProductPrice = page.locator("ul.list-unstyled h2");
        this.ProductQuantity = page.locator("#input-quantity");
        this.AddToCartBtn = page.getByRole("button", {name  : "Add to Cart", exact : true});
        this.CartSuccessMsg = page.locator(".alert.alert-success.alert-dismissible");
    }

    getProductName(){
        return this.ProductName;
    }

    getProductPrice(){
        return this.ProductPrice;
    }

    async setProductQuantity(no : string){
        await this.ProductQuantity.clear();
        await this.ProductQuantity.fill(no);
    }

    getProductQuantity() : Locator{
        return this.ProductQuantity;
    }
    
    async clickAddtoCartBtn(){
        await this.AddToCartBtn.click();
    }

    getProductImage(name : string){
        return this.ProductImage(name)
    }

    async addedProductSuccessMsg() : Promise<Locator>{
        if(await this.CartSuccessMsg.isVisible())
            return this.CartSuccessMsg.getByRole("link").first();
        return this.CartSuccessMsg
    }
}

export{ProductPage}


