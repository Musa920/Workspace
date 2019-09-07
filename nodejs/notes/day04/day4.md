## express中获取参数的几种形式
### 从URL地址中获取查询参数
通过 URL 地址栏中，? 形式传递的参数，可以直接通过 `req.query` 来获取；
### 从URL地址中获取路径参数
直接通过路径标识符来传递参数，`/userinfo/10/zs`， 可以通过 `req.params`来获取参数
### 从post表单中获取提交的数据
+ 借助于`body-parser`来解析表单数据
+ `npm i body-parser -S`
+ `const bodyParser = require('body-parser')`
+ `app.use(bodyParser.urlencoded({ extended: false }))`

## Web 开发模式
### 混合模式（传统开发模式）
+ 以后端程序员为主，基本上不需要前端程序员，或者，前端程序员只负责画页面、美化样式、写JS特效，前端程序员不需要进行数据的交互；
+ 这种开发模式，在前几年比较常见；
+ 他们用的最多的是 Jquery + 模板引擎
+ 后端页面 .php   .jsp   .aspx   .cshtml
### 前后端分离（趋势）
+ 后端负责操作数据库、给前端暴露接口
+ 前端负责调用接口，渲染页面、前端就可以使用一些流行的前端框架 Vue， React， Angular


## 需求分析
1. 后端项目运行地址：http://127.0.0.1:5000
2. 前端项目运行地址：http://127.0.0.1:4000
3. 前后端分离开发模式的注意点：
 + 跨域问题
 + 如果不考虑表单的 Post 提交，则可以使用 JSONP的形式来请求接口
 + 但是，我们的项目中，涉及到了 英雄表单的 提交，表单提交一般都是Post
 + 经过分析，由于JSONP，不支持Post，所以，我们的后端接口，无法设计成JSONP的接口；


## JSONP 和 CORS 的区别
1. JSONP的原理：动态创建script标签；
  + JSONP发送的不是Ajax请求
  + 不支持 Post 请求；
2. CORS中文意思是`跨域资源共享` , 本质，就是使用 XHR 对象，发送Ajax请求，来进行跨域的资源共享；
  + CORS 发送的是真正的Ajax请求
  + CORS 支持Ajax的跨域
  + 如果要启用 CORS 跨域资源共享，关键在于 服务器端，只要 服务器支持CORS跨域资源共享，则 浏览器肯定能够正常访问 这种 CORS 接口；而且，客户端在 发送 Ajax的时候，就像发送普通AJax一样，没有任何代码上的变化；
3. 对于Node来说，如果想要开启 CORS 跨域通信，只需要安装`cors`的模块即可；


## 数据库设计
| 字段名 | 字段类型 |  字段描述  |
|--------|-----------|------------|
|  id       |      int     |     主键Id   |
|  name |   varchar |  英雄名称  |
|  gender  |   varchar |  性别     |
|  ctime   |   varchar |创建时间  |
|  isdel   |   tinyint | 是否被删除 |

在 mysql 中的 tinyint 等同于 bool 值 


## 后台接口设计
### 获取英雄列表
### 插入新的英雄数据
### 根据Id获取英雄信息
### 根据Id更新英雄数据
### 根据Id软删除英雄数据


## 后台接口项目实现


## 前端功能实现
### 从URL中获取参数
```
var url = new URLSearchParams(location.search)
var id = url.get('id')
```


## 文章
+ [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
+ [cors模块解决Node跨域资源共享问题](https://github.com/expressjs/cors)