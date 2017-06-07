/**
 * Created by Fabio on 21/05/2017.
 */
const assert = require('assert');
const cryptor = require('../index');

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

describe('private function', function () {
    describe('normalizeStr', function () {
        it('should be return equal string', function () {
            let origin = 'hello';
            let result = cryptor._normalizeInput(origin);
            assert.equal(result, origin);
        });
        it('should be return error if null', function (done) {
            try {
                cryptor._normalizeInput(null);
            } catch (e) {
                done();
            }
        });
        it('should be return error if undefined', function (done) {
            try {
                cryptor._normalizeInput();
            } catch (e) {
                done();
            }
        });
    });
});