// telnet 127.0.0.1 3000
// ctrl+[ quit
var net = require('net');

var count = 0;

var server = net.createServer(function (conn) {
  console.log('\033[90m new connection!\033[39m');

  conn.write(
    '\n > welcome to \033[92mnode-chat\033[39m!' +
    '\n > ' + count++ + ' other people are connected at this time.' +
    '\n > please write your name and press enter: '
  );

  conn.on('close', function () { count--; });
});

server.listen(3000, function () {
  console.log('\033[96m server listening on *:3000\033[39m');
});
