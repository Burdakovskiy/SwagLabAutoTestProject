import { test, expect } from "../../fixtures/ui.fixtures";
import { USERS } from "../../../src/testData/users";

const PRODUCT = "Sauce Labs Backpack";

test.describe("@ui @smoke Smoke suite", () => {
    test("@ui @smoke Login happy path", async ({ loggedInUser, inventoryPage }) => {
        await expect(inventoryPage.title).toContainText("Products");
    });

    test("@ui @smoke Add to cart", async ({ loggedInUser, checkout }) => {
        await checkout.addItemAndOpenCart(PRODUCT);
    });

    test("@ui @smoke Checkout end-to-end", async ({ loggedInUser, checkout, cartPage, checkoutStepOne }) => {

        await checkout.addItemAndOpenCart(PRODUCT);
        await cartPage.proceedToCheckout();

        await checkout.checkoutHappyPath("Dmitriy", "QA", "10115");
    });
});