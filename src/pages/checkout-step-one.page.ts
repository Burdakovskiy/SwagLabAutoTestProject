import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import type { CheckoutFormData } from "../testData/checkout.types";

export class CheckoutStepOnePage extends BasePage {
  readonly title: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('[data-test="title"], .title');
    this.firstNameInput = page.locator('[data-test="firstName"], #first-name');
    this.lastNameInput = page.locator('[data-test="lastName"], #last-name');
    this.postalCodeInput = page.locator('[data-test="postalCode"], #postal-code');
    this.continueButton = page.locator('[data-test="continue"], #continue');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async expectOpened(): Promise<void> {
    await expect(this.title).toContainText(/checkout: your information/i);
  }

  async fillCustomerInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continue(): Promise<void> {
    await this.continueButton.click();
  }

  async expectError(expectedMessage: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedMessage);
  }

  async fillForm(data: Partial<CheckoutFormData>): Promise<void> {
    if (data.firstName !== undefined) {
     await this.firstNameInput.fill(data.firstName);
    }
    if (data.lastName !== undefined) {
     await this.lastNameInput.fill(data.lastName);
    }
    if (data.postalCode !== undefined) {
      await this.postalCodeInput.fill(data.postalCode);
    }
  }
}