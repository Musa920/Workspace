// 后端路由：前端请求的 URL 地址 必然 会对应一个 后端的 处理函数
// 后端的路由，主要是用来分发 请求的
//  请求 - 处理 - 响应

const express = require('express')
// 创建express类型的路由对象
const router = express.Router()

const person1 = {
  name: '俊哥',
  nickname: '高婆婆',
  age: '26',
  gender: '妖人',
  hobby: ['吃饭', '睡觉', '瞎BB']
}

const xiaofu = {
  name: '付哥',
  nickname: '宝宝',
  age: 17,
  gender: '女',
  hobby: ['抽烟', '喝酒', '上钟']
}

const xiaoganggang = {
  name: '钢钢',
  nickname: '扛把子',
  age: 44,
  gender: '爷们',
  hobby: ['抠脚', '挤痘痘']
}


router.get('/', (req, res) => { // 显示高俊老师的数据
  res.render('index', person1)
})

router.get('/xgg', (req, res) => {
  res.render('xiaoganggang.ejs', xiaoganggang)
})

router.get('/xf', (req, res) => {
  res.render('xiaofu', xiaofu)
})


module.exports = router