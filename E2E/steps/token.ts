import * as dotenv from "dotenv";
import { Authenticator, Parameters } from "../../src/Authenticator";

export class Token {
    private static loadVariables(): void {
        const result = dotenv.config();
        if (result.error) {
            throw result.error;
        }
    }
    private static get paramaters(): Parameters {
        Token.loadVariables();
        return  {
            authorityHostUrl: process.env.AUTHORITY_HOST_URL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            resource: process.env.RESOURCE,
            tenant: process.env.TENANT,
        };
    }
    public static async get(): Promise<string> {
        let authenticator = new Authenticator(Token.paramaters);
        return await authenticator.getToken();
    }
}