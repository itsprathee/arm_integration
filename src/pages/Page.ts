import { browser, element, by, ExpectedConditions} from "protractor";

export class Page {
    async getTitle(){
        return browser.getTitle();
    }
}