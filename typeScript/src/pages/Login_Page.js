"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Page_1 = require("./Page");
var protractor_1 = require("protractor");
var chai_1 = require("chai");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Locators
        _this.loginAnotherProviderLink = 'span.inlineBlock';
        _this.loginWithMbedLink = 'a#login-with-mbed';
        _this.userNameInputField = '#id_username';
        _this.passwordInputField = '#id_password';
        _this.loginButton = 'button[type="submit"]';
        _this.loginErrorMsgText = '.errorlist li';
        return _this;
    }
    LoginPage.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _b = (_a = protractor_1.browser).wait;
                        _d = (_c = protractor_1.ExpectedConditions).visibilityOf;
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.loginAnotherProviderLink))];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_j.sent()])])];
                    case 2:
                        _j.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.loginAnotherProviderLink)).click()];
                    case 3:
                        _j.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.loginWithMbedLink)).click()];
                    case 4:
                        _j.sent();
                        _f = (_e = protractor_1.browser).wait;
                        _h = (_g = protractor_1.ExpectedConditions).visibilityOf;
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.userNameInputField))];
                    case 5: return [4 /*yield*/, _f.apply(_e, [_h.apply(_g, [_j.sent()])])];
                    case 6:
                        _j.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.userNameInputField)).sendKeys(email)];
                    case 7:
                        _j.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.passwordInputField)).sendKeys(password)];
                    case 8:
                        _j.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.loginButton)).click()];
                    case 9:
                        _j.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.verifyLoginErrorMsg = function (expectedErrorMsg) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, actualErrorMsg;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = protractor_1.browser).wait;
                        _d = (_c = protractor_1.ExpectedConditions).visibilityOf;
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.loginErrorMsgText))];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_e.sent()])])];
                    case 2:
                        _e.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css(this.loginErrorMsgText)).getText()];
                    case 3:
                        actualErrorMsg = _e.sent();
                        chai_1.expect(expectedErrorMsg).equals(actualErrorMsg);
                        return [4 /*yield*/, protractor_1.browser.manage().deleteAllCookies()];
                    case 4:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginPage;
}(Page_1.Page));
exports.LoginPage = LoginPage;
