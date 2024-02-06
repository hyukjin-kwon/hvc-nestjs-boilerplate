import "./app.config";
import { HttpException, RequestMethod, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

import * as fs from "fs";
import * as path from "path";
import cookieParser from "cookie-parser";
import {
  DmproExceptionFilter,
  DmproInterceptor,
  DmproValidationPipe,
} from "@cloud-development-team/dmpro-response-model.module";
import { JsendResponseSuccess } from "./domain/core/dto/jsend-response.dto";
import {
  AreaDto,
  AuthRequestDto,
  DmproTokenValidation,
  DmproUserDto,
  DmproUserDtoWithDates,
  LicenseDto,
  LocationDto,
  OrganizationDto,
  ResClaimUserInOrgDto,
  ResUnclaimUserInOrgDto,
  ResUpdateUserRoleInOrgDto,
  UserCredential,
  UserImageUrl,
} from "./domain/core/dto/user.dto";

// import { LoggerService } from './log/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("v1.0", {
    exclude: [{ path: "", method: RequestMethod.GET }],
  });
  app.useGlobalPipes(new ValidationPipe({ validateCustomDecorators: true }));
  app.enableCors({
    // origin: ['https://dmpro.dev.hanwhavision.cloud', 'https://dmpro.qa.hanwhavision.cloud', 'https://dmpro.prod.hanwhavision.cloud'],
    // origin: [`https:\/\/dmpro\..*\.hanwhavision\.cloud`],
    // origin: [/https:\/\/dmpro\..*\.hanwhavision\.cloud/, 'http://localhost:3000'],
    origin: [
      /https:\/\/[^\/]+\.dmpro\.hanwhavision\.cloud/,
      "http://localhost:3000",
    ],
    credentials: true,
  });

  app.use(cookieParser());
  app.getHttpAdapter().getInstance().disable("x-powered-by");
  app.useGlobalInterceptors(new DmproInterceptor());
  app.useGlobalFilters(new DmproExceptionFilter([HttpException]));
  app.useGlobalPipes(new DmproValidationPipe());

  const swaggerConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle("user/organization management")
    //  .setDescription('This is device install server to Generate User Token')
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    extraModels: [
      AuthRequestDto,
      JsendResponseSuccess,
      UserImageUrl,
      OrganizationDto,
      LicenseDto,
      LocationDto,
      AreaDto,
      DmproUserDto,
      DmproTokenValidation,
      ResClaimUserInOrgDto,
      ResUpdateUserRoleInOrgDto,
      ResUnclaimUserInOrgDto,
      DmproUserDtoWithDates,
    ],
  });
  fs.writeFileSync(
    path.join(__dirname, "../swagger.json"),
    JSON.stringify(document)
  );

  SwaggerModule.setup("v1.0/user-management/api", app, document);
  await app.listen(4001);
}
bootstrap();
