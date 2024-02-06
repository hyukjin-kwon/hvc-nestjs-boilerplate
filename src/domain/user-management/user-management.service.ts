import {
  DucloCallerService,
  UserDto,
} from "@cloud-development-team/duclo-caller.module";
import { HttpService } from "@nestjs/axios";
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import {
  DmproUserDto,
  RequestUserDto,
  UserCredential,
  UserPersonalData,
} from "src/domain/core/dto/user.dto";
import { IDataService } from "src/infrastructure/data-services/core/abstracts/data-service.abstract";
import { DmproDataUserDto } from "src/infrastructure/data-services/core/dto/dmpro-data.dto";

import { Repository } from "typeorm";



function getRoleName(role: string) {
  switch (role) {
    case 'role1':
      return 'Admin';
    case 'role2':
      return 'Super Admin';
    case 'role3':
      return 'User';
    case 'role4':
      return 'Partner Admin';
    case 'role5':
      return 'Partner User';
    default:
      return role;
  }
}

@Injectable()
export class UserManagementService {
  constructor(
    private dataServices: IDataService,
  ) {}

  async getUser(user: RequestUserDto, orgId: string): Promise<any> {
    
    /**
     * 3 tier archtecture example
     */
    // const userInfo: UserDto = await this.ducloCallerService.getUserInfo(
    //   user.userId,
    //   orgId,
    //   user.ducloAccessToken
    // );
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")
    // console.dir(userInfo)

    // const userRoles = await this.userRoleRepository.findOne({
    //   where: {
    //     orgId: orgId,
    //     userId: user.userId,
    //   },
    // });
    // userInfo.portalRole = getRoleName(userInfo.portalRole);
    // return Object.assign(userInfo, {
    //   dmproRole: userRoles ? userRoles.dmproRole : null,
    //   dmproClaimed: userRoles ? true : false,
    // });


    let userInfo : DmproDataUserDto = await this.dataServices.user.get(user.userId,{
      orgId : orgId,
      ducloAccessToken : user.ducloAccessToken
    })


    return userInfo
  }
}

 