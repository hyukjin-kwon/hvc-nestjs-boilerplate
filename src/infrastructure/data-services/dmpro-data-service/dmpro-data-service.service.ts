import { Injectable } from "@nestjs/common";
import { IDataService } from "../core/abstracts/data-service.abstract";
import { DmproUserData } from "./dmpro-user-data";

import { DucloCallerService, UserDto } from "@cloud-development-team/duclo-caller.module";
import { IDatabaseService } from "src/infrastructure/database-services/core/abstracts/database-service.abstract";


@Injectable()
export class DmproDataService implements IDataService
{
  user: DmproUserData
  
  constructor(
    private readonly ducloCallerService: DucloCallerService,
    private dataServices: IDatabaseService,
  ) {
    this.user = new DmproUserData(dataServices,ducloCallerService) 
  }

}
