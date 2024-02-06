import { FindOptionsWhere, Repository } from "typeorm";
import { IGenericRepository } from "../core/abstracts/generic-repository.abstract";
export declare class RdsGenericRepository<T> implements IGenericRepository<T> {
    private _repository;
    constructor(repository: Repository<T>);
    getAll(criteria: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T[]>;
    get(criteria: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T>;
    create(item: T): Promise<T>;
    update(id: string, item: T): string;
}
