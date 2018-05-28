'use strict';

var updaterolemasterbyadmin = require('../lib/updaterolemasterbyadmin');

module.exports = {
    
    put: function updaterolemasterbyadmin_put(req, res) {
        updaterolemasterbyadmin.updaterolemasterbyadmin(req,res,req.params['Name'],req.params['ModifiedBy'],req.params['Description'],req.params['RoleID']);
    }
};
