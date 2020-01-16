"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlateForm_1 = require("../PlateForm");
const SessionStorageMock_1 = require("./SessionStorageMock");
const UserStorageMock_1 = require("./UserStorageMock");
var PLATEFORM;
(function (PLATEFORM) {
    PLATEFORM[PLATEFORM["ACTION"] = 0] = "ACTION";
    PLATEFORM[PLATEFORM["ALEXA"] = 1] = "ALEXA";
})(PLATEFORM = exports.PLATEFORM || (exports.PLATEFORM = {}));
;
class PlateformMock extends PlateForm_1.Plateform {
    constructor(input) {
        super(input);
        this.userStorage = new UserStorageMock_1.UserStorageMock();
        this.sessionStorage = new SessionStorageMock_1.SessionStorageMock();
        if (this.type === PLATEFORM.ALEXA) {
            input["responseBuilder"] = {
                addDirective: () => {
                    return input["responseBuilder"];
                },
                speak: () => {
                    return input["responseBuilder"];
                },
                reprompt: () => {
                    return input["responseBuilder"];
                },
                withShouldEndSession: () => {
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
exports.PlateformMock = PlateformMock;
//# sourceMappingURL=PlateFormMock.js.map