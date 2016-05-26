var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path = require('path');

var app = express();

app.configure(function () {
  app.set('port', 443);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'assets')));

});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

var options = {
  key: fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.crt')
};

https.createServer(options, app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send()
});
