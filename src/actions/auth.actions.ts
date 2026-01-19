import { Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { UserCredentials } from "../testData/users";

export class AuthActions {
    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly inventoryPage: InventoryPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.inventoryPage = new InventoryPage(page);
    }

    async login(creds: UserCredentials): Promise<void> {
        await this.loginPage.open();
        await this.loginPage.login(creds.username, creds.password);
    }

    async loginAndExpectInventory(creds: UserCredentials): Promise<void> {
        await this.login(creds);
        await this.inventoryPage.expectOpened();
    }
}