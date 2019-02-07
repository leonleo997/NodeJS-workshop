var Express = require('express');
var app = Express();

app.set('view engine','ejs');
app.use('/assets', Express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.render('index');
})

var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log('Listening on port: http://127.0.0.1:'+PORT);
});