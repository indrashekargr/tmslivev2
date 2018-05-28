'use strict';

var searchEmployeeResourceSkillsAllRatingForRM = require('../../lib/searchEmployeeResourceSkillsAllRatingForRM');

module.exports = {
    get: function searchEmployeeResourceSkillsAllRatingForRM_get(req, res) {
        searchEmployeeResourceSkillsAllRatingForRM.searchEmployeeResourceSkillsAllRatingForRM(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['ReportingManager'])
    }    
};