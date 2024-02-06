import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RdsGenericRepository } from './rds-generic-repository';
import { UserStorage } from './schema/user.entity';
import { UserRole } from './schema/user-role.entity';
import { IDatabaseService } from '../core/abstracts/database-service.abstract';


@Injectable()
export class RdsDatabaseService implements IDatabaseService
{
  userStorage: RdsGenericRepository<UserStorage>;
  userRole: RdsGenericRepository<UserRole>;
  
  constructor(
    @InjectRepository(UserStorage)
    private readonly userStorageRepository: Repository<UserStorage>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>
  ) {
    this.userStorage = new RdsGenericRepository<UserStorage>(userStorageRepository);
    this.userRole = new RdsGenericRepository<UserRole>(userRoleRepository);
  }

}
