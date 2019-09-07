// 当前的 router.js 模块是个路由模块；主要负责分发路由的请求；
// 这个路由模块，并不负责如何处理这个路由；
// 经过分析，发现，在路由模块中，我们把 请求的 URL地址，和处理函数做了一下对应关系，但是，处理函数中的业务逻辑；和这个路由模块，并没有太大的关系；
// 模块封装的原则：【职能单一性】

const express = require('express')
const router = express.Router()

// // 导入操作数据库的文件
// const conn = require('./model.js')
// 导入 controller 业务逻辑模块
const ctrl = require('./controller.js')


// 监听根路径请求
router.get('/', ctrl.showIndexPage)

// 获取注册页面
router.get('/register', ctrl.showRegPage)

// 提交新用户并进行注册
router.post('/register', ctrl.regNewUser)

// 渲染登录页面
router.get('/login', ctrl.showLoginPage)

// 提交登录表单并进行登录验证
router.post('/login', ctrl.login)

// 注销登录
router.get('/logout', ctrl.logout)

// 展示添加文章的页面
router.get('/article/add', ctrl.showAddArticlePage)

// 发表文章
router.post('/article/add', ctrl.addNewArticle)

// 展示文章详情页
router.get('/article/info', ctrl.showArticleInfoPage)

// 请求 文章编辑页面
router.get('/article/edit', ctrl.showEditArticlePage)

// 编辑文章
router.post('/article/edit', ctrl.editArticle)

module.exports = router