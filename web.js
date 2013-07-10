var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = app.get('/', function(request, response) {
  var page = fs.readFileSync('index.html');
  response.send(page.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
