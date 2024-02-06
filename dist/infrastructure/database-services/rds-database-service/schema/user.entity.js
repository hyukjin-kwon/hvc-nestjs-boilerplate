"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStorage = void 0;
const typeorm_1 = require("typeorm");
let UserStorage = class UserStorage {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true, type: "uuid", name: "row_id" }),
    __metadata("design:type", String)
], UserStorage.prototype, "rowId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 64, name: "user_id" }),
    __metadata("design:type", String)
], UserStorage.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 64 }),
    __metadata("design:type", String)
], UserStorage.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json", name: "user_data" }),
    __metadata("design:type", Object)
], UserStorage.prototype, "userData", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserStorage.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], UserStorage.prototype, "updated", void 0);
UserStorage = __decorate([
    (0, typeorm_1.Entity)("user_storage", { schema: "dmpro" })
], UserStorage);
exports.UserStorage = UserStorage;
//# sourceMappingURL=user.entity.js.map