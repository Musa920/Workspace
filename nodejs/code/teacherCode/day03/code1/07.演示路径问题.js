// 导入 http 内置模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建一个 http 服务器
const server = http.createServer()
// 监听 http 服务器的 request 请求
server.on('request', function (req, res) {
  const url = req.url

  if (url === '/a/b/index') {
    fs.readFile(path.join(__dirname, '/views/index2.html'), (err, data) => {
      res.end(data)
    })
  } else if (url === '/q/w/e/1.css') { // 表示你请求的样式表
    fs.readFile(path.join(__dirname, '/assets/css/index2.css'), (err, data) => {
      res.end(data)
    })

  } else {
    res.end('404')
  }
})

// 指定端口号并启动服务器监听
server.listen(3000, function () {
  console.log('server listen at http://127.0.0.1:3000')
})