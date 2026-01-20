import { test, expect } from "../../fixtures/ui.fixtures";

const PRODUCT = "Sauce Labs Backpack";

test.describe("@ui @regression Cart", () => {

  test("@ui @regression add and remove item", async ({ loggedInUser: _loggedInUser, inventoryPage, cartPage }) => {
    await inventoryPage.addProductToCartByName(PRODUCT);
    await inventoryPage.openCart();

    await cartPage.expectItemPresent(PRODUCT);
    await cartPage.removeItem(PRODUCT);

    await cartPage.expectItemNotPresent(PRODUCT);
  });
});