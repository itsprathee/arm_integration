import { Page } from './Page';
import { browser, element, by, ExpectedConditions} from "protractor";
import { expect, assert } from 'chai';
import { watchFile } from 'fs';

export class LoginPage extends Page {

    //Locators
    loginAnotherProviderLink = 'span.inlineBlock';
    loginWithMbedLink = 'a#login-with-mbed';
    userNameInputField = '#id_username';
    passwordInputField = '#id_password';
    loginButton = 'button[type="submit"]';
    loginErrorMsgText = '.errorlist li';

    

    async login(email: string, password: string) {
        await browser.wait(ExpectedConditions.visibilityOf(await element(by.css(this.loginAnotherProviderLink))));
        await element(by.css(this.loginAnotherProviderLink)).click();
        await element(by.css(this.loginWithMbedLink)).click();
        await browser.wait(ExpectedConditions.visibilityOf(await element(by.css(this.userNameInputField))));
        await element(by.css(this.userNameInputField)).sendKeys(email);
        await element(by.css(this.passwordInputField)).sendKeys(password);
        await element(by.css(this.loginButton)).click();
    }

    async verifyLoginErrorMsg(expectedErrorMsg: string) {
        await browser.wait(ExpectedConditions.visibilityOf(await element(by.css(this.loginErrorMsgText))));
        let actualErrorMsg = await element(by.css(this.loginErrorMsgText)).getText();
        expect(expectedErrorMsg).equals(actualErrorMsg);
        await browser.manage().deleteAllCookies();
    }

}
