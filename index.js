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
     * @returns {*}
     */
    encode(str) {
        let cipher = crypto.createCipher(this.algorithm, this.key);
        return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
    }

    /**
     * Decode string
     * @param str
     * @returns {*}
     */
    decode(str) {
        let decipher = crypto.createDecipher(this.algorithm, this.key);
        return decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
    }

    /**
     * Get available algorithms
     * @returns {*}
     */
    static getAlgorithms(){
        return crypto.getCiphers();
    }
}

module.exports = Cryptor;
