const http = require('http')
// 1. 导入 art-template 这个第三方模块
const template = require('art-template')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {

  //  之前，大家在前端中使用过 art-tempalte 模板引擎
  // 在前端中使用的时候，分3步：
  // 1. 导入 script  src="/public/art-template.js"
  // 2. 创建一个 模板 script 标签   <script id="tmpl" type="text/template"></script>
  // 3. const htmlStr =  template('tmpl', { 要渲染的数据对象 })

  const person = {
    name: '俊哥哥',
    age: 30,
    gender: '妖',
    hobby: ['吃饭', '睡觉', '撩妹']
  }

  // 在 Node 服务器端，template 函数的第一个参数，不再是 Id 了，而是一个 模板页面的绝对路径
  //  第二个参数，还是要渲染的数据
  const htmlStr = template(path.join(__dirname, './views/tmpl.html'), person)


  res.end(htmlStr)
})

server.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})