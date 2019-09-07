const express = require('express')
const router = express.Router()

// 导入操作数据库的文件
const conn = require('./model.js')


// 监听根路径请求
router.get('/', (req, res) => {
  // res.send('这个基本的服务器已经可以运行了！')
  console.log(req.session.islogin)
  console.log(req.session.user)
  res.render('index', {
    islogin: req.session.islogin,
    user: req.session.user
  })
})

// 获取注册页面
router.get('/register', (req, res) => {
  res.render('./user/register.ejs', {})
})

// 提交新用户并进行注册
router.post('/register', (req, res) => {
  // 注册的业务逻辑分析：
  // 注意：在后端开发中，更多的都是在处理业务逻辑；在后端中，业务逻辑会比较复杂，因此，你的流程一定要严谨；
  // 既然后端的业务逻辑比较复杂，所以，后端静态会画业务逻辑的流程图；
  // console.log(req.body)
  if (req.body.username.length <= 0 || req.body.password.length <= 0 || req.body.nickname.length <= 0) {
    // 注册失败，表单数据不完整
    return res.json({ err_code: 1, message: '注册失败，请填写完整的表单数据！' })
  }

  // 检验用户名是否被占用
  conn.query('select count(*) as count  from users2 where username=?', req.body.username, (err, results) => {
    if (err) return res.json({ err_code: 1, message: '注册失败！' })
    // 用户名被占用
    if (results[0].count !== 0) return res.json({ err_code: 1, message: '此用户名被占用，请更换其它用户名后重试！' })

    conn.query('insert into users2 set ?', req.body, (err, results) => {
      if (err) return res.json({ err_code: 1, message: '注册用户失败！' })
      if (results.affectedRows !== 1) return res.json({ err_code: 1, message: '注册用户失败！' })

      res.json({ err_code: 0, message: '注册用户成功！' })
    })
  })
})

// 渲染登录页面
router.get('/login', (req, res) => {
  res.render('./user/login.ejs', {})
})

// 提交登录表单并进行登录验证
router.post('/login', (req, res) => {
  // 先获取到用户提交过来的登录表单数据
  const user = req.body
  // 创建一条SQL语句，用来查询用户是否存在
  const sqlStr = 'select * from users2 where username=? and password=?'
  // 执行SQL语句，进行登录的判断
  conn.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return res.json({ err_code: 1, message: '登录失败！' })
    // console.log(results)
    if (results.length !== 1) return res.json({ err_code: 1, message: '登录失败！' })

    console.log(req.session)
    // 把登录成功的状态布尔值，存储到 Session上
    req.session.islogin = true
    // 把登录人的信息对象，也挂载到 req.session 上
    req.session.user = results[0]

    res.json({ err_code: 0, message: '登录成功！' })
  })
})

// 注销登录
router.get('/logout', (req, res) => {
  // 注销Session登录
  req.session.destroy(function (err) {
    // express 中，服务器端跳转的方法
    res.redirect('/')
  })
})

module.exports = router