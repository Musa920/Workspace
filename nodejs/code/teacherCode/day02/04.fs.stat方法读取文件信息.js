const fs = require('fs')
const path = require('path')

fs.stat(path.join(__dirname, './files'), (err, stats) => {
  if (err) return console.log('读取信息失败：' + err.message)

  console.log(stats.size + '字节')
  console.log(stats.isFile())
})