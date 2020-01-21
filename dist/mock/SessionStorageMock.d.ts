import { SessionStorage } from "../SessionStorage";
import { DialogflowConversation } from "actions-on-google";
import { HandlerInput } from "ask-sdk";
/******
 * Some vars has been added to storage because session removed while
 *
 */
export declare class SessionStorageMock implements SessionStorage {
    input: HandlerInput | DialogflowConversation;
    storage: {};
    getItem(key: string): any;
    setItem(key: string, value: any): void;
}
