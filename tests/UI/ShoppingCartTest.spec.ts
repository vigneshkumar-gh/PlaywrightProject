import {test, expect} from "../../Fixtures/testFixtures"
import Products from "../../testData/Products.json"

test.beforeEach(async ({page}) => {
    await page.goto("")
})

test("Verify Product available in Cart", async ({loginPage, searchPage, productPage, cartPage}) => {
    await searchPage.search(Products.ProductExist.Product2);
    await searchPage.clickProductDetails(Products.ProductExist.Product2);
    await productPage.clickAddtoCartBtn();
    await searchPage.search(Products.ProductExist.Product1);
    await searchPage.clickProductDetails(Products.ProductExist.Product1);
    await productPage.clickAddtoCartBtn();
    await searchPage.showShoppingCart();
    let products = await (await cartPage.getProductsName()).all();
    for(let product of products){
        if(await product.innerText() == Products.ProductExist.Product2){
            await expect(product).toHaveText(new RegExp(`^${Products.ProductExist.Product2}$`))
            break;
        }
    }
    
})

test("Remove the Product", async ({loginPage, searchPage, cartPage}) => {
    await searchPage.showShoppingCart();
    let product = await cartPage.removeProduct(Products.ProductExist.Product1);
    await expect(product).not.toBeVisible();
})

test("Update the Product", async ({loginPage, searchPage, cartPage}) => {
    await searchPage.showShoppingCart();
    await cartPage.updateQuantity(Products.ProductExist.Product2, Products.ProductExist.Product2Quantity);
    let productQuantity = cartPage.getQuantity(Products.ProductExist.Product2);
    expect(await productQuantity.inputValue()).toBe("3")
})

test("Verify the Each Product Price", async ({loginPage, searchPage, cartPage}) => {
    await searchPage.showShoppingCart();
    await cartPage.updateQuantity(Products.ProductExist.Product2, Products.ProductExist.Product2Quantity);
    await expect(cartPage.getProductPrice(Products.ProductExist.Product2)).toHaveText(Products.ProductExist.Product2TotalPrice);
})

test.only("Verify the Total Price", async ({loginPage, searchPage, cartPage}) => {
    await searchPage.showShoppingCart();
    await cartPage.updateQuantity(Products.ProductExist.Product2, Products.ProductExist.Product2Quantity);
    await expect(cartPage.getTotalListedProductPrice()).toHaveText("1")
})
