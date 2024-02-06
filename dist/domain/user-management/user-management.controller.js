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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../core/dto/user.dto");
const user_management_service_1 = require("./user-management.service");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const jsend_response_dto_1 = require("../core/dto/jsend-response.dto");
let UserManagementController = class UserManagementController {
    constructor(userManagementService) {
        this.userManagementService = userManagementService;
    }
    async getUserInfo(req, orgnizationQuery) {
        return await this.userManagementService.getUser(req.user, orgnizationQuery["organization-id"]);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: `Get the user details`,
        description: "Get the user details",
        deprecated: false,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Success",
        schema: {
            allOf: [
                {
                    $ref: (0, swagger_1.getSchemaPath)(jsend_response_dto_1.JsendResponseSuccess),
                },
                {
                    type: "object",
                },
                {
                    properties: {
                        data: {
                            type: "object",
                            $ref: (0, swagger_1.getSchemaPath)(user_dto_1.DmproUserDtoWithDates),
                        },
                    },
                },
            ],
        },
    }),
    (0, swagger_1.ApiQuery)({
        name: "organization-id",
        example: "a92d0bda-6574-4e62-a54b-315bcaaf2456",
        required: true,
    }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.AuthRequestDto,
        user_dto_1.OrganizationQuery]),
    __metadata("design:returntype", Promise)
], UserManagementController.prototype, "getUserInfo", null);
UserManagementController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)("User-management"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, common_1.Controller)(""),
    __metadata("design:paramtypes", [user_management_service_1.UserManagementService])
], UserManagementController);
exports.UserManagementController = UserManagementController;
//# sourceMappingURL=user-management.controller.js.map