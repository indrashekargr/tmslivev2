'use strict';

var searchEmployeeResourceSkillsAllRatingAndStatusForBU = require('../../lib/searchEmployeeResourceSkillsAllRatingAndStatusForBU');

module.exports = {
    get: function searchEmployeeResourceSkillsAllRatingAndStatusForBU_get(req, res) {
        //res.json(repository.get(req.params['id']));
        searchEmployeeResourceSkillsAllRatingAndStatusForBU.searchEmployeeResourceSkillsAllRatingAndStatusForBU(req,res,req.params['CategoryId'],req.params['SkillId'],req.params['Rating'],req.params['Availability'],req.params['buid'])
    }    
};