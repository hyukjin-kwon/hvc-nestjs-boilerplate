import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Header,
  Headers,
  HttpCode,
  PayloadTooLargeException,
  Post,
  Put,
  Query,
  Req,
  Request,
  UseGuards,
} from "@nestjs/common";
import {
  AuthRequestDto,
  DmproUserDto,
  DmproUserDtoWithDates,
  OrganizationQuery,
  UserCredential,
  UserPersonalData,
} from "src/domain/core/dto/user.dto";
import { UserManagementService } from "./user-management.service";
import { AuthGuard } from "@nestjs/passport";
import jsonSize from "json-size";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  getSchemaPath,
} from "@nestjs/swagger";
import { JsendResponseSuccess } from "src/domain/core/dto/jsend-response.dto";

@ApiBearerAuth()
@ApiTags("User-management")
@UseGuards(AuthGuard())
@Controller("")
export class UserManagementController {
  constructor(private userManagementService: UserManagementService) {}

  @ApiOperation({
    summary: `Get the user details`,
    description: "Get the user details",
    deprecated: false,
  })
  @ApiOkResponse({
    description: "Success",
    schema: {
      allOf: [
        {
          $ref: getSchemaPath(JsendResponseSuccess),
        },
        {
          type: "object",
        },
        {
          properties: {
            data: {
              type: "object",
              $ref: getSchemaPath(DmproUserDtoWithDates),
            },
          },
        },
      ],
    },
  })
  @ApiQuery({
    name: "organization-id",
    example: "a92d0bda-6574-4e62-a54b-315bcaaf2456",
    required: true,
  })
  @HttpCode(200)
  @Get("")
  async getUserInfo(
    @Req() req: AuthRequestDto,
    // @Query("organization-id") organizationId : string
    @Query() orgnizationQuery: OrganizationQuery
  ): Promise<DmproUserDtoWithDates> {
    return await this.userManagementService.getUser(
      req.user,
      orgnizationQuery["organization-id"]
    );
  }


  // @HttpCode(200)
  // @Get('')
  // async getUserInfo(
  //   @Headers('x-identity') xIdentity: string
  // ): Promise<any> {

  //   let waveSyncAccountInfo = await this.userManagementService.findUserWave(xIdentity)

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user"
  //     },
  //     "data": {
  //         wid : waveSyncAccountInfo.wid,
  //         userId :  waveSyncAccountInfo.userId,
  //         waveSyncAccount :  waveSyncAccountInfo.userWave !== null ?waveSyncAccountInfo.userWave.email : undefined
  //     }
  //   }
  // }

  // @HttpCode(200)
  // @Get('personalization')
  // async getPersonalization(
  //   @Headers('x-identity') xIdentity: string
  // ): Promise<any> {

  //   const personalization = await this.userManagementService.findPersonalization(xIdentity)
  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/personalization"
  //     },
  //     "data": personalization
  //   }
  // }

  // @HttpCode(201)
  // @Put('personalization')
  // async putPersonalization(
  //   @Headers('x-identity') xIdentity: string,
  //   @Body() reqBodyPersonalization :any
  // ): Promise<any> {
  //   if(jsonSize(reqBodyPersonalization) > 10 * 1024)
  //     throw new PayloadTooLargeException("Request body is too large")

  //   await this.userManagementService.putPersonalization(xIdentity, reqBodyPersonalization)
  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/personalization"
  //     },
  //     "data": reqBodyPersonalization
  //   }
  // }

  // 230719
  // 하위 코드는 ory kratos, oauthKeeper 를 통하여
  // 사용자를 생성 할 경우에 사용 된 코드 이다.

  // @HttpCode(201)
  // @Post('')
  // async createKratosUser(
  //     @Body() userCredential: UserCredential,
  // ): Promise<any> {
  //   await this.userManagementService.createKratosUser(userCredential)
  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user"
  //     },
  //     "data": {
  //         "wid": userCredential.wid
  //     }
  //   }
  // }

  // @HttpCode(200)
  // @Get('')
  // async getUserInfo(
  //   @Headers('x-identity') xIdentity: string
  // ): Promise<any> {

  //   let waveSyncAccountInfo = await this.userManagementService.findUserWave(xIdentity)

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user"
  //     },
  //     "data": {
  //         wid : waveSyncAccountInfo.wid,
  //         userId :  waveSyncAccountInfo.userId,
  //         waveSyncAccount :  waveSyncAccountInfo.userWave !== null ?waveSyncAccountInfo.userWave.email : undefined
  //     }
  //   }
  // }

  // @HttpCode(200)
  // @Get('personalization')
  // async getPersonalization(
  //   @Headers('x-identity') xIdentity: string
  // ): Promise<any> {

  //   const personalization = await this.userManagementService.findPersonalization(xIdentity)
  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/personalization"
  //     },
  //     "data": personalization
  //   }
  // }

  // @HttpCode(201)
  // @Put('personalization')
  // async putPersonalization(
  //   @Headers('x-identity') xIdentity: string,
  //   @Body() reqBodyPersonalization :any
  // ): Promise<any> {
  //   if(jsonSize(reqBodyPersonalization) > 10 * 1024)
  //     throw new PayloadTooLargeException("Request body is too large")

