var Faye   = require('faye');

var client = new Faye.Client('http://localhost:8001/faye');

var pub = client.publish('/messages', {
  text: 'Hello world'
});

pub.callback(process.exit);
