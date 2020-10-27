import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";
/**
 * Use to store data during this conversation.
 */
export interface SessionStorage {
    input: HandlerInput | DialogflowConversation;
    /**
     *
     * @param key
     * @param def default value returned
     */
    getItem(key: string, def?: any): any;
    setItem(key: string, value: any): any;
}
