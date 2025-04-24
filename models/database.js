const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

const connect = () => {
  db.connect((error) => {
    if (error) throw error;
    console.log("connected to database successfully");
  });
};

module.exports = { db, connect };
