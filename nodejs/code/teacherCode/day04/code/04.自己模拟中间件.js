// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
const fs = require('fs')
const path = require('path')


app.use(myMiddleWareWriteLogs)


// 日志记录需求
// 需求： 每当有客户端来请求服务器了，我们都要记录一下 请求的时间和 请求的 URL地址，以及请求的方式
//    2012-12-12 12:12:12   GET  /api/postinfo
//    2012-12-12 12:12:12   GET  /api/postinfo


// 请求根路径
app.get('/', (req, res) => {
  // writeLog(req)
  res.send('ok')
})

// 请求 post API 
app.post('/api/postinfo', (req, res) => {
  // writeLog(req)
  res.send('这是服务器处理的Post结果')
})


app.get('/index.html', (req, res) => {
  res.send('<h1>欢迎访问首页！</h1>')
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function () {
  console.log('Express server running at http://127.0.0.1:3001')
})


//写入日志的方法
/* function writeLog(req) {
  const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
  fs.appendFile(path.join(__dirname, './info.txt'), infoStr, (err) => {
    if (!err) console.log('写入OK')
  })
} */



// 定义一个写入日志的中间件
function myMiddleWareWriteLogs(req, res, next) {
  const infoStr = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
  fs.appendFile(path.join(__dirname, './info.txt'), infoStr, (err) => {
    if (!err) console.log('写入OK')
    // 当这个日志中间件，把信息记录好之后，需要调用next函数，让处理过程，进入到下一个处理环节
    next()
  })
}