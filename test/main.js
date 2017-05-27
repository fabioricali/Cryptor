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

});

describe('get algorithms', function () {
    it('should be array', function () {
        let algorithms = cryptor.getAlgorithms();
        console.log(algorithms);
        assert.equal(typeof algorithms, 'object');
    })
});