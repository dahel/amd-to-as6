'use strict';

define([
    'config',
    'app/system/services/store/service'
], function (
    CONFIG,
    service
) => {
    return {

        /**
         * @type {String}
         */
        id: 'diet',

        /**
         * @returns {String}
         */
        getUrl() {
            return `${CONFIG.API_URL}/billing/plans`;
        }
    }
});