import { test } from "../../fixtures/ui.fixtures";
import { CHECKOUT_ERRORS } from "../../../src/testData/checkout.errors";
import { CHECKOUT_DATA } from "../../../src/testData/checkout";

const PRODUCT = "Sauce Labs Backpack";

const NEGATIVE_CASES = [
  {
    name: "Empty first name",
    formData: {
      lastName: CHECKOUT_DATA.validCustomer.firstName,
      postalCode: CHECKOUT_DATA.validCustomer.postalCode,
    },
    expectedError: CHECKOUT_ERRORS.firstName,
  },
  {
    name: "Empty last name",
    formData: {
      firstName: CHECKOUT_DATA.validCustomer.firstName,
      postalCode: CHECKOUT_DATA.validCustomer.postalCode,
    },
    expectedError: CHECKOUT_ERRORS.lastName,
  },
  {
    name: "Empty postal code",
    formData: {
      firstName: CHECKOUT_DATA.validCustomer.firstName,
      lastName: CHECKOUT_DATA.validCustomer.lastName,
    },
    expectedError: CHECKOUT_ERRORS.postalCode,
  },
];


test.describe("@ui @regression Checkout negative", () => {
    for (const { name, formData, expectedError } of NEGATIVE_CASES) {
        test(`@ui @regression ${name}`, async ({ loggedInUser, checkout, cartPage, checkoutStepOne }) => {
            await checkout.addItemAndOpenCart(PRODUCT);
            await cartPage.proceedToCheckout();

            await checkoutStepOne.fillForm(formData);
            await checkoutStepOne.continue();
            await checkoutStepOne.expectError(expectedError);
        });
    }
});