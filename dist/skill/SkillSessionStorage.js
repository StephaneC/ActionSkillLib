"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SkillSessionStorage {
    constructor(input) {
        this.getSessionStorage = () => {
            let attributes = this.input.attributesManager.getSessionAttributes();
            if (attributes === undefined || Object.keys(attributes).length === 0) {
                attributes = {};
            }
            console.log("getSessionStorage", attributes);
            return attributes;
        };
        this.saveSessionAttributes = (sessionAttributes) => {
            this.input.attributesManager.setSessionAttributes(sessionAttributes);
        };
        this.input = input;
    }
    getItem(key, def) {
        const v = this.getSessionStorage()[key];
        if (!v)
            return def;
        return v;
    }
    setItem(key, value) {
        const session = this.getSessionStorage();
        session[key] = value;
        this.saveSessionAttributes(session);
    }
}
exports.SkillSessionStorage = SkillSessionStorage;
//# sourceMappingURL=SkillSessionStorage.js.map