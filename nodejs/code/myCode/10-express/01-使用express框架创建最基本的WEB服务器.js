const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.end('Learning the node.js!')
});

app.listen(3000, () => {
  console.log('Server has started!');
});
