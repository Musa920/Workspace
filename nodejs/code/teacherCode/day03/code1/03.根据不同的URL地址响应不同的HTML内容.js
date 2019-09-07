//   /index.html        <h3>首页</h3>
//   /movie.html       <h3>电影</h3>
//   /about.html       <h3>关于</h3>
//  /api/postinfo      您发送的是Post请求
//  如果请求的  URL 地址，不属于上述三个中的任意一个，则 直接返回  404.

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // res.end('ok')

  // 拿到每次客户端请求的URL地址
  const url = req.url
  // 拿到请求的类型 ，并转换为 小写的字符串
  const method = req.method.toLowerCase()

  res.writeHeader(200, {
    "Content-Type": 'text/html; charset=utf-8'
  })

  if (method === 'get' && url === '/index.html') { // 请求 /index.html  返回首页
    res.end('<h3>首页</h3>')
  } else if (method === 'get' && url === '/movie.html') { // 请求 /movie.html  返回电影
    res.end('<h3>电影</h3>')
  } else if (method === 'get' && url === '/about.html') { // 请求 /about.html  返回关于
    res.end('<h3>关于</h3>')
  } else if (method === 'post' && url === '/api/postinfo') { // 这个处理 post 请求
    res.end('您发送的是Post请求')
  } else {
    res.end('<h3>404. 报告队长，您访问的页面，炸了...</h3>')
  }
})

server.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})