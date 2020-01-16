import { InputUtils } from "../InputUtils";
import { DialogflowConversation } from "actions-on-google";
export declare class ActionInputUtils implements InputUtils {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
    supportsDisplay(): boolean;
    getEntity(slotName: string): string;
    getClicked(): string;
    getOffsetInMilliseconds(): number;
    hasRoundScreen(): boolean;
    getMediaToken(): any;
}
