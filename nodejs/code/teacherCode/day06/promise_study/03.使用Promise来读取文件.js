// 1. Promise 是个构造函数
// 2. 在 Promise.prototype 上有个 .then() 方法，是专门来指定成功和失败的回调函数的
// 3. Promise 中有 resolve 和 reject 两个函数；

// 3.5 // Promise 表示一个异步操作；
// 4. new Promise()  只是创建了一个形式上的异步操作；
// 5. new Promise(function(){}) 创建具体的异步操作

const fs = require('fs')

// 6. Promise 的特点： 只要new出来 Promise 对象，那么，它所代表的异步 操作，会立即执行；
// 如何让 Promise 按需执行；  
// 7. 注意： 如果想要按需执行 promise,那么必须把 创建 Promise 的过程，包装到一个函数中；
function readFilePromise(fpath) {
  const p = new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, results) => {
      // console.log(err)
      if (err) return reject(err)
      // console.log(results)
      resolve(results)
    })
  })

  return p
}

/* readFilePromise(__dirname + '/files/3.txt').then(function (okresult) {
  console.log(okresult)
}, function (err) {
  console.log(err)
})


axios.post().then(function (result) {
  console.log(result)
}) */



// 依次读取 1， 2， 3
// 注意： .then()中，必须指定成功的回调，但是，失败的回调可以被省略；
// 今后千万不要这么用，下面的代码是错误的示范：
/* readFilePromise(__dirname + '/files/1.txt').then(function (data1) {
  console.log(data1)

  readFilePromise(__dirname + '/files/2.txt').then(function (data2) {
    console.log(data2)

    readFilePromise(__dirname + '/files/3.txt').then(function (data3) {
      console.log(data3)
    })
  })
}) */

// 今后Promise 就这么用
/* readFilePromise(__dirname + '/files/11.txt')
  .then(function (data1) {
    console.log(data1)
    return readFilePromise(__dirname + '/files/2.txt')
  })
  .then(function (data2) {
    console.log(data2)
    return readFilePromise(__dirname + '/files/3.txt')
  })
  .then(function (data3) {
    console.log(data3)
  })
  .catch(function (err) {
    console.log('执行出错了： ' + err.message)
  }) */



readFilePromise(__dirname + '/files/11.txt')
  .then(function (data1) {
    console.log(data1)
    return readFilePromise(__dirname + '/files/2.txt')
  }, function (err) {
    console.log('读取文件1失败了： ' + err.message)
  })
  .then(function (data2) {
    console.log(data2)
    return readFilePromise(__dirname + '/files/3.txt')
  })
  .then(function (data3) {
    console.log(data3)
  })

console.log('读取完毕')


//  当后续的 Promise 执行，要严格依赖前面 Promise 的结果，此时，只能使用 catch 捕获；
//  如果 前面 Promise 执行失败后，应该让后续的Promise 正常去调用，此时，只能使用.then 来指定失败的回调；