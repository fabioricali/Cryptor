const helper = require('../src/helper');
const assert = require('assert');

describe('helper function', function () {
    describe('normalizeInput', function () {
        it('should be return equal string', function () {
            let origin = 'hello';
            let result = helper.normalizeInput(origin);
            assert.equal(result, origin);
        });

        it('should be return equal json string', function () {
            let origin = {a:1};
            let result = helper.normalizeInput(origin);
            assert.equal(result, JSON.stringify(origin));
        });

        it('should be return equal number', function () {
            let origin = 100;
            let result = helper.normalizeInput(origin);
            assert.equal(result, origin);
            assert.strictEqual(Number(result), origin);
        });

        it('should be return error if null', function (done) {
            try {
                helper.normalizeInput(null);
            } catch (e) {
                done();
            }
        });
        it('should be return error if undefined', function (done) {
            try {
                helper.normalizeInput();
            } catch (e) {
                done();
            }
        });
    });

    describe('normalizeOutput', function () {
        it('should be return equal string', function () {
            let origin = 'test';
            let result = helper.normalizeOutput(origin);
            assert.equal(result, origin);
        });
        it('should be return equal object', function () {
            let origin = '{"a":1}';
            let result = helper.normalizeOutput(origin);
            assert.deepEqual(result, JSON.parse(origin));
        });
    });
});