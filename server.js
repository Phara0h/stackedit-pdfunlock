var cluster = require('cluster');
var http = require('http');
var https = require('https');
var app = require('./app');


	var port = process.env.PORT || 3000;
	var httpServer = http.createServer(app);
	httpServer.listen(port, null, function() {
		console.log('HTTP server started: http://localhost:' + port);
	});
