var express = require('express');
var hb = require("express-handlebars");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", hb({ defaultLayout: "main", helpers: { inc: v => { return parseInt(v) + 1; } } }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js')
app.use(routes);

var PORT = process.env.PORT || 8080;

app.listen(PORT, err => {
    if(err) throw err;

    console.log("Server listening on: http://localhost:" + PORT);
});