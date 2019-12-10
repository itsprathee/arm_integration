import { browser, Config } from "protractor";

export const config: Config = {

    // seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    directConnect: true,

    baseUrl: "https://portal.mbedcloud.com",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../src/features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: ["../typeScript/src/steps/*.js"],
        format: 'json:.tmp/results.json',
        strict: true,
        tags: "@positiveScenario or @negativeScenario",
    },

    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],


    onComplete: () => {
        
    },
};
