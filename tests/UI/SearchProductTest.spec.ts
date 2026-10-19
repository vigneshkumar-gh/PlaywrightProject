import Products from "../../testData/Products.json"
import { test, expect } from "../../Fixtures/testFixtures"

test.beforeEach(async ({page}) => {
    await page.goto("")
})

test("Search for an product", async ({searchPage, loginPage, page}) => {
    
    await searchPage.search(Products.ProductExist.Product1);
    expect(await searchPage.isProductFound(Products.ProductExist.Product1)).toBeTruthy();
})