// controller.js 是我们的业务逻辑模块，为了保证它的职能单一，我们在controller中只负责处理业务逻辑
// 导入操作数据库的文件
const conn = require('./model.js')
const moment = require('moment')
// 导入 mditor
const mditor = require('mditor')
const parser = new mditor.Parser()

function showIndexPage(req, res) {
  // res.send('这个基本的服务器已经可以运行了！')
  // console.log(req.session.islogin)
  // console.log(req.session.user)

  // 获取文章首页的数据
  let list = [] // 文章列表
  // 获取当前要显示的页码值
  const nowPage = parseInt(req.query.page) || 1
  // 每页显示的记录条数
  const pageSize = 2

  // -- LIMIT 0, 2    获取第1页      (页码值 - 1) * 每页显示的记录条数     ( nowPage - 1 ) * pageSize
  // -- LIMIT 2, 2    获取第2页
  // -- LIMIT 4, 2    获取第3页
  // -- LIMIT 6, 2    获取第4页


  const sqlStr = `select articles.*, users2.nickname 
  from articles LEFT JOIN users2 
  ON articles.authorId=users2.id  
  order by id desc
  LIMIT ${ (nowPage - 1) * pageSize}, ${pageSize};
  select count(*) as totalcount from articles;`

  conn.query(sqlStr, (err, results) => {
    console.log(results)
    // 把文章列表，赋值给 list
    list = results[0]
    // 获取到总记录条数
    const totalcount = results[1][0].totalcount
    res.render('index', {
      islogin: req.session.islogin,
      user: req.session.user,
      list, // 文章列表
      totalPage: Math.ceil(totalcount / pageSize), //总页数
      nowPage // 当前的页码
    })
  })


}

var showRegPage = (req, res) => {
  res.render('./user/register.ejs', {})
}

var regNewUser = (req, res) => {
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
}

var showLoginPage = (req, res) => {
  res.render('./user/login.ejs', {})
}

var login = (req, res) => {
  // 先获取到用户提交过来的登录表单数据
  const user = req.body
  // 创建一条SQL语句，用来查询用户是否存在
  const sqlStr = 'select * from users2 where username=? and password=?'
  // 执行SQL语句，进行登录的判断
  conn.query(sqlStr, [user.username, user.password], (err, results) => {
    if (err) return res.json({ err_code: 1, message: '登录失败！' })
    // console.log(results)
    if (results.length !== 1) return res.json({ err_code: 1, message: '登录失败！' })

    // console.log(req.session)
    // 把登录成功的状态布尔值，存储到 Session上
    req.session.islogin = true
    // 把登录人的信息对象，也挂载到 req.session 上
    req.session.user = results[0]

    res.json({ err_code: 0, message: '登录成功！' })
  })
}

var logout = (req, res) => {
  // 注销Session登录
  req.session.destroy(function (err) {
    // express 中，服务器端跳转的方法
    res.redirect('/')
  })
}

var showAddArticlePage = (req, res) => {
  // 在渲染文章发表页面之前，要先判断用户是否登录了
  if (!req.session.islogin) return res.redirect('/login')
  // 1. 先创建一个文章的添加页面
  res.render('./article/add.ejs', {
    islogin: req.session.islogin,
    user: req.session.user
  })
}

var addNewArticle = (req, res) => {
  // 书写 发表文章的业务逻辑
  // 分析： 1. 获取到客户端提交过来的表单
  const article = req.body
  // 补全文章的发表时间
  article.ctime = moment().format('YYYY-MM-DD HH:mm:ss')
  // 补全文章的作者Id  【Session有过期时间】
  // article.authorId = req.session.user.id
  // console.log(article)
  // 2. 把表单中的数据写入到数据库中；
  const sqlStr = 'insert into articles set ?'
  // 3. 提示客户端发表文章的结果；
  conn.query(sqlStr, article, (err, results) => {
    /*  if(err) return res.json({ err_code: 1, message: '发表文章失败！' })
     if(results.affectedRows !== 1) return res.json({ err_code: 1, message: '发表文章失败' }) */

    if (err || results.affectedRows !== 1) return res.json({ err_code: 1, message: '发表文章失败！' })

    console.log(results)
    // 成功了
    res.json({ err_code: 0, message: '发表文章成功，可以跳转到文章详情页面去查看！', id: results.insertId })
  })
}

var showArticleInfoPage = (req, res) => {
  // 获取文章的Id
  const id = req.query.id
  let articleInfo = {}

  // 根据文章的id ,获取数据，并渲染到页面中
  const sqlStr = 'select * from articles where id=?'
  conn.query(sqlStr, id, (err, results) => {
    // console.log(results)
    // 如果执行Sql语句能够成功的拿到 文章的对象，则 给 articleInfo 赋值为真正的文章，否则， 让 articleInfo 保持为一个空对象；
    if (results.length === 1) articleInfo = results[0]

    // 在渲染文章页面之前，先对文章的内容，做转换，转为 html 格式
    articleInfo.content = parser.parse(articleInfo.content || '')

    // 渲染文章详情页面
    res.render('./article/info.ejs', {
      islogin: req.session.islogin,
      user: req.session.user,
      article: articleInfo
    })
  })
}

// 展示文章编辑页面
var showEditArticlePage = (req, res) => {
  // 分析业务逻辑：
  // 1. 判断是否登录了，如果没有登录，则跳转到登录页面
  // 2. 根据URL地址传递的文章Id，获取到文章的详情
  // 3. 渲染文章的编辑页面

  if (!req.session.islogin) return res.redirect('/login')

  const id = req.query.id

  const sql = 'select * from articles where id=?'
  conn.query(sql, id, (err, results) => {
    // 如果 执行Sql语句失败，则直接跳转到首页
    if (err) return res.redirect('/')
    // 如果查询到的文章数据为空，则直接跳转到首页
    if (results.length !== 1) return res.redirect('/')

    // 当获取到文章的信息后，应该先和当作登录人的Id进行对比，如果相同，才显示编辑页面，否则直接跳转到首页
    if (results[0].authorId != req.session.user.id) return res.redirect('/')

    res.render('./article/edit.ejs', {
      islogin: req.session.islogin,
      user: req.session.user,
      article: results[0]
    })
  })
}

// 编辑文章
var editArticle = (req, res) => {
  // 分析业务逻辑：
  // 1. 先获取到客户端提交的表单数据
  // 2. 创建更新文章数据的Sql语句
  // 3. 执行Sql语句，并把执行的结果返回给客户端

  const article = req.body
  const sqlStr = 'update articles set ? where id=?'
  conn.query(sqlStr, [article, article.id], (err, results) => {
    if (err || results.affectedRows !== 1) return res.json({ err_code: 1, message: '更新文章失败！' })
    res.json({ err_code: 0, message: '更新文章成功！' })
  })
}

module.exports = {
  showIndexPage, // 展示首页的函数
  showRegPage, // 展示注册页面
  regNewUser, // 注册新用户
  showLoginPage, //展示登录页面
  login, // 登录验证
  logout, // 注销
  showAddArticlePage, // 展示文章的添加页面
  addNewArticle, //发表文章的方法
  showArticleInfoPage, // 展示文章详情页面
  showEditArticlePage, //展示文章的编辑页面
  editArticle, // 编辑文章
}



// 做文章的评论：
// 1. 创建一个文章的评论表    id, commentInfo, ctime, cmtUserId, articleId