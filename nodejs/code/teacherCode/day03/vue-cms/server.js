const express = require('express')
var compression = require('compression')

const server = express()

// 注册资源压缩的中间件
server.use(compression())

// 托管静态资源目录
server.use(express.static('./assets'))

server.listen(80, () => {
  console.log('express server running at http://127.0.0.1:80')
})