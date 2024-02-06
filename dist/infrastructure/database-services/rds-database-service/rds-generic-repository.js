"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RdsGenericRepository = void 0;
class RdsGenericRepository {
    constructor(repository) {
        this._repository = repository;
    }
    async getAll(criteria) {
        return this._repository.find({
            where: criteria,
        });
    }
    async get(criteria) {
        return this._repository.findOne({
            where: criteria,
        });
    }
    async create(item) {
        return item;
    }
    update(id, item) {
        return "update";
    }
}
exports.RdsGenericRepository = RdsGenericRepository;
//# sourceMappingURL=rds-generic-repository.js.map