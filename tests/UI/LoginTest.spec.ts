import {test, expect} from "@playwright/test"
import {HomePage} from "../../pages/HomePage" 
import Data from "../../testData/Data.json"
import { LoginPage } from "../../pages/LoginPage"


test.beforeEach(async ({page}) => {
    await page.goto("")
})

test("Testing Account Login", async ({page}) => {

    let hp : HomePage = new HomePage(page);
    await hp.clickMyAccount();
    await hp.clickLogin();

    let login : LoginPage = new LoginPage(page);

    await login.fillEmailId(Data.Login.ValidUser.username);
    await login.fillPassword(Data.Login.ValidUser.password);
    await login.clickSubmit();
    
    await expect(page.getByRole("heading",{name : "My Account", level : 2})).toBeVisible();

})