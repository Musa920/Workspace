//   fs    path    http
// 1. 先导入 Node 中提供的核心模块  http
const http = require('http')

// 2. 创建服务器
const server = http.createServer()

// 3. 为这个server服务器，通过  on  方法，绑定一个 事件
//     $('#btn').on('click', function(){})         $('div').on('mouseover', function(){})

// 问大家：这个 request 事件什么时候触发？  每当服务器接收到一个客户端的请求，就会立即触发这个 request 事件
// 注意： 我们在自己写服务器的时候，要时刻记着 请求 - 处理 - 响应 这个通信模型
// 在 服务器的 回调函数参数列表中， 有两个参数，其中，第一个参数，是 Request， 第二个参数是 Response
server.on('request', function (req, res) {
  console.log('ok')
  // 大家注意：每当请求处理完毕，必须 显示调用一下  response 对象的 end 方法，来结束这次响应，否则，客户端拿不到数据；在 调用 res.end 方法的时候，可以传递要返回给客户端的数据；
  res.end('hello world.')
})

// 4. 启动服务器
// listen 方法的第一个参数： 端口号
// 第二个参数，是IP地址，可选，P地址，可选，如果不填写，则默认监听 127.0.0.1
// 最后，还有一个回调函数，表示，当服务器正常启动之后，调用一下这个函数
//  http://127.0.0.1:3000
server.listen(3000, function () {
  console.log('通知大家，服务器已经启动了！')
})