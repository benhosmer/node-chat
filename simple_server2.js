var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello\n');
  setTimeout(function() { response.end('World!\n'); }, 4000);
});

server.listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
