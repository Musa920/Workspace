const querystring = require('querystring')

// 定义一个 解析表单数据的中间件
function parseForm(req, res, next) {
  let dataStr = ''
  // 注意， data 事件，可能会触发多次，因此，每次拿到一小块的 chunk 数据，一定要拼接到 dataStr 上
  req.on('data', (chunk) => {
    dataStr += chunk
  })

  // 当触发 req 的 end 事件，就表示数据已经接收完毕了
  req.on('end', () => {
    // 得到的这个 result ，我们应该如何 传递给下一个中间件，或者如何传递给下一个路由呢？
    const result = querystring.parse(dataStr)
    req.body = result
    next()
  })
}


module.exports = parseForm