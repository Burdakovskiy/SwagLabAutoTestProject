import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { URLs } from "../utils/urls";

export class InventoryPage extends BasePage {
    readonly inventoryContainer: Locator;
    readonly title: Locator; 
    readonly burgerMenuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);

        this.inventoryContainer = page.locator('[data-test="inventory-container"], #inventory_container, .inventory_container');
        this.title = page.locator('[data-test="title"], .title');
        this.burgerMenuButton = page
            .getByRole("button", { name: /open menu/i })
            .or(page.locator('#react-burger-menu-btn, [data-test="react-burger-menu-btn"]'));
        this.logoutLink = page.locator('#logout_sidebar_link, [data-test="logout-sidebar-link"]');
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
    //expectedLogout?
}