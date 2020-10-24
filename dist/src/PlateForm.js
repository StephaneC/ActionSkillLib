"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plateform = exports.PLATEFORM = void 0;
const actions_on_google_1 = require("actions-on-google");
const SkillTemplate_1 = require("./skill/SkillTemplate");
const SkillInputUtils_1 = require("./skill/SkillInputUtils");
const SkillSessionStorage_1 = require("./skill/SkillSessionStorage");
const SkillUserStorage_1 = require("./skill/SkillUserStorage");
const ActionTemplate_1 = require("./action/ActionTemplate");
const ActionInputUtils_1 = require("./action/ActionInputUtils");
const ActionUserStorage_1 = require("./action/ActionUserStorage");
const ActionSessionStorage_1 = require("./action/ActionSessionStorage");
const SkillEntities_1 = require("./skill/SkillEntities");
const ActionEntities_1 = require("./action/ActionEntities");
const InAppPurchase_1 = require("./skill/InAppPurchase");
const ActionInAppPurchase_1 = require("./action/ActionInAppPurchase");
var PLATEFORM;
(function (PLATEFORM) {
    PLATEFORM["ACTION"] = "ACTION";
    PLATEFORM["ALEXA"] = "ALEXA";
})(PLATEFORM = exports.PLATEFORM || (exports.PLATEFORM = {}));
;
class Plateform {
    constructor(input) {
        this.input = input;
        console.log('Creating plateform. ', typeof input);
        if (input instanceof actions_on_google_1.DialogflowConversation) {
            console.log('Init plateform ACTION');
            this.type = PLATEFORM.ACTION;
            this.template = new ActionTemplate_1.ActionTemplate(input);
            this.inputUtils = new ActionInputUtils_1.ActionInputUtils(input);
            this.sessionStorage = new ActionSessionStorage_1.ActionSessionStorage(input);
            this.userStorage = new ActionUserStorage_1.ActionUserStorage(input);
            this.entities = new ActionEntities_1.ActionEntities(input);
            this.inAppPurchase = new ActionInAppPurchase_1.ActionInAppPurchase(input);
        }
        else /*if (input instanceof HandlerInput)*/ {
            console.log('Init plateform ALEXA');
            this.type = PLATEFORM.ALEXA;
            this.template = new SkillTemplate_1.SkillTemplate(input);
            this.inputUtils = new SkillInputUtils_1.SkillInputUtils(input);
            this.sessionStorage = new SkillSessionStorage_1.SkillSessionStorage(input);
            this.userStorage = new SkillUserStorage_1.SkillUserStorage(input);
            this.entities = new SkillEntities_1.SkillEntities(input);
            this.inAppPurchase = new InAppPurchase_1.SkillInAppPurchase(input);
        } /*else {
            console.error('unable to find plateform for ' + typeof input);
        }*/
    }
    async getUserId() {
        if (this.type === PLATEFORM.ALEXA) {
            return Promise.resolve(this.input.requestEnvelope.context.System.user.userId);
        }
        else if (this.type === PLATEFORM.ACTION) {
            let userId = await this.userStorage.getItem("userId");
            if (!userId) {
                // if no user id, create one and store it in userStorage
                userId = this.createUUID();
                console.log("Create new UserId : " + userId);
                await this.userStorage.setItem("userId", userId);
            }
            return userId;
        }
    }
    createUUID() {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        var uuid = s.join("");
        return uuid;
    }
}
exports.Plateform = Plateform;
//# sourceMappingURL=PlateForm.js.map