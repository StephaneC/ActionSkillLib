import { HandlerInput } from "ask-sdk";
import { DialogflowConversation } from "actions-on-google";
import { Template } from "./Template";
import { SkillTemplate } from "./skill/SkillTemplate";
import { SkillInputUtils } from "./skill/SkillInputUtils";
import { InputUtils } from "./InputUtils";
import { SessionStorage } from "./SessionStorage";
import { UserStorage } from "./UserStorage";
import { SkillSessionStorage } from "./skill/SkillSessionStorage";
import { SkillUserStorage } from "./skill/SkillUserStorage";
import { ActionTemplate } from "./action/ActionTemplate";
import { ActionInputUtils } from "./action/ActionInputUtils";
import { ActionUserStorage } from "./action/ActionUserStorage";
import { ActionSessionStorage } from "./action/ActionSessionStorage";
import { DynamicEntities } from "./DynamicEntities";
import { SkillEntities } from "./skill/SkillEntities";
import { ActionEntities } from "./action/ActionEntities";
import { InAppPurchase } from "./InAppPurchase";
import { SkillInAppPurchase } from "./skill/InAppPurchase";
import { ActionInAppPurchase } from "./action/ActionInAppPurchase";

export enum PLATEFORM { ACTION = 'ACTION', ALEXA = 'ALEXA' };

export class Plateform {
    readonly input: HandlerInput| DialogflowConversation;
    readonly type: PLATEFORM;
    readonly sessionStorage: SessionStorage;
    readonly userStorage: UserStorage;
    readonly entities: DynamicEntities;
    readonly inAppPurchase: InAppPurchase;
    template: Template; 
    inputUtils: InputUtils;

    constructor (input: HandlerInput| DialogflowConversation) {
        this.input = input;
        console.log('Creating plateform. ', typeof input);
        if (input instanceof DialogflowConversation) {
            console.log('Init plateform ACTION');
            this.type = PLATEFORM.ACTION;
            this.template = new ActionTemplate(input);
            this.inputUtils = new ActionInputUtils(input);
            this.sessionStorage = new ActionSessionStorage(input);
            this.userStorage = new ActionUserStorage(input);
            this.entities = new ActionEntities(input);
            this.inAppPurchase = new ActionInAppPurchase(input);
        } else /*if (input instanceof HandlerInput)*/ {
            console.log('Init plateform ALEXA');
            this.type = PLATEFORM.ALEXA;
            this.template = new SkillTemplate(input);
            this.inputUtils = new SkillInputUtils(input);
            this.sessionStorage = new SkillSessionStorage(input);
            this.userStorage = new SkillUserStorage(input);
            this.entities = new SkillEntities(input);
            this.inAppPurchase = new SkillInAppPurchase(input);
        } /*else {
            console.error('unable to find plateform for ' + typeof input);
        }*/
    }



    async getUserId(): Promise<string> {
        if ( this.type === PLATEFORM.ALEXA) {
            return Promise.resolve(
                (this.input as HandlerInput).requestEnvelope.context.System.user.userId);
        } else if ( this.type === PLATEFORM.ACTION) {
            let userId = await this.userStorage.getItem("userId");
            if (!userId) {
                // if no user id, create one and store it in userStorage
                userId = this.createUUID();
                console.log("Create new UserId : " + userId)
                await this.userStorage.setItem("userId", userId);
            }
            return userId;
        }
    }

    private createUUID(): string {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
    
        var uuid = s.join("");
        return uuid;
    }
}