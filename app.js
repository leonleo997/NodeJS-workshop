var Express = require('express');
var app = Express();
var serverPeople = this.people = [
    {
        name:'Yesid'
    },
    {
        name:'Yesid'
    },
    {
        name:'Yesid'
    }
];

app.set('view engine','ejs');
app.use('/assets', Express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.render('index', serverPeople);
})

var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log('Listening on port: http://127.0.0.1:'+PORT);
});