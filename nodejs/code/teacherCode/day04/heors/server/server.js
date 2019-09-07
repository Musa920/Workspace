// 服务器端项目的入口文件
const express = require('express')
const app = express()
const moment = require('moment')


// 导入CORS 模块
const cors = require('cors')
app.use(cors())


// 注册 解析表单的 body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


//创建数据库连接对象
const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydb_12_9'
})


// 获取所有未删除的英雄的列表
app.get('/api/getheros', (req, res) => {
  // 定义Sql语句
  const sqlStr = 'select * from heros where isdel=0'
  conn.query(sqlStr, (err, results) => {
    console.log(results)
    if (err) return res.json({ err_code: 1, message: '获取数据失败', affectedRows: 0 })
    res.json({ err_code: 0, message: results, affectedRows: 0 })
  })
})



//根据Id更新英雄数据
app.post('/api/updatehero', (req, res) => {
  // 如何拿到 post 提交过来的数据？
  const sqlStr = 'update heros set ? where id=?'
  conn.query(sqlStr, [req.body, req.body.id], (err, results) => {
    // 更新失败
    if (err) return res.json({ err_code: 1, message: '更新英雄失败！', affectedRows: 0 })
    // 影响行数不等于1
    if (results.affectedRows !== 1) return res.json({ err_code: 1, message: '更新的英雄不存在！', affectedRows: 0 })

    res.json({ err_code: 0, message: '更新成功！', affectedRows: results.affectedRows })
  })
})



// 根据ID获取英雄
app.get('/api/gethero', (req, res) => {
  const id = req.query.id
  const sqlStr = 'select * from heros where id=?'
  conn.query(sqlStr, id, (err, results) => {
    // 执行Sql语句失败
    if (err) return res.json({ err_code: 1, message: '获取英雄失败', affectedRows: 0 })
    if (results.length !== 1) return res.json({ err_code: 1, message: '英雄不存在！', affectedRows: 0 })
    res.json({
      err_code: 0,
      message: results[0],
      affectedRows: 0
    })
  })
})



// 根据ID删除英雄
app.get('/api/delhero', (req, res) => {
  const id = req.query.id
  const sqlStr = 'update heros set isdel=1 where id=?'
  conn.query(sqlStr, id, (err, results) => {
    if (err) return res.json({ err_code: 1, message: '删除英雄失败！', affectedRows: 0 })
    if (results.affectedRows !== 1) return res.json({ err_code: 1, message: '删除英雄失败！', affectedRows: 0 })
    res.json({ err_code: 0, message: '删除英雄成功！', affectedRows: results.affectedRows })
  })
})



// 添加英雄
app.post('/api/addhero', (req, res) => {
  const hero = req.body
  // 补全英雄的创建时间
  hero.ctime = moment().format('YYYY-MM-DD HH:mm:ss')

  const sqlStr = 'insert into heros set ?'
  conn.query(sqlStr, hero, (err, results) => {
    if (err) return res.json({ err_code: 1, message: '添加失败！', affectedRows: 0 })
    if (results.affectedRows !== 1) return res.json({ err_code: 1, message: '添加失败！', affectedRows: 0 })
    res.json({ err_code: 0, message: '添加成功', affectedRows: results.affectedRows })
  })
})




app.listen(5000, function () {
  console.log('Data server running at http://127.0.0.1:5000');
});



// 梳理思路：
// 1. 创建一个最基本的express服务器， 作用：不提供web服务器，而是提供 一个 数据接口服务
// 2. 安装 cors 模块，从而启用跨域资源共享
// 3. 安装 mysql 模块，操作数据库
// 4. 根据 API 设计文档，来 创建对应的接口API，在接口API中，如果要返回JSON数据，使用 res.json()
// 5. 在设计 更新英雄的时候，需要安装 body-parser 中间件，来解析表单数据了；