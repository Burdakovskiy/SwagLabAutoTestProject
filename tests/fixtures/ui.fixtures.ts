import { test as base } from '@playwright/test';
import { AuthActions } from '../../src/actions/auth.actions';
import { CheckoutActions } from '../../src/actions/checkout.actions';
import { LoginPage } from '../../src/pages/login.page';
import { InventoryPage } from '../../src/pages/inventory.page';
import { CartPage } from '../../src/pages/cart.page';
import { CheckoutStepOnePage } from '../../src/pages/checkout-step-one.page';
import { CheckoutOverviewPage } from '../../src/pages/checkout-overview.page';
import { CheckoutCompletePage } from '../../src/pages/checkout-complete.page';
import { USERS } from '../../src/testData/users';

type UiFixtures = {
  auth: AuthActions;
  checkout: CheckoutActions;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOne: CheckoutStepOnePage;
  checkoutOverview: CheckoutOverviewPage;
  checkoutComplete: CheckoutCompletePage;
  loggedInUser: AuthActions;
};

export const test = base.extend<UiFixtures>({
  auth: async ({ page }, use) => {
    await use(new AuthActions(page));
  },
  checkout: async ({ page }, use) => {
    await use(new CheckoutActions(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutStepOne: async ({ page }, use) => {
    await use(new CheckoutStepOnePage(page));
  },
  checkoutOverview: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutComplete: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
  loggedInUser: async ({ page }, use) => {
    const auth = new AuthActions(page);
    await auth.loginAndExpectInventory(USERS.standard);
    await use(auth);
  },
});

export { expect } from '@playwright/test';
