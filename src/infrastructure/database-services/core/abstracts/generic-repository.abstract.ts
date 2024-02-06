import { FindOptionsWhere } from "typeorm";

export abstract class IGenericRepository<T> {
    abstract getAll(criteria?: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T[]>;
  
    abstract get(criteria?: FindOptionsWhere<T> | FindOptionsWhere<T>[] ): Promise<T>;
    // abstract get(id: string): Promise<T>;
  
    abstract create(item: T): Promise<T>;
  
    abstract update(id: string, item: T);
}
  