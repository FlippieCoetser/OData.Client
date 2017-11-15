import * as request from "request";

export interface Operations<T> {
    create(entity: T): Promise<T>;
    retrieve(id: string): Promise<T>;
    retrieve(): Promise<T[]>;
    delete(id: string): Promise<void>;
}

export class EntitySet<T> implements Operations<T> {
    protected name: string;
    constructor(private options: request.CoreOptions) {
    }
    public async create(entity: T): Promise<T> {
        return new Promise<T>((resolve, reject) =>
            request
            .defaults(this.options)
            .post(this.uri(), {
                headers: {
                "content-type": "application/json",
                },
                body: JSON.stringify(entity),
            }, (error, header, data) =>
                error ? reject(error) : resolve(JSON.parse(data)),
            ),
        );
    }
    public async retrieve(id: any): Promise<T>;
    public async retrieve(): Promise<T[]>;

    public async retrieve(id?: string): Promise<any> {
        return new Promise<any>((resolve, reject) =>
            request
            .defaults(this.options)
            .get(this.uri(id), (error, header, data) => {
                if (data === "") {
                    return resolve("");
                }
                return error ? reject(error) : resolve(this.map(id)(data));
            }),
        );
    }

    public async update(id: string, parameters: any): Promise<void> {
        return new Promise<void>((resolve, reject) =>
            request
            .defaults(this.options)
            .patch(this.uri(id), {
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(parameters),
            }, (error, header, data) =>
                error ? reject(error) : resolve(),
        ),
    );
    }
    public async delete(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) =>
            request
            .defaults(this.options)
            .delete(this.uri(id), (error, header, data) =>
                error ? reject(error) : resolve(),
            ),
        );
    }
     private uri(id?: string) {
         return id === undefined ? this.name : this.name + `(${id})`;
     }
     private map(id?: string) {
         return id === undefined ? ((data) => JSON.parse(data).value) : ((data) => JSON.parse(data));
     }
}
