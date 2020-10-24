"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionStorageMock = void 0;
/******
 * Some vars has been added to storage because session removed while
 *
 */
class SessionStorageMock {
    constructor() {
        this.storage = {};
    }
    getItem(key) {
        return this.storage[key];
    }
    setItem(key, value) {
        this.storage[key] = value;
    }
}
exports.SessionStorageMock = SessionStorageMock;
//# sourceMappingURL=SessionStorageMock.js.map