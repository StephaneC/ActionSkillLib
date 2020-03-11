'use strict';

import 'mocha';
import { assert } from 'chai';
import { DialogflowConversation } from 'actions-on-google';
import { PlateformMock } from '../../src/mock/PlateformMock';

import * as notificationToken from '../mock/home/notificationToken.json';

describe('Input utils tests', () => {

    describe('Get notification token', () => {
        it('Home', () => {
            const p: PlateformMock = new PlateformMock(new DialogflowConversation({body:notificationToken}));
            const token = 'ABwppHFTSc3PiQ_XxG1y3Fk8SVv6KrzI4i0LhqCqj_eDduztLPQpPz1gv75IWrdo85TN5HCI2pX4_jxxGMol3zQAq4hIKQ';
            assert.equal(token, p.inputUtils.getNotificationToken());
        });
    });
});