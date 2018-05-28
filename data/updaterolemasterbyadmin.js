'use strict';
var Mockgen = require('./mockgen.js');

module.exports = {
    get: {
        200: function (req, res, callback) {
            Mockgen().responses({
                path: '/updaterolemasterbyadmin',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
