"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlateformMock = void 0;
const PlateForm_1 = require("../PlateForm");
const SessionStorageMock_1 = require("./SessionStorageMock");
const UserStorageMock_1 = require("./UserStorageMock");
class PlateformMock extends PlateForm_1.Plateform {
    constructor(input) {
        super(input);
        this.speak = [];
        this.userStorage = new UserStorageMock_1.UserStorageMock();
        this.sessionStorage = new SessionStorageMock_1.SessionStorageMock();
        if (this.type === PlateForm_1.PLATEFORM.ALEXA) {
            input["responseBuilder"] = {
                addRenderTemplateDirective: () => {
                    //TODO
                    return input["responseBuilder"];
                },
                addDirective: () => {
                    return input["responseBuilder"];
                },
                speak: (msg) => {
                    this.speak = [msg];
                    return input["responseBuilder"];
                },
                reprompt: (msg) => {
                    this.reprompt = msg;
                    return input["responseBuilder"];
                },
                withStandardCard: () => {
                },
                withShouldEndSession: (end) => {
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
        else {
            input.ask = (...responses) => {
                responses.forEach(r => {
                    this.speak.push(r.toString());
                });
                return input;
            };
        }
    }
}
exports.PlateformMock = PlateformMock;
//# sourceMappingURL=PlateFormMock.js.map