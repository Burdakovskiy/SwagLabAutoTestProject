import { test as base } from "@playwright/test";
import { AuthActions } from "../../src/actions/auth.actions";
import { LoginPage } from "../../src/pages/login.page";
import { InventoryPage } from "../../src/pages/inventory.page";

//TODO: -change name
type UiFixtures = {
    auth: AuthActions;
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
};

export const test = base.extend<UiFixtures>({
    auth: async ({ page }, use) => {
        await use(new AuthActions(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
});

export { expect } from "@playwright/test";