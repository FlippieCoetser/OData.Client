import { OData } from "./OData";

export interface Create<T> {
    (entity: T): Promise<T>;
}

export interface Retrieve<T> {
    (id: string): Promise<T>;
    (): Promise<T[]>;
}

export interface Delete<T> {
    (id: string): Promise<void>;
}
export class EntitySet<T> {
    public name: string;
    constructor(private OData: OData) {
    };

    public create: Create<T> = async(entity: T) => new Promise<T>((resolve, reject) =>
        this.OData
            .request()
            .post(this.uri(), {
                headers: {
                "content-type": "application/json",
                },
                body: JSON.stringify(entity),
            }, (error, header, data) =>
                error ? reject(error) : resolve(JSON.parse(data))
            )
    )

    public retrieve: Retrieve<T> = async (id?: any) => new Promise<any>((resolve, reject) =>
        this.OData
            .request()
            .get(this.uri(id), (error, header, data) => {
                if (data === "") {
                    return resolve("");
                };
                return error ? reject(error) : resolve(this.map(id)(data));
            })
    );

    public delete: Delete<T> = async(id: string) => new Promise<void>((resolve, reject) =>
        this.OData
            .request()
            .delete(this.uri(id), (error, header, data) =>
                error ? reject(error) : resolve()
            )
    )

     private uri(id?: string) {
         return id === undefined ? this.name : this.name + `(${id})`;
     }
     private map(id?: string) {
         return id === undefined ? ((data) => JSON.parse(data).value) : ((data) => JSON.parse(data));
     }
}
