'use strict';

import 'mocha';
import { assert } from 'chai';
import { HandlerInput } from 'ask-sdk';
import { Plateform } from '@/PlateForm';

import * as aplTouchMock from '../mock/skill/apl_touch.json';
import * as touchCorrectResponse from '../mock/skill/response_touch.json';
import * as speakCorrectResponse from '../mock/skill/response_speak.json';

describe('Input utils tests', () => {

    describe('Get Touch response', () => {
        it('Touch on APL', () => {
            const input = {
                requestEnvelope: aplTouchMock,
                attributesManager: null,
                responseBuilder: null,
            } as HandlerInput;
            const p: Plateform = new Plateform(input);
            assert.equal('1', p.inputUtils.getClicked());
        });

        it('Touch on standard', () => {
            const input: HandlerInput = {
                requestEnvelope: touchCorrectResponse,
                attributesManager: null,
                responseBuilder: null,
            } as HandlerInput;
            const p = new Plateform(input);
            assert.equal('1', p.inputUtils.getClicked());
        });
    });

    describe('Get Entity', () => {
        it('Get Entity', () => {
            const input = {
                requestEnvelope: speakCorrectResponse,
                attributesManager: null,
                responseBuilder: null,
            } as HandlerInput;
            const p = new Plateform(input);
            assert.equal('1', p.inputUtils.getEntity('response_text'));
        });
    });

});