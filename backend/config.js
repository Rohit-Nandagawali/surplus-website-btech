const mysql = require("mysql")
require('dotenv').config();
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // host: 'localhost',
    // user: 'root',
    // password: 'root',
    // database: 'surplus'
})
con.connect((err) => {
    if (err) {
        console.warn(err);
    }
    else {
        console.warn("Connected to Host : " + process.env.DB_HOST + ", Database : " + process.env.DB_DATABASE);
    }
})

module.exports = con;