var orm = require('../config/orm.js');

exports.module = {

    all: cb => {
        orm.selectAll( res => {
            cb(res);
        })
    },

    one: (dat, cb) => {
        orm.insertOne( dat, res => {
            
            cb(res);
        })
    },

    up: (dat, cb) => {
        orm.updateOne( dat, res => {
            cb(res);
        });
    }
}