'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
    upadateemployeetrackinghr: function(req,res){

try{
console.log("Connection established for updated employee project profile tracking");

    if(req.body.ToDate==""){
        req.body.ToDate=null;
    }

    mysql.query("UPDATE `employeetrackingmaster` SET `CompanyName`=?,`ProjectName`=?,`FromDate`=?,`ToDate`=null where `Id`=? AND `UserId`=?",[req.body.CompanyName,req.body.ProjectName,req.body.FromDate,req.body.Id,req.body.UserId], function(err, result) {
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