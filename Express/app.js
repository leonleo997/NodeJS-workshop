var express = require('express');
var fs = require('fs');
var app = express();

//Mongo module
const mongoose = require('mongoose')

mongoose.connect('mongodb://root:root@cluster-shard-00-00-qqncz.mongodb.net:27017,cluster-shard-00-01-qqncz.mongodb.net:27017,cluster-shard-00-02-qqncz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster-shard-0&authSource=admin&retryWrites=true',
{ useNewUrlParser: true });

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var yesid = Person({
    firstname: 'Yesid',
    lastname: 'Lopez',
    address: 'cra 13 num 44-16'
});

var mayu = Person({
    firstname: 'Mayumi',
    lastname: 'Tamura',
    address: 'cra 13 num 44-16'
});

yesid.save(function(error) {
    if (error) throw error;
    console.log('Person was saved');
});

mayu.save(function(error) {
    if (error) throw error;
    console.log('Person was saved');
});

var apiController = require('./controllers/apiController')
var htmlController = require('./controllers/htmlController')

// The following will locate the folder in /Proyect_root/public as /assets
app.use('/assets', express.static(__dirname+"/public"));

// Find the enviroment variable called PORT, else 3000 is the port
var port = process.env.PORT || 3000

// this is used to defined ejs as view extension
app.set('view engine', 'ejs');

// This is a middleware example
app.use('/', function(req, res, next) {
   console.log('ruta: ', req.url);

   Person.find({}, function(error, users) {
       if (error) throw error;
       console.log(users);
   });
   next();
});
apiController(app);
htmlController(app);
app.listen(port);