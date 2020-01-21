/******
 * Some vars has been added to storage because session removed while
 *
 * 1. SessionStorage.PodcastListOffset : Offset in list podcast intent.
 */
import { HandlerInput } from 'ask-sdk';
import { SessionStorage } from '../SessionStorage';
export declare class SkillSessionStorage implements SessionStorage {
    input: HandlerInput;
    constructor(input: HandlerInput);
    private getSessionStorage;
    private saveSessionAttributes;
    getItem(key: string, def?: any): any;
    setItem(key: string, value: any): void;
}
