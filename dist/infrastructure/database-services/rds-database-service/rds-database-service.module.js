"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsDatabaseServicesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./schema/user.entity");
const user_role_entity_1 = require("./schema/user-role.entity");
const database_service_abstract_1 = require("../core/abstracts/database-service.abstract");
const rds_database_service_service_1 = require("./rds-database-service.service");
let RdsDatabaseServicesModule = class RdsDatabaseServicesModule {
};
RdsDatabaseServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserStorage, user_role_entity_1.UserRole]),
        ],
        providers: [
            {
                provide: database_service_abstract_1.IDatabaseService,
                useClass: rds_database_service_service_1.RdsDatabaseService,
            },
        ],
        exports: [database_service_abstract_1.IDatabaseService],
    })
], RdsDatabaseServicesModule);
exports.RdsDatabaseServicesModule = RdsDatabaseServicesModule;
//# sourceMappingURL=rds-database-service.module.js.map