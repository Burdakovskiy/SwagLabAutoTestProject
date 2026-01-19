import { Page } from "@playwright/test";
import { InventoryPage } from "../pages/inventory.page";
import { CartPage } from "../pages/cart.page";
import { CheckoutStepOnePage } from "../pages/checkout-step-one.page";
import { CheckoutOverviewPage } from "../pages/checkout-overview.page";
import { CheckoutCompletePage } from "../pages/checkout-complete.page";


export class CheckoutActions {
  private readonly inventory: InventoryPage;
  private readonly cart: CartPage;
  private readonly stepOne: CheckoutStepOnePage;
  private readonly overview: CheckoutOverviewPage;
  private readonly complete: CheckoutCompletePage;

  constructor(page: Page) {
    this.inventory = new InventoryPage(page);
    this.cart = new CartPage(page);
    this.stepOne = new CheckoutStepOnePage(page);
    this.overview = new CheckoutOverviewPage(page);
    this.complete = new CheckoutCompletePage(page);
  }

  async addItemAndOpenCart(productName: string): Promise<void> {
    await this.inventory.addProductToCartByName(productName);
    await this.inventory.openCart();
    await this.cart.expectOpened();
    await this.cart.expectItemPresent(productName);
  }

  async checkoutHappyPath(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.stepOne.expectOpened();
    await this.stepOne.fillCustomerInfo(firstName, lastName, postalCode);
    await this.stepOne.continue();

    await this.overview.expectOpened();
    await this.overview.finish();

    await this.complete.expectOpened();
  }
}