/**
 * Created by Fabio on 21/05/2017.
 */
'use strict';
const crypto = require('crypto');

/**
 * Normalize string
 * @param str
 * @returns {*}
 */
function normalizeInput(str) {
    if(str === null || typeof str === 'undefined')
        throw new Error('required origin');

    if(typeof str === 'object')
        str = JSON.stringify(str);

    if(typeof str !== 'string')
        str = str.toString();

    return str;
}

/**
 * If is JSON string then parse
 * @param str
 * @returns {*}
 */
function normalizeOutput(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}

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
        str = normalizeInput(str);
        let cipher = crypto.createCipher(this.algorithm, this.key);
        return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
    }

    /**
     * Decode string
     * @param str
     * @return {string}
     */
    decode(str) {
        str = normalizeInput(str);
        let decipher = crypto.createDecipher(this.algorithm, this.key);
        let decoded = decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
        return normalizeOutput(decoded);
    }

    /**
     * Get available ciphers
     * @return {array}
     */
    static getCiphers(){
        return crypto.getCiphers();
    }
}

module.exports = Cryptor;

module.exports._normalizeInput = normalizeInput;
module.exports._normalizeOutput = normalizeOutput;