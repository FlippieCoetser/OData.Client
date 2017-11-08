
import { Authenticator, Parameters } from "../src/Authenticator";

let parameters: Parameters = {
    authorityHostUrl: process.env.AUTHORITY_HOST_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    resource: process.env.RESOURCE,
    tenant: process.env.TENANT,
};

export let authenticator = new Authenticator(parameters);