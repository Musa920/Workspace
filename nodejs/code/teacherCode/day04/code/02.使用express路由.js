const express = require('express')

// 得到服务器
const app = express()

// 导入路由对象
const router = require('./03.router.js')
// 把路由对象，注册到服务器
app.use(router)


app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})