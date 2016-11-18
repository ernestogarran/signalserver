//  OpenShift sample Node application
const http = require('http');
const sockets  = require('./sockets.js');
const config   = require('getconfig');
const env      = process.env;

var port    = process.env.PORT    || config.server.port;
var address = process.env.NODE_IP ||'127.0.0.1';

var server_handler = function (req, res) {
    res.writeHead(404);
    res.end();
};

var server = null;

/*global console*/
process.env.NODE_ENV = 'production';
//process.env.NODE_ENV = 'development';

server = require('http').Server(server_handler);
server.listen(port, address, function () {
    console.log(`Application worker ${process.pid} started...`);
});

sockets(server, config);
console.log('Signal master listening at ' + address + ":" + port);;
