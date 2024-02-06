import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export abstract class ITypeOrmModuleOptions {
  abstract generate(): Promise<TypeOrmModuleOptions>;
}
