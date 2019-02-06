var bodyParser = require('body-parser');

module.exports = function(app) {

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

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

}