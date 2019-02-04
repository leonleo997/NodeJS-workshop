var HTTP = require('http');
var fs = require('fs');
HTTP.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    // var message = 'Hello world';
    // res.end('Hello world\n ');
    // html = html.replace('{variable}', message);
    res.end(html);
}).listen(1337, '127.0.0.1');