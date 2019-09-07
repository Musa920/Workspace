// 网页中的JS能读取文件吗？

// 1. 使用 require 来导入需要的 模块
const fs = require('fs')
// 参数1： 要读取的文件的路径
// 参数2： 可选的参数，表示字符编码
// 参数3： callback 回调函数
fs.readFile('./files/11.txt', function (err, buf) {
  // console.log(err instanceof Error) // null
  // console.log(buf.toString()) // <Buffer 31 31 31>    注意：Buffer 是一种类型，表示二进制的意思

  // console.log(buf instanceof Buffer)

  // 如果读取文件没有出错，则 err 默认为 null， buf 是读取到的 二进制
  // 可以调用 buffer.toString 转换为正常的字符串

  // Buffer 实例 和 字符串拼接，得到的结果，是一个  字符串
  // console.log(buf + '')
})


// 在读取 指定文件的时候，使用  第二个参数规定的编码格式，把读取到的文件转码一下
/* fs.readFile('./files/1.txt', 'utf-8', (err, dataStr) => {
  //     1.  null    2. Error 类型的实例
  // Error 实例对象中，有个  message 属性，表示错误的消息
  if (err) return console.log(err.message)
  console.log(dataStr)
}) */


fs.readFile('./files/1.txt', 'utf-8', (err, dataStr) => {
  if (err) return console.log(err.message)
  console.log(dataStr)
})