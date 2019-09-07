const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
  res.end('请求的类型是：'+req.method + ' 请求的URL地址是:'+req.url)
})
server.listen(3000,()=>console.log('通知大家,服务器已经启动了'))