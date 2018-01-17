// ***************************************************************************
// * Test Customer
// ***************************************************************************
import { Customer } from "../../demo/interfaces/Customer";
import { Customers, CRUD } from "../../demo/entities/Customers";
import { Token } from "./token";

const customer: Customer = {
        Id: "abad1dea-f046-0000-0012-bb3ece8090ce",
        Name: "TestCustomer",
        CreateDate: "2017-05-02T07:52:57.555Z",
        EditDate: "2017-05-04T07:52:57.555Z",
        IsDeleted: false,
        IsModified: false,
};

const property = {
    Name: "CustomerName",
};

export {CRUD };
export async function loadCustomer(Entity: any) {
    let token = await Token.get();
    let endPoint = process.env.END_POINT;
    Entity.API = new Customers(endPoint, token);
    Entity.Entity = customer;
    Entity.Property = property;
}