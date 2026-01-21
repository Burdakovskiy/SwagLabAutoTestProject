import { test, expect } from '../../fixtures/ui.fixtures';
import { CHECKOUT_DATA } from '../../../src/testData/checkout';
import { PRODUCT } from '../../../src/testData/product';

test.describe('@ui @smoke Smoke suite', () => {
  test('@ui @smoke Login happy path', async ({ loggedInUser: _loggedInUser, inventoryPage }) => {
    await expect(inventoryPage.title).toContainText('Products');
  });

  test('@ui @smoke Add to cart', async ({ loggedInUser: _loggedInUser, checkout }) => {
    await checkout.addItemAndOpenCart(PRODUCT.name);
  });

  test('@ui @smoke Checkout end-to-end', async ({
    loggedInUser: _loggedInUser,
    checkout,
    cartPage,
  }) => {
    const { firstName, lastName, postalCode } = CHECKOUT_DATA.validCustomer;

    await checkout.addItemAndOpenCart(PRODUCT.name);
    await cartPage.proceedToCheckout();

    await checkout.checkoutHappyPath(firstName, lastName, postalCode);
  });
});
