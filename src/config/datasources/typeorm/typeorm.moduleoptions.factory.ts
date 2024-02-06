import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class TypeOrmModuleOptionsFactory {
  static async getModuleOptions(
    configService: ConfigService
  ): Promise<TypeOrmModuleOptions> {           
    return {
        type: "postgres",
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        synchronize: false, // set to true in develop environment
        logging: false, // set to true when debugging      
        // namingStrategy: new SnakeNamingStrategy(),
        // logging : true,
      entities: [`${__dirname}/../../../infrastructure/database-services/rds-database-service/schema/*.entity.{js, ts}`],
    };
  }
}
