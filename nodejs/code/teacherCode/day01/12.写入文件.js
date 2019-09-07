// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用相关的方法写入文件
// 参数1： 要写入的文件的路径
// 参数2： 要写入的数据
// 参数3： 可选的 编码格式，默认就是 utf-8
// 参数4： 文件写入完毕后的回调函数
fs.writeFile('./files/2.txt', '荆轲刺秦王', (err) => {
  if (err) return console.log('写入文件失败了：' + err.message)

  console.log('写入文件成功了！')
})
// ## 练习：
// 1. 复制指定的 `1.txt` 文件，并重命名为 `1 - copy.txt`