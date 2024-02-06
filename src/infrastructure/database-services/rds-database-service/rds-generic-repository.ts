
import { FindOptionsWhere, Repository } from "typeorm";
import { IGenericRepository } from "../core/abstracts/generic-repository.abstract";


export class RdsGenericRepository<T> implements IGenericRepository<T> {
    // private typeOrmDataSource: DataSource
    // constructor(typeOrmDataSource: DataSource, entity: EntityTarget<T>) {
    //     this._repository = typeOrmDataSource.getRepository(entity)
    // }

    private _repository : Repository<T>

    constructor( repository: Repository<T>) {
        this._repository = repository
    }

    async getAll(criteria: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T[]> {
        return this._repository.find({
            where: criteria,
        })
    }
    async get(criteria: FindOptionsWhere<T> | FindOptionsWhere<T>[]): Promise<T> {
        return this._repository.findOne({
            where: criteria,
        })
    }
    async create(item: T): Promise<T> {
        return item
    }

    update(id: string, item: T) {
        return "update"
    }
}
