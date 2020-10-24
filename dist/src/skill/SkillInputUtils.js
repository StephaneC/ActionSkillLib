"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillInputUtils = void 0;
class SkillInputUtils {
    constructor(input) {
        this.checkResolutionsValue = (slotNode) => {
            let value = null;
            if (slotNode && slotNode.resolutions && slotNode.resolutions.resolutionsPerAuthority) {
                for (let i = 0; i < slotNode.resolutions.resolutionsPerAuthority.length; i++) {
                    if (value == null) {
                        let podcastSlot = slotNode.resolutions.resolutionsPerAuthority[i];
                        if (podcastSlot.status.code == 'ER_SUCCESS_MATCH') {
                            value = podcastSlot.values[0].value;
                            break;
                        }
                    }
                }
            }
            return value;
        };
        this.input = input;
    }
    getNotificationToken() {
        try {
            return this.input.requestEnvelope.context.System.user.permissions.consentToken;
        }
        catch (e) {
            console.log('Error getCOnsentToken', e);
        }
        return null;
    }
    hasApl() {
        const event = this.input.requestEnvelope;
        const hasapl = event &&
            event.context &&
            event.context.System &&
            event.context.System.device &&
            event.context.System.device.supportedInterfaces &&
            "Alexa.Presentation.APL" in event.context.System.device.supportedInterfaces;
        return hasapl;
    }
    /** retrieve Entity Id, If no Id, get value */
    getEntity(slotName) {
        const event = this.input.requestEnvelope.request;
        if (event.intent && event.intent.slots &&
            event.intent.slots[slotName]) {
            let value = this.checkResolutionsValue(event.intent.slots[slotName]);
            if (value) {
                if (value.id) {
                    return value.id;
                }
                else {
                    return value.name;
                }
            }
            return event.intent.slots[slotName].value;
        }
        return null;
    }
    getClicked() {
        if (this.input.requestEnvelope.request.type === "Alexa.Presentation.APL.UserEvent") {
            return this.input.requestEnvelope.request['arguments'][0].toString();
        }
        const event = this.input.requestEnvelope.request;
        return event['token'];
    }
    getOffsetInMilliseconds() {
        // Extracting offsetInMilliseconds received in the request.
        if (this.input && this.input.requestEnvelope.context
            && this.input.requestEnvelope.context.AudioPlayer) {
            return this.input.requestEnvelope.context.AudioPlayer.offsetInMilliseconds;
        }
        return null;
    }
    /**
 * @deprecated
 * use template
 */
    supportsDisplay() {
        const event = this.input.requestEnvelope;
        const hasDisplay = event &&
            event.context &&
            event.context.System &&
            event.context.System.device &&
            event.context.System.device.supportedInterfaces &&
            "Display" in event.context.System.device.supportedInterfaces;
        console.log(`peripherique has display = ${hasDisplay}`);
        return hasDisplay;
    }
    /**
     * @deprecated
     * use template
     */
    hasRoundScreen() {
        const event = this.input.requestEnvelope;
        const hasRoundScreen = event &&
            event.context &&
            event.context.Viewport &&
            event.context.Viewport.shape &&
            event.context.Viewport.shape === 'ROUND';
        console.log(`peripherique has hasRoundScreen = ${hasRoundScreen}`);
        return hasRoundScreen;
    }
    getMediaToken() {
        if (this.input && this.input.requestEnvelope.context &&
            this.input.requestEnvelope.context.AudioPlayer) {
            return this.input.requestEnvelope.context.AudioPlayer.token;
        }
        return null;
    }
}
exports.SkillInputUtils = SkillInputUtils;
//# sourceMappingURL=SkillInputUtils.js.map