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
        //TODO
        return null;
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