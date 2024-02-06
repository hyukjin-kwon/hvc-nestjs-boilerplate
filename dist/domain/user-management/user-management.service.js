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
exports.UserManagementService = void 0;
const common_1 = require("@nestjs/common");
const data_service_abstract_1 = require("../../infrastructure/data-services/core/abstracts/data-service.abstract");
function getRoleName(role) {
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
let UserManagementService = class UserManagementService {
    constructor(dataServices) {
        this.dataServices = dataServices;
    }
    async getUser(user, orgId) {
        let userInfo = await this.dataServices.user.get(user.userId, {
            orgId: orgId,
            ducloAccessToken: user.ducloAccessToken
        });
        return userInfo;
    }
};
UserManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_service_abstract_1.IDataService])
], UserManagementService);
exports.UserManagementService = UserManagementService;
//# sourceMappingURL=user-management.service.js.map