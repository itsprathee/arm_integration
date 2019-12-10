import { browser, ExpectedConditions} from "protractor";
import { LoginPage } from "../pages/Login_Page";
import { expect, assert } from 'chai';
import { Given, When, Then } from 'cucumber';
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const loginPage: LoginPage = new LoginPage();

Given(/^I am at the Login page$/, async () => {
        await browser.get('/');
        await browser.wait(ExpectedConditions.titleContains('Pelion Device Management Portal'))
});

When(/^I log in using “(.*?)” and “(.*?)”$/, async (email: string, password: string) => {
      await loginPage.login(email, password); 
});

Then('I should see the {string} message', async (errorMsg: string) => {
      await loginPage.verifyLoginErrorMsg(errorMsg);
});

