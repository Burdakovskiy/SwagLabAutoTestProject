import { test, expect } from "../../fixtures/ui.fixtures";
import { USERS } from "../../../src/testData/users";

const PRODUCT = "Sauce Labs Backpack";

test.describe("@ui @smoke Smoke suite", () => {
    test("@ui @smoke Login happy path", async ({ auth, inventoryPage }) => {
        await auth.loginAndExpectInventory(USERS.standard);
        await expect(inventoryPage.title).toContainText("Products");
    });

    test("@ui @smoke Add to cart", async ({ auth, checkout }) => {
        await auth.loginAndExpectInventory(USERS.standard);
        await checkout.addItemAndOpenCart(PRODUCT);
    });

    test("@ui @smoke Checkout end-to-end", async ({ auth, checkout, cartPage, checkoutStepOne }) => {
        await auth.loginAndExpectInventory(USERS.standard);

        await checkout.addItemAndOpenCart(PRODUCT);
        await cartPage.proceedToCheckout();

        await checkout.checkoutHappyPath("Dmitriy", "QA", "10115");
    });
});