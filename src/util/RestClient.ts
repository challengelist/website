import { Account } from "../structures/Account";
import { APIResponseError } from "./errors/APIResponseError";

export class RestClient {
    public account: Account;

    constructor(account: Account) {
        this.account = account;
    }

    public request(url: string, request: RequestInit): Promise<any> {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (res, rej) => {
           const response = await fetch(`${import.meta.env.CL_API_URL}${url}`, request);

           // Handle status codes.
            if (response.status === 200) {
                if (response.headers.get("Content-Type")?.startsWith("application/json")) {
                    res(await response.json());
                } else {
                    res(await response.text());
                }
            } else if (response.status >= 500) {
                rej(new APIResponseError(response.status, "A potential internal error has occured.", await response.text()));
            } else {
                let data;
                if (response.headers.get("Content-Type")?.startsWith("application/json")) {
                    data = await response.json();
                } else {
                    data = await response.text();
                }

                rej(new APIResponseError(response.status, data?.message ?? data));
            }
        });
    }
}