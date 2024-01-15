const mysql = require("mysql2");

/*
Garbage Database Details Database Host
Database
Name Database,Username,Databse,Password,Size	Status	Delete
sql12.freesqldatabase.com	sql12676499	sql12676499	Please wait	0.00MB	Please wait	
 */
mySQLFreeDatabaseConnectionCredentials = {
  host: "sql12.freesqldatabase.com",
  user: "sql12676499",
  password: "BwEwM1BmV1",
  database: "sql12676499",
};
const connection = mysql.createConnection({
  ...mySQLFreeDatabaseConnectionCredentials,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

module.exports = connection;
