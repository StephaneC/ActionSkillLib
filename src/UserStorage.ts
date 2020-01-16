import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";

/**
 * Use to store persistent user data
 */
export interface UserStorage {
    input: HandlerInput | DialogflowConversation;

    getItem(key: string): any;
    setItem(key: string, value: any): any;
    clear();
}
