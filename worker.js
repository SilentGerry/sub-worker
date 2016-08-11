var express = require('express');
var background = require('./background');

app.get('/_ah/health', function(req, res) {
	res.status(200).send('ok');
});

var app = express();

