import { Cucumber, Before, Given, When, Then } from "cucumber.decorators";
import { expect } from "chai";
import { Customers } from "./customers";

interface CRUD {
    dummy: any;
    property: any;
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
    private Entity: CRUD;

    @Before("@Customer")
    public async beforeCustomer() {
        this.Entity = new Customers();
        await this.Entity.init();
    }

    @Given(/^a clean api$/)
    public async clean() {
        return await this.Entity.clean();
    }
    @Given(/^([^"]*)? does not exist$/)
    public async entityDoesNotExist(entityName: string) {
        expect(await this.Entity.retrieve()).eql("");
    }

    @When(/^I create a ([^"]*)?$/)
    public async creatEntity(entityName: string) {
        return await this.Entity.create();
    }

    @When(/^I retrieve a ([^"]*)?$/)
    public async retrieveEntity(entityName: string) {
        return await this.Entity.retrieve();
    }

    @When(/^I update a ([^"]*)?$/)
    public async updateEntity(entityName: string) {
        return await this.Entity.update();
    }

    @When(/^I delete a ([^"]*)?$/)
    public async deleteEntity(entityName: string) {
        return await this.Entity.delete();
    }

    @Then(/^([^"]*)? should exist$/)
    public async entityShouldExist(entityName: string) {
        expect((await this.Entity.retrieve()).Id).eql(this.Entity.dummy.Id);
    }

    @Then(/^([^"]*)? should be returned$/)
    public async entityShouldBeReturned(entityName: string) {
        expect(this.Entity.temp.Id).eql(this.Entity.dummy.Id);
    }

    @Then(/^([^"]*)? should be updated$/)
    public async entityShouldBeUpdated(entityName: string) {
        expect(this.Entity.property.Name).eql((await this.Entity.retrieve()).Name);
    }

    @Then(/^([^"]*)? should not exist$/)
    public async entityShouldNotExist(entityName: string) {
        expect(await this.Entity.retrieve()).eql("");
    }

}
