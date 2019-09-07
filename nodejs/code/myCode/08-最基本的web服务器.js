const http = require('http'); // 导入核心模块
const server = http.createServer();
server.on('request', function (req, res) {
  res.end('Learning the node.js');
});

server.listen(3000, function () {
  console.log('Server has started!');
});