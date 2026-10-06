import { Page, Locator } from "playwright";


class SearchPage{
    page
    searchBtn
    searchBox
    ProductsListed
    ProductListed
    addToCart
    constructor(page : Page){
        this.page = page
        this.searchBox = page.getByPlaceholder("Search");
        this.searchBtn = page.locator(".btn.btn-default.btn-lg")
        this.ProductsListed = (productname : string) => page.getByText(productname);
        this.ProductListed = (productname : string) => page.locator("#content").getByText(productname, {exact : true});
        this.addToCart = page.getByText("Shopping Cart", {exact : true})
    }

    async search(name:string){
        await this.searchBox.clear()
        await this.searchBox.fill(name);
        await this.searchBtn.click();
    }

    async IsProductsListed(name:string){
        let c = await this.ProductsListed(name).count();
        if(c > 0){
            return true;
        }
        return false;
    }

    async showShoppingCart(){
        await this.addToCart.click();
    }
    async isProductFound(name:string){
        if(await this.ProductListed(name).count() > 0)
            return (await this.ProductListed(name).innerText()).toLowerCase() === name.toLowerCase()
        return false
    }

    async clickProductDetails(name:string){
        if(await this.ProductListed(name).count() > 0)
            await this.ProductListed(name).click();    
    }

}

export{SearchPage}