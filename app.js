var fs = require('fs');
var http = require('http');

var client = fs.readFileSync('client.html');

var handler = function(req, res) {
  if (req.url.indexOf('/client.html') === 0) {
    res.setHeader('Content-Type', 'text/html');
    res.end(client);
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK');
  }
};

var createServer = function(port) {
  var server = http.createServer(handler);
  server.listen(port, function() {
    console.log('Starting server on port ' + port);
  });
};

createServer(1728);
createServer(1729);