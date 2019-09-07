const http = require('http');
const template = require('art-template');
const path = require('path');
const server =http.createServer();
server.on('request', (req, res) => {
  const person = {
    name: 'jack',
    age: 20,
    sex: 'man',
    hobby: ['踢球','游泳', '看电影']
  };

  const tmpl = template(path.join(__dirname, './views/tmpl.html'), person);
  res.end(tmpl);
});

server.listen(3000, () => {
  console.log('Server has started');
});