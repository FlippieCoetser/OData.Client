import * as dotenv from "dotenv";
import { Authenticator, Parameters } from "../../src/Authenticator";
import { OData } from "../../src/OData";
export { OData } from "../../src/OData";
export class API {
    private static loadVariables(): void {
        const result = dotenv.config();
        if (result.error) {
            throw result.error;
        }
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
    private static async getToken(): Promise<string> {
        let authenticator = new Authenticator(API.paramaters);
        return await authenticator.getToken();
    }
    public static async get(): Promise<OData> {
        let token = await API.getToken();
        let endPoint = "https://idiscover-api-qa.azurewebsites.net/odata/";
        return new OData(endPoint, token);
    }
}