"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqBulkUpdateUserRoleInOrgDto = exports.ReqBulkUnclaimUserInOrgDto = exports.ReqBulkClaimUserInOrgDto = exports.ResUpdateUserRoleInOrgDto = exports.ReqUpdateUserRoleInOrgDto = exports.ResUnclaimUserInOrgDto = exports.ReqUnclaimUserInOrgDto = exports.ResClaimUserInOrgDto = exports.ReqClaimUserInOrgDto = exports.OrganizationQuery = exports.DmproTokenValidation = exports.UserPersonalData = exports.UserCredential = exports.AuthRequestDto = exports.OrganizationDto = exports.LicenseDto = exports.LocationDto = exports.AreaDto = exports.DmproUserDtoWithDates = exports.DmproUserDto = exports.RequestUserDto = exports.UserImageUrl = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UserImageUrl {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `user imageURL`,
        example: "https://cdncvr.duclo.net/fd121cea-2610-42f0-be75-8cf508bee221/accounts/e047ac6a-b763-41a3-95bb-017d5ebdb62c/profile-1694773305544.png?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuY3ZyLmR1Y2xvLm5ldC9mZDEyMWNlYS0yNjEwLTQyZjAtYmU3NS04Y2Y1MDhiZWUyMjEvYWNjb3VudHMvZTA0N2FjNmEtYjc2My00M1EzLTk1YmItMDE3ZDVlYmRiNjJjL3Byb2ZpbGUtMTY5NDc3MzMwNTU0NC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2OTUxNzE2MjZ9fX1dfQ__&Signature=G9MafWIMyNMuKouTmce90qaM8t-er8wC8jWtIAFC3apuVIankgcBvWf1S9gWcBNS95lJi2g2aogENyUVJoKRSCXw-XnWcDBEoLbCf01Rs13OksiKZBSNP~8sUSvxD83aYsmvHlisfB5WOAwgujHogPkdL6NJykGA4lR1VeW766YV6BnSYo2qD3Oh0DFq00ztPj~zsMCJoldf-OeirjsTtcg~sRm2fyDYtCnramJDzzpfF89IeFbl7jgzfxE98~NgwZx81~MuPhOYEf6zfcC-o~p-fldjbAD1nrhD66~W6UJHKxO0w~oAIlwdp0HEbgnXHYxtFOZaHa-GYZ4AmBQRfQ__&Key-Pair-Id=APKA2F4WRZOGAT47BO76",
        required: true,
    }),
    __metadata("design:type", String)
], UserImageUrl.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `expiry`,
        example: "1695171626000",
        required: true,
    }),
    __metadata("design:type", String)
], UserImageUrl.prototype, "expiry", void 0);
exports.UserImageUrl = UserImageUrl;
class RequestUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestUserDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OrganizationDto),
    __metadata("design:type", Array)
], RequestUserDto.prototype, "organizations", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestUserDto.prototype, "ducloAccessToken", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RequestUserDto.prototype, "ducloRefreshToken", void 0);
exports.RequestUserDto = RequestUserDto;
class DmproUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `userId`,
        example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `firstName`,
        example: `hwan`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `lastName`,
        example: `kim`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `email`,
        example: "hwan.kim@hanwha.com",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `language`,
        example: "en_US",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "accountLanguage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `language`,
        example: "en_US",
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `accountStatus`,
        example: "PENDING_ACTIVATION",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "accountStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `role`,
        example: "Admin",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DmproUserDto.prototype, "portalRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `DM Pro Role`,
        example: "manager | engineer",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(["manager", "enginner"]),
    __metadata("design:type", String)
], DmproUserDto.prototype, "dmproRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `User Claimed to DM Pro`,
        example: "true",
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DmproUserDto.prototype, "dmproClaimed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `isLocked`,
        example: true,
        required: true,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], DmproUserDto.prototype, "isLocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `user image`,
        required: true,
        type: UserImageUrl,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", UserImageUrl)
], DmproUserDto.prototype, "imageUrl", void 0);
exports.DmproUserDto = DmproUserDto;
class DmproUserDtoWithDates extends DmproUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Active Date`,
        example: '1698364592820',
        required: true,
        type: Number,
    }),
    __metadata("design:type", Date)
], DmproUserDtoWithDates.prototype, "activeDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Created Date`,
        example: '1698277376653',
        required: true,
        type: Number,
    }),
    __metadata("design:type", Date)
], DmproUserDtoWithDates.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `Updated date`,
        example: '1701890984919',
        required: true,
        type: Number,
    }),
    __metadata("design:type", Date)
], DmproUserDtoWithDates.prototype, "updatedDate", void 0);
exports.DmproUserDtoWithDates = DmproUserDtoWithDates;
class AreaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Area Id",
        example: "3cec441b-d46d-4aa9-9083-b7e6d648343b",
        required: true,
    }),
    __metadata("design:type", String)
], AreaDto.prototype, "areaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "List of Device Id in Area",
        example: `["ca1b107d-2dbf-497f-b836-7187626569a4", "5fdadae3-8a69-4b77-bdae-40a327dcbeb2"]`,
        required: true,
        isArray: true,
    }),
    __metadata("design:type", Array)
], AreaDto.prototype, "devices", void 0);
exports.AreaDto = AreaDto;
class LocationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Location Id",
        example: "3cec441b-d46d-4aa9-9083-b7e6d648343b",
        required: true,
    }),
    __metadata("design:type", String)
], LocationDto.prototype, "locationId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "List of Area Information in location",
        type: [AreaDto],
        required: true,
    }),
    __metadata("design:type", Array)
], LocationDto.prototype, "areas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "List of Device Id in location",
        example: `["e68477b5-20f2-4ad1-9f87-a6a3ca35f414"]`,
        required: true,
        isArray: true,
    }),
    __metadata("design:type", Array)
], LocationDto.prototype, "devices", void 0);
exports.LocationDto = LocationDto;
class LicenseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "License Id",
        example: "39f35a25-ebd6-499f-8e44-d58e88500d8e",
        required: true,
    }),
    __metadata("design:type", String)
], LicenseDto.prototype, "licenseId", void 0);
exports.LicenseDto = LicenseDto;
class OrganizationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "OrganizationId",
        example: "b45f4f01-003d-4152-b752-945cf3be0785",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "orgId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "OrganizationName",
        example: "DMPro Customer Organization",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "orgName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "OrganizationType",
        example: "CUSTOMER_ORG",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "orgType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Address line 1",
        example: "6 Pangyo-ro 319beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "addressLine1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Address line 2",
        example: "",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "addressLine2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "city",
        example: "Seongnam-si",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "stateName",
        example: "Gyeonggi-do",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "stateName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "country",
        example: "South Korea",
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrganizationDto.prototype, "country", void 0);
exports.OrganizationDto = OrganizationDto;
class AuthRequestDto extends Request {
}
__decorate([
    (0, class_transformer_1.Type)(() => RequestUserDto),
    __metadata("design:type", RequestUserDto)
], AuthRequestDto.prototype, "user", void 0);
exports.AuthRequestDto = AuthRequestDto;
class UserCredential {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User email",
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCredential.prototype, "wid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User password",
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserCredential.prototype, "password", void 0);
exports.UserCredential = UserCredential;
class UserPersonalData {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "category for personalization",
        example: "dmpro",
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPersonalData.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "User data for personalization\n\n User can freely save json format data",
        example: { bookmark: "HelloWorld" },
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Object)
], UserPersonalData.prototype, "data", void 0);
exports.UserPersonalData = UserPersonalData;
class DmproTokenValidation {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "category for personalization",
        example: "dmpro",
        required: true,
    }),
    __metadata("design:type", Boolean)
], DmproTokenValidation.prototype, "validAccessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "category for personalization",
        example: "dmpro",
        required: true,
    }),
    __metadata("design:type", Boolean)
], DmproTokenValidation.prototype, "validRefreshToken", void 0);
exports.DmproTokenValidation = DmproTokenValidation;
class OrganizationQuery {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OrganizationQuery.prototype, "organization-id", void 0);
exports.OrganizationQuery = OrganizationQuery;
class ReqClaimUserInOrgDto extends (0, swagger_1.PickType)(DmproUserDto, [
    "userId",
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `userId`,
        example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReqClaimUserInOrgDto.prototype, "userId", void 0);
exports.ReqClaimUserInOrgDto = ReqClaimUserInOrgDto;
class ResClaimUserInOrgDto extends (0, swagger_1.PickType)(DmproUserDto, [
    "userId",
    "dmproClaimed",
    "dmproRole",
]) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResClaimUserInOrgDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ResClaimUserInOrgDto.prototype, "dmproClaimed", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResClaimUserInOrgDto.prototype, "dmproRole", void 0);
exports.ResClaimUserInOrgDto = ResClaimUserInOrgDto;
class ReqUnclaimUserInOrgDto extends (0, swagger_1.PickType)(DmproUserDto, [
    "userId",
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `userId`,
        example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReqUnclaimUserInOrgDto.prototype, "userId", void 0);
exports.ReqUnclaimUserInOrgDto = ReqUnclaimUserInOrgDto;
class ResUnclaimUserInOrgDto extends (0, swagger_1.PickType)(DmproUserDto, [
    "userId",
    "dmproClaimed",
    "dmproRole",
]) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResUnclaimUserInOrgDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `User Claimed to DM Pro`,
        example: "false",
        required: true,
    }),
    __metadata("design:type", Boolean)
], ResUnclaimUserInOrgDto.prototype, "dmproClaimed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `DM Pro Role`,
        example: "NULL",
        required: true,
    }),
    __metadata("design:type", String)
], ResUnclaimUserInOrgDto.prototype, "dmproRole", void 0);
exports.ResUnclaimUserInOrgDto = ResUnclaimUserInOrgDto;
class ReqUpdateUserRoleInOrgDto extends (0, swagger_1.PickType)(DmproUserDto, [
    "userId",
    "dmproRole",
]) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `userId`,
        example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReqUpdateUserRoleInOrgDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `DM Pro Role`,
        example: "manager | engineer",
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(["manager", "engineer"]),
    __metadata("design:type", String)
], ReqUpdateUserRoleInOrgDto.prototype, "dmproRole", void 0);
exports.ReqUpdateUserRoleInOrgDto = ReqUpdateUserRoleInOrgDto;
class ResUpdateUserRoleInOrgDto extends (0, swagger_1.PickType)(DmproUserDto, [
    "userId",
    "dmproRole",
]) {
}
exports.ResUpdateUserRoleInOrgDto = ResUpdateUserRoleInOrgDto;
class ReqBulkClaimUserInOrgDto {
}
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, swagger_1.ApiProperty)({
        description: 'list of UserRole',
        type: [ReqClaimUserInOrgDto]
    }),
    (0, class_validator_1.ArrayMinSize)(1),
    __metadata("design:type", Array)
], ReqBulkClaimUserInOrgDto.prototype, "users", void 0);
exports.ReqBulkClaimUserInOrgDto = ReqBulkClaimUserInOrgDto;
class ReqBulkUnclaimUserInOrgDto {
}
__decorate([
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ArrayMaxSize)(10),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, swagger_1.ApiProperty)({
        description: 'list of UserRole',
        type: [ReqUnclaimUserInOrgDto]
    }),
    __metadata("design:type", Array)
], ReqBulkUnclaimUserInOrgDto.prototype, "users", void 0);
exports.ReqBulkUnclaimUserInOrgDto = ReqBulkUnclaimUserInOrgDto;
class ReqBulkUpdateUserRoleInOrgDto {
}
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, swagger_1.ApiProperty)({
        description: 'list of UserRole',
        type: [ReqUpdateUserRoleInOrgDto]
    }),
    __metadata("design:type", Array)
], ReqBulkUpdateUserRoleInOrgDto.prototype, "users", void 0);
exports.ReqBulkUpdateUserRoleInOrgDto = ReqBulkUpdateUserRoleInOrgDto;
//# sourceMappingURL=user.dto.js.map