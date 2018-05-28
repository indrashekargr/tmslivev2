'use strict';

var port = process.env.PORT || 8000;

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var swaggerUi = require('swaggerize-ui'); 
var path = require('path');
var fs = require("fs");
var moment = require('moment');

var udate = moment(Date.now()).format('MM');
//console.log(moment(Date.now()).format('MM'));
if(udate = 1 ){
//connection.query("update db_tmp.employeemaster em  set integraExperience = (SELECT TIMESTAMPDIFF(MONTH, e.DateOfJoining, CURDATE()) FROM db_tmp.employeemaster e where e.Employeeid = em.Employeeid) , totalExperience = (SELECT TIMESTAMPDIFF(MONTH, e.DateOfJoining, CURDATE()) + e.PriorExprience FROM db_tmp.employeemaster e where e.Employeeid = em.Employeeid);");

}
var searchEmployeeResourceSkillsForHR = require('./lib/searchEmployeeResourceSkillsForHR');
var searchEmployeeResourceSkillsForManager = require('./lib/searchEmployeeResourceSkillsForManager');
var searchEmployeeResourceSkillsAllRatingForHR = require('./lib/searchEmployeeResourceSkillsAllRatingForHR');
var searchEmployeeResourceSkillsForBU = require('./lib/searchEmployeeResourceSkillsForBU');
var fetchemployeetrackingformanager = require('./lib/fetchemployeetrackingformanager');
var searchEmployeeResourceSkillsAllRatingAndStatusForHR = require('./lib/searchEmployeeResourceSkillsAllRatingAndStatusForHR');
var searchEmployeeResourceSkillsAllStatusForHR = require('./lib/searchEmployeeResourceSkillsAllStatusForHR');
var searchEmployeeResourceSkillsAllStatusForBU = require('./lib/searchEmployeeResourceSkillsAllStatusForBU');
var searchEmployeeResourceSkillsAllRatingForBU = require('./lib/searchEmployeeResourceSkillsAllRatingForBU');
var searchEmployeeResourceSkillsAllRatingAndStatusForBU = require('./lib/searchEmployeeResourceSkillsAllRatingAndStatusForBU');

//Reporting Manager search all employee list based on category, skillname, rating , status
var searchEmployeeResourceSkillsAllRatingForRM = require('./lib/searchEmployeeResourceSkillsAllRatingForRM');
var searchEmployeeResourceSkillsAllStatusForRM = require('./lib/searchEmployeeResourceSkillsAllStatusForRM');
var searchEmployeeResourceSkillsAllRatingAndStatusForRM = require('./lib/searchEmployeeResourceSkillsAllRatingAndStatusForRM');

fs.existsSync = fs.existsSync || require('path').existsSync;

var app = express();

var server = http.createServer(app);

app.use(bodyParser.json());

app.get('/fetchemployeetrackingformanager/UserId=:UserId/ReportingManager=:ReportingManager', fetchemployeetrackingformanager.fetchemployeetrackingformanager, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability', searchEmployeeResourceSkillsForHR.searchEmployeeResourceSkillsForHR, function(req, res, next){
    next();
    });

app.get('/searchEmployeeResourceSkillsAllRatingForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability', searchEmployeeResourceSkillsAllRatingForHR.searchEmployeeResourceSkillsAllRatingForHR, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllRatingForBU/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/buid=:buid', searchEmployeeResourceSkillsAllRatingForBU.searchEmployeeResourceSkillsAllRatingForBU, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllRatingForRM/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsAllRatingForRM.searchEmployeeResourceSkillsAllRatingForRM, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllStatusForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability', searchEmployeeResourceSkillsAllStatusForHR.searchEmployeeResourceSkillsAllStatusForHR, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllStatusForBU/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/buid=:buid', searchEmployeeResourceSkillsAllStatusForBU.searchEmployeeResourceSkillsAllStatusForBU, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllStatusForRM/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsAllStatusForRM.searchEmployeeResourceSkillsAllStatusForRM, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllRatingAndStatusForHR/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability', searchEmployeeResourceSkillsAllRatingAndStatusForHR.searchEmployeeResourceSkillsAllRatingAndStatusForHR, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllRatingAndStatusForBU/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/buid=:buid', searchEmployeeResourceSkillsAllRatingAndStatusForBU.searchEmployeeResourceSkillsAllRatingAndStatusForBU, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsAllRatingAndStatusForRM/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsAllRatingAndStatusForRM.searchEmployeeResourceSkillsAllRatingAndStatusForRM, function(req, res, next){
    next();
});

app.get('/searchEmployeeResourceSkillsForManager/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/ReportingManager=:ReportingManager', searchEmployeeResourceSkillsForManager.searchEmployeeResourceSkillsForManager, function(req, res, next){
    next();
    });

    app.get('/searchEmployeeResourceSkillsForBU/CategoryId=:CategoryId/SkillId=:SkillId/Rating=:Rating/Availability=:Availability/BuId=:BuId', searchEmployeeResourceSkillsForBU.searchEmployeeResourceSkillsForBU, function(req, res, next){
        next();
        });
    app.use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
        next();
    });


app.get('/', function (req, res) {
    
res.sendFile(__dirname + '/temp/deploy/index.html');

 
});
app.use(express.static(path.join(__dirname, 'temp/deploy')));
//app.use(express.static(path.join(__dirname, 'dist/app')));
//app.use(express.static(path.join(__dirname, 'dist/app/LoginPage/*')));

app.use(swaggerize({
    api: path.resolve('./config/swagger.json'),
    handlers: path.resolve('./handlers'),
    docspath: '/swagger' 
}));

// change four
app.use('/docs', swaggerUi({
    docs: '/swagger'  
}));

server.listen(port, function () { 
    console.log("TMS server connected");
});