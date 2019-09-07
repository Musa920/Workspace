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
    readHtmlFile(res, url)

  } else if (method === 'get' && url === '/views/movie.html') { // get 请求电影页面
    readHtmlFile(res, url)

  } else if (method === 'get' && url === '/views/about.html') { // get 请求 关于页面
    readHtmlFile(res, url)

  } else if (method === 'get' && url === "/assets/css/index.css") { // 请求CSS样式表
    readHtmlFile(res, url)

  } else if (method === 'get' && url === '/assets/js/index.js') { // 请求 JS 文件
    readHtmlFile(res, url)

  } else if (method === 'get' && url === '/assets/images/5.jpg') { // 请求 图片
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