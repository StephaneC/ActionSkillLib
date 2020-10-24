'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const template_utils_1 = require("../../src/template.utils");
describe('template utils tests', () => {
    describe("isAudio", async function () {
        it("isAudio - YES", async function () {
            chai_1.assert.isTrue(template_utils_1.isAudio('<audio src=""></audio>'));
        });
        it("isAudio - NO", async function () {
            chai_1.assert.isFalse(template_utils_1.isAudio('salut ca va?'));
        });
    });
    describe("addSpeakBalise", async function () {
        it("addSpeakBalise", async function () {
            chai_1.assert.equal('<speak>salut</speak>', template_utils_1.addSpeakBalise('salut'));
        });
    });
    describe("audioFormat", async function () {
        it("addSpeakBalise - No display", async function () {
            chai_1.assert.equal('<audio src="salut"></audio>', template_utils_1.audioFormat('salut'));
        });
        it("addSpeakBalise - with display", async function () {
            chai_1.assert.equal('<audio src="salut"><desc>ca va</desc></audio>', template_utils_1.audioFormat('salut', 'ca va'));
        });
    });
    describe("adaptAudioTagSSMLToAlexa", async function () {
        it("addSpeakBalise - No display", async function () {
            chai_1.assert.equal('<audio src="salut"></audio>', template_utils_1.adaptAudioTagSSMLToAlexa('<audio src="salut"></audio>'));
            chai_1.assert.equal('<audio src="salut"/>', template_utils_1.adaptAudioTagSSMLToAlexa('<audio src="salut"/>'));
        });
        it("addSpeakBalise - with display", async function () {
            chai_1.assert.equal('<audio src="salut"></audio>', template_utils_1.adaptAudioTagSSMLToAlexa('<audio src="salut"><desc>tvho</desc></audio>'));
        });
        it("addSpeakBalise - with display - with text", async function () {
            chai_1.assert.equal('tchii <audio src="salut"></audio> tchaa', template_utils_1.adaptAudioTagSSMLToAlexa('tchii <audio src="salut"><desc>tvho</desc></audio> tchaa'));
            chai_1.assert.equal('tchii <audio src="salut"></audio> tchaa <audio src="salat"></audio>', template_utils_1.adaptAudioTagSSMLToAlexa('tchii <audio src="salut"><desc>tvho</desc></audio> tchaa <audio src="salat"><desc>tvqsdqsdho</desc></audio>'));
        });
    });
});
//# sourceMappingURL=template.utils.test.js.map