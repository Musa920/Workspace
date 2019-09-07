const express = require('express')
const path = require('path')

const app = express()

//     /index.html    返回首页   get
//     /movie.html    返回电影  get
//     /about.html    返回关于  get
//    /api/postinfo      返回 一句  这是Post请求    post

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/movie.html', (req, res) => {
  res.sendFile(path.join(__dirname, './views/movie.html'))
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, './views/about.html'))
})

app.post('/api/postinfo', (req, res) => {
  res.send('这是Post请求')
})

app.get('/assets/css/1.css', (req, res)=>{
  res.sendFile(path.join(__dirname, './assets/css/1.css'))
})

app.get('/assets/js/1.js', (req, res)=>{
  res.sendFile(path.join(__dirname, './assets/js/1.js'))
})

app.get('/assets/images/1.jpg', (req, res)=>{
  res.sendFile(path.join(__dirname, './assets/images/1.jpg'))
})



// 在express中，快速托管静态资源文件



app.listen(3000, () => {
  console.log('express server running at http://127.0.0.1:3000')
})



//   调用 express()   可以得到一个 express 服务器

// app.get   app.post   app.all   app.listen

//   res.send()   res.sendFile()

// express.static 可以方便快捷的托管【静态资源文件】