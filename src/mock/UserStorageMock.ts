/******
 * Some vars has been added to storage because session removed while 
 *
 * 1. SessionStorage.PodcastListOffset : Offset in list podcast intent.
 */
import { UserStorage } from '../UserStorage';
import { HandlerInput } from 'ask-sdk';
import { DialogflowConversation } from 'actions-on-google';

export class UserStorageMock implements UserStorage {

    input: HandlerInput | DialogflowConversation;
    longStorage = {};

    async getItem(key: string): Promise<any> {
        return this.longStorage[key];
    }

    async setItem(key: string, value: any): Promise<any> {
        this.longStorage[key] = value;
    }
    
    clear = async () => {
        this.longStorage = {};
    }
}
