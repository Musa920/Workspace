// 服务端项目的入口文件
const express = require('express');
const app = express();

// 导入CORS模块
const cors = require('cors');
app.use(cors());

// 导入解析表单数据的 body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// 导入格式化日期插件
const moment = require('moment');

// 创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'newnode'
});

//查询英雄列表
app.get('/api/getheros', (req, res) => {
  const sqlStr = 'select * from heros where isdel=0 order by id asc';
  conn.query(sqlStr, (err, data) => {
    if (err) return res.json({err_code: 1, message: 'مالىمەت ىزدەۋ ءساتسىز بولدى', affectedRows: 0});
    res.json({
      err_code: 0,
      message: 'ءساتتى تابىلدى',
      affectedRows: 0,
      data
    });
  })
});

// 根据ID更新英雄数据
app.post('/api/updatehero', (req, res) => {
  const sqlStr = 'update heros set ? where id=?';
  conn.query(sqlStr, [req.body, req.body.id], (err, data) => {
    if (err) return res.json({err_code: 1, message: 'جاڭالاۋ ءساتسىز بولدى', affectedRows: 0});
    if (data.affectedRows !== 1) return res.json({err_code: 1, message: 'بۇل مازمۇن قامبادا جوق', affectedRows: data.affectedRows});
    res.json({
      err_code: 0,
      message: 'جاڭالاۋ ءساتتى بولدى',
      affectedRows: data.affectedRows
    });
  });
});

// 根据ID获取英雄
app.get('/api/gethero', (req, res) => {
  const id = req.query.id;
  const sqlStr = 'select * from heros where id=?';
  conn.query(sqlStr, id, (err, data) => {
    if (err) return res.json({err_code: 1, message: 'ىزدەۋ ءساتسىز بولدى', affectedRows: 0});
    if (!data.length) return res.json({err_code: 1, message: 'بۇل مازمۇن قامبادا جوق', affectedRows: 0});
    res.json({
      err_code: 0,
      message: 'ىزدەۋ ءساتتى بولدى',
      affectedRows: 0,
      data
    });
  })
});

// 根据ID删除英雄
app.post('/api/delhero', (req, res) => {
  const id = req.query.id;
  const sqlStr = 'update heros set isdel = 1 where id=?';
  conn.query(sqlStr, id, (err, data) => {
    if (err) return res.json({err_code: 1, message: 'ءوشىرۋ ءساتسىز بولدى', affectedRows: 0});
    if (data.affectedRows !== 1) return res.json({err_code: 1, message: 'بۇل مازمۇن قامبادا جوق', affectedRows: 0});
    res.json({
      err_code: 0,
      message: 'ءوشىرۋ ءساتتى بولدى',
      affectedRows: data.affectedRows
    });
  })
});

// 添加英雄
app.post('/api/addhero', (req,res) => {
  const hero = req.body;
  hero.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
  const sqlStr = 'insert into heros set ?';
  conn.query(sqlStr, hero, (err, data) => {
    if (err) return res.json({err_code: 1, message: 'ءساتسىز بولدى', affectedRows: 0});
    if (data.affectedRows !== 1) return res.json({err_code: 1, message: 'ءساتسىز بولدى', affectedRows: 0});
    res.json({
      err_code: 0,
      message: 'ءساتتى قوسىلدى',
      affectedRows: 0
    });
  })
});


app.listen(5000, () => {
  console.log('http://127.0.0.1:5000');
});