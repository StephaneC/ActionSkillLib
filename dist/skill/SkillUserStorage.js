"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillUserStorage {
    constructor(input) {
        this.getLongTimeStorage = async () => {
            let attributes = await this.input.attributesManager.getPersistentAttributes();
            if (attributes === undefined || Object.keys(attributes).length === 0) {
                attributes = {
                    tip: ''
                };
                this.input.attributesManager.setPersistentAttributes(attributes);
            }
            return attributes;
        };
        this.clear = async () => {
            const storage = await this.getLongTimeStorage();
            storage.started = [];
            storage.lastPlayed = undefined;
        };
        this.input = input;
    }
    async getItem(key) {
        const storage = await this.getLongTimeStorage();
        return storage[key];
    }
    async setItem(key, value) {
        const storage = await this.getLongTimeStorage();
        storage[key] = value;
    }
}
exports.SkillUserStorage = SkillUserStorage;
//# sourceMappingURL=SkillUserStorage.js.map