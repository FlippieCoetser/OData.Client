// ***************************************************************************
// * Test Customer
// ***************************************************************************
import { API, OData } from "./api";
import { Customer } from "../../demo/interfaces/Customer";

export const customer: Customer = {
        Id: "abad1dea-f046-0000-0012-bb3ece8090ce",
        Name: "TestCustomer",
        CreateDate: "2017-05-02T07:52:57.555Z",
        EditDate: "2017-05-04T07:52:57.555Z",
        IsDeleted: false,
        IsModified: false,
};

export const customerName = {
    Name: "CustomerName",
};


export class Customers {
    private api: OData;
    constructor() {
        this.name = this.constructor.name;
    }
    public name: string;
    public temp: Customer;
    public async init() {
        this.api = await API.get();
    }
    public async clean(): Promise<void> {
        return await this.api.Customers.delete(customer.Id);
    }

    public async create(): Promise<Customer> {
        return await this.api.Customers.create(customer);
    }
    public async retrieve(id: any): Promise<Customer>;
    public async retrieve(): Promise<Customer[]>;
    public async retrieve(id?: string): Promise<any> {
        this.temp = await this.api.Customers.retrieve(customer.Id);
        return this.temp;
    }
    public async update() {
        return await this.api.Customers.update(customer.Id, customerName);
    }
    public async delete() {
        return await this.api.Customers.delete(customer.Id);
    }
}