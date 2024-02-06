

import { UserStorage } from '../../rds-database-service/schema/user.entity';
import { UserRole } from '../../rds-database-service/schema/user-role.entity';
import { IGenericRepository } from './generic-repository.abstract';



export abstract class IDatabaseService {  
  abstract userStorage: IGenericRepository<UserStorage>;
  abstract userRole: IGenericRepository<UserRole>;
}
