'use strict';
var Mockgen = require('../mockgen.js');
module.exports = {
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/searchEmployeeResourceSkillsAllStatusForHR/{CategoryId}/{SkillId}/{Rating}/{Availability}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
