'use strict';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const PlateForm_1 = require("../../src/PlateForm");
const aplTouchMock = __importStar(require("../mock/skill/apl_touch.json"));
const touchCorrectResponse = __importStar(require("../mock/skill/response_touch.json"));
const speakCorrectResponse = __importStar(require("../mock/skill/response_speak.json"));
describe('Input utils tests', () => {
    describe('Get Touch response', () => {
        it('Touch on APL', () => {
            const input = {
                requestEnvelope: aplTouchMock,
                attributesManager: null,
                responseBuilder: null,
            };
            const p = new PlateForm_1.Plateform(input);
            chai_1.assert.equal('1', p.inputUtils.getClicked());
        });
        it('Touch on standard', () => {
            const input = {
                requestEnvelope: touchCorrectResponse,
                attributesManager: null,
                responseBuilder: null,
            };
            const p = new PlateForm_1.Plateform(input);
            chai_1.assert.equal('1', p.inputUtils.getClicked());
        });
    });
    describe('Get Entity', () => {
        it('Get Entity', () => {
            const input = {
                requestEnvelope: speakCorrectResponse,
                attributesManager: null,
                responseBuilder: null,
            };
            const p = new PlateForm_1.Plateform(input);
            chai_1.assert.equal('1', p.inputUtils.getEntity('response_text'));
        });
    });
});
//# sourceMappingURL=inpututils.test.js.map