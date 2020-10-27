/******
 * Some vars has been added to storage because session removed while
 *
 * 1. SessionStorage.PodcastListOffset : Offset in list podcast intent.
 */
import { UserStorage } from '../UserStorage';
import { HandlerInput } from 'ask-sdk';
import { DialogflowConversation } from 'actions-on-google';
export declare class UserStorageMock implements UserStorage {
    input: HandlerInput | DialogflowConversation;
    longStorage: {};
    getItem(key: string): Promise<any>;
    setItem(key: string, value: any): Promise<any>;
    clear: () => Promise<void>;
}
