import { customer } from "./customer";
import { API } from "./api";
export class Customers {
    constructor() {
        this.name = "Customers";
        this.property = {
            Name: "CustomerName",
        };
        this.dummy = customer;
    }
    private api;
    public name: string;
    public property;
    public dummy;
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