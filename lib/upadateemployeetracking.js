'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
upadateemployeetracking: function(req,res){

try{
console.log("Connection established for updated employee project profile tracking");
    mysql.query("UPDATE `employeetrackingmaster` SET `CompanyName`=?,`ProjectName`=?,`FromDate`=?,`ToDate`=? where `Id`=? AND `UserId`=?",[req.body.CompanyName,req.body.ProjectName,req.body.FromDate,req.body.ToDate,req.body.Id,req.body.UserId], function(err, result) {
if (err) throw err;
res.send("Successfully updated Employee Tracking Profile "+JSON.stringify(result));
console.log(result);
console.log("updated Employee Tracking Profile data");
});
}
catch (err) {
console.error(err);
}
}      
 }