var mysql = require('mysql');

var connection;

var PORT = process.env.PORT || 3000;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'YourRootPassword',
		database: 'burgers_db'
	})
};

connection.connect(function(err) {
  console.log("App listening on PORT " + PORT);
});

module.exports = connection;