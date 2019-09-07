const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  // 拿到请求的类型
  const method = req.method.toLowerCase()
  // 拿到请求的地址
  const url = req.url

  if (method === 'get' && url === '/views/index.html') { // get 请求首页
    // 注意： res.end() ，只接受  字符串 或 Buffer 二进制
    // res.end('/views/index.html')
    fs.readFile(path.join(__dirname, '/views/index.html'), (err, data) => {
      // 当读取文件失败，则返回 404 给客户端
      if (err) return res.end('404.')
      // 如果成功，则直接把读取到的内容返回
      res.end(data)
    })

  } else if (method === 'get' && url === '/views/movie.html') { // get 请求电影页面
    // 在网络中，传输的任何内容，都是以 二进制进行传输的；
    // 所以，我们在使用 fs.readFile 读取文件的时候，直接以 Buffer 二进制读取进来就好，这样，我们在调用 res.end 时候，直接发送的就是二进制；
    fs.readFile(path.join(__dirname, '/views/movie.html'), (err, data) => {
      if (err) return res.end('404')
      res.end(data)
    })

  } else if (method === 'get' && url === '/views/about.html') { // get 请求 关于页面
    readHtmlFile(res, url)
  }

})

server.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})


function readHtmlFile(res, url) {
  fs.readFile(path.join(__dirname, url), (err, data) => {
    if (err) return res.end('404')
    res.end(data)
  })
}