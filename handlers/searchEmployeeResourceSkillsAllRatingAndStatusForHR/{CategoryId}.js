'use strict';

var searchEmployeeResourceSkillsAllRatingAndStatusForHR = require('../../lib/searchEmployeeResourceSkillsAllRatingAndStatusForHR');

module.exports = {
    get: function searchEmployeeResourceSkillsAllRatingAndStatusForHR_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsAllRatingAndStatusForHR.searchEmployeeResourceSkillsAllRatingAndStatusForHR(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'])
    }    
};