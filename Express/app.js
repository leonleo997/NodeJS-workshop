var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// create application/json parser
var jsonParser = bodyParser.json()


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

// Using params and ejs to show them in the view but with Post methods
app.post('/person', urlencodedParser, function(req, res){
    res.send('Data sent');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

// RESTful API
app.get('/api/person/:id', function(req, res){
    //get data from the database
});

app.post('/api/person', jsonParser, function(req, res){
    //Create or save to the database
});

app.delete('/api/person/:id', function(req, res){
    //Delete to the database
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