import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { URLs } from "../utils/urls";

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorBox: Locator;

    constructor(page: Page) {
        super(page);

        this.usernameInput = page.locator('[data-test="username"], #user-name');
        this.passwordInput = page.locator('[data-test="password"], #password');
        this.loginButton = page.locator('[data-test="login-button"], #login-button');
        this.errorBox = page.locator('[data-test="error"], .error-message-container error');
    }

    async open(): Promise<void> {
        await this.goto(URLs.base);
        await this.expectVisible(this.loginButton);
    }

    async login(username: string, password: string): Promise<void> {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async expectErrorVisible(): Promise<void> {
        await this.expectVisible(this.errorBox);
    }

    async expectErrorTextContains(text: string): Promise<void> {
        await expect(this.errorBox).toContainText(text);
    }
}