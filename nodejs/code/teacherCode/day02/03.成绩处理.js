//  1. 导入 fs 系统模块

const fs = require('fs')
const path = require('path')

// 2. 读取成绩文件中的内容
// 3. 处理拿到的成绩【字符串操作】
// 4. 将处理好的成绩，调用 fs 方法，写入到新的文件中去
//   __dirname    涉及到路径的拼接     path
fs.readFile(path.join(__dirname, './files/成绩.txt'), 'utf-8', (err, dataStr) => {
  // 如果读取文件失败，则提示用户错误消息
  if (err) return console.log('读取成绩文件失败：' + err.message)
  // console.log(dataStr)

  const scoreArr = dataStr.split(' ')
  // console.log(scoreArr)

  let str = ''
  scoreArr.forEach((item, i) => {
    if (item.length > 0) {
      // console.log(item)

      const result = item.split('=')
      // console.log(result)
      const newScore = result[0] + '：' + result[1] + '\n'
      // console.log(newScore)
      str += newScore
    }
  })

  console.log(str.trim())

  fs.writeFile(path.join(__dirname, './files/成绩 - ok.txt'), str.trim(), (err) => {
    if (err) return console.log('写入成绩失败：' + err.message)
    console.log('处理成绩OK')
  })
})