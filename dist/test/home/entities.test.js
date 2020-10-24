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
const entitiePodcast = __importStar(require("../mock/home/entitiePodcast.json"));
const PlateFormMock_1 = require("../../src/mock/PlateFormMock");
const actions_on_google_1 = require("actions-on-google");
describe('Entities utils tests', () => {
    describe('Get Entity', () => {
        it('Get Entity', () => {
            const p = new PlateFormMock_1.PlateformMock(new actions_on_google_1.DialogflowConversation({ body: entitiePodcast }));
            chai_1.assert.equal('2822218', p.entities.get('podcast'));
        });
    });
});
//# sourceMappingURL=entities.test.js.map