'use strict';

var updatebumasterbyadmin = require('../lib/updatebumasterbyadmin');

module.exports = {
    
    put: function updatebumasterbyadmin_put(req, res) {
        updatebumasterbyadmin.updatebumasterbyadmin(req,res,req.params['buName'],req.params['ModifiedBy'],req.params['Description'],req.params['Id']);
    }
};
