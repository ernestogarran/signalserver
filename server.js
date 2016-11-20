//  OpenShift sample Node application
const sockets  = require('./sockets.js');
const config   = require('getconfig');
const env      = process.env;

var port    = process.env.PORT    || config.server.port;
var address = process.env.NODE_IP ||'0.0.0.0';

var server = null;

/*global console*/
process.env.NODE_ENV = 'production';
//process.env.NODE_ENV = 'development'; 

server = require('http').createServer(function (req, res) {
	if (req.method === 'OPTIONS') {
		console.log('!OPTIONS');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Request-Method', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', '*');
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.writeHead(200, headers);
		res.end();
		return
	}
});

server.listen(port, address, function () {
    console.log(`Application worker ${process.pid} started...`);
});

sockets(server, config);
console.log('Signal master listening at ' + address + ":" + port);;
