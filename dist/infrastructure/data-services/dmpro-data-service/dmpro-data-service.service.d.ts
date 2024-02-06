import { IDataService } from "../core/abstracts/data-service.abstract";
import { DmproUserData } from "./dmpro-user-data";
import { DucloCallerService } from "@cloud-development-team/duclo-caller.module";
import { IDatabaseService } from "src/infrastructure/database-services/core/abstracts/database-service.abstract";
export declare class DmproDataService implements IDataService {
    private readonly ducloCallerService;
    private dataServices;
    user: DmproUserData;
    constructor(ducloCallerService: DucloCallerService, dataServices: IDatabaseService);
}
