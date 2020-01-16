/******
 * Some vars has been added to storage because session removed while
 *
 * 1. SessionStorage.PodcastListOffset : Offset in list podcast intent.
 */
import { HandlerInput } from 'ask-sdk';
import { UserStorage } from '../UserStorage';
export declare class SkillUserStorage implements UserStorage {
    input: HandlerInput;
    constructor(input: HandlerInput);
    getItem(key: string): Promise<any>;
    setItem(key: string, value: any): Promise<any>;
    private getLongTimeStorage;
    clear: () => Promise<void>;
}
