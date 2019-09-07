const fs = require('fs');
fs.copyFile('./file/file.txt', './file/file2.txt', (err) => {
  if (err) throw err;
  console.log('源文件已拷贝到目标文件');
});
