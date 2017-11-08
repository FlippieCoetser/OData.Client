import { Cucumber, Before, Given, When , Then } from "cucumber.decorators";
import { expect } from "chai";


@Cucumber
export class Test {
    public answer: number;

    @Given("I start with {int}")
    public start(input: number) {
        this.answer = input;
    }

    @When("I add {int}")
    public add(input:  number) {
        this.answer = this.answer + input;
    }

    @When("I multiply by {int}")
    public multiply(input: number) {
        this.answer = this.answer * input;
    }

    @Then("I end up with {int}")
    public end(input: number) {
        expect(this.answer).to.equal(input);
    }

}
