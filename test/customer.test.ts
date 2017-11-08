import { expect } from "./boostrap.test";
import { Authenticator, Parameters } from "../src/Authenticator";
import { OData } from "../src/OData";
import { customer } from "./example.customer";
import { authenticator } from  "./example.authenticator";


let api: OData;
before(async() => {
    let authorizationToken = await authenticator.getToken();
    let endPoint = "https://idiscover-api-qa.azurewebsites.net/odata/";
    api = new OData(endPoint, authorizationToken);
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
