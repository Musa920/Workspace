const conn = require('./model');
const moment = require('moment');

// 导入mditor
const mditor = require('mditor');
const parser = new mditor.Parser();

function renderHomePage(req, res) {
  // res.render('index', {
  //   islogin: req.session.islogin,
  //   user: req.session.user
  // })

  conn.query('select * from article', (err, result) => {
    if (err) return res.json({err_code: 1, message: '查询文章失败!'});
    if (result.length) {
      res.render('index', {
        islogin: req.session.islogin,
        user: req.session.user,
        article: result
      })
    }
  })
}

function renderRegisterPage(req, res) {
  res.render('./user/register', {});
}

function userRegister(req, res) {
  if (!req.body.username.length || !req.body.password.length || !req.body.nickname.length || !req.body.email.length) {
    return res.json({err_code: 1, message: '注册信息不全，请填写完后再试！'});
  }
  conn.query('select count(*) as count from user where username=?', req.body.username, (err, result) => {
    if (err) return res.json({err_code: 1, message: '查询失败'});
    if (result[0].count !== 0) return res.json({err_code: 1, message: '对不起，此用户已被占用，请更换其他用户名!'});
    // 如果没有占用开始写入用户信息
    conn.query('insert into user set?', req.body, (err, result) => {
      if (err) return res.json({err_code: 1, message: '注册用户失败'});
      if (result.affectedRows !== 1) return res.json({err_code: 1, message: '注册用户失败'});
      res.json({err_code: 0, message: '注册用户成功'});
    })
  });
}

function renderLoginPage(req, res) {
  res.render('./user/login', {});
}

function userLogin(req, res) {
  const user = req.body;
  conn.query('select * from user where username=? and password=?', [user.username, user.password], (err, result) => {
    if (err) return res.json({err_code: 1, message: '查询失败'});
    if (result.length === 0) return res.json({err_code: 1, message: '用户名或密码错误，请重试!'});
    // 把登录成功的状态存储到session上
    req.session.islogin = true;
    // 把用户的信息对象也挂在到session上
    req.session.user = result[0];

    res.json({err_code: 0, message: '登录成功'});
  });
}

function destroyLogin(req, res) {
  // 注销session
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  })
}

function renderAddArticlePage(req, res) {
  if (!req.session.islogin) return res.redirect('/login');
  res.render('./article/add', {
    islogin: req.session.islogin,
    user: req.session.user
  });
}

function addArticle(req, res) {
  const content = req.body;
  content.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
  conn.query('insert into article set?', content, (err, result) => {
    if (err || result.affectedRows !== 1) return res.json({err_code: 1, message: '发表文章失败!'});
    res.json({err_code: 0, message: '发表成功', id: result.insertId});
  })
}

function renderArticlePage(req, res) {
  const id = req.query.id;
  let article = {};
  conn.query('select * from article where id=?', id, (err, result) => {
    if (err) return res.json({err_code: 1, message: '查询文章失败!'});
    if (result.length === 1) {
      article = result[0];
      article.content = parser.parse(article.content || '');
      res.render('./article/info', {
        islogin: req.session.islogin,
        user: req.session.user,
        article
      })
    }
  })
}

function editArticlePage(req, res) {
  if (!req.session.islogin) return res.redirect('/login');
  const id = req.query.id;
  conn.query('select * from article where id=?', id, (err, result) => {
    if (err) return res.json({err_code: 1, message: '查询文章失败!'});
    if (result.length === 1) {
      res.render('./article/edit', {
        islogin: req.session.islogin,
        user: req.session.user,
        article: result[0]
      })
    }
  })
}

function submitArticlePage(req, res) {
  const article = req.body;
  const id = req.query.id;
  conn.query('update article set ? where id=?', [article, id], (err, result) => {
    if (err) return res.json({err_code: 1, message: '编辑文章失败!'});
    if (result.affectedRows === 1) {
      res.json({
        err_code: 0,
        message: '编辑成功'
      });
    }
  })
}

module.exports = {
  renderHomePage,
  renderRegisterPage,
  userRegister,
  renderLoginPage,
  userLogin,
  destroyLogin,
  renderAddArticlePage,
  addArticle,
  renderArticlePage,
  editArticlePage,
  submitArticlePage
};
