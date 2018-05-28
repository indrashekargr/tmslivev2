'use strict';

var mysql=require('./mysqlConnection');

module.exports = {
    addrolemasterbyadmin: function(req,res){
        var Name = req.body.Name;
        if (!req.body.Name){
        console.log("RoleName required");
        return res.status(401).send({success: false, message: 'RoleName required'});
        
        }
        if (!req.body.Description){ 
       
        console.log("Description required");
        return res.status(401).send({success: false, message: 'Description required'});
        
        }  
        var date;
        date = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var addrolemasterbyadmin={
        Name:req.body.Name,
        Description : req.body.Description,
        CreatedBy: req.body.CreatedBy,
        CreatedDate: date,
        };
        console.log("Connection established for add role master by admin");
        mysql.query('SELECT * FROM roles WHERE Name = ? ', [req.body.Name]
        ,function(err,rows){
        if(err)
        console.log(err);
        if (!rows.length)
        {
        try{
        console.log("add role");
        mysql.query('INSERT INTO roles SET ?', addrolemasterbyadmin,
        function(err, result) {
        if (err) throw err;
        if(result.length==0)
        {
        res.status(403).send({ success: false, message: 'data not inserted'});
        }
        else{
        res.send("Successfully added new Role");
        console.log(result);
       
        console.log("added");
        }
        });
        }  catch (err) {
        console.error(err);
        }}
        else
        {
        console.log("already role exist");
        res.send("already role exist");
        }
        });
    }   
}