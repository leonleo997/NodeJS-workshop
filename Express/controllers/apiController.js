module.exports = function(app) {
    // RESTful API
    app.get('/api/person/:id', function(req, res){
        //get data from the database
    });

    app.post('/api/person', function(req, res){
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
}