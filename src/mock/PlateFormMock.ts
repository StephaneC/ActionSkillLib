import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";
import { Template } from "../Template";
import { InputUtils } from "../InputUtils";
import { SessionStorage } from "../SessionStorage";
import { UserStorage } from "../UserStorage";
import { DynamicEntities } from "../DynamicEntities";
import { Plateform } from "../PlateForm";
import { SessionStorageMock } from "./SessionStorageMock";
import { UserStorageMock } from "./UserStorageMock";

export enum PLATEFORM { ACTION, ALEXA };

export class PlateformMock extends Plateform {
    readonly input: HandlerInput| DialogflowConversation;
    readonly type: PLATEFORM;
    readonly sessionStorage: SessionStorage;
    readonly userStorage: UserStorage;
    readonly entities: DynamicEntities;
    template: Template; 
    inputUtils: InputUtils;

    speak: string;
    reprompt: string;
    endSession: boolean;

    constructor (input: HandlerInput| DialogflowConversation) {
        super(input);
        this.userStorage = new UserStorageMock();
        this.sessionStorage = new SessionStorageMock();

        if (this.type === PLATEFORM.ALEXA) {
            input["responseBuilder"] = {
                addDirective: () => {//TODO
                    return input["responseBuilder"];
                },
                speak: (msg: string) => {
                    this.speak = msg;
                    return input["responseBuilder"];
                },
                reprompt: (msg: string) => {
                    this.reprompt = msg;
                    return input["responseBuilder"];
                },
                withShouldEndSession: (end: boolean) => {
                    this.endSession = end;
                    return input["responseBuilder"];
                },
            };
            if (input["requestEnvelope"] && input["requestEnvelope"].session.attributes) {
                // init sessionStorage
                Object.keys(input["requestEnvelope"].session.attributes).forEach(k => {
                    this.sessionStorage.setItem(k, input["requestEnvelope"].session.attributes[k]);
                });
            }
        }
    }
}