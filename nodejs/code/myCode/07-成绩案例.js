const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'file/成绩.txt'), (err, data) => {
  if (err) throw err;
  let arr = data.toString().split(' ');
  arr.forEach(item => {
    if (item) {
      let str = item.replace('=', ':');
      fs.appendFile(path.join(__dirname, 'file/copy-成绩.txt'), str.trim() + '\n', err => {
        if (err) throw err;
        console.log('处理成功OK了');
      })
    }
  });
});