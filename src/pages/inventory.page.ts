import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { URLs } from "../utils/urls";

export class InventoryPage extends BasePage {
    readonly inventoryContainer: Locator;
    readonly title: Locator; 
    readonly burgerMenuButton: Locator;
    readonly logoutLink: Locator;
    readonly cartLink: Locator;

    constructor(page: Page) {
        super(page);

        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.title = page.locator('[data-test="title"], .title');
        this.burgerMenuButton = page
            .getByRole("button", { name: /open menu/i })
            .or(page.locator('#react-burger-menu-btn, [data-test="react-burger-menu-btn"]'));
        this.logoutLink = page.locator('#logout_sidebar_link, [data-test="logout-sidebar-link"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"], .shopping_cart_link');
    }

    async expectOpened(): Promise<void> {
        await this.waitForUrl(URLs.inventory);
        await expect(this.inventoryContainer).toBeVisible();
        await expect(this.title).toBeVisible();
    }

    async logout(): Promise<void> {
        await this.burgerMenuButton.click();
        await this.logoutLink.click();
    }

    async addProductToCartByName(productName: string): Promise<void> {
        const item = this.page.locator(".inventory_item").filter({ hasText: productName });
        const addBtn = item.getByRole("button", { name: /add to cart/i });

        await expect(item).toBeVisible();
        await addBtn.click();
    }

    async openCart(): Promise<void> {
        await this.cartLink.click();
    }
    //expectedLogout?
}