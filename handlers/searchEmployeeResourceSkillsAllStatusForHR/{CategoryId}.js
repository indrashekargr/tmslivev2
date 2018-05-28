'use strict';

var searchEmployeeResourceSkillsAllStatusForHR = require('../../lib/searchEmployeeResourceSkillsAllStatusForHR');

module.exports = {
    get: function searchEmployeeResourceSkillsAllStatusForHR_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsAllStatusForHR.searchEmployeeResourceSkillsAllStatusForHR(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'])
    }    
};