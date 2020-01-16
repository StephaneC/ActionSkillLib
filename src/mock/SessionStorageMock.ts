import { SessionStorage } from "../SessionStorage";
import { DialogflowConversation } from "actions-on-google";
import { HandlerInput } from "ask-sdk";

/******
 * Some vars has been added to storage because session removed while 
 *
 */

export class SessionStorageMock implements SessionStorage {

    input: HandlerInput | DialogflowConversation;
    storage = {};

    getItem(key: string): any {
        return this.storage[key];
    }

    setItem(key: string, value: any) {
        this.storage[key] = value;
    }
}