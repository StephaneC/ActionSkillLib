'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const UrlUtils_1 = require("../src/UrlUtils");
describe('Url utils tests', () => {
    describe('format https', () => {
        it('formatUrlHttps', () => {
            chai_1.assert.equal('www.google.com', UrlUtils_1.formatUrlHttps('www.google.com'));
            chai_1.assert.equal('https://www.google.com', UrlUtils_1.formatUrlHttps('http://www.google.com'));
            chai_1.assert.equal('https://www.google.com', UrlUtils_1.formatUrlHttps('https://www.google.com'));
        });
    });
});
//# sourceMappingURL=urlUtils.test.js.map