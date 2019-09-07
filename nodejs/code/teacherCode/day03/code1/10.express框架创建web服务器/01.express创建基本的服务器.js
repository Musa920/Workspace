// 1. 导入 express 模块
const express = require('express')

// 2. 创建服务器
const app = express()

// app.get 表示，只监听 get 类型的请求
// app.post 表示，只监听 post 类型的请求
// app.all    表示，监听所有类型的请求
app.get('/', function (req, res) {
  // 这里，我们使用 的 res.end 是原生 Node 提供的 API
  res.send('试试就试试123')
})

//    /index.html

//    /movie.html

app.listen(4000, () => {
  console.log('express server running at http://127.0.0.1:4000')
})