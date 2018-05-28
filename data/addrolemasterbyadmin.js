'use strict';
var Mockgen = require('./mockgen.js');
module.exports = {

    get: {
        200: function (req, res, callback) {
            Mockgen().responses({
                path: '/addrolemasterbyadmin',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