  //   await this.userManagementService.putPersonalization(xIdentity, reqBodyPersonalization)
  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/personalization"
  //     },
  //     "data": reqBodyPersonalization
  //   }
  // }

  // @Post('verification')
  // async verifyKratosUser(
  //   @Headers('Authorization') bearerToken: string,
  //   @Body() reqBodyUserVerification :ReqBodyUserVerification
  // ): Promise<any> {
  //   /**
  //    * Hyukjin Kwon
  //    * bearerToken 입력 받는 방식은 추후에 추가 한다.
  //    * 임시로 아래와 같이 구현 한다.
  //    */
  //   const sessionToken = bearerToken.split(" ")[1]
  //   const identity = await this.userManagementService.getIdentity(sessionToken)
  //   // console.dir(identity)

  //   /**
  //    * needErrorhandle
  //    * verifiable_address 를 설정 하지 않은 사용자에 대한 error 처리가 필요 하다.
  //    * resWhoami.data.identity.verifiable_addresses 값이 없는 것에 대한 error 처리 필요 하다.
  //    */
  //    if(identity.verifiable_addresses[0].verified === true){
  //     throw new ConflictException("Already completed email verification")
  //   }else{
  //     await this.userManagementService.verifyKratosUser(
  //       // identity.id,
  //       identity.userId,
  //       reqBodyUserVerification
  //     )
  //   }

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/verification"
  //     },
  //     "data": {
  //     }
  //   }
  // }

  // @Post('verification-code')
  // async createKratosUserVerificationCode(
  //   @Headers('Authorization') bearerToken: string
  // ): Promise<any> {
  //   /**
  //    * Hyukjin Kwon
  //    * bearerToken 입력 받는 방식은 추후에 추가 한다.
  //    * 임시로 아래와 같이 구현 한다.
  //    */
  //   const sessionToken = bearerToken.split(" ")[1]
  //   const identity = await this.userManagementService.getIdentity(sessionToken)
  //   console.dir(identity)

  //   /**
  //    * needErrorhandle
  //    * verifiable_address 를 설정 하지 않은 사용자에 대한 error 처리가 필요 하다.
  //    * resWhoami.data.identity.verifiable_addresses 값이 없는 것에 대한 error 처리 필요 하다.
  //    */
  //   if(identity.verifiable_addresses[0].verified === true){
  //     throw new ConflictException("Already completed email verification")
  //   }else{
  //     await this.userManagementService.createKratosUserVerificationCode(
  //       // identity.id,
  //       identity.userId,
  //       identity.verifiable_addresses[0].value
  //     )
  //   }

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/verification-code"
  //     },
  //     "data": {
  //     }
  //   }
  // }

  // @HttpCode(204)
  // @Delete('')
  // async deleteKratosUser(
  //   @Headers('Authorization') bearerToken: string,
  //   @Headers('x-identity') xIdentity: string
  // ): Promise<any> {
  //   console.log("hello deleteKratosUsre")
  //   console.log(bearerToken)
  //   console.log(xIdentity)
  //   /**
  //    * Hyukjin Kwon
  //    * bearerToken 입력 받는 방식은 추후에 추가 한다.
  //    * 임시로 아래와 같이 구현 한다.
  //    */
  //   // const sessionToken = bearerToken.split(" ")[1]
  //   // const identity = await this.userManagementService.getIdentity(sessionToken)

  //   const userId = await this.userManagementService.getUserId(xIdentity)
  //   await this.userManagementService.deleteKratosUser(userId, xIdentity)
  //   return
  // }

  // @Post('/mfa/authenticator/totp')
  // async setMfa(
  //     @Headers('Authorization') bearerToken: string,
  //     @Headers('x-identity') xIdentity: string
  // ): Promise<any> {
  //   const sessionToken = bearerToken.split(" ")[1]
  //   const totpInfo = await this.userManagementService.setMfa(xIdentity, sessionToken)

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/mfa/authenticator/totp"
  //     },
  //     "data": totpInfo
  //   }
  // }

  // @Post('/mfa/authenticator/totp/verification')
  // async verifyMfa(
  //     @Headers('Authorization') bearerToken: string,
  //     @Headers('x-identity') xIdentity: string,
  //     @Body() reqBodyTotpVerification :ReqBodyTotpVerification
  // ): Promise<any> {
  //   const sessionToken = bearerToken.split(" ")[1]
  //   await this.userManagementService.verifyMfa(xIdentity, sessionToken,reqBodyTotpVerification.totpCode)

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/mfa/authenticator/totp"
  //     },
  //     "data": {
  //     }
  //   }
  // }

  // @HttpCode(204)
  // @Delete('/mfa/authenticator/totp')
  // async unlinkMfa(
  //     @Headers('Authorization') bearerToken: string,
  //     // @Headers('x-identity') xIdentity: string,
  // ): Promise<any> {
  //   const sessionToken = bearerToken.split(" ")[1]
  //   await this.userManagementService.unlinkMfa(sessionToken)

  //   return {
  //     "links": {
  //         "self": "/v1.0/user-management/user/mfa/authenticator/totp"
  //     },
  //     "data": {
  //     }
  //   }
  // }
}
