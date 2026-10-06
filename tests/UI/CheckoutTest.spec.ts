import {test, expect} from "../../Fixtures/testFixtures"


test.beforeEach(async ({page}) => {
    await page.goto("")
})

test("Verify Product Checkout", async ({loginPage, searchPage, cartPage, checkoutPage, page}) => {
    await searchPage.showShoppingCart();
    await cartPage.clickCheckOut();
    await checkoutPage.clickContinue1(page);
    await checkoutPage.clickContinue2();
    await checkoutPage.fillTextBox1("This Order is an electronic device, Kindly handle it safe");
    await checkoutPage.clickContinue3();
    await checkoutPage.fillTextBox2("Payment is Success, Thank for your service")
    await checkoutPage.clickTermsandCond();
    await checkoutPage.clickContinue4();
    await checkoutPage.clickConfirm();
    await expect(checkoutPage.getSuccessMsg()).toContainText("Your order has been placed!");

})