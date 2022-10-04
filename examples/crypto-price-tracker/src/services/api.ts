import { IHttpClient } from '@aurelia/fetch-client';

export class Api {
    constructor(@IHttpClient private http: IHttpClient) {

    }

    async getPrices(ids: string[]) {
        try {
            const request = await this.http.fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids.toString()}&vs_currencies=usd`);

            return request.json();
        } catch (e) {
            return e;
        }
    }
}