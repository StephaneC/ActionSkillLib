'use strict';

import 'mocha';
import { assert } from 'chai';
import { HandlerInput } from 'ask-sdk';
import { Plateform } from '@/PlateForm';

import * as speakCorrectResponse from '../mock/skill/response_speak.json';

describe('Entities utils tests', () => {

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