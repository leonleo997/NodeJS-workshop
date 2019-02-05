module.exports = function(app) {

    // create application/x-www-form-urlencoded parser
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    // create application/json parser
    var jsonParser = bodyParser.json()
    
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

}