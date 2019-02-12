var con = require('../config/connection.js');

var orm = {

    selectAll: cb => {
        con.query("SELECT * FROM burgers;", (err, result) => { if(err)throw err; cb(result); } )
    },

    insertOne: (d, cb) => {
        let q = 'INSERT INTO burgers (burger) VALUES ("' + d +'");';
        con.query(q, d ,(err, result) => {
            if(err) throw err;
            
            cb(result);
        });
    },

    updateOne: (d, cb) => {
        let q = "UPDATE burgers SET ate = true WHERE id = ?";
        con.query(q, d, (err, result) => {
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;