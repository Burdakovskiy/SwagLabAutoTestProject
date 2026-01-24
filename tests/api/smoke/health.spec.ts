import { test, expect } from '@fixtures/api.fixtures';
import { HttpBinClient } from '@src/api/clients/httpbin.client';

test.describe('@api @smoke API smoke', () => {
  test('@api @smoke backend response with 200', async ({ api }) => {
    const client = new HttpBinClient(api);

    const response = await client.getStatus(200);
    expect(response.status()).toBe(200);
  });

  test('@api @smoke POST echoes payload', async ({ api }) => {
    const client = new HttpBinClient(api);

    const payload = { user: 'qa', role: 'testr' };
    const response = await client.postJson(payload);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.json).toEqual(payload);
  });

  test('@api @smoke negative: 404 handled', async ({ api }) => {
    const client = new HttpBinClient(api);

    const response = await client.getStatus(404);
    expect(response.status()).toBe(404);
  });
});
