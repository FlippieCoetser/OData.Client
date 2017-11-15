import { Cucumber, Before, Given, When, Then } from "cucumber.decorators";
import { expect } from "chai";
import { OData } from "../../src/OData";
import { customer } from "./customer";
import { API } from "./api";

@Cucumber
export class Customers {
    private api: OData;
    private entity;
    private entitySet;
    private retrievedEntity: any;
    private property: any;
    @Before("@API")
    public async beforeAPI() {
        this.api = await API.get();
    }

    @Before("@Customer")
    public beforeCustomer() {
        this.entity = customer;
        this.entitySet = "customers";
        this.property = {
            Name: "UpdateCustomer",
        };
    }

    @Given(/^a clean api$/)
    public async clean() {
        return await this.api[this.entitySet].delete(this.entity.Id);
    }
    @Given(/^([^"]*)? does not exist$/)
    public async entityShouldNotExist(entityName: string) {
        let entity = await this.api[this.entitySet].retrieve(this.entity.Id);
        expect(entity.Id).eql(undefined);
    }

    @When(/^I create a ([^"]*)?$/)
    public async creatEntity(entityName: string) {
        await this.api[this.entitySet].create(this.entity);
    }

    @When(/^I retrieve a ([^"]*)?$/)
    public async retrieveEntity(entityName: string) {
        this.retrievedEntity = await this.api[this.entitySet].retrieve(this.entity.Id);
    }

    @When(/^I delete a ([^"]*)?$/)
    public async deleteEntity(entityName: string) {
        return await this.api[this.entitySet].delete(this.entity.Id);
    }

    @When(/^I update a ([^"]*)?$/)
    public async updateEntity(entityName: string) {
        await this.api[this.entitySet].update(this.entity.Id, this.property);
    }

    @Then(/^([^"]*)? should exist$/)
    public async entityShouldExist(entityName: string) {
        let entity = await this.api[this.entitySet].retrieve(this.entity.Id);
        expect(entity.Id).eql(this.entity.Id);
    }

    @Then(/^([^"]*)? should be returned$/)
    public async entityShouldBeReturned(entityName: string) {
        expect(this.retrievedEntity.Id).eql(this.entity.Id);
    }

    @Then(/^([^"]*)? should be updated$/)
    public async entityShouldBeUpdated(entityName: string) {
        let entity = await this.api[this.entitySet].retrieve(this.entity.Id);
        expect(this.property.Name).eql(entity.Name);
    }

}
