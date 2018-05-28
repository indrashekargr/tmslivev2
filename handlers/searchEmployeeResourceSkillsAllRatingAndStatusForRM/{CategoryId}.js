'use strict';

var searchEmployeeResourceSkillsAllRatingAndStatusForRM = require('../../lib/searchEmployeeResourceSkillsAllRatingAndStatusForRM');

module.exports = {
    get: function searchEmployeeResourceSkillsAllRatingAndStatusForRM_get(req, res) {
        searchEmployeeResourceSkillsAllRatingAndStatusForRM.searchEmployeeResourceSkillsAllRatingAndStatusForRM(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['ReportingManager'])
    }    
};