import { Edm } from "./Edm";
export interface Customer {
    Name: Edm.String;
    CreateDate: Edm.DateTimeOffset;
    EditDate: Edm.DateTimeOffset;
    Street?: Edm.String;
    Zip?: Edm.String;
    City?: Edm.String;
    Phone?: Edm.String;
    Id: Edm.Guid;
    SizeId?: Edm.Guid;
    LastUpdated?: Edm.Binary;
    CountryId?: Edm.String;
    IsDeleted: Edm.Boolean;
    IsModified: Edm.Boolean;
}
