const http = require('http')

// 创建服务器
const server = http.createServer()

server.on('request', (req, res) => {
  // 问题1： 如何 拿到 浏览器请求的  URL 地址呢？   服务器拿到的所有的 URL 地址，都是一个  / 开头的
  // console.log(req.url)
  // 问题2： 如何拿到请求的类型
  // console.log(req.method.toLowerCase())
  // res.end('ok')

  // 需求： 每当有客户端来请求服务器了，我们服务器，直接 把  请求的 类型 和 请求的URL地址，拼接成字符串，返回给 客户端显示；
  // 首先，要分析为什么乱码

  // 学习如何制定返回内容的编码格式
  // 在 调用 res.end 之前，通过  res.writeHeader() 来指定编码格式
  // 其中，第一个参数，是数值类型的状态码     200  成功   300  重定向     404 资源找不到    500  服务器内部错误
  // 第二个参数是一个配置对象
  res.writeHeader(200, {
    "Content-Type": 'text/html; charset=utf-8'     //  text/css    text/plain     image/jpg   image/png   image/gif
  })

  res.end('请求的类型是：' + req.method + '   请求的URL地址是：' + req.url)
})

server.listen(3000, () => {
  console.log('http server running at http://127.0.0.1:3000')
})