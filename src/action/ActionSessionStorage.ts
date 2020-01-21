import { SessionStorage } from '../SessionStorage';
import { DialogflowConversation } from 'actions-on-google';

export class ActionSessionStorage implements SessionStorage {

    input: DialogflowConversation;

    constructor(input: DialogflowConversation) {
        this.input = input;
    }

    getItem(key: string, def?: any): any {
        const v = this.input.data[key];
        if (!v) return def;
        return v;
    }

    setItem(key: string, value): any {
        console.log('Setting Action storage : ' + key, value);
        this.input.data[key] = value;
    }
}