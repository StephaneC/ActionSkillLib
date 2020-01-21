"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionSessionStorage {
    constructor(input) {
        this.input = input;
    }
    getItem(key, def) {
        const v = this.input.data[key];
        if (!v)
            return def;
        return v;
    }
    setItem(key, value) {
        console.log('Setting Action storage : ' + key, value);
        this.input.data[key] = value;
        console.log('storage data : ' + this.input.data);
    }
}
exports.ActionSessionStorage = ActionSessionStorage;
//# sourceMappingURL=ActionSessionStorage.js.map