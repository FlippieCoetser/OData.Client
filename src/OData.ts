import * as request from "request";
import { Customers } from "../demo/entities/Customers";

export class OData {
    private options: request.CoreOptions;

    constructor(endPoint: string, token?: string) {
        this.options = { baseUrl: endPoint };
        if (token) {
            this._setAuthorizationToken(token);
        }
    }

    public get Customers() {
        return new Customers(this.options);
    }
    private _setAuthorizationToken = (token) => {
        this.options.headers = {
            authorization: `Bearer ${token}`,
        };
    }
}
