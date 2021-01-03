import { HandlerInput } from 'ask-sdk';
import { DialogflowConversation } from 'actions-on-google';
export interface Template {
    input: HandlerInput | DialogflowConversation;
    readonly hasDisplay: boolean;
    readonly hasRoundScreen: boolean;
    /** Simple templates */
    simpleMessage(message: string, reprompt: string, close: boolean): void;
    suggestions(suggestions: Array<string>): any;
    list(title: string, tokenTouch: string, items: Array<{
        key: string;
        value: string;
        value2?: string;
        synonyms?: Array<string>;
        icon?: string;
    }>, backgroundImage?: {
        url: string;
        desc: string;
    }, backgroundColor?: string): void;
    error(msg: string): void;
    card(title: string, message: string, image: string): any;
    /** audio */
    playAudio(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number): any;
    playLater(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number): any;
    stopAudio(close: boolean): any;
    /**
     * Notification card will be send to Amazon app
     * intentName : mandatory for google
     */
    askNotification(intentName?: string): any;
}
