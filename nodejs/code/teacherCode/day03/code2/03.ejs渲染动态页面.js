const express = require('express')
const path = require('path')

// 创建 express 服务器
const app = express()



// template  engine
// 配置模板引擎的三大步：
// 1. 安装 合适的 模板引擎  运行  npm i ejs -S
// 2. 配置模板引擎
app.set('view engine', 'ejs')
// 3. 配置模板页面的存放路径
app.set('views', './views') // 注意：第一个参数，是固定写法，第二个参数，是模板页面的存放路径

// 导入 自己的路由模块
const router = require('./04.router.js')
// 将路由对象，注册到 app 服务器上，这样每当有请求过来，就可以调用路由模块，来分发处理请求了
app.use(router)


app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})