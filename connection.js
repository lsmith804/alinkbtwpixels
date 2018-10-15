//Connects to SQL DB

require('dotenv').config()
const mysql = require("mysql");

//JAWS DB
//mysql://wxun0sdny1k10t7g:fs4zhz2c42v0j346@bbj31ma8tye2kagi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/e9hixfam2itslkp1


if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    //local connection
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.SQLPASS,
    database: "entries_db"
});

}



// //Database connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: process.env.SQLPASS,
//     database: "profile_db"
// });


connection.connect(function(err){
    if(err) {
        console.log("Can't connect to mysql. Error :" + err.stack);
        return;
    };
    console.log("Connected to SQL as id: " + connection.threadId);
});

module.exports = connection;
