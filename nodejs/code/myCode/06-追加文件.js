const fs = require('fs');
fs.appendFile('./file/file.txt', '\ntest', err => {
  if (err) throw err;
  console.log('追加成功');
});