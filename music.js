var mysql = require('mysql');
var connection = mysql.createConnection({
 host:"localhost",
 port:"3306",
 user:"root",
 password:"vidya999",
 database:"music_db"
});

connection.connect(function(err){
	if err throw err;
	console.log("connection id"+connection.threadId);
});