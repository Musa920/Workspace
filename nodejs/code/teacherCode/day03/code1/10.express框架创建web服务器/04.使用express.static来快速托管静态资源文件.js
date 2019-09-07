const express = require('express')

const app = express()

// 使用 express.static 来托管 views 目录
// index.html

app.use(express.static('./assets'))
app.use(express.static('./views'))

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});