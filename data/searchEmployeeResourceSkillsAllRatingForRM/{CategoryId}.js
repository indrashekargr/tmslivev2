'use strict';
var Mockgen = require('../mockgen.js');

module.exports = {

    get: {
        200: function (req, res, callback) {
            Mockgen().responses({
                path: '/searchEmployeeResourceSkillsAllRatingForRM/{CategoryId}/{SkillId}/{Rating}/{Availability}/{ReportingManager}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
