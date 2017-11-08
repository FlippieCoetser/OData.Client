import { Cucumber, Before, Given, When , Then } from "cucumber.decorators";
import * as dotenv from "dotenv";
import { expect } from "chai";
import { Authenticator, Parameters } from "../../src/Authenticator";
import { OData } from "../../src/OData";
import { customer } from "../../test/example.customer";

@Cucumber
export class Test {
    private token: string;
    private api: OData;
    @Before("@API")
    public async before() {
        const result = dotenv.config();
        if (result.error) {
            throw result.error;
        }
        let parameters: Parameters = {
            authorityHostUrl: process.env.AUTHORITY_HOST_URL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            resource: process.env.RESOURCE,
            tenant: process.env.TENANT,
        };

        let authenticator = new Authenticator(parameters);
        this.token = await authenticator.getToken();
        let endPoint = "https://idiscover-api-qa.azurewebsites.net/odata/";
        this.api = new OData(endPoint, this.token);
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
