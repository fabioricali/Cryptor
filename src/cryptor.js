/**
 * Created by Fabio on 21/05/2017.
 */
'use strict';
const crypto = require('crypto');
const helper = require('./helper');
const deprecate = require('depreca');
const {ALGORITHM} = require('./constants');
/**
 * Cryptor class
 */
class Cryptor {

    /**
     * Cryptor constructor
     * @param key
     * @param algorithm
     */
    constructor(key, algorithm = 'aes-256-ctr') {
        if (typeof key !== 'string')
            throw new Error('required an string key');

        if (key === '')
            throw new Error('key cannot be empty');

        if (!ALGORITHM.includes(algorithm))
            throw new Error(`algorithm ${algorithm} not supported, use those available: ${ALGORITHM.join(', ')}`);

        // Transform to 32 chars
        key = this.constructor.hash(key, 'md5');

        Object.defineProperties(this, {
            algorithm: {
                value: algorithm
            },
            key: {
                value: key
            },
            iv: {
                value: key.substr(16)
            },
            options: {
                value: {}
            }
        });
    }

    /**
     * Encode string
     * @param str
     * @return {string}
     */
    encode(str) {
        str = helper.normalizeInput(str);
        const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv, this.options);
        return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
    }

    /**
     * Decode string
     * @param str
     * @return {string}
     */
    decode(str) {
        str = helper.normalizeInput(str);
        const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv, this.options);
        const decoded = decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
        return helper.normalizeOutput(decoded);
    }

    /**
     * Get available ciphers
     * @return {array}
     */
    static getCiphers() {
        return crypto.getCiphers();
    }

    /**
     * Get available hashes
     * @return {array}
     */
    static getHashes() {
        return crypto.getHashes();
    }

    /**
     * MD5 hash
     * @param str
     * @returns {*}
     * @deprecated
     */
    static md5(str) {
        deprecate('md5 is deprecated, use hash method instead. e.g. hash("your string", "md5")');
        return crypto.createHash('md5').update(str).digest('hex');
    }

    /**
     * SHA1 hash
     * @param str
     * @returns {*}
     * @deprecated
     */
    static sha1(str) {
        deprecate('sha1 is deprecated, use hash method instead. e.g. hash("your string", "sha1")');
        return crypto.createHash('sha1').update(str).digest('hex');
    }

    /**
     * Creates hash of an string based on available hashes of platform
     * @param str
     * @param hash
     * @returns {*}
     */
    static hash(str, hash) {
        if (Cryptor.hasHash(hash)) {
            return crypto.createHash(hash).update(str).digest('hex');
        } else {
            throw new Error('hash ' + hash + ' not found in your platform')
        }
    }

    /**
     * Check if hash exists
     * @param hash
     * @returns {boolean}
     */
    static hasHash(hash) {
        return Cryptor.getHashes().indexOf(hash) !== -1;
    }
}

module.exports = Cryptor;

