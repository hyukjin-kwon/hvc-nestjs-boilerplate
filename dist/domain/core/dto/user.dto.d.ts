import { TokenValidation } from "@cloud-development-team/duclo-caller.module";
export declare class UserImageUrl {
    url: string;
    expiry: string;
}
export declare class RequestUserDto {
    userId: string;
    organizations: OrganizationDto[];
    ducloAccessToken: string;
    ducloRefreshToken: string;
}
export declare class DmproUserDto {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    accountLanguage: string;
    phoneNumber?: string;
    accountStatus: string;
    portalRole: string;
    dmproRole: string;
    dmproClaimed: boolean;
    isLocked: boolean;
    imageUrl?: UserImageUrl;
}
export declare class DmproUserDtoWithDates extends DmproUserDto {
    activeDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
}
export declare class AreaDto {
    areaId: string;
    devices: string[];
}
export declare class LocationDto {
    locationId: string;
    areas: AreaDto[];
    devices: string[];
}
export declare class LicenseDto {
    licenseId: string;
}
export declare class OrganizationDto {
    orgId: string;
    orgName: string;
    orgType: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    stateName: string;
    country: string;
}
export declare class AuthRequestDto extends Request {
    user: RequestUserDto;
    cookies: object;
}
export declare class UserCredential {
    wid: string;
    password: string;
}
export declare class UserPersonalData {
    category: string;
    data: object;
}
export declare class DmproTokenValidation implements TokenValidation {
    validAccessToken?: boolean;
    validRefreshToken?: boolean;
}
export declare class OrganizationQuery {
    "organization-id": string;
}
declare const ReqClaimUserInOrgDto_base: import("@nestjs/common").Type<Pick<DmproUserDto, "userId">>;
export declare class ReqClaimUserInOrgDto extends ReqClaimUserInOrgDto_base {
    userId: string;
}
declare const ResClaimUserInOrgDto_base: import("@nestjs/common").Type<Pick<DmproUserDto, "userId" | "dmproRole" | "dmproClaimed">>;
export declare class ResClaimUserInOrgDto extends ResClaimUserInOrgDto_base {
    userId: string;
    dmproClaimed: boolean;
    dmproRole: string;
}
declare const ReqUnclaimUserInOrgDto_base: import("@nestjs/common").Type<Pick<DmproUserDto, "userId">>;
export declare class ReqUnclaimUserInOrgDto extends ReqUnclaimUserInOrgDto_base {
    userId: string;
}
declare const ResUnclaimUserInOrgDto_base: import("@nestjs/common").Type<Pick<DmproUserDto, "userId" | "dmproRole" | "dmproClaimed">>;
export declare class ResUnclaimUserInOrgDto extends ResUnclaimUserInOrgDto_base {
    userId: string;
    dmproClaimed: boolean;
    dmproRole: string;
}
declare const ReqUpdateUserRoleInOrgDto_base: import("@nestjs/common").Type<Pick<DmproUserDto, "userId" | "dmproRole">>;
export declare class ReqUpdateUserRoleInOrgDto extends ReqUpdateUserRoleInOrgDto_base {
    userId: string;
    dmproRole: string;
}
declare const ResUpdateUserRoleInOrgDto_base: import("@nestjs/common").Type<Pick<DmproUserDto, "userId" | "dmproRole">>;
export declare class ResUpdateUserRoleInOrgDto extends ResUpdateUserRoleInOrgDto_base {
}
export declare class ReqBulkClaimUserInOrgDto {
    users: ReqClaimUserInOrgDto[];
}
export declare class ReqBulkUnclaimUserInOrgDto {
    users: ReqUnclaimUserInOrgDto[];
}
export declare class ReqBulkUpdateUserRoleInOrgDto {
    users: ReqUpdateUserRoleInOrgDto[];
}
export {};
