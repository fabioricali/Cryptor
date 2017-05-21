/**
 * Created by Fabio on 21/05/2017.
 */
'use strict';
const crypto = require('crypto');

/**
 * Cryptor class
 */
class Cryptor {

    /**
     * Cryptor constructor
     * @param key
     * @param algorithm
     */
    constructor(key, algorithm){

        if(typeof key === 'undefined')
            throw new Error('required key');

        if(key === '')
            throw new Error('key cannot be empty');

        this.algorithm = algorithm || 'aes-256-ctr';
        this.key = key;
    }

    /**
     * Encode string
     * @param str
     * @returns {*}
     */
    encode(str) {
        let cipher = crypto.createCipher(this.algorithm, this.key);
        let crypted = cipher.update(str, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    /**
     * Decode string
     * @param str
     * @returns {*}
     */
    decode(str) {
        let decipher = crypto.createDecipher(this.algorithm, this.key);
        let dec = decipher.update(str, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}

module.exports = Cryptor;
