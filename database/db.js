var mysql = require('mysql');
var connection = mysql.createConnection({
  host: process.env.DBHOST || 'localhost',
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected.");
})

module.exports = connection;
