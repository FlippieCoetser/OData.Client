import {AuthenticationContext} from "adal-node";

export interface Parameters {
    tenant: string;
    authorityHostUrl: string;
    resource: string;         // Azure Active Directory: App ID URI
    clientId: string;         // Azure Active Directory: Application ID
    clientSecret: string;     // Azure Active Directory: Keys
}

export class Authenticator {
    private context: AuthenticationContext;
    constructor(private parameters: Parameters) {
        let authorityUrl = `${parameters.authorityHostUrl}/${parameters.tenant}`;
        this.context = new AuthenticationContext(authorityUrl);
    }

    public async getToken() {
               let resource = this.parameters.resource;
               let clientId = this.parameters.clientId;
               let clientSecret = this.parameters.clientSecret;
               return new Promise<string>((resolve, reject) => {
                   this.context.acquireTokenWithClientCredentials(resource, clientId, clientSecret,
                       (error, token: any) => error ? reject(error) : resolve(token.accessToken),
                   );
               });
    }
}
