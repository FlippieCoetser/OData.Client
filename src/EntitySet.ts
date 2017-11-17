import * as request from "request";
import { CRUD } from "./CRUD";

export type Options = request.CoreOptions;

export class EntitySet<T> implements CRUD<T> {
    private request;
    private options: Options;
    public name: string;
    constructor(endPoint: string, token?: string) {
        this.options = {};
        this.options.baseUrl = endPoint;
        this._setAuthorizationToken(token);
        this.request = request.defaults(this.options);
    }
    // Create Operation
    public async create(entity: T): Promise<T> {
        return new Promise<T>((resolve, reject) =>
            this.request
                .post(this._uri(),
                    this._parameter(entity),
                    (error, header, data) =>
                        error ? reject(error) : resolve(JSON.parse(data)),
                ),
        );
    }
    // Retrieve Operation
    public async retrieve(id: string): Promise<T>;
    public async retrieve(): Promise<T[]>;
    public async retrieve(id?: string): Promise<any> {
        return new Promise<any>((resolve, reject) =>
            this.request
                .get(this._uri(id),
                    (error, header, data) => {
                        if (data === "") {
                            return resolve("");
                        }
                        return error ? reject(error) : resolve(this._map(id)(data));
                    },
                ),
        );
    }
    // Update Operation
    public async update(id: string, parameters: any): Promise<void> {
        return new Promise<void>((resolve, reject) =>
            this.request
                .patch(this._uri(id),
                    this._parameter(parameters),
                    (error, header, data) =>
                        error ? reject(error) : resolve(),
                ),
        );
    }
    // Delete Operation
    public async delete(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) =>
            this.request
                .delete(this._uri(id), (error, header, data) =>
                    error ? reject(error) : resolve(),
                ),
        );
    }
    // When an Id is supplied adapt the URL
    private _uri(id?: string): string {
        return id === undefined ? this.name : this.name + `(${id})`;
    }
    // When an Id is supplied adapt the parsing of the output
    private _map(id?: string) {
        return id === undefined ? ((data) => JSON.parse(data).value) : ((data) => JSON.parse(data));
    }
    // When Create or Update Operation adapt request header and body
    private _parameter(data: any) {
        return {
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        };
    }
    // When Bearer token was supplied adapt request header
    private _setAuthorizationToken(token?: string) {
        this.options.headers = {};
        this.options.headers.authorization = `Bearer ${token}`;
    }
}
