'use strict';

var searchEmployeeResourceSkillsAllStatusForBU = require('../../lib/searchEmployeeResourceSkillsAllStatusForBU');

module.exports = {
    get: function searchEmployeeResourceSkillsAllStatusForBU_get(req, res) {
        searchEmployeeResourceSkillsAllStatusForBU.searchEmployeeResourceSkillsAllStatusForBU(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['buid'])
    }    
};