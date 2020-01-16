import { Template } from "../Template";
import { DialogflowConversation, MediaObject } from "actions-on-google";
export declare class ActionTemplate implements Template {
    input: DialogflowConversation;
    hasDisplay: boolean;
    constructor(input: DialogflowConversation);
    card(title: string, message: string, image: string): void;
    suggestions(suggestions: Array<string>): void;
    simpleMessage(message: string, reprompt: string, close: boolean): void;
    error(msg: string): void;
    help(msg: string, actionsList: Array<string>): void;
    list(title: string, touchToken: string, items: Array<{
        key: string;
        value: string;
    }>): void;
    interactiveCanvas(url: string, closeMic?: boolean, data?: any): void;
    private getItems;
    private basicCard;
    getMediaObject(title: any, url: string, description: string, imgUrl?: string): MediaObject;
}
