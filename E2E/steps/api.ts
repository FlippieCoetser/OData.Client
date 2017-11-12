import * as dotenv from "dotenv";
import { Authenticator, Parameters } from "../../src/Authenticator";
import { OData } from "../../src/OData";

export class API {
    private static loadVariables() {
        const result = dotenv.config();
        if (result.error) {
            throw result.error;
        }
    }

    private static async getToken() {
        let authenticator = new Authenticator(API.paramaters);
        return await authenticator.getToken();
    }
    private static get paramaters(): Parameters {
        API.loadVariables();
        return  {
            authorityHostUrl: process.env.AUTHORITY_HOST_URL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            resource: process.env.RESOURCE,
            tenant: process.env.TENANT,
        };
    }
    public static async get() {
        let token = await API.getToken();
        let endPoint = "https://idiscover-api-qa.azurewebsites.net/odata/";
        return new OData(endPoint, token);
    }
}