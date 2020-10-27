import { UserStorage } from '../UserStorage';
import { DialogflowConversation } from 'actions-on-google';
export declare class ActionUserStorage implements UserStorage {
    input: DialogflowConversation;
    constructor(input: DialogflowConversation);
    getItem(key: string): Promise<any>;
    setItem(key: string, value: any): void;
    clear: () => void;
}
