"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DmproUserData = void 0;
class DmproUserData {
    constructor(dataServices, ducloCallerService) {
        this._ducloCallerService = ducloCallerService;
        this._dataServices = dataServices;
    }
    async get(id, additionalInfo) {
        let dmproDataUserDto;
        const userInfo = await this._ducloCallerService.getUserInfo(id, additionalInfo.orgId, additionalInfo.ducloAccessToken);
        const userRole = await this._dataServices.userRole.get({
            userId: id
        });
        dmproDataUserDto = Object.assign({ dmproClaimed: userRole !== null ? true : false, dmproRole: userRole !== null ? userRole.dmproRole : undefined }, userInfo);
        return dmproDataUserDto;
    }
}
exports.DmproUserData = DmproUserData;
//# sourceMappingURL=dmpro-user-data.js.map