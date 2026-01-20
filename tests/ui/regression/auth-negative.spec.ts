import { test, expect } from "../../fixtures/ui.fixtures";
import { AUTH_ERRORS } from "../../../src/testData/auth.errors";
import { USERS } from "../../../src/testData/users";

test.describe("@ui @regression Auth negative", () => {

  test("@ui @regression invalid credentials", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(USERS.invalid.username, USERS.invalid.password);

    await loginPage.expectErrorVisible();
    await loginPage.expectErrorTextContains(AUTH_ERRORS.invalid);
  });

  test("@ui @regression locked user", async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(USERS.locked.username, USERS.locked.password);

    await loginPage.expectErrorVisible();
    await loginPage.expectErrorTextContains(AUTH_ERRORS.locked);
  });

});