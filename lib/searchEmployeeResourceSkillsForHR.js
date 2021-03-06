'use strict';

//var mysql=require('./mysqlConnection');
/*var mysql      = require('mysql');
var connection = mysql.createConnection({
       host: 'tmp4demo.mysql.database.azure.com',
    user: 'myadmin@tmp4demo',
   password: 'int123$%^',
    database: 'demotms',
     port: 3306,     ssl: false
});*/

var mysql=require('./mysqlConnection');

module.exports = {
    searchEmployeeResourceSkillsForHR: function(req,res){
        try{

            console.log("Connection established for search all employee resource skills for HR");
                mysql.query('SELECT DISTINCT employeemaster.UserId,employeemaster.ProfilePhoto AS Profile_Photo, employeemaster.EmployeeId AS EmployeeId, employeemaster.FirstName AS FirstName,employeemaster.LastName AS LastName,employeemaster.email AS Email,employeemaster.ContactNo AS ContactNo,employeemaster.reportsToName AS  reportingmanager, employeemaster.PriorExprience AS PriorExprience,employeemaster.integraExperience AS integraExperience,ROUND(employeemaster.PriorExprience + employeemaster.integraExperience,1) AS totalExperience, skillmaster.SkillName AS PrimarySkill, employeemaster.CreatedBy AS CreatedBy,employeemaster.CreatedDate AS CreatedDate, employeemaster.ModifiedBy AS ModifiedBy,CONVERT(employeemaster.ModifiedDate,CHAR CHARACTER SET utf8) AS ModifiedDate, employeemaster.DateOfLeaving AS DateOfLeaving , categorymaster.CategoryName AS categoryName, skillmaster.SkillName AS skillName,statusmaster.StatusName AS Availability, employeeskillmaster.Rating AS rating FROM employeeskillmaster JOIN categorymaster JOIN skillmaster JOIN statusmaster JOIN employeemaster ON employeeskillmaster.CategoryId = categorymaster.CategoryId and employeeskillmaster.SkillId = skillmaster.SkillId and employeeskillmaster.UserId = employeemaster.UserId and employeemaster.Availability = statusmaster.Id and employeeskillmaster.IsDeleted= 0 and employeemaster.empStatus="Active" and employeemaster.IsDeleted="0" and length(employeemaster.EmployeeId) > 4 and employeeskillmaster.CategoryId = ? and employeeskillmaster.SkillId = ? and employeeskillmaster.Rating = ? and employeemaster.Availability = ?',[req.params.CategoryId,req.params.SkillId,req.params.Rating,req.params.Availability], function(err, results) {

                    if (err) throw err;

                    if (results){

                        for(var i=0; i<results.length;i++){
                            var date;
                            date = new Date().toISOString().slice(0, 19).replace(/T.*/, ' ');

                            results[i].DateOfLeaving=date;
                            results[i].CreatedDate=results[i].CreatedDate.toISOString().slice(0, 19).replace(/T.*/, ' ');

                        }
                        res.send(results);

                    }
                });
                console.log("Connection closed.");

            } catch (err) {

            console.error(err);
            
            }
        }
           
    }

