import { HandlerInput } from "ask-sdk";
import { InputUtils } from "../InputUtils";
export declare class SkillInputUtils implements InputUtils {
    input: HandlerInput;
    constructor(input: HandlerInput);
    getNotificationToken(): string;
    hasApl(): boolean;
    /** retrieve Entity Id, If no Id, get value */
    getEntity(slotName: string): string;
    getClicked(): string;
    getOffsetInMilliseconds(): number;
    /**
 * @deprecated
 * use template
 */
    supportsDisplay(): boolean;
    /**
     * @deprecated
     * use template
     */
    hasRoundScreen(): boolean;
    getMediaToken(): string;
    private checkResolutionsValue;
}
