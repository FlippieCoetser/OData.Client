import * as request from "request";
import { EntitySet } from "../../src/EntitySet";
import { Customer } from "../interfaces/Customer";

export class Customers extends EntitySet<Customer> {
    constructor(options: request.CoreOptions) {
        super(options);
        this.name = this.constructor.name;
    }
}
