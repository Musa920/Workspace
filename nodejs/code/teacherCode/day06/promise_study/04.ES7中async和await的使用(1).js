const fs = require('fs')

function readFilePromise(fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, reuslts) => {
      if (err) return reject(err)
      resolve(reuslts)
    })
  })
}

// 在ES7中，async 关键字只能写到 function 前面
async function test() {
  // await 关键字，只能用在 被 async 修饰过的 方法中
  const r1 = await readFilePromise(__dirname + '/files/1.txt')
  console.log(r1)
  const r2 = await readFilePromise(__dirname + '/files/2.txt')
  console.log(r2)
  const r3 = await readFilePromise(__dirname + '/files/3.txt')
  console.log(r3)

  console.log('写在3后面')
}

test()
console.log('执行完毕了')






/* readFilePromise(__dirname + '/files/1.txt')
  .then(function (data) {
    console.log(data)
    return readFilePromise(__dirname + '/files/2.txt')
  })
  .then(function (data) {
    console.log(data)
    return readFilePromise(__dirname + '/files/3.txt')
  })
  .then(function (data) {
    console.log(data)
  }) */
