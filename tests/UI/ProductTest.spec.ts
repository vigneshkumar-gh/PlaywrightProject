import {test, expect} from "../../Fixtures/testFixtures"
import Products from "../../testData/Products.json"

test.beforeEach(async ({page}) => {
    await page.goto("")
})

test("Verify Product Image Exist", async ({loginPage, searchPage, productPage, page}) => {

    await searchPage.search(Products.ProductExist.Product1)
    await searchPage.clickProductDetails(Products.ProductExist.Product1)
    await expect(productPage.getProductImage(Products.ProductExist.Product1).first()).toBeVisible();

})

test("Verify Product Name", async ({searchPage, productPage}) => {
    await searchPage.search(Products.ProductExist.Product1)
    await searchPage.clickProductDetails(Products.ProductExist.Product1)
    await expect(productPage.getProductName()).toHaveText(Products.ProductExist.Product1);
})

test("Verify Product Price", async ({searchPage, productPage}) => {
    await searchPage.search(Products.ProductExist.Product1)
    await searchPage.clickProductDetails(Products.ProductExist.Product1)
    await expect(productPage.getProductPrice()).toHaveText(Products.ProductExist.Product1Price);  
}) 

test("Verify Product Quantity", async ({searchPage, productPage}) => {
    await searchPage.search(Products.ProductExist.Product1)
    await searchPage.clickProductDetails(Products.ProductExist.Product1)
    await productPage.setProductQuantity("5");
    await expect(productPage.getProductQuantity()).toHaveValue("5");
})

test("Verify Add to Cart", async ({searchPage, productPage, page}) => {
    await searchPage.search(Products.ProductExist.Product2);
    await searchPage.clickProductDetails(Products.ProductExist.Product2);
    await productPage.clickAddtoCartBtn();
    const productadded = await productPage.addedProductSuccessMsg();
    await expect(productadded).toContainText(`Success: You have added ${Products.ProductExist.Product2} to your shopping cart!`); 
})