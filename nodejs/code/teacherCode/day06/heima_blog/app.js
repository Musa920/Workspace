//  项目的入口文件
// 这里应该写什么代码？？？ 创建一个 Node 服务器   http   express
const express = require('express')
// 创建web服务器
const app = express()


// 导入并注册 express-session 中间件
const session = require('express-session')
app.use(session({
  secret: 'iuiouyyefefsdfsdwe097&^*(((', // 表示 用来对 SessionId 加密的 字符串，这个字符串，大家任意写
  resave: false, // 如果为 true ， 表示强制把 Session 存储到 物理磁盘上，从而保证Session不会丢失
  saveUninitialized: false // 如果为 true，表示 强制没有“初始化”的session 保存到storage中
}))
// 当使用如上的步骤，配置完毕Session中间件之后，今后，只要你能够访问到 req, 那么，就能够访问到 req.session 这个对象；


// 配置模板引擎
// ejs 模板引擎中，默认文件的后缀名是 .ejs
app.set('view engine', 'ejs')
app.set('views', './views')


// 托管静态资源目录
app.use('/node_modules', express.static('./node_modules'))


// 配置 body-parser 来解析表单数据
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


// 导入自己的路由模块并使用 app.use 来注册
const router = require('./router.js')
app.use(router)

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})


// 1. 创建基本的web服务器
// 2. 如果所有的路由都写到 app.js 中，这样不易维护，所以创建路由
// 3. 因为要渲染页面，所以配置模板引擎
// 4. 我们渲染页面时候，想要美化样式，就用到了bootstrap，此时，托管静态资源目录node_modules
// 5. body-parser 来解析表单数据
// 6. express-session 启用Session功能