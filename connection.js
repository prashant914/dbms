var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "dbms"
});

//Get schedule Page
con.connect(function(err) {
  if (err) throw err;
  console.log("Mysql Connected");
});

module.exports = con;