'use strict';

var searchEmployeeResourceSkillsAllStatusForRM = require('../../lib/searchEmployeeResourceSkillsAllStatusForRM');

module.exports = {
    get: function searchEmployeeResourceSkillsAllStatusForRM_get(req, res) {
        searchEmployeeResourceSkillsAllStatusForRM.searchEmployeeResourceSkillsAllStatusForRM(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['ReportingManager'])
    }    
};