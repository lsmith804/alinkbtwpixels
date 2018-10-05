require('dotenv').config()
const mysql = require("mysql");
const inqurier = require("inquirer");



const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.SQLPASS,
    database: "profile_db"
});