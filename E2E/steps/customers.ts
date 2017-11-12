import { Cucumber, Before, Given, When, Then } from "cucumber.decorators";
import { expect } from "chai";
import { OData } from "../../src/OData";
import { customer } from "./customer";
import { API } from "./api";

@Cucumber
export class Customers {
    private api: OData;
    @Before("@API")
    public async before() {
        this.api = await API.get();
    }
    @Given("customer does not exist")
    public async customerShouldNotExist() {
        await this.api.customers().delete(customer.Id);
        expect((await this.api.customers().retrieve(customer.Id)).Id).eql(undefined);
    }

    @When("I create a customer")
    public async creatCustomer() {
        await this.api.customers().create(customer);
    }

    @Then("customer should exist")
    public async customerShouldExist() {
        expect((await this.api.customers().retrieve(customer.Id)).Id).eql(customer.Id);
    }
}
