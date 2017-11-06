import * as request from "request";
import { Customers } from "./Customers";

export class OData {
    public options: request.CoreOptions;

    constructor(endPoint: string, token?: string) {
        this.options = { baseUrl: endPoint };
        if (token) {
            this._setAuthorizationToken(token);
        }
    }

    public customers = () =>
        new Customers(this);

    public request = () =>
        request.defaults(this.options)

    private _setAuthorizationToken = (token) => {
        this.options.headers = {
            authorization: `Bearer ${token}`,
        };
    }
}
