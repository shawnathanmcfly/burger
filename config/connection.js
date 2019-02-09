var mysql = require('mysql');

var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'alu1ndra1',
    database: 'burger_db'
});

module.exports = con;