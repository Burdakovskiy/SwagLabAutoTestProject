import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CheckoutOverviewPage extends BasePage {
  readonly title: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('[data-test="title"], .title');
    this.finishButton = page.locator('[data-test="finish"], #finish');
  }

  async expectOpened(): Promise<void> {
    await expect(this.title).toContainText(/checkout: overview/i);
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
  }
}