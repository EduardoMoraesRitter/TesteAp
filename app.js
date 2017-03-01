var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res){
    res.send('Ola Mundo');
});

var server = http.createServer(app);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '3000');
server.listen(port);

console.log('Servidor Express iniciado na porta %s', server.address().port);