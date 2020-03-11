import { InputUtils } from "../InputUtils";
import { DialogflowConversation } from "actions-on-google";

export class ActionInputUtils implements InputUtils {

    input: DialogflowConversation;

    constructor(input: DialogflowConversation) {
        this.input = input;
    }

    getNotificationToken(): string {
        try {
            console.log('NotifToken ', this.input.arguments.get('UPDATES_USER_ID'));
            return this.input.arguments.get('UPDATES_USER_ID');
        } catch (e) {
            console.log('Error getNotificationToken', e);
        }
        return null;
    }


    getEntity(slotName: string): string {
        const params = this.input.parameters;
        const entity = params[slotName];
        return (entity)? entity as string : null;
    }

    getClicked(): string {
        try {
            if (this.input.body && this.input.body['originalDetectIntentRequest'])
            return this.input.body['originalDetectIntentRequest'].payload.inputs[0].arguments[0].textValue;
        } catch(e)  {
            console.error('error retrieving key clicked', e);
        }
    }


    getOffsetInMilliseconds(): number {
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
    supportsDisplay(): boolean {
        // conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')
        return this.input.screen;
    }

    getMediaToken() {
        //TODO
        return null;
    }
}