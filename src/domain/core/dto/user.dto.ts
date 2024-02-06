import { ApiProperty, IntersectionType, PickType } from "@nestjs/swagger";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateIf,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { TokenValidation } from "@cloud-development-team/duclo-caller.module";


export class UserImageUrl {
  @ApiProperty({
    description: `user imageURL`,
    example:
      "https://cdncvr.duclo.net/fd121cea-2610-42f0-be75-8cf508bee221/accounts/e047ac6a-b763-41a3-95bb-017d5ebdb62c/profile-1694773305544.png?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuY3ZyLmR1Y2xvLm5ldC9mZDEyMWNlYS0yNjEwLTQyZjAtYmU3NS04Y2Y1MDhiZWUyMjEvYWNjb3VudHMvZTA0N2FjNmEtYjc2My00M1EzLTk1YmItMDE3ZDVlYmRiNjJjL3Byb2ZpbGUtMTY5NDc3MzMwNTU0NC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2OTUxNzE2MjZ9fX1dfQ__&Signature=G9MafWIMyNMuKouTmce90qaM8t-er8wC8jWtIAFC3apuVIankgcBvWf1S9gWcBNS95lJi2g2aogENyUVJoKRSCXw-XnWcDBEoLbCf01Rs13OksiKZBSNP~8sUSvxD83aYsmvHlisfB5WOAwgujHogPkdL6NJykGA4lR1VeW766YV6BnSYo2qD3Oh0DFq00ztPj~zsMCJoldf-OeirjsTtcg~sRm2fyDYtCnramJDzzpfF89IeFbl7jgzfxE98~NgwZx81~MuPhOYEf6zfcC-o~p-fldjbAD1nrhD66~W6UJHKxO0w~oAIlwdp0HEbgnXHYxtFOZaHa-GYZ4AmBQRfQ__&Key-Pair-Id=APKA2F4WRZOGAT47BO76",
    required: true,
  })
  url: string;

  @ApiProperty({
    description: `expiry`,
    example: "1695171626000",
    required: true,
  })
  expiry: string;
}

export class RequestUserDto {
  @IsString()
  userId: string;

  @ValidateNested({ each: true })
  @Type(() => OrganizationDto)
  organizations: OrganizationDto[];

  @IsString()
  ducloAccessToken: string;

  @IsString()
  ducloRefreshToken: string;
}

export class DmproUserDto {
  @ApiProperty({
    description: `userId`,
    example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
    required: true,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: `firstName`,
    example: `hwan`,
    required: true,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: `lastName`,
    example: `kim`,
    required: true,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: `email`,
    example: "hwan.kim@hanwha.com",
    required: true,
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: `language`,
    example: "en_US",
    required: true,
  })
  @IsString()
  accountLanguage: string;

  @ApiProperty({
    description: `language`,
    example: "en_US",
    required: false,
  })
  @IsString()
  phoneNumber?: string;

  @ApiProperty({
    description: `accountStatus`,
    example: "PENDING_ACTIVATION",
    required: true,
  })
  @IsString()
  accountStatus: string;

  @ApiProperty({
    description: `role`,
    example: "Admin",
    required: true,
  })
  @IsString()
  portalRole: string;

  @ApiProperty({
    description: `DM Pro Role`,
    example: "manager | engineer",
    required: true,
  })
  @IsString()
  @IsIn(["manager", "enginner"])
  dmproRole: string;

  @ApiProperty({
    description: `User Claimed to DM Pro`,
    example: "true",
    required: true,
  })
  @IsBoolean()
  dmproClaimed: boolean;

  @ApiProperty({
    description: `isLocked`,
    example: true,
    required: true,
  })
  @IsBoolean()
  isLocked: boolean;

  @ApiProperty({
    description: `user image`,
    required: true,
    type: UserImageUrl,
  })
  @IsOptional()
  @IsString()
  imageUrl?: UserImageUrl;
}

export class DmproUserDtoWithDates extends DmproUserDto {
  @ApiProperty({
    description: `Active Date`,
    example: '1698364592820',
    required: true,
    type: Number,
  })
  activeDate?: Date;
  @ApiProperty({
    description: `Created Date`,
    example: '1698277376653',
    required: true,
    type: Number,
  })
  createdDate?: Date;
  @ApiProperty({
    description: `Updated date`,
    example: '1701890984919',
    required: true,
    type: Number,
  })
  updatedDate?: Date;
}

// export class DmproUserDtoWithDates extends IntersectionType(DmproUserDto, AdditionalDmproUser) {}



export class AreaDto {
  @ApiProperty({
    description: "Area Id",
    example: "3cec441b-d46d-4aa9-9083-b7e6d648343b",
    required: true,
  })
  areaId: string;
  @ApiProperty({
    description: "List of Device Id in Area",
    example: `["ca1b107d-2dbf-497f-b836-7187626569a4", "5fdadae3-8a69-4b77-bdae-40a327dcbeb2"]`,
    required: true,
    isArray: true,
  })
  devices: string[];
}

export class LocationDto {
  @ApiProperty({
    description: "Location Id",
    example: "3cec441b-d46d-4aa9-9083-b7e6d648343b",
    required: true,
  })
  locationId: string;
  @ApiProperty({
    description: "List of Area Information in location",
    type: [AreaDto],
    required: true,
  })
  areas: AreaDto[];
  @ApiProperty({
    description: "List of Device Id in location",
    example: `["e68477b5-20f2-4ad1-9f87-a6a3ca35f414"]`,
    required: true,
    isArray: true,
  })
  devices: string[];
}

export class LicenseDto {
  @ApiProperty({
    description: "License Id",
    example: "39f35a25-ebd6-499f-8e44-d58e88500d8e",
    required: true,
  })
  licenseId: string;
}

export class OrganizationDto {
  @ApiProperty({
    description: "OrganizationId",
    example: "b45f4f01-003d-4152-b752-945cf3be0785",
    required: true,
  })
  @IsString()
  orgId: string;

  @ApiProperty({
    description: "OrganizationName",
    example: "DMPro Customer Organization",
    required: true,
  })
  @IsOptional()
  @IsString()
  orgName: string;

  @ApiProperty({
    description: "OrganizationType",
    example: "CUSTOMER_ORG",
    required: true,
  })
  @IsOptional()
  @IsString()
  orgType: string;

  @ApiProperty({
    description: "Address line 1",
    example:
      "6 Pangyo-ro 319beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, South Korea",
    required: true,
  })
  @IsOptional()
  @IsString()
  addressLine1: string;

  @ApiProperty({
    description: "Address line 2",
    example: "",
    required: true,
  })
  @IsOptional()
  @IsString()
  addressLine2: string;

  @ApiProperty({
    description: "city",
    example: "Seongnam-si",
    required: true,
  })
  @IsOptional()
  @IsString()
  city: string;

  @ApiProperty({
    description: "stateName",
    example: "Gyeonggi-do",
    required: true,
  })
  @IsOptional()
  @IsString()
  stateName: string;

  @ApiProperty({
    description: "country",
    example: "South Korea",
    required: true,
  })
  @IsOptional()
  @IsString()
  country: string;
}

export class AuthRequestDto extends Request {
  @Type(() => RequestUserDto)
  user: RequestUserDto;
  cookies: object;
}

