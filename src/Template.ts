import { HandlerInput } from 'ask-sdk';
import { DialogflowConversation } from 'actions-on-google';

export interface Template {
    input: HandlerInput | DialogflowConversation;
    readonly hasDisplay: boolean;
    readonly hasRoundScreen: boolean;


    /** Simple templates */
    simpleMessage(message: string, reprompt: string, close: boolean): void;
    suggestions(suggestions: Array<string>);
    list(title: string, tokenTouch: string, items: Array<{ key: string, value: string, value2?: string, synonyms?: Array<string>, icon?: string }>, backgroundImage?: { url: string, desc: string }): void;
    error(msg: string): void;
    card(title: string, message: string, image: string);
    /** audio */
    playAudio(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number);
    playLater(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number);
    stopAudio(close: boolean);
    /* Notifications */
    /**
     * Notification card will be send to Amazon app
     */
    askNotification();
}