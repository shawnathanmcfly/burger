var mysql = require('mysql');

var con = mysql.createConnection({

    host: 'us-cdbr-iron-east-03.cleardb.net',
    user: 'bc5912efc29b1a',
    password: '92b28cf4',
    database: 'heroku_868fcc3e40a880e'
});

module.exports = con;