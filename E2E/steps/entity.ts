// ***************************************************************************
// * Boilerplate
// ***************************************************************************
import { Cucumber, Before, After, Given, When, Then } from "cucumber.decorators";
import { expect } from "chai";
import { CRUD } from "../../src/CRUD";
// ***************************************************************************
// * Test Customer
// ***************************************************************************
import { loadCustomer } from "./customers";

@Cucumber
export class Entity {
    private API: CRUD<any>;
    private Entity: any;
    private Property: any;
    private Cache: any;

    @Before("@Customer")
    public async beforeCustomer() {
        await loadCustomer(this);
        await this.API.delete(this.Entity.Id);
    }

    @After("@Customer")
    public async afterCustomer(test: any) {
        await this.API.delete(this.Entity.Id);
    }

    @Given(/^([^"]*)? does not exist$/)
    public async entityDoesNotExist(entity: string) {
        expect(await this.API.retrieve(this.Entity.Id)).eql("");
    }

    @Given(/^([^"]*)? does exist$/)
    public async entityDoesExist(entity: string) {
        expect((await this.API.retrieve(this.Entity.Id)).Id).eql(this.Entity.Id);
    }

    @When(/^I create a ([^"]*)?$/)
    public async creatEntity(entity: string) {
        return await this.API.create(this.Entity);
    }

    @When(/^I retrieve a ([^"]*)?$/)
    public async retrieveEntity(entity: string) {
        this.Cache = await this.API.retrieve(this.Entity.Id);
        return this.Cache;
    }

    @When(/^I update a ([^"]*)?$/)
    public async updateEntity(entity: string) {
        return await this.API.update(this.Entity.Id, this.Property);
    }

    @When(/^I delete a ([^"]*)?$/)
    public async deleteEntity(entity: string) {
        return await this.API.delete(this.Entity.Id);
    }

    @Then(/^([^"]*)? should exist$/)
    public async entityShouldExist(entity: string) {
        expect((await this.API.retrieve(this.Entity.Id)).Id).eql(this.Entity.Id);
    }

    @Then(/^([^"]*)? should be returned$/)
    public async entityShouldBeReturned(entity: string) {
        expect(this.Cache.Id).eql(this.Entity.Id);
    }

    @Then(/^([^"]*)? should be updated$/)
    public async entityShouldBeUpdated(entity: string) {
        expect(this.Property.Name).eql((await this.API.retrieve(this.Entity.Id)).Name);
    }

    @Then(/^([^"]*)? should not exist$/)
    public async entityShouldNotExist(entity: string) {
        expect(await this.API.retrieve(this.Entity.Id)).eql("");
    }
}
