const express = require('express')

const app = express()

// 托管静态页面
app.use(express.static('./views'))
// 如果在 托管静态资源的时候，直接使用了 app.use(express.static('./assets')) 方式，则 ，访问 assets 目录下资源的时候，路径中，不能出现 /assets;
// 但是，我们为了能有路径的智能提示，推荐大家，在 第一个参数的位置，手动挂载一个 路径标识符，这就表示，将来托管的静态资源文件，在访问的时候，路径中，必须要包含我们为其挂载的 哪个 路径标识符
app.use('/assets', express.static('./assets'))

app.listen(3000, function () {
  console.log('http://127.0.0.1:3000');
});