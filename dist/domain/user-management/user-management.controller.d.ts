import { AuthRequestDto, DmproUserDtoWithDates, OrganizationQuery } from "src/domain/core/dto/user.dto";
import { UserManagementService } from "./user-management.service";
export declare class UserManagementController {
    private userManagementService;
    constructor(userManagementService: UserManagementService);
    getUserInfo(req: AuthRequestDto, orgnizationQuery: OrganizationQuery): Promise<DmproUserDtoWithDates>;
}
