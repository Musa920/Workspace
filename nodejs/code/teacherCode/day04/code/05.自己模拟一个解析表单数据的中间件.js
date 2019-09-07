const express = require('express')
const app = express()


// 导入自己的记录日志的中间件
const writeLogs = require('./05.myWriteLogs.js')
// 注册中间件
app.use(writeLogs)

// // 导入自己的解析表单数据的中间件
// const parseForm = require('./05.parseForm.js')
// // 注册 解析表单的中间件
// app.use(parseForm)


// 1. 运行 `npm i body-parser -S` 安装解析 表单数据的 body-parser 中间件
// 2. 导入中间件
const bodyParser = require('body-parser')
// 3. 注册中间件
// bodyParser.urlencoded({ extended: false }) // extended : false  表示，不使用扩展模块来解析表单数据，而是使用 Node 内置的 querystring 模块来解析表单数据；
// urlencoded 表示解析 普通的表单数据，解析 键值对形式的 数据
app.use(bodyParser.urlencoded({ extended: false }))


// 导入自己的路由模块
const router = require('./05.router.js')
app.use(router)



app.listen(3000, function () {
  console.log('http://127.0.0.1:3000');
})


