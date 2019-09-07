const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, 'file/test.txt'), 'utf-8', (err, buf) => {
  if (err) throw err;
  console.log(buf); // 默认情况下buf 返回的结果是一个Buffer，buffer是一个类型，二进制的意思
  console.log(buf instanceof Buffer); // buf 是Buffer构造函数的实例
});