const express = require('express')

const app = express()

//     /index.html    返回首页   get
//     /movie.html    返回电影  get
//     /about.html    返回关于  get
//    /api/postinfo      返回 一句  这是Post请求    post

app.get('/index.html', (req, res) => {
  res.send('首页')
})

app.get('/movie.html', (req, res) => {
  res.send('电影')
})

app.get('/about.html', (req, res) => {
  res.send('关于')
})

app.post('/api/postinfo', (req, res) => {
  res.send('这是Post请求')
})

app.listen(3000, () => {
  console.log('express server running at http://127.0.0.1:3000')
})