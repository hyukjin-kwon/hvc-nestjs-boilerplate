
import { IGenericData } from "../core/abstracts/generic-data.abstract"
import { DucloCallerService, UserDto } from "@cloud-development-team/duclo-caller.module"
import { DmproDataUserDto, PortalCredential } from "../core/dto/dmpro-data.dto"
import { IDatabaseService } from "src/infrastructure/database-services/core/abstracts/database-service.abstract"




export class DmproUserData implements IGenericData<DmproDataUserDto,PortalCredential> {
    private readonly _ducloCallerService: DucloCallerService
    private _dataServices: IDatabaseService

    constructor( dataServices: IDatabaseService, ducloCallerService: DucloCallerService ) {
        this._ducloCallerService = ducloCallerService
        this._dataServices = dataServices        
    }

    async get(id : string, additionalInfo : PortalCredential): Promise<DmproDataUserDto> {
        let dmproDataUserDto :  DmproDataUserDto        
        const userInfo: UserDto = await this._ducloCallerService.getUserInfo(
            id,
            additionalInfo.orgId,
            additionalInfo.ducloAccessToken
        );
        const userRole = await this._dataServices.userRole.get({
            userId : id
        });

        dmproDataUserDto = {
            dmproClaimed : userRole !== null ? true: false,
            dmproRole : userRole !== null ? userRole.dmproRole: undefined,
            ...userInfo
        }
        
        return dmproDataUserDto
    }

}
