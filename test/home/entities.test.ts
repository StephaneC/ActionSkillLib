'use strict';

import 'mocha';
import { assert } from 'chai';

import * as entitiePodcast from '../mock/home/entitiePodcast.json';
import { PlateformMock } from '../../src/mock/PlateformMock';
import { DialogflowConversation } from 'actions-on-google';

describe('Entities utils tests', () => {

    describe('Get Entity', () => {
        it('Get Entity', () => {
            const p: PlateformMock = new PlateformMock(new DialogflowConversation({body:entitiePodcast}));

            assert.equal('2822218', p.entities.get('podcast'));
        });
    });

});