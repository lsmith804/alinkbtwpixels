//Connects to SQL DB

require('dotenv').config()
const mysql = require("mysql");

//Database connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.SQLPASS,
    database: "profile_db"
});

//Mysql server connection
connection.connect(function(err){
    if(err) {
        console.log("Can't connect to mysql. Error :" + err.stack);
        return;
    };
    console.log("Connected to SQL as id: " + connection.threadId);
});

module.exports = connection;
