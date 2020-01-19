import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";
import { Template } from "../Template";
import { InputUtils } from "../InputUtils";
import { SessionStorage } from "../SessionStorage";
import { UserStorage } from "../UserStorage";
import { DynamicEntities } from "../DynamicEntities";
import { Plateform } from "../PlateForm";
export declare enum PLATEFORM {
    ACTION = 0,
    ALEXA = 1
}
export declare class PlateformMock extends Plateform {
    readonly input: HandlerInput | DialogflowConversation;
    readonly type: PLATEFORM;
    readonly sessionStorage: SessionStorage;
    readonly userStorage: UserStorage;
    readonly entities: DynamicEntities;
    template: Template;
    inputUtils: InputUtils;
    speak: Array<string>;
    reprompt: string;
    endSession: boolean;
    constructor(input: HandlerInput | DialogflowConversation);
}
