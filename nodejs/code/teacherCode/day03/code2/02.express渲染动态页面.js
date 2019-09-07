const express = require('express')
const path = require('path')

// 创建 express 服务器
const app = express()

const person = {
  name: '俊哥',
  nickname: '高婆婆',
  age: '26',
  gender: '妖人',
  hobby: ['吃饭', '睡觉', '瞎BB']
}

// template  engine
// 配置模板引擎的三大步：
// 1. 安装 合适的 模板引擎  运行  npm i ejs -S
// 2. 配置模板引擎
app.set('view engine', 'ejs')
// 3. 配置模板页面的存放路径
app.set('views', './views') // 注意：第一个参数，是固定写法，第二个参数，是模板页面的存放路径

app.get('/', (req, res) => {
  // res.sendFile 只能 提供静态文件，无法渲染动态页面
  // res.sendFile(path.join(__dirname, './views/index2.html'))
  //  res.render() 函数，是express框架独有的， 其中：
  // 参数1： 是要渲染的 页面名称
  // 参数2： 是要渲染的数据对象
  //  注意： 默认情况下，我们无法直接 使用 res.render 函数来渲染动态页面，因为 express 并没为我们提供默认的模板引擎；
  // 所以，在调用 res.render() 函数之前，我们要先人为的指定 使用哪个 模板引擎来渲染页面
  res.render('index', person)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})