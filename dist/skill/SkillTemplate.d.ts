import { Directive } from 'ask-sdk-model';
import { HandlerInput } from 'ask-sdk';
import { Template } from '../Template';
export declare class SkillTemplate implements Template {
    input: HandlerInput;
    hasDisplay: boolean;
    hasApl: boolean;
    constructor(input: HandlerInput);
    private addBackground;
    playAudio(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number): void;
    playLater(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number): void;
    stopAudio(close: boolean): void;
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
        value2?: string;
        icon?: string;
    }>, backgroundImage?: {
        url: string;
        desc: string;
    }): void;
    addApl: (directive: Directive) => void;
    error(): void;
    private mapItems;
}
