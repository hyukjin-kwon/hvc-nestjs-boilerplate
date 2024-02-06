import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStorage } from './schema/user.entity';
import { UserRole } from './schema/user-role.entity';
import { IDatabaseService } from '../core/abstracts/database-service.abstract';
import { RdsDatabaseService } from './rds-database-service.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserStorage, UserRole]),
  ],
  providers: [
    {
      provide: IDatabaseService,
      useClass: RdsDatabaseService,
    },
  ],
  exports: [IDatabaseService],
})
export class RdsDatabaseServicesModule {}
