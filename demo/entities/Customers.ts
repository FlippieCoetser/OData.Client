import { OData } from "../../src/OData";
import { EntitySet } from "../../src/EntitySet";
import { Customer } from "../interfaces/Customer";

export class Customers extends EntitySet<Customer> {
    constructor(OData: OData) {
        super(OData);
        this.name = this.constructor.name;
    };
}
