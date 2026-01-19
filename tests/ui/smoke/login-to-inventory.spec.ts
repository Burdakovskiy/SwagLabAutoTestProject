import { test, expect } from "../../fixtures/ui.fixtures";
import { USERS } from "../../../src/testData/users";

test.describe("@ui @smoke Smoke: auth", () => {
    test("@ui @smoke login -> inventory opens", async ({ auth, inventoryPage }) => {
        await auth.loginAndExpectInventory(USERS.standard);

        await expect(inventoryPage.title).toContainText("Products");
    });
});