import { CoreOptions as Options } from "request";
import { Customers } from "../demo/entities/Customers";

export class OData {
    private endPoint: string;
    private token: string;

    constructor(endPoint: string, token?: string) {
        this.endPoint = endPoint;
        this.token = token;
    }

    // Define Entities as Accessors
    public get Customers() {
        return new Customers(this.endPoint, this.token);
    }
}
