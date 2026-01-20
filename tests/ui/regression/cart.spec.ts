import { test, expect } from "../../fixtures/ui.fixtures";
import { PRODUCT } from "../../../src/testData/product";

test.describe("@ui @regression Cart", () => {

  test("@ui @regression add and remove item", async ({ loggedInUser: _loggedInUser, inventoryPage, cartPage }) => {
    await inventoryPage.addProductToCartByName(PRODUCT.name);
    await inventoryPage.openCart();

    await cartPage.expectItemPresent(PRODUCT.name);
    await cartPage.removeItem(PRODUCT.name);

    await cartPage.expectItemNotPresent(PRODUCT.name);
  });
});