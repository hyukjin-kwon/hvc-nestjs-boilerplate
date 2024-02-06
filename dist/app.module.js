"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_moduleoptions_factory_1 = require("./config/datasources/typeorm/typeorm.moduleoptions.factory");
const user_management_module_1 = require("./domain/user-management/user-management.module");
const dmpro_jwt_validate_module_1 = require("@cloud-development-team/dmpro-jwt-validate.module");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dmpro_jwt_validate_module_1.DmproJwtValidateModule.register({
                JWKS_URI: process.env.DUCLO_JWKS_URI,
                TOKEN_VALIDATE_ENDPOINT: process.env.DUCLO_TOKEN_VALIDATE_ENDPOINT,
                CACHE: /true/.test(process.env.DUCLO_CACHE),
                RATE_LIMIT: /true/.test(process.env.DUCLO_RATE_LIMIT),
                JWKS_REQUESTS_PER_MINUTE: Number(process.env.DUCLO_JWKS_REQUESTS_PER_MINUTE),
                CACHE_MAX_AGE: Number(process.env.DUCLO_CACHE_MAX_AGE),
                HTTP_TIMEOUT: Number(process.env.DUCLO_HTTP_TIMEOUT),
                TENANT_ID: process.env.DUCLO_TENANT_ID,
                SERVICE_ID: process.env.DUCLO_SERVICE_ID,
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: typeorm_moduleoptions_factory_1.TypeOrmModuleOptionsFactory.getModuleOptions,
            }),
            user_management_module_1.UserManagementModule,
            core_1.RouterModule.register([
                {
                    path: "user-management",
                    children: [
                        {
                            path: "user",
                            module: user_management_module_1.UserManagementModule,
                        }
                    ],
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map