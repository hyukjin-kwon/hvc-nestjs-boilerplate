import { RequestUserDto } from "src/domain/core/dto/user.dto";
import { IDataService } from "src/infrastructure/data-services/core/abstracts/data-service.abstract";
export declare class UserManagementService {
    private dataServices;
    constructor(dataServices: IDataService);
    getUser(user: RequestUserDto, orgId: string): Promise<any>;
}
