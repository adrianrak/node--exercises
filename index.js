var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<h1>404: Zła ścieżka!</h1>');
        response.write('<img src="https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg?h=350&auto=compress&cs=tinysrgb" alt="error">');
        response.end();
        
            
    }
});

server.listen(9000);