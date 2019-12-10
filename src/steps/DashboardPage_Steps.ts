import { browser, element, by, ExpectedConditions} from "protractor";
import { DashboardPage } from "../pages/Dashboard_Page";
import { expect, assert } from 'chai';
import { Given, When, Then } from 'cucumber';
const {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const dashboardPage: DashboardPage = new DashboardPage();

Then('I should see the page title {string}', async (expectedTitle: string) => {
        await browser.wait(ExpectedConditions.titleContains(expectedTitle));
        let actualTitle = await dashboardPage.getTitle();
        await expect(expectedTitle).equals(actualTitle);
        await browser.manage().deleteAllCookies();
});



