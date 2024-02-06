"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmModuleOptionsFactory = void 0;
class TypeOrmModuleOptionsFactory {
    static async getModuleOptions(configService) {
        return {
            type: "postgres",
            host: configService.get('DATABASE_HOST'),
            port: configService.get('DATABASE_PORT'),
            username: configService.get('DATABASE_USER'),
            password: configService.get('DATABASE_PASSWORD'),
            database: configService.get('DATABASE_NAME'),
            synchronize: false,
            logging: false,
            entities: [`${__dirname}/../../../infrastructure/database-services/rds-database-service/schema/*.entity.{js, ts}`],
        };
    }
}
exports.TypeOrmModuleOptionsFactory = TypeOrmModuleOptionsFactory;
//# sourceMappingURL=typeorm.moduleoptions.factory.js.map