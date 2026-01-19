import { expect, Locator, Page } from "@playwright/test"

export abstract class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: "domcontentloaded"});
    }

    async waitForUrl(pattern: RegExp | string): Promise<void> {
        await this.page.waitForURL(pattern);
    }

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.fill(value);
    }

    async expectVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async expectHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }
}