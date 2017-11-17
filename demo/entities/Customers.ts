import { EntitySet, Options } from "../../src/EntitySet";
import { Customer } from "../interfaces/Customer";

export class Customers extends EntitySet<Customer> {
    constructor(endPoint: string, token?: string) {
        super(endPoint, token);
        this.name = this.constructor.name;
    }
}
