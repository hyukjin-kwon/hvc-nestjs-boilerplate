import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare class TypeOrmModuleOptionsFactory {
    static getModuleOptions(configService: ConfigService): Promise<TypeOrmModuleOptions>;
}
