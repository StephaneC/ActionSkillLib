import { Template } from "../Template";
import { DialogflowConversation } from "actions-on-google";
export declare class ActionTemplate implements Template {
    input: DialogflowConversation;
    readonly hasDisplay: boolean;
    readonly hasRoundScreen: boolean;
    constructor(input: DialogflowConversation);
    askNotification(intentName?: string): void;
    playAudio(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number): void;
    playLater(url: string, title: string, subtitle: string, img: string, backgroundImg: string, token: string, offset: number): void;
    stopAudio(close: boolean): void;
    card(title: string, message: string, image: string): void;
    suggestions(suggestions: Array<string>): void;
    simpleMessage(message: string, reprompt: string, close: boolean): void;
    error(msg: string): void;
    help(msg: string, actionsList: Array<string>): void;
    list(title: string, touchToken: string, items: Array<{
        key: string;
        value: string;
        value2?: string;
        synonyms?: Array<string>;
        icon?: string;
    }>): void;
    interactiveCanvas(url: string, closeMic?: boolean, data?: any): void;
    private getItems;
    private basicCard;
}
