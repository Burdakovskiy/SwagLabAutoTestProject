import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class CheckoutCompletePage extends BasePage {
  readonly title: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('[data-test="title"], .title');
    this.completeHeader = page.locator('[data-test="complete-header"], .complete-header');
  }

  async expectOpened(): Promise<void> {
    await expect(this.title).toContainText(/checkout: complete/i);
    await expect(this.completeHeader).toBeVisible();
  }
}