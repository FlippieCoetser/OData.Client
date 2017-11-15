// ***************************************************************************
// * Test Customer
// ***************************************************************************
import { API, OData } from "./api";
import { Customer } from "../../demo/interfaces/Customer";

export class Customers {
    constructor() {
        this.name = "Customers";
        this.property = {
            Name: "CustomerName",
        };
        this.dummy = {
            Id: "abad1dea-f046-0000-0012-bb3ece8090ce",
            Name: "TestCustomer",
            CreateDate: "2017-05-02T07:52:57.555Z",
            EditDate: "2017-05-04T07:52:57.555Z",
            IsDeleted: false,
            IsModified: false,
        };
    }
    private api: OData;
    public name: string;
    public property;
    public dummy: Customer;
    public temp;
    public async init() {
        this.api = await API.get();
    }
    public async clean() {
        return await this.api.Customers.delete(this.dummy.Id);
    }

    public async create() {
        return await this.api.Customers.create(this.dummy);
    }
    public async retrieve(id?: string) {
        this.temp = await this.api.Customers.retrieve(this.dummy.Id);
        return this.temp;
    }
    public async update() {
        return await this.api.Customers.update(this.dummy.Id, this.property);
    }
    public async delete() {
        return await this.api.Customers.delete(this.dummy.Id);
    }
}