'use strict';

var addrolemasterbyadmin = require('../lib/addrolemasterbyadmin');

module.exports = {
    
    post: function addrolemasterbyadmin_post(req, res) {
        addrolemasterbyadmin.addrolemasterbyadmin(req,res,req.params['addrolemasterbyadmin']);
    }
};
