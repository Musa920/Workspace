// 导入express框架
const express = require('express');

// 创建服务器
const app = express();

// 导入express-session模块
const session = require('express-session');
app.use(session({
  secret: 'dhsfgasgfuiagfjvhbvc231697486431!^&%#^&%!&*(%(^&',
  resave: false,
  saveUninitialized: false
}));

// 配置模板引警
app.set('view engine', 'ejs');
app.set('views', './views');

// 托管静态文件
app.use('/node_modules', express.static('./node_modules'));
app.use('/assets', express.static('./assets'));

// 配置 body-parser 来解析表单数据
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// 导入路由模块
const router = require('./router');
app.use(router);

// 启动并监听服务器
app.listen(4000, () => {
  console.log('Server runnig at http://127.0.0.1:4000');
});