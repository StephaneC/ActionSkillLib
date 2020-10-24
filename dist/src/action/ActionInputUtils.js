"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionInputUtils = void 0;
class ActionInputUtils {
    constructor(input) {
        this.input = input;
    }
    getNotificationToken() {
        try {
            console.log('NotifToken ', this.input.arguments.get('UPDATES_USER_ID'));
            return this.input.arguments.get('UPDATES_USER_ID');
        }
        catch (e) {
            console.log('Error getNotificationToken', e);
        }
        return null;
    }
    getEntity(slotName) {
        const params = this.input.parameters;
        const entity = params[slotName];
        return (entity) ? entity : null;
    }
    getClicked() {
        try {
            if (this.input.body && this.input.body['originalDetectIntentRequest'])
                return this.input.body['originalDetectIntentRequest'].payload.inputs[0].arguments[0].textValue;
        }
        catch (e) {
            console.error('error retrieving key clicked', e);
        }
    }
    getOffsetInMilliseconds() {
        return null;
    }
    /**
 *     @Deprecated
 * use template
 */
    hasRoundScreen() {
        return false;
    }
    /**
 *     @Deprecated
 * use template
 */
    supportsDisplay() {
        // conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')
        return this.input.screen;
    }
    getMediaToken() {
        //TODO
        return null;
    }
}
exports.ActionInputUtils = ActionInputUtils;
//# sourceMappingURL=ActionInputUtils.js.map