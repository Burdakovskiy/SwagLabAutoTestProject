import { APIRequestContext } from "@playwright/test";

export class HttpBinClient {
    constructor(private readonly api: APIRequestContext) {}

    async getStatus(status: number) {
        return this.api.get(`/status/${status}`);
    }

    async postJson(payload: unknown) {
        return this.api.post("/post", { data: payload });
    }
}