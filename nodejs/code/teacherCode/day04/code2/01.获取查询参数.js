// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()

app.get('/index.html', (req, res) => {
  console.log(req.query)
  res.end('ok')
})

///         /userinfo/12/ls
app.get('/userinfo/:id/:name', (req, res) => {
  console.log(req.params)
  res.end('okokok')
})


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3001, function () {
  console.log('Express server running at http://127.0.0.1:3001')
})