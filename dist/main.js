"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./app.config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dmpro_response_model_module_1 = require("@cloud-development-team/dmpro-response-model.module");
const jsend_response_dto_1 = require("./domain/core/dto/jsend-response.dto");
const user_dto_1 = require("./domain/core/dto/user.dto");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("v1.0", {
        exclude: [{ path: "", method: common_1.RequestMethod.GET }],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ validateCustomDecorators: true }));
    app.enableCors({
        origin: [
            /https:\/\/[^\/]+\.dmpro\.hanwhavision\.cloud/,
            "http://localhost:3000",
        ],
        credentials: true,
    });
    app.use((0, cookie_parser_1.default)());
    app.getHttpAdapter().getInstance().disable("x-powered-by");
    app.useGlobalInterceptors(new dmpro_response_model_module_1.DmproInterceptor());
    app.useGlobalFilters(new dmpro_response_model_module_1.DmproExceptionFilter([common_1.HttpException]));
    app.useGlobalPipes(new dmpro_response_model_module_1.DmproValidationPipe());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle("user/organization management")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig, {
        extraModels: [
            user_dto_1.AuthRequestDto,
            jsend_response_dto_1.JsendResponseSuccess,
            user_dto_1.UserImageUrl,
            user_dto_1.OrganizationDto,
            user_dto_1.LicenseDto,
            user_dto_1.LocationDto,
            user_dto_1.AreaDto,
            user_dto_1.DmproUserDto,
            user_dto_1.DmproTokenValidation,
            user_dto_1.ResClaimUserInOrgDto,
            user_dto_1.ResUpdateUserRoleInOrgDto,
            user_dto_1.ResUnclaimUserInOrgDto,
            user_dto_1.DmproUserDtoWithDates,
        ],
    });
    fs.writeFileSync(path.join(__dirname, "../swagger.json"), JSON.stringify(document));
    swagger_1.SwaggerModule.setup("v1.0/user-management/api", app, document);
    await app.listen(4001);
}
bootstrap();
//# sourceMappingURL=main.js.map