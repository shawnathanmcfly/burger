var burger = require('../models/burger');
var hb = require("express-handlebars");


module.exports = (app) => {

    app.engine("handlebars", hb({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    app.get('/', (req, res) => {

        res.render('index');
        
    })

}
