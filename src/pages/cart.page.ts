import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CartPage extends BasePage {
    readonly title: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);
        this.title = page.locator('[data-test="title"], .title');
        this.checkoutButton = page.locator('[data-test="checkout"], #checkout');
    }

    async expectOpened(): Promise<void> {
        await expect(this.title).toContainText(/your cart/i);
    }

    async expectItemPresent(productName: string): Promise<void> {
        const item = this.page.locator(".cart_item").filter({ hasText: productName });
        await expect(item).toBeVisible();
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async removeItem(productName: string) {
        const item = this.page.locator(".cart_item").filter({ hasText: productName });
        await item.locator('[data-test^="remove"]').click();
    }
    async expectItemNotPresent(productName: string) {
        const item = this.page.locator(".cart_item").filter({ hasText: productName });
        await expect(item).toHaveCount(0);
    }
}