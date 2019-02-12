var express = require("express");
var routes = express.Router();

var burger = require("../models/model.js");

routes.get('/', (req, res) => {

    burger.module.all( data => {
    
        res.render('index', { burger: data });
    })
        
});

routes.post('/', (req, res) => {
    
    burger.module.one( req.body.data, dat => {
        
        res.send( { data: req.body.data, id: dat.insertId} );
        
    })

});

routes.put('/', (req, res) => {
    
    burger.module.up( req.body.data, dat => {
        res.send( req.body.data );
    })
});

module.exports = routes;
