/**
 * Created by Fabio on 21/05/2017.
 */
'use strict';
const crypto = require('crypto');
const helper = require('./helper');
const deprecate = require('depreca');

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
     * Get available hashes
     * @return {array}
     */
    static getHashes(){
        return crypto.getHashes();
    }

    /**
     * MD5 hash
     * @param str
     * @returns {*}
     * @deprecated
     */
    static md5(str){
        deprecate('md5 is deprecated, use hash method instead. e.g. hash("your string", "md5")');
        return crypto.createHash('md5').update(str).digest('hex');
    }

    /**
     * SHA1 hash
     * @param str
     * @returns {*}
     * @deprecated
     */
    static sha1(str){
        deprecate('sha1 is deprecated, use hash method instead. e.g. hash("your string", "sha1")');
        return crypto.createHash('sha1').update(str).digest('hex');
    }

    /**
     * Creates hash of an string based on available hashes of platform
     * @param str
     * @param hash
     * @returns {*}
     */
    static hash(str, hash){
        if(Cryptor.getHashes().indexOf(hash) !== -1){
            return crypto.createHash(hash).update(str).digest('hex');
        } else {
            throw new Error('hash ' + hash + ' not found in your platform')
        }
    }
}

module.exports = Cryptor;

