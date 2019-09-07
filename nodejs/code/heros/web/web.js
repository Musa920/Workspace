// 这是web的入口文件
const express = require('express');
const app = express();

// 托管静态文件
app.use('/node_modules', express.static('../node_modules'));

// 托管静态页面
app.use(express.static('./views'));

app.listen(4000, () => {
  console.log('http://127.0.0.1:4000');
});