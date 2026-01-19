import { test, expect } from "../../fixtures/ui.fixtures";
import { USERS } from "../../../src/testData/users";

test.describe("Smoke: auth", () => {
    test("login -> inventory opens", async ({ auth, inventoryPage }) => {
        await auth.loginAndExpectInventory(USERS.standart);

        await expect(inventoryPage.title).toContainText("Products");
    });
});