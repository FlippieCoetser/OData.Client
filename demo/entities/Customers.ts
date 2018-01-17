// ***************************************************************************
// * Boilerplate
// ***************************************************************************
import { EntitySet} from "../../src/EntitySet";
import { CRUD } from "../../src/CRUD";
// ***************************************************************************
// * Interface
// ***************************************************************************
import { Customer } from "../interfaces/Customer";

export class Customers extends EntitySet<Customer> implements CRUD<Customer> {
    constructor(endPoint: string, token?: string) {
        super(endPoint, token);
        this.name = this.constructor.name;
    }
}
