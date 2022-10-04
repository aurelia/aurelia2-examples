import { IHttpClient } from '@aurelia/fetch-client';

export class Api {
    constructor(@IHttpClient private http: IHttpClient) {

    }

    fetchData(url: string, error = 'Unable to fetch data') {
        return this.http.fetch(url)
            .then(r => r.ok ? r.json() : (() => { throw new Error(error) }))
    } 
}