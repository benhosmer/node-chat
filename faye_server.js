var http = require('http'),
    faye = require('faye');

var server = new faye.NodeAdapter({mount: '/faye', timeout: 5});

server.listen(8001);
