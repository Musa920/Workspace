const fs = require('fs')

// 读取目录，并得到目录下所有的文件和文件夹的名称
fs.readdir(__dirname, (err, filenames) => {
  console.log(filenames)
})