'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
updatebumasterbyadmin: function(req,res){
var buName = req.body.buName;
var Id = req.body.Id;

if (!req.body.Id){
console.log("BuID required");
return res.status(401).send({success: false, message: 'BuID required'});
}

if (!req.body.Description){
console.log("Description required");
return res.status(401).send({success: false, message: 'Description required'});
}

if (!req.body.buName){
return res.status(401).send({success: false, message: 'BuName required'});
console.log("BuName required");
}

var date;
date = new Date().toISOString().slice(0, 19).replace('T', ' ');

try{
    console.log("Connection established for updated business unit master data");
    mysql.query("UPDATE `businessunitmaster` SET `buName`=?,`ModifiedDate`=?,`ModifiedBy`=?,`Description`=? where `Id`=?",[req.body.buName,date,req.body.ModifiedBy,req.body.Description,req.body.Id], function(err, result) {
if (err) throw err;

res.send("Successfully updated business unit master "+JSON.stringify(result));
console.log(result);

console.log("updated business unit data");
});
console.log("Connection closed.");
}

catch (err) {
console.error(err);
}

}
}

