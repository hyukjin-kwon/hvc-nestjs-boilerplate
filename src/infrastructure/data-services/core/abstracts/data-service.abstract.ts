import { IGenericData } from "./generic-data.abstract";
import { DmproDataUserDto, PortalCredential } from "../dto/dmpro-data.dto";
import { DmproUserData } from "../../dmpro-data-service/dmpro-user-data";


export abstract class IDataService {  
  abstract user : IGenericData<DmproDataUserDto,PortalCredential>
}