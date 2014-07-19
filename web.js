// web.js
var express = require("express");
var logfmt = require("logfmt");
var querystring = require("querystring");

var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/smsapi/receive', function(req, res) {
	console.log(querystring.parse(req));
	res.send('Accepted');
});

app.get('/smsapi/notify', function(req, res) {
	console.log(querystring.parse(req));
	res.send('Accepted');
})

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});