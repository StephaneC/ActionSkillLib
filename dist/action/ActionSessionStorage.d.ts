import { SessionStorage } from '../SessionStorage';
import { DialogflowConversation } from 'actions-on-google';
export declare class ActionSessionStorage implements SessionStorage {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
    getItem(key: string, def?: any): any;
    setItem(key: string, value: any): any;
}
