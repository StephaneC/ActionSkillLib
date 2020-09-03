'use strict';

import 'mocha';
import { assert } from 'chai';
import { isAudio,
    addSpeakBalise,
    audioFormat,
    adaptAudioTagSSMLToAlexa } from '../../src/template.utils';


describe('template utils tests', () => {

    describe("isAudio", async function () {
        it("isAudio - YES", async function () {
            assert.isTrue(isAudio('<audio src=""></audio>'))
        });
        it("isAudio - NO", async function () {
            assert.isFalse(isAudio('salut ca va?'))
        });
    });

    describe("addSpeakBalise", async function () {
        it("addSpeakBalise", async function () {
            assert.equal('<speak>salut</speak>', addSpeakBalise('salut'))
        });
    });

    describe("audioFormat", async function () {
        it("addSpeakBalise - No display", async function () {
            assert.equal('<audio src="salut"></audio>', audioFormat('salut'))
        });
        it("addSpeakBalise - with display", async function () {
            assert.equal('<audio src="salut"><desc>ca va</desc></audio>', audioFormat('salut', 'ca va'))
        });
    });

    describe("adaptAudioTagSSMLToAlexa", async function () {
        it("addSpeakBalise - No display", async function () {
            assert.equal('<audio src="salut"></audio>', adaptAudioTagSSMLToAlexa('<audio src="salut"></audio>'))
            assert.equal('<audio src="salut"/>', adaptAudioTagSSMLToAlexa('<audio src="salut"/>'))
        });

        it("addSpeakBalise - with display", async function () {
            assert.equal('<audio src="salut"></audio>', adaptAudioTagSSMLToAlexa('<audio src="salut"><desc>tvho</desc></audio>'))
        });

        it("addSpeakBalise - with display - with text", async function () {
            assert.equal('tchii <audio src="salut"></audio> tchaa', adaptAudioTagSSMLToAlexa('tchii <audio src="salut"><desc>tvho</desc></audio> tchaa'))
            assert.equal('tchii <audio src="salut"></audio> tchaa <audio src="salat"></audio>', adaptAudioTagSSMLToAlexa('tchii <audio src="salut"><desc>tvho</desc></audio> tchaa <audio src="salat"><desc>tvqsdqsdho</desc></audio>'))
        });

    });
});