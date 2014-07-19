// web.js
var express = require("express");
var logfmt = require("logfmt");
var querystring = require("querystring");

var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.post('/smsapi/receive', function(req, res) {
	var requestBody = '';
	req.on('data', function(data) {
		requestBody += data;
		if (requestBody.length > 1e7) {
			res.send('Error');
		}
	});
	req.on('end', function() {
		console.log(querystring.parse(requestBody));
	});
	res.send('Accepted');
});

app.post('/smsapi/notify', function(req, res) {
	var requestBody = '';
	req.on('data', function(data) {
		requestBody += data;
		if (requestBody.length > 1e7) {
			res.send('Error');
		}
	});
	req.on('end', function() {
		console.log(querystring.parse(requestBody));
	});
	res.send('Accepted');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
});