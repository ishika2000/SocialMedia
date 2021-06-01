const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nonu@2000",
  database: "socialmedia",
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = db;
