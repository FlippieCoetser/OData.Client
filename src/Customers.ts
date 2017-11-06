import { OData } from "./OData";
import { EntitySet } from "./EntitySet";
import { Customer } from "../interfaces/Customer";

export class Customers extends EntitySet<Customer> {
    constructor(OData: OData) {
        super(OData);
        this.name = this.constructor.name;
    };
}
