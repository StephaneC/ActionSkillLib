"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStorageMock = void 0;
class UserStorageMock {
    constructor() {
        this.longStorage = {};
        this.clear = async () => {
            this.longStorage = {};
        };
    }
    async getItem(key) {
        return this.longStorage[key];
    }
    async setItem(key, value) {
        this.longStorage[key] = value;
    }
}
exports.UserStorageMock = UserStorageMock;
//# sourceMappingURL=UserStorageMock.js.map