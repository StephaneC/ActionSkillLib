import { InputUtils } from "../InputUtils";
import { DialogflowConversation } from "actions-on-google";
export declare class ActionInputUtils implements InputUtils {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
    getNotificationToken(): string;
    getEntity(slotName: string): string;
    getClicked(): string;
    getOffsetInMilliseconds(): number;
    /**
 *     @Deprecated
 * use template
 */
    hasRoundScreen(): boolean;
    /**
 *     @Deprecated
 * use template
 */
    supportsDisplay(): boolean;
    getMediaToken(): any;
}
