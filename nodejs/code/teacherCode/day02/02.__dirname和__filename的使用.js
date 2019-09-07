// 1. 导入 fs 模块
const fs = require('fs')
const path = require('path')

// 2. 我们会根据之前学习前端的经验，潜意识认为 这里的 ./files/1.txt 是相对于我当前这个  02.js  文件来查找的
// 3. 经过我们的 验证，发现，第二步中，我们的认为是错误的；    fs 模块在根据相对路径，查找文件的时候，直接拿着相对路径，和 执行 Node命令时候，所在的根目录 ，直接做了拼接；因此，得出来的绝对路径，可能不完整；
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf-8', (err, dataStr) => {

  // 失败了
  if (err) return console.log('读取文件失败：' + err.message)

  // 成功的情况
  console.log(dataStr)
})

console.log(path.join(__dirname, './files/1.txt'))    // c :\Users\liulongbin\Desktop\day2\代码\code      // __dirname 表示一层目录， 当前这个 JS 文件所在的根目录
console.log(__filename)   //  C:\Users\liulongbin\Desktop\day2\代码\code\02.__dirname和__filename的使用.js

//      __dirname     永远不会变化       ./files/1.txt       这个相对路径也是写死的 

console.log(path.sep)