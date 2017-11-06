import { expect } from "chai";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import * as dotenv from "dotenv";
chai.use(sinonChai);
export { expect, chai, sinon, sinonChai};

const result = dotenv.config();
if (result.error) {
    throw result.error;
}
