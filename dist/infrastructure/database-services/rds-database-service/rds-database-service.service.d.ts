import { Repository } from 'typeorm';
import { RdsGenericRepository } from './rds-generic-repository';
import { UserStorage } from './schema/user.entity';
import { UserRole } from './schema/user-role.entity';
import { IDatabaseService } from '../core/abstracts/database-service.abstract';
export declare class RdsDatabaseService implements IDatabaseService {
    private readonly userStorageRepository;
    private readonly userRoleRepository;
    userStorage: RdsGenericRepository<UserStorage>;
    userRole: RdsGenericRepository<UserRole>;
    constructor(userStorageRepository: Repository<UserStorage>, userRoleRepository: Repository<UserRole>);
}
