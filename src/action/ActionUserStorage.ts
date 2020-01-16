import { UserStorage } from '../UserStorage';
import { DialogflowConversation } from 'actions-on-google';

export class ActionUserStorage implements UserStorage {

    input: DialogflowConversation;

    constructor(input: DialogflowConversation) {
        this.input = input;
    }

    async getItem(key: string): Promise<any> {
        const storage = this.input.user.storage;
        console.log('UserStorage : ', storage);
        return Promise.resolve(storage[key]);
    }

    setItem(key: string, value: any) {
        const storage = this.input.user.storage;
        storage[key] = value;
        console.log('UserStorage : ', storage);
    }


    clear = () => {
        this.input.user.storage = {};
    }

}