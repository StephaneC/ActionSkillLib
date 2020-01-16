import { HandlerInput } from 'ask-sdk';
import { Template } from '../Template';
export declare class SkillTemplate implements Template {
    input: HandlerInput;
    hasDisplay: boolean;
    hasApl: boolean;
    constructor(input: HandlerInput);
    suggestions(suggestions: Array<string>): void;
    card(title: string, message: string, image: string): void;
    simpleMessage(message: string, reprompt: string, close: boolean): void;
    /**
     * Add list only if hasDisplay
     * @param title
     * @param tokenTouch
     * @param items
     */
    list(title: string, tokenTouch: string, items: Array<{
        key: string;
        value: string;
    }>): void;
    error(): void;
    private mapItems;
}