export class UserCredential {
  @ApiProperty({
    //   example: 'f1816f57-e796-4673-80be-81e222dafa34',
    description: "User email",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  wid: string;

  @ApiProperty({
    //   example: 'f1816f57-e796-4673-80be-81e222dafa34',
    description: "User password",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UserPersonalData {
  @ApiProperty({
    description: "category for personalization",
    example: "dmpro",
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty({
    description:
      "User data for personalization\n\n User can freely save json format data",
    example: { bookmark: "HelloWorld" },
    required: true,
  })
  @IsNotEmpty()
  // @IsJSON()
  data: object;
}

export class DmproTokenValidation implements TokenValidation {
  @ApiProperty({
    description: "category for personalization",
    example: "dmpro",
    required: true,
  })
  validAccessToken?: boolean;

  @ApiProperty({
    description: "category for personalization",
    example: "dmpro",
    required: true,
  })
  validRefreshToken?: boolean;
}

export class OrganizationQuery {
  @IsNotEmpty()
  @IsUUID()
  "organization-id": string;
}

export class ReqClaimUserInOrgDto extends PickType(DmproUserDto, [
  "userId" as const,
]) {
  @ApiProperty({
    description: `userId`,
    example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class ResClaimUserInOrgDto extends PickType(DmproUserDto, [
  "userId" as const,
  "dmproClaimed" as const,
  "dmproRole" as const,
]) {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  dmproClaimed: boolean;

  @IsNotEmpty()
  dmproRole: string;
}

export class ReqUnclaimUserInOrgDto extends PickType(DmproUserDto, [
  "userId" as const,
]) {
  @ApiProperty({
    description: `userId`,
    example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  userId: string;
}

export class ResUnclaimUserInOrgDto extends PickType(DmproUserDto, [
  "userId" as const,
  "dmproClaimed" as const,
  "dmproRole" as const,
]) {
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: `User Claimed to DM Pro`,
    example: "false",
    required: true,
  })
  dmproClaimed: boolean;

  @ApiProperty({
    description: `DM Pro Role`,
    example: "NULL",
    required: true,
  })
  dmproRole: string;
}

export class ReqUpdateUserRoleInOrgDto extends PickType(DmproUserDto, [
  "userId" as const,
  "dmproRole" as const,
]) {
  @ApiProperty({
    description: `userId`,
    example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: `DM Pro Role`,
    example: "manager | engineer",
    required: true,
  })
  @IsString()
  @IsIn(["manager", "engineer"])
  dmproRole: string;
}

export class ResUpdateUserRoleInOrgDto extends PickType(DmproUserDto, [
  "userId" as const,
  "dmproRole" as const,
]) {}

export class ReqBulkClaimUserInOrgDto {
  @ValidateNested({ each: true })
  @ApiProperty({
    description: 'list of UserRole',
    type: [ReqClaimUserInOrgDto]
  })
  @ArrayMinSize(1)
  users: ReqClaimUserInOrgDto[]
}

export class ReqBulkUnclaimUserInOrgDto {
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @ValidateNested({ each: true })
  @ApiProperty({
    description: 'list of UserRole',
    type: [ReqUnclaimUserInOrgDto]
  })
  users: ReqUnclaimUserInOrgDto[]
}

export class ReqBulkUpdateUserRoleInOrgDto {
  @ValidateNested({ each: true })
  @ApiProperty({
    description: 'list of UserRole',
    type: [ReqUpdateUserRoleInOrgDto]
  })
  users: ReqUpdateUserRoleInOrgDto[]
}

// export class UserImageUrl {
//   @ApiProperty({
//     description: `user imageURL`,
//     example: "https://cdncvr.duclo.net/fd121cea-2610-42f0-be75-8cf508bee221/accounts/e047ac6a-b763-41a3-95bb-017d5ebdb62c/profile-1694773305544.png?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuY3ZyLmR1Y2xvLm5ldC9mZDEyMWNlYS0yNjEwLTQyZjAtYmU3NS04Y2Y1MDhiZWUyMjEvYWNjb3VudHMvZTA0N2FjNmEtYjc2My00M1EzLTk1YmItMDE3ZDVlYmRiNjJjL3Byb2ZpbGUtMTY5NDc3MzMwNTU0NC5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2OTUxNzE2MjZ9fX1dfQ__&Signature=G9MafWIMyNMuKouTmce90qaM8t-er8wC8jWtIAFC3apuVIankgcBvWf1S9gWcBNS95lJi2g2aogENyUVJoKRSCXw-XnWcDBEoLbCf01Rs13OksiKZBSNP~8sUSvxD83aYsmvHlisfB5WOAwgujHogPkdL6NJykGA4lR1VeW766YV6BnSYo2qD3Oh0DFq00ztPj~zsMCJoldf-OeirjsTtcg~sRm2fyDYtCnramJDzzpfF89IeFbl7jgzfxE98~NgwZx81~MuPhOYEf6zfcC-o~p-fldjbAD1nrhD66~W6UJHKxO0w~oAIlwdp0HEbgnXHYxtFOZaHa-GYZ4AmBQRfQ__&Key-Pair-Id=APKA2F4WRZOGAT47BO76",
//     required: true,
//   })
//   url : string;

//   @ApiProperty({
//     description: `expiry`,
//     example: "1695171626000",
//     required: true,
//   })
//   expiry: string
// }

// export class UserInfo {

//   @ApiProperty({
//     description: `userId`,
//     example: `080d7837-1631-424b-96d3-6876f82ffc0c`,
//     required: true,
//   })
//   @IsString()
//   userId : string;

//   @ApiProperty({
//     description: `firstName`,
//     example: `hwan`,
//     required: true,
//   })
//   @IsString()
//   firstName : string;

//   @ApiProperty({
//     description: `lastName`,
//     example: `kim`,
//     required: true,
//   })
//   @IsString()
//   lastName : string;

//   @ApiProperty({
//     description: `email`,
//     example: "hwan.kim@hanwha.com",
//     required: true,
//   })
//   @IsString()
//   email : string;

//   @ApiProperty({
//     description: `language`,
//     example: "en_US",
//     required: true,
//   })
//   @IsString()
//   accountLanguage : string;

//   @ApiProperty({
//     description: `language`,
//     example: "en_US",
//     required: true,
//   })
//   @IsString()
//   phoneNumber : string;

//   @ApiProperty({
//     description: `language`,
//     example: "en_US",
//     required: false,
//   })
//   @IsOptional()
//   @IsString()
//   image : UserImageUrl;
// }

// 230719
// 하위 코드는 ory kratos, oauthKeeper 를 통하여
// 사용자를 생성 할 경우에 사용 된 코드 이다.
// export class ReqBodyUserVerification {
//   @ApiProperty({
//     example: '315732',
//     description: 'code',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   code: string;
// }

// export class ReqBodyTotpVerification {
//   @ApiProperty({
//     example: '315732',
//     description: 'totpCode',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   totpCode: string;
// }

// export class QueryUserVerification {
//   @ApiProperty({
//     example: 'code or link',
//     description: 'method',
//     required: true,
//   })
//   @IsNotEmpty()
//   @IsString()
//   method: string;
// }
