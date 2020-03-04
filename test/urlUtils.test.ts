'use strict';

import 'mocha';
import { assert } from 'chai';
import { formatUrlHttps } from '../src/UrlUtils';

describe('Url utils tests', () => {

    describe('format https', () => {
        it('formatUrlHttps', () => {
            assert.equal('www.google.com', formatUrlHttps('www.google.com'));
            assert.equal('https://www.google.com', formatUrlHttps('http://www.google.com'));
            assert.equal('https://www.google.com', formatUrlHttps('https://www.google.com'));
        });
    });
});