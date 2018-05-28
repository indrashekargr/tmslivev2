'use strict';

var fetchfeedbacklist = require('../lib/fetchfeedbacklist');

module.exports = {
    
    get: function fetchfeedbacklist_get(req, res) {
        fetchfeedbacklist.fetchfeedbacklist(req,res);
    }
};
