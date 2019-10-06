require('module-alias/register')
const Koa = require('koa');
// 导入解析表单数据的bodyparser
const bodyParser = require('koa-bodyparser');
const InitManager = require('./core/init');
const catchError = require('./middlewares/exception');
const path = require('path'); 
const static = require('koa-static');

const app = new Koa();
app.use(catchError);
app.use(bodyParser());
InitManager.initCore(app);
app.use(static(path.join(__dirname, './static')));

app.listen(3000)