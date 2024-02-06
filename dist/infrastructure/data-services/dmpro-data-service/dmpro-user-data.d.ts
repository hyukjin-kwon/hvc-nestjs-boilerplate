import { IGenericData } from "../core/abstracts/generic-data.abstract";
import { DucloCallerService } from "@cloud-development-team/duclo-caller.module";
import { DmproDataUserDto, PortalCredential } from "../core/dto/dmpro-data.dto";
import { IDatabaseService } from "src/infrastructure/database-services/core/abstracts/database-service.abstract";
export declare class DmproUserData implements IGenericData<DmproDataUserDto, PortalCredential> {
    private readonly _ducloCallerService;
    private _dataServices;
    constructor(dataServices: IDatabaseService, ducloCallerService: DucloCallerService);
    get(id: string, additionalInfo: PortalCredential): Promise<DmproDataUserDto>;
}
