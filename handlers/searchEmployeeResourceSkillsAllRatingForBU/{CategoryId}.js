'use strict';

var searchEmployeeResourceSkillsAllRatingForBU = require('../../lib/searchEmployeeResourceSkillsAllRatingForBU');

module.exports = {
    get: function searchEmployeeResourceSkillsAllRatingForBU_get(req, res) {
        searchEmployeeResourceSkillsAllRatingForBU.searchEmployeeResourceSkillsAllRatingForBU(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['buid'])
    }    
};