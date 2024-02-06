import { IGenericData } from "./generic-data.abstract";
import { DmproDataUserDto, PortalCredential } from "../dto/dmpro-data.dto";
export declare abstract class IDataService {
    abstract user: IGenericData<DmproDataUserDto, PortalCredential>;
}
