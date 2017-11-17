import { Cucumber, Before, Given, When, Then } from "cucumber.decorators";
import { expect } from "chai";
import { Customers, customer, customerName } from "./customers";

interface IEntity {
    temp: any;
    init(): any;
    clean(): any;
    create(): any;
    retrieve(): any;
    update(): any;
    delete(): any;
}

@Cucumber
export class Entity {
    private API: IEntity;
    private Entity: any;
    private Property: any;
    private Cache: any;

    @Before("@Customer")
    public async beforeCustomer() {
        this.API = new Customers();
        await this.API.init();
        this.Entity = customer;
        this.Property = customerName;
    }

    @Given(/^a clean api$/)
    public async clean() {
        return await this.API.clean();
    }
    @Given(/^([^"]*)? does not exist$/)
    public async entityDoesNotExist(entity: string) {
        expect(await this.API.retrieve()).eql("");
    }

    @When(/^I create a ([^"]*)?$/)
    public async creatEntity(entity: string) {
        return await this.API.create();
    }

    @When(/^I retrieve a ([^"]*)?$/)
    public async retrieveEntity(entity: string) {
        this.Cache = await this.API.retrieve();
        return this.Cache;
    }

    @When(/^I update a ([^"]*)?$/)
    public async updateEntity(entity: string) {
        return await this.API.update();
    }

    @When(/^I delete a ([^"]*)?$/)
    public async deleteEntity(entity: string) {
        return await this.API.delete();
    }

    @Then(/^([^"]*)? should exist$/)
    public async entityShouldExist(entity: string) {
        expect((await this.API.retrieve()).Id).eql(this.Entity.Id);
    }

    @Then(/^([^"]*)? should be returned$/)
    public async entityShouldBeReturned(entity: string) {
        expect(this.Cache.Id).eql(this.Entity.Id);
    }

    @Then(/^([^"]*)? should be updated$/)
    public async entityShouldBeUpdated(entity: string) {
        expect(this.Property.Name).eql((await this.API.retrieve()).Name);
    }

    @Then(/^([^"]*)? should not exist$/)
    public async entityShouldNotExist(entity: string) {
        expect(await this.API.retrieve()).eql("");
    }

}
