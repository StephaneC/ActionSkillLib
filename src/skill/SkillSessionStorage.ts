/******
 * Some vars has been added to storage because session removed while 
 *
 * 1. SessionStorage.PodcastListOffset : Offset in list podcast intent.
 */
import { HandlerInput } from 'ask-sdk';

import { SessionStorage } from '../SessionStorage';

export class SkillSessionStorage implements SessionStorage {

    input: HandlerInput;

    constructor(input: HandlerInput) {
        this.input = input;
    }

    private getSessionStorage = () => {
        let attributes = this.input.attributesManager.getSessionAttributes();
        if (attributes === undefined || Object.keys(attributes).length === 0) {
            attributes = {
            }
        }
        console.log("getSessionStorage", attributes);
        return attributes;
    }


    private saveSessionAttributes = (sessionAttributes: {
        [key: string]: any
    }) => {
        this.input.attributesManager.setSessionAttributes(sessionAttributes);
    }

    getItem(key: string, def?: any): any {
        const v = this.getSessionStorage()[key];
        if (!v) return def;
        return v;
    }

    setItem(key: string, value: any) {
        const session = this.getSessionStorage();
        session[key] = value;
        this.saveSessionAttributes(session);
    }
}