"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionUserStorage {
    constructor(input) {
        this.clear = () => {
            this.input.user.storage = {};
        };
        this.input = input;
    }
    async getItem(key) {
        const storage = this.input.user.storage;
        console.log('UserStorage : ', storage);
        return Promise.resolve(storage[key]);
    }
    setItem(key, value) {
        const storage = this.input.user.storage;
        storage[key] = value;
        console.log('UserStorage : ', storage);
    }
}
exports.ActionUserStorage = ActionUserStorage;
//# sourceMappingURL=ActionUserStorage.js.map