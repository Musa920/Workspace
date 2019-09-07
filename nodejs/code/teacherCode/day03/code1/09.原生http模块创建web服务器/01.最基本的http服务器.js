const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  const url = req.url
  const method = req.method.toLowerCase()

  res.writeHeader(200, {
    "Content-Type": 'text/html; charset=utf-8'
  })

  if (method === 'get' && url === '/') {
    res.end('我这里返回的文本，能够中文乱码，express行吗')
  }
})

server.listen(3000, () => {
  console.log('http server running at http://127.0.0.1:3000')
})