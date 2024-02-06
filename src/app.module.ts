import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModuleOptionsFactory } from "./config/datasources/typeorm/typeorm.moduleoptions.factory";
import { UserManagementModule } from "./domain/user-management/user-management.module";
import { DmproJwtValidateModule } from "@cloud-development-team/dmpro-jwt-validate.module";
import { RouterModule } from "@nestjs/core";

@Module({
  imports: [
    DmproJwtValidateModule.register({
      JWKS_URI: process.env.DUCLO_JWKS_URI,
      TOKEN_VALIDATE_ENDPOINT: process.env.DUCLO_TOKEN_VALIDATE_ENDPOINT,
      CACHE: /true/.test(process.env.DUCLO_CACHE),
      RATE_LIMIT: /true/.test(process.env.DUCLO_RATE_LIMIT),
      JWKS_REQUESTS_PER_MINUTE: Number(
        process.env.DUCLO_JWKS_REQUESTS_PER_MINUTE
      ),
      CACHE_MAX_AGE: Number(process.env.DUCLO_CACHE_MAX_AGE),
      HTTP_TIMEOUT: Number(process.env.DUCLO_HTTP_TIMEOUT),
      TENANT_ID: process.env.DUCLO_TENANT_ID,
      SERVICE_ID: process.env.DUCLO_SERVICE_ID,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TypeOrmModuleOptionsFactory.getModuleOptions,
    }),
    UserManagementModule,
    RouterModule.register([
      {
        path: "user-management",
        // module: UserManagementModule,
        children: [
          {
            path: "user",
            module: UserManagementModule,
          }
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
