import{test as base, Page} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { SearchPage } from "../pages/SearchPage"
import { HomePage } from "../pages/HomePage"
import {ProductPage} from "../pages/ProductPage"
import {CartPage} from "../pages/CartPage"
import {CheckoutPage} from "../pages/CheckoutPage"
import Data from "../testData/Data.json"

type MyFixtures = {
    loginPage : LoginPage,
    searchPage : SearchPage,
    productPage : ProductPage,
    cartPage : CartPage,
    checkoutPage : CheckoutPage
}

export const test = base.extend<MyFixtures>({
    loginPage : async ({page}, use) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        homePage.clickMyAccount();
        homePage.clickLogin();
        await loginPage.fillEmailId(Data.Login.ValidUser.username);
        await loginPage.fillPassword(Data.Login.ValidUser.password);
        await loginPage.clickSubmit();
        await use(loginPage)
    },
    searchPage : async ({page}, use) => {
        const searchPage = new SearchPage(page);
        await use(searchPage)
    },
    productPage : async ({page}, use) => {
        const productPage = new ProductPage(page);
        await use(productPage)
    },
    cartPage : async ({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage)
    },
    checkoutPage : async ({page}, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }

});

export {expect} from "@playwright/test"