const fs = require('fs')
const path = require('path')

// 读取指定目录下所有文件的`名称、大小、是否为文件`，并将读取的结果记录到`info.txt`文档中

// 1. 根据给定的目录，调用 fs.readdir 读取其中的所有文件名
// 2. 调用 fs.stat 来循环 读取每一个文件的 相关信息
// 3. 把 所有文件的信息，组织成字符串，拼接起来，最终，写入到  info.txt 中

fs.readdir(__dirname, (err, filenames) => {
  // console.log(filenames)

  // 循环 filenames 数组中每一个文件名，然后，调用 fs.stat 方法读取信息
  let strInfo = ''
  let countFlag = 0
  filenames.forEach(item => {
    // console.log(item)
    // 拼接出每一个文件名的完整绝对路径
    const absPath = path.join(__dirname, item)
    // console.log(absPath)
    fs.stat(absPath, (err, stats) => { // 异步的方法
      if (err) return console.log('读取文件信息失败：' + err.message)

      const infoStr =
        `文件名：${item}\n文件大小：${stats.size}\n是否为文件：${stats.isFile()}\n----------------------\n`
      strInfo += infoStr

      // 核心思想：定义一个计数器，每次异步的读取完一个文件信息后，就让是计数器+ 1，并立即和 总数量做判断
      countFlag++
      if (countFlag === filenames.length) {
        // console.log(strInfo)
        fs.writeFile(path.join(__dirname, './files/info.txt'), strInfo, (err) => {
          if (err) return console.log('写入文件失败！ ' + err.message)
          console.log('写入文件OK')
        })
      }
    })
  })

  // 注意：这种思路可以实现我们的需求，但是性能很差
  /* setTimeout(() => {
    console.log(strInfo)
  }, 5000) */
})