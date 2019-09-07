const http = require('http')
const server = http.createServer()
const fs = require('fs')
const path = require('path')

server.on('request', (req, res) => {
  const url = req.url

  // 1. 对于 服务器端来说， 每次监听的URL地址，其实，都是一个标识符而已，这个标识符不能重复
  // url   协议：// IP : 端口 /index
  // 2. 对于 客户端浏览器来说，这个标识符，将来就是浏览器地址栏中的URL地址，这个 URL 地址，对于 客户端来说，永远都是一个路径；（客户端永远把 服务端的标识符，当作一个真正的路径去请求）
  if (url === '/a/b/index') { // 返回首页
    fs.readFile(path.join(__dirname, './views/index.html'), (err, data) => {
      res.end(data)
    })

  } else if (url === '/assets/css/index.css') { // 表示要请求样式表
    fs.readFile(path.join(__dirname, './assets/css/index.css'), (err, data) => {
      res.end(data)
    })

  } else {
    res.end('404')
  }
})

server.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})