'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
updaterolemasterbyadmin: function(req,res){
var Name = req.body.Name;
var RoleID = req.body.RoleID;
if (!req.body.RoleID){

console.log("RoleID required");
return res.status(401).send({success: false, message: 'RoleID required'});
}
if (!req.body.Description){
console.log("Description required");
return res.status(401).send({success: false, message: 'Description required'});

}
if (!req.body.Name){
return res.status(401).send({success: false, message: 'RoleName required'});
console.log("RoleName required");

}
var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');
try{
    console.log("Connection established for updated role master data");
    mysql.query("UPDATE `roles` SET `Name`=?,`ModifiedDate`=?,`ModifiedBy`=?,`Description`=? where `RoleID`=?",[req.body.Name,date,req.body.ModifiedBy,req.body.Description,req.body.RoleID], function(err, result) {
if (err) throw err;

res.send("Successfully updated role master "+JSON.stringify(result));
console.log(result);

console.log("updated role data");
});
console.log("Connection closed.");
}
catch (err) {
console.error(err);
}
        }
    }

