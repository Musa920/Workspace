//  appendFile

const fs = require('fs')

// 参数1： 要追加的文件路径
// 参数2： 要追加的数据内容
// 参数3： 【可选参数，一般省略】追加时候的编码格式，默认已经是 utf-8 了
// 参数4： 追加完毕之后的回调函数
fs.appendFile('./files/2.txt', '\n复方草珊瑚', (err) => {
  if (err) return console.log('追加文件失败：' + err.message)
  console.log('追加文件成功了！')
})