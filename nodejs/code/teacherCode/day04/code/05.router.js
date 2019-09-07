const express = require('express')
const querystring = require('querystring')

const router = express.Router()


router.get('/index.html', (req, res) => {
  res.send('欢迎访问首页')
})


router.get('/movie.html', (req, res) => {
  res.send('欢迎访问电影')
})


router.get('/about.html', (req, res) => {
  res.send('欢迎访问关于')
})


/* router.post('/api/postinfo', (req, res) => {
  // 问题：如何在这里拿到Post提交过来的表单数据呢？？？
  //  Express 这个框架，并没有帮我们解析表单数据

  // 每当 req 的 data 事件被触发的时候，就表示有表单的数据提交过来了
  //  chunk  片、块
  // 注意： chunk 是 Buffer 二进制类型的数据
  let dataStr = ''
  // 注意， data 事件，可能会触发多次，因此，每次拿到一小块的 chunk 数据，一定要拼接到 dataStr 上
  req.on('data', (chunk) => {
    dataStr += chunk
  })

  req.on('end', () => {
    // console.log(dataStr) // name=zs&age=20
    const result = querystring.parse(dataStr)
    console.log(result)

    res.send('服务器拿到你Post的表单了！' + JSON.stringify(result))
  })


}) */




router.post('/api/postinfo', (req, res) => {
  console.log(req.body)
  res.send('你提交的数据是： ' + JSON.stringify(req.body))
})



module.exports = router