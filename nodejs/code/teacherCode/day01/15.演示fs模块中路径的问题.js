const fs = require('fs')
const path = require('path')
const abspath = __dirname + 'files/1.txt'
console.log(abspath);






// const abspath = path.join(__dirname, 'files/1.txt') // 今后，只要涉及到路径的拼接，推荐大家使用 path.join 方法
// console.log(abspath)
// //    C:\Users\liulongbin\Desktop\day1\代码\code/files/1.txt
// //     C:\Users\liulongbin\Desktop\day1\代码\code\files\1.txt

// fs.readFile(abspath, 'utf-8', (err, dataStr) => {
//   if (err) return console.log('读取文件失败：' + err.message)

//   console.log(dataStr)
// })

// // 在 Node中，使用 fs 模块来操作文件的时候，如果我们给定的 路径 是一个 以 `./` 开头的相对路径，则， Node在查找此文件的时候，永远相对于 我们指定Node命令所在的目录，来查找这个文件
// // 为了方式，上述的问题，我们推荐使用 绝对路径

// // __dirname 表示当前文件所在的目录
// // console.log(__dirname)   //  C:\Users\liulongbin\Desktop\day1\代码\code
// // __filename 表示 当前文件的完整路径
// // console.log(__filename)   //  C:\Users\liulongbin\Desktop\day1\代码\code\15.演示fs模块中路径的问题.js

// // __dirname     // 表示的是一层目录， 当前这个文件所在的目录
// // __filename    // 表示一个文件的路径，表示当前这个文件的完整路径


// // PS C:\Users\liulongbin\Desktop\day1\代码> node .\code\15.演示fs模块中路径的问题.js
// // 读取文件失败：ENOENT: no such file or directory, open 'C:\Users\liulongbin\Desktop\day1\代码\files\1.txt'

// // PS C:\Users\liulongbin\Desktop\day1> node .\代码\code\15.演示fs模块中路径的问题.js
// // 读取文件失败：ENOENT: no such file or directory, open 'C:\Users\liulongbin\Desktop\day1\files\1.txt'

// // PS C:\Users\liulongbin\Desktop> node .\day1\代码\code\15.演示fs模块中路径的问题.js
// // 读取文件失败：ENOENT: no such file or directory, open 'C:\Users\liulongbin\Desktop\files\1.txt'




// // 【★★★★】 注意：今后，大家在使用 fs 模块中任意方法的时候，只要涉及到了路径的操作，都要使用 __dirname 做一层拼接
// // 【★★★★】 注意：今后，只要涉及到路径的拼接，推荐大家使用 path.join 方法