export interface CRUD<T> {
    name: string;
    create(entity: T): Promise<T>;
    retrieve(id: string): Promise<T>;
    retrieve(): Promise<T[]>;
    update(id: string, parameters: any): Promise<void>;
    delete(id: string): Promise<void>;
}