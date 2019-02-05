var express = require('express');
var fs = require('fs');
var app = express();

// Find the enviroment variable called PORT, else 3000 is the port
var port = process.env.PORT || 3000

// The following will locate the folder in /Proyect_root/public as /assets
app.use('/assets', express.static(__dirname+"/public"));

// This is a middleware example
app.use('/', function(req, res, next) {
    console.log('ruta: ', req.url);
    next();
});

// this is used to defined ejs as view extension
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
});

// Using params and ejs to show them in the view
app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id })
});

// Find html without use the view folder
// app.get('/', function(req, res) {
//     var archivo = fs.readFileSync(__dirname+'/public/index.html','utf8');
//     res.send(archivo);
// })

//loading a json file
app.get('/api', function(req, res) {
    res.json({firstname: 'Yesid', lastname: 'López'})
});

// this is an example of using middlewares
app.listen(port);