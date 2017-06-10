/**
 * Created by Fabio on 21/05/2017.
 */
const assert = require('assert');
const cryptor = require('../index');
const helper = require('../src/helper');

describe('encode and decode', function () {

    it('should be equal', function () {
        let origin = 'myExampleString';
        let myCryptor = new cryptor('yourSecretKey');
        let encoded = myCryptor.encode(origin);
        let decoded = myCryptor.decode(encoded);

        console.log(origin, encoded, decoded);

        assert.equal(origin, decoded);
    });

    it('should be equal using a number', function () {
        let origin = 10000;
        let myCryptor = new cryptor('yourSecretKey');
        let encoded = myCryptor.encode(origin);
        let decoded = myCryptor.decode(encoded);

        console.log(origin, encoded, decoded);

        assert.equal(origin, decoded);
    });

    it('should be equal using a object', function () {
        let origin = {a:1,b:2};
        let myCryptor = new cryptor('yourSecretKey');
        let encoded = myCryptor.encode(origin);
        let decoded = myCryptor.decode(encoded);

        console.log(origin, encoded, decoded);
        console.log(origin, typeof origin);
        console.log(decoded, typeof decoded);

        assert.deepEqual(origin, decoded);
    });

    it('origin is empty', function () {
        let origin = '';
        let myCryptor = new cryptor('yourSecretKey');
        let encoded = myCryptor.encode(origin);
        let decoded = myCryptor.decode(encoded);

        console.log(origin, encoded, decoded);

        assert.equal(origin, decoded);
    });

    it('should be error if origin missing', function (done) {
        try {
            let myCryptor = new cryptor('yourSecretKey');
            myCryptor.encode();
            myCryptor.decode();
        }catch (error) {
            done();
        }
    });

    it('should be error if key missing', function (done) {
        try{
            new cryptor()
        }catch (error) {
            done();
        }
    });

    it('should be error if key is empty', function (done) {
        try{
            new cryptor('')
        }catch (error) {
            done();
        }
    });

    it('should be equal with "blowfish" cipher', function () {
        let origin = 'myExampleString';
        let myCryptor = new cryptor('yourSecretKey', 'blowfish');
        let encoded = myCryptor.encode(origin);
        let decoded = myCryptor.decode(encoded);

        console.log(origin, encoded, decoded);

        assert.equal(origin, decoded);
    });

});

describe('get algorithms', function () {
    it('should be array', function () {
        let algorithms = cryptor.getCiphers();
        console.log(algorithms);
        assert.equal(typeof algorithms, 'object');
    })
});

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

    describe('hash helper', function () {
        it('should be return md5 hash', function () {
            let origin = 'ciao';
            let result = cryptor.md5(origin);
            console.log(origin, result);
            assert.equal(result, '6e6bc4e49dd477ebc98ef4046c067b5f');
        });
        it('should be return sha1 hash', function () {
            let origin = 'ciao';
            let result = cryptor.sha1(origin);
            console.log(origin, result);
            assert.equal(result, '1e4e888ac66f8dd41e00c5a7ac36a32a9950d271');
        });
    });
});