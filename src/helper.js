/**
 * Created by Fabio on 07/06/2017.
 */
'use strict';

/**
 * Helper class
 */
class Helper {

    /**
     * Normalize string
     * @param str
     * @returns {*}
     */
    static normalizeInput(str) {
        if (str === null || typeof str === 'undefined')
            throw new Error('required origin');

        if (typeof str === 'object')
            str = JSON.stringify(str);

        if (typeof str !== 'string')
            str = str.toString();

        return str;
    }

    /**
     * If is JSON string then parse
     * @param str
     * @returns {*}
     */
    static normalizeOutput(str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return str;
        }
    }
}

module.exports = Helper;