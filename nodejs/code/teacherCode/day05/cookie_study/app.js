const http = require('http')
const querystring = require('querystring')

const server = http.createServer()


server.on('request', (req, res) => {

  // 需求： 当客户端第一次请求 这个服务器，则返回一句话： 给你一朵小红花！
  // 当客户端不是第一次请求服务器，则 返回一句话： 不要太贪心！

  // Cookie 的特性：
  //  1. 是专门用来在 服务器端 和 客户端之间，传递一些文本数据的，从而用来记录客户端的身份；
  //  2. Cookie 的本质，是一段小文本；
  //  3. Cookie 有一个特性，每当客户端要请求服务器了，必然会主动携带 当前域名下所有可用的Cookie，主动发给服务器；客户端，每次请求服务器的时候，会检查当前域名下所有可用的Cookie，并写入到请求头中，主动发送给服务器；
  //  4. 服务器，也可以主动向客户端写入 Cookie；
  //  5. Cookie 是不安全的，因为 Cookie 存放在客户端浏览器中，容易被篡改！


  if (req.url === '/') {

    // 如何获取到 客户端发送过来的Cookie
    const cookieStr = req.headers.cookie || ''
    const cookie = querystring.parse(cookieStr, '; ', '=')
    // console.log(cookie)

    //     isvisit=yes; name=zs       id=10&name=zs


    if (cookie.isvisit === 'yes') { // 曾经来过
      res.writeHeader(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
      res.end('不要太贪心')

      new Date().toUTCString()

    } else { // 第一次来访问服务器

      // 需求： 让 isvisit 这个 Cookie ，1分钟之后过期
      const nextTime = Date.now() + 60 * 1000
      const expiresTime = new Date(nextTime).toUTCString()

      res.writeHeader(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Set-Cookie': ['isvisit=yes; expires=' + expiresTime, 'name=zs'] // 注意：默认情况下，Cookie 只在当前会话期间有效，当浏览器被关闭，则 Cookie 就失效了；
      })

      res.end('送你一朵小红花🚀')
    }

    // 使用 res.writeHeader ，指定 Set-Cookie 来向客户端写入 Cookie，如果要写入多个，则值应该是一个数组


  } else {
    res.end('404')
  }
})

server.listen(4000, () => {
  console.log('服务器运行在 http://127.0.0.1:4000')
})