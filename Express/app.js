var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')

// Find the enviroment variable called PORT, else 3000 is the port
var port = process.env.PORT || 3000

apiController(app);
htmlController(app);
app.listen(port);