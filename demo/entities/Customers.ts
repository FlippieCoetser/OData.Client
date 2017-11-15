import { EntitySet, Options } from "../../src/EntitySet";
import { Customer } from "../interfaces/Customer";

export class Customers extends EntitySet<Customer> {
    constructor(options: Options) {
        super(options);
        this.name = this.constructor.name;
    }
}
