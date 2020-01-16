import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";
import { Template } from "./Template";
import { InputUtils } from "./InputUtils";
import { SessionStorage } from "./SessionStorage";
import { UserStorage } from "./UserStorage";
import { DynamicEntities } from "./DynamicEntities";
import { InAppPurchase } from "./InAppPurchase";
export declare enum PLATEFORM {
    ACTION = 0,
    ALEXA = 1
}
export declare class Plateform {
    readonly input: HandlerInput | DialogflowConversation;
    readonly type: PLATEFORM;
    readonly sessionStorage: SessionStorage;
    readonly userStorage: UserStorage;
    readonly entities: DynamicEntities;
    readonly inAppPurchase: InAppPurchase;
    template: Template;
    inputUtils: InputUtils;
    constructor(input: HandlerInput | DialogflowConversation);
    getUserId(): Promise<string>;
    private createUUID;
}
