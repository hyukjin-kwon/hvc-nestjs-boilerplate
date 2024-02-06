"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManagementModule = void 0;
const common_1 = require("@nestjs/common");
const user_management_controller_1 = require("./user-management.controller");
const user_management_service_1 = require("./user-management.service");
const dmpro_data_service_module_1 = require("../../infrastructure/data-services/dmpro-data-service/dmpro-data-service.module");
let UserManagementModule = class UserManagementModule {
};
UserManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dmpro_data_service_module_1.DmproDataServiceModule
        ],
        controllers: [user_management_controller_1.UserManagementController],
        providers: [user_management_service_1.UserManagementService],
    })
], UserManagementModule);
exports.UserManagementModule = UserManagementModule;
//# sourceMappingURL=user-management.module.js.map