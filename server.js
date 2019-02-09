var express = require('express');
var app = express();
require('./controllers/burgers_controller')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log("Server listening on: http://localhost:" + PORT);
});