import {expect} from "./boostrap.test";
import { Authenticator, Parameters } from "../src/Authenticator";
import { OData } from "../src/OData";


let parameters: Parameters = {
    authorityHostUrl: process.env.AUTHORITY_HOST_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    resource: process.env.RESOURCE,
    tenant: process.env.TENANT,
};

// ***************************************************************************
// * Customers
// ***************************************************************************
import { Customer } from "../demo/interfaces/Customer";
let customer: Customer = {
        Id: "abad1dea-f046-0000-0012-bb3ece8090ce",
        Name: "Adrian Piels Test #1",
        CreateDate: "2017-05-02T07:52:57.555Z",
        EditDate: "2017-05-04T07:52:57.555Z",
        IsDeleted: false,
        IsModified: false,
};

let api: OData;
before(async() => {

    let authenticator = new Authenticator(parameters);
    let authorizationToken = await authenticator.getToken();
    let endPoint = "https://idiscover-api-qa.azurewebsites.net/odata/";
    api = await new OData(endPoint, authorizationToken);
    await api.customers().delete(customer.Id);
});

// ***************************************************************************
// * Test Suite
// ***************************************************************************

describe("Given Customer", () => {
    it("When create(Customer) then Customer should exist", async() => {
        expect((await api.customers().retrieve(customer.Id)).Id).eql(undefined);
        await api.customers().create(customer);
        expect((await api.customers().retrieve(customer.Id)).Id).eql(customer.Id);
        await api.customers().delete(customer.Id);
    });
    it("When retieve(id) then undefined should be returned if customer does not exist", async() => {
        expect((await api.customers().retrieve(customer.Id)).Id).eql(undefined);
    });
    it("When retieve(id) then Customer should be returned if customer exist", async() => {
        await api.customers().create(customer);
        expect((await api.customers().retrieve(customer.Id)).Id).eql(customer.Id);
        await api.customers().delete(customer.Id);
    });
    it("When delete(id) then Customer should not exist", async() => {
        await api.customers().create(customer);
        expect((await api.customers().retrieve(customer.Id)).Id).eql(customer.Id);
        await api.customers().delete(customer.Id);
        expect((await api.customers().retrieve(customer.Id)).Id).eql(undefined);
    });
});
