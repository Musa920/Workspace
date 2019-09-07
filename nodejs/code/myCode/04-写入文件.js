const fs = require('fs');
fs.writeFile('./file/file.txt', 'Learning the node.js', err => {
  if (err) throw err;
  console.log('写入成功');
});