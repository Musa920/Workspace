const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  // 拿到请求的类型
  const method = req.method.toLowerCase()
  // 拿到请求的地址
  const url = req.url

  // 因为 我们浏览器请求的  URL地址，已经和 服务器上，文件的物理路径，对应上了；
  readStaticFile(res, url)

})

server.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})


function readStaticFile(res, url) {
  fs.readFile(path.join(__dirname, url), (err, data) => {
    if (err) return res.end('404')
    res.end(data)
  })
}