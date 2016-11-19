//  OpenShift sample Node application
const sockets  = require('./sockets.js');
const config   = require('getconfig');
const env      = process.env;

var port    = process.env.PORT    || config.server.port;
var address = process.env.NODE_IP ||'localhost';

var server_handler = function (req, res) {
    res.writeHead(404);
    res.end();
};

var server = null;

/*global console*/
process.env.NODE_ENV = 'production';
//process.env.NODE_ENV = 'development';

server = require('http').createServer();

server.on('request', function(req, res){
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	response.setHeader('Access-Control-Allow-Headers', '*');
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end();
});

server.listen(port, address, function () {
    console.log(`Application worker ${process.pid} started...`);
});

sockets(server, config);
console.log('Signal master listening at ' + address + ":" + port);;
