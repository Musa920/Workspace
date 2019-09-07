const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

// 渲染首页
router.get('/', ctrl.renderHomePage);

// 渲染注册页面
router.get('/register', ctrl.renderRegisterPage);

// 提交新用户并进行注册
router.post('/register', ctrl.userRegister);

// 渲染登录页面
router.get('/login', ctrl.renderLoginPage);

// 用户登录
router.post('/login', ctrl.userLogin);

// 注销登录
router.get('/logout', ctrl.destroyLogin);

// 渲染添加文章页面
router.get('/article/add', ctrl.renderAddArticlePage);

// 添加文章
router.post('/article/add', ctrl.addArticle);

// 文章详情页
router.get('/article/info', ctrl.renderArticlePage);

// 文章编辑页
router.get('/article/edit', ctrl.editArticlePage);

// 提交文章编辑
router.post('/article/edit', ctrl.submitArticlePage);

module.exports = router;