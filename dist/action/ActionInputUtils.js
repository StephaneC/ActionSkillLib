"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ActionInputUtils {
    constructor(input) {
        this.input = input;
    }
    supportsDisplay() {
        // conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')
        return this.input.screen;
    }
    getEntity(slotName) {
        const params = this.input.parameters;
        return params[slotName];
    }
    getClicked() {
        //TODO
        return null;
    }
    getOffsetInMilliseconds() {
        return null;
    }
    hasRoundScreen() {
        return false;
    }
    getMediaToken() {
        //TODO
        return null;
    }
}
exports.ActionInputUtils = ActionInputUtils;
//# sourceMappingURL=ActionInputUtils.js.map