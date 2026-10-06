import {test, expect} from "@playwright/test"
import {HomePage} from "../../pages/HomePage" 
import Data from "../../testData/Data.json"
import { RegistrationPage } from "../../pages/RegistrationPage"

test.beforeEach(async ({page}) => {
  await page.goto("");
})

test("Testing Account Registration", async ({page}) => {

  let hp : HomePage = new HomePage(page);
  await hp.clickMyAccount();
  await hp.clickRegister();

  let register : RegistrationPage = new RegistrationPage(page);
  await register.fillFirstName(Data.Register.Firstname);
  await register.fillLastName(Data.Register.lastname);
  await register.fillTelephoneNo(Data.Register.phone_no);
  await register.fillEmailId(Data.Register.username);
  await register.fillPassword(Data.Register.password);
  await register.fillConfirmPassword(Data.Register.confirmpassword);
  await register.clickPolicy();
  await page.waitForTimeout(5000);
  await register.clickSubmit();
  await expect(page.getByText("Your Account Has Been Created!")).toBeVisible();

})