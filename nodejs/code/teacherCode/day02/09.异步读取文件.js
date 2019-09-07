const fs = require('fs')

// JS 中是单线程的   唯一的这个单线程 非常的宝贵， 如果 这个唯一的单线程，被某个耗时的操作给阻塞了，后续任务则无法被继续执行；

console.log('开始')
fs.readFile(__dirname + '/files/1.txt', 'utf-8', (err, data) => {
  console.log(data)
})
console.log('写在1后面')

fs.readFile(__dirname + '/files/2.txt', 'utf-8', (err, data) => {
  console.log(data)
})
console.log('写在2后面')

let data = fs.readFileSync(__dirname + '/files/3.txt', 'utf-8')
console.log(data)
console.log('结束')