/**
 * Created by Fabio on 21/05/2017.
 */
'use strict';
const crypto = require('crypto');
const helper = require('./helper');

/**
 * Cryptor class
 */
class Cryptor {

    /**
     * Cryptor constructor
     * @param key
     * @param algorithm
     */
    constructor(key, algorithm = 'aes-256-ctr'){
        if(typeof key === 'undefined')
            throw new Error('required key');

        if(key === '')
            throw new Error('key cannot be empty');

        this.algorithm = algorithm;
        this.key = key;
    }

    /**
     * Encode string
     * @param str
     * @return {string}
     */
    encode(str) {
        str = helper.normalizeInput(str);
        let cipher = crypto.createCipher(this.algorithm, this.key);
        return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
    }

    /**
     * Decode string
     * @param str
     * @return {string}
     */
    decode(str) {
        str = helper.normalizeInput(str);
        let decipher = crypto.createDecipher(this.algorithm, this.key);
        let decoded = decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
        return helper.normalizeOutput(decoded);
    }

    /**
     * Get available ciphers
     * @return {array}
     */
    static getCiphers(){
        return crypto.getCiphers();
    }

    /**
     * MD5 hash
     * @param str
     * @returns {*}
     */
    static md5(str){
        return crypto.createHash('md5').update(str).digest('hex');
    }

    /**
     * SHA1 hash
     * @param str
     * @returns {*}
     */
    static sha1(str){
        return crypto.createHash('sha1').update(str).digest('hex');
    }

    /**
     * SHA512 hash
     * @param str
     * @returns {*}
     */
    static sha512(str){
        return crypto.createHash('sha512').update(str).digest('hex');
    }
}

module.exports = Cryptor;