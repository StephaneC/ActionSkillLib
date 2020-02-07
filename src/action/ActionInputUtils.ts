import { InputUtils } from "../InputUtils";
import { DialogflowConversation } from "actions-on-google";

export class ActionInputUtils implements InputUtils {

    input: DialogflowConversation;

    constructor(input: DialogflowConversation) {
        this.input = input;
    }
    

    supportsDisplay(): boolean {
        // conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')
        return this.input.screen;
    }

    getEntity(slotName: string): string {
        const params = this.input.parameters;
        return params[slotName] as string;
    }

    getClicked(): string {
        try {
            return (this.input as any).originalDetectIntentRequest.payload.inputs[0].arguments[0].textValue;
        } catch(e)  {
            console.error('error retrieving key clicked', e);
        }
    }


    getOffsetInMilliseconds(): number {
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