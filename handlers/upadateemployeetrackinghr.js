'use strict';

var upadateemployeetrackinghr = require('../lib/upadateemployeetrackinghr');

module.exports = {
    
    put: function upadateemployeetrackinghr_put(req, res) {
        upadateemployeetrackinghr.upadateemployeetrackinghr(req,res,req.params['CompanyName'],req.params['ProjectName'],req.params['FromDate'],req.params['Id'],req.params['UserId']);
    }
};
