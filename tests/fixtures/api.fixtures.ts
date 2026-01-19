import { test as base, request, APIRequestContext } from "@playwright/test";

type ApiFixtures = {
  api: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
  api: async ({}, use) => {
    const context = await request.newContext({
      baseURL: "https://httpbin.org",
      extraHTTPHeaders: {
        "Content-Type": "application/json",
      },
    });

    await use(context);
    await context.dispose();
  },
});

export { expect } from "@playwright/test";
