var express = require('express');
var fs = require('fs');
var app = express();
var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')

// The following will locate the folder in /Proyect_root/public as /assets
app.use('/assets', express.static(__dirname+"/public"));

// Find the enviroment variable called PORT, else 3000 is the port
var port = process.env.PORT || 3000

apiController(app);
htmlController(app);
app.listen(port);