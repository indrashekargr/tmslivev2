'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
    fetchfeedbacklist: function(req,res){
        try{
            console.log("Connection established for fetchfeedbacklist");
            mysql.query("SELECT  DISTINCT Id, EmployeeId,Type,Details,Status,CreatedDate from feedback", function(err, results) {
            if (err) throw err;
            if (results.length === 0) {
            res.status(403).send({ success: false, message: 'Data not found '});
            } else {
                for(var i=0; i<results.length;i++){

                    results[i].CreatedDate=results[i].CreatedDate.toISOString().slice(0, 19).replace(/T.*/, ' ');

                }
            res.send(results);
            console.log(results);
            }
            });
            console.log("Connection closed.");
            }
            catch (err) {
            console.error(err);
            }
        }
           
    }

