// 需求：自己定义一个读取文件的函数，接收一个 要读取文件的路径，返回一个 读取到的结果

const fs = require('fs')

// 封装的原则1： 函数中的处理结果，不应该在函数中私自决定如何处理，应该把函数调用的结果，返回给调用者，让调用者去决定，如何处理结果；
/* function readFileByPath(fpath) {
  fs.readFile(fpath, 'utf-8', (err, results) => {
    if (err) throw err
    // console.log(results)
    // 异步函数中的return 是队列执行的，当执行到这个 return 的时候，readFileByPath 已经把 undefined 当作返回值返回了；
    return results
  })
} */

// 函数封装的原则2： 如果函数内部，执行出现错误了，应该把错误的结果，也返回给调用者，让调用者去决定如何处理这个错误！
// 规定死了：回调函数 callback 的第一个参数，永远只能是一个 错误对象，如果没有报错，则第一个位置放置一个 null; callback 的第二个参数，才是执行成功后的结果，如果执行失败，则第二个参数，永远放置一个 undefined
function readFileByPath(fpath, callback) {
  fs.readFile(fpath, 'utf-8', (err, results) => {
    if (err) return callback(err)
    // return results
    callback(null, results)
  })
}



/* readFileByPath(__dirname + '/files/11.txt', function (err, data) {
  if (err) return console.log(err.message)
  console.log(data)
}) */



// 需求： 根据刚才自己封装的函数，依次读取 文件 1， 2， 3
readFileByPath(__dirname + '/files/1.txt', (err, data1) => {
  console.log(data1)

  readFileByPath(__dirname + '/files/2.txt', (err, data2) => {
    console.log(data2)

    readFileByPath(__dirname + '/files/3.txt', (err, data3) => {
      console.log(data3)
    })
  })
})

//  Promise  这个 Promise 是专门在ES6提供出来的，来解决 异步函数嵌套问题的；【回调地狱】
// 注意：你在代码中使用 Promise 之后，并不会减少你的代码量；