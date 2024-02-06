import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export declare abstract class ITypeOrmModuleOptions {
    abstract generate(): Promise<TypeOrmModuleOptions>;
}
