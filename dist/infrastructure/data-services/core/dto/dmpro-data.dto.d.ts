import { UserDto } from "@cloud-development-team/duclo-caller.module";
export interface PortalCredential {
    ducloAccessToken: string;
    userId?: string;
    orgId?: string;
}
export interface DmproDataUserDto extends UserDto {
    dmproRole?: string;
    dmproClaimed: boolean;
}
