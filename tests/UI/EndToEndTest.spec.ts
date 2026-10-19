import {test, expect} from "../../Fixtures/testFixtures"
import { CartPage } from "../../pages/CartPage"
import { CheckoutPage } from "../../pages/CheckoutPage"
import { HomePage } from "../../pages/HomePage"
import { LoginPage } from "../../pages/LoginPage"
import { ProductPage } from "../../pages/ProductPage"
import { SearchPage } from "../../pages/SearchPage"


test.beforeEach(async ({page}) => {
    await page.goto(process.env.BASE_URL!)
})

test("EndtoEndTest", async ({page}) => {
    let hp = new HomePage(page);
    await hp.clickMyAccount();
    await hp.clickLogin();
    let lp = new LoginPage(page);
    await lp.fillEmailId("ramkumar2002@gmail.com")
    await lp.fillPassword("qwerty")
    await lp.clickSubmit();
    let sp = new SearchPage(page);
    await sp.search("HP LP3065");
    await sp.clickProductDetails("HP LP3065");
    let pp = new ProductPage(page);
    await pp.clickAddtoCartBtn();
    await pp.clickCart();
    let cart = new CartPage(page);
    await cart.updateQuantity("HP LP3065", "5");
    await cart.clickCheckOut();
    let cp = new CheckoutPage(page);
    await cp.clickContinue1(page);
    await cp.clickContinue2();
    await cp.clickContinue3();
    await cp.clickTermsandCond();
    await cp.clickContinue4();
    await cp.clickConfirm();
    await expect(cp.getSuccessMsg()).toContainText("Your order has been placed!");    

})