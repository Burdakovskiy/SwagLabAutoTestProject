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
        this.errorBox = page.locator('[data-test="error"]');
    }

    async open(): Promise<void> {
        await this.goto(URLs.base);
        await expect(this.loginButton).toBeVisible();
    }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async expectErrorVisible(): Promise<void> {
        await expect(this.errorBox).toBeVisible();
    }

    async expectErrorTextContains(text: string): Promise<void> {
        await expect(this.errorBox).toContainText(text);
    }
}