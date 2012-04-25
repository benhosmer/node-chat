var static = require('node-static')
		, http = require('http')
		, faye = require('faye');

var fayeServer = new faye.NodeAdapter( { mount: '/faye', timeout: 5 } );

var file = new(static.Server)('.');

var server = http.createServer(function(req, res) {
  req.addListener('end', function() {
    file.serve(req, res);
  });
});

fayeServer.attach(server);

server.listen(8000);
