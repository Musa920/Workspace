## 使用 `http` 核心模块 - 构建自己的 web server（web服务器）
### 理解 BS 交互模型
B/S：表示  Browser / Server        C/S     Client / Server
1. 什么是服务器：在网络节点中，专门对外提供资源服务的一台电脑；
2. 什么是客户端：在网络节点中，专门用来消耗或呈现服务器中返回的数据的电脑；
3. 什么是静态资源：像 .js ,  .css, .jpg,  .html   ；所谓的静态资源，就是无需数据交互，服务器直接把资源读取，并响应给客户端就完事儿；
4. 什么是动态资源：当一些资源，服务器上并没有现成的，需要现在服务器端，做一层处理，最后把处理的结果返回给客户端，这样的资源，叫做动态资源；
5. HTTP 协议的通信模型：`请求 - 处理 - 响应`的过程；
### 实现静态资源服务器
1. 后端路由的本质
  + 重点理解URL（统一资源定位符）的本质
### 结合模板引擎实现动态资源服务器

## 静态资源请求路径问题
1. 在浏览器的眼中，只要是地址栏中的地址，浏览器永远把 最后一个 `/` 后面的符号，认为是文件名
2. 对于服务器来说，客户端请求的 URL 资源路径只是一个 **标识符** 而已，URL 不一定非要对应实际的物理磁盘路径！
2. 一定要区分html中书写的路径标识符 `../`    `./`  和 `/` **在浏览器中**代表含义！
 + `/`   表示，直接从端口号后面，开始资源请求
 + `./`  表示，在发起资源请求之前，浏览器需要先 把 URL 地址 ，和 资源路径做一层拼接
 + `../` 表示，在发起资源请求之前，浏览器需要先 把 URL 地址 ，和 资源路径做一层拼接



 ## 使用 `nodemon` 工具来自动重启web服务器
 + 这个工具的作用：能够实时监听 web 服务器中，代码的改变，只要代码被修改并保存了，则 nodemon 工具，会自动重新启动 web 服务器；
 + 运行 `npm i nodemon -g` 就能够在全局环境中，安装这个工具了
 + 当安装完毕 `nodemon` 之后，就可以 使用 `nodemon 要执行的js文件路径` 来运行JS文件了
 + 今后在开发Web项目的时候，推荐使用 nodemon 来执行 web 服务器



## Node 中的 Web 快速开发框架 - Express
定义什么是Express：
1. 基于 Node.js 后端Javascript平台之上，开发出来的一套Web开发框架； 
2. Express中，基于 原生Node的特性，做了进一步的封装，提供了一些更加好用的方法，来提高Web开发的体验；
3. Express中，并没有覆盖或者删除原生的http模块方法；
### express 框架的安装和基本使用
1. 直接运行 `npm install express --save` 就可以安装Express框架了
### 使用 express 快速托管静态资源
1. 如果我们网站中，有很多静态资源需要被外界访问，此时，使用 res.sendFile 就有点力不从心了，这时候，express 框架，为我们提供了一个 内置的（中间件）  `express.static('静态资源目录')`  ， 来快速托管指定目录下的所有静态资源文件；
2. 用法： `app.use(express.static('public'));`
  + 其中， `express.static` 是一个express的内置中间件；
  + `app.use() `方法，是专门用来注册 中间件；
3. 当使用 第二步中的方法，把指定目录托管为静态资源目录之后，那么，这一层被托管的目录，不应该出现在 资源访问的 URL地址中；
4. 在一个Web项目中，我们可以多次调用`app.use(express.static())`
5. 在多次调用 express.static 的时候，如果文件名称有重复的，则以先注册的中间件为主！
6. 如果项目要部署了，推荐大家配置一个叫做`compression`的中间件，它能够开启服务器的GZip压缩功能；
### 为 express 框架配置模板引擎渲染动态页面
1. 安装 ejs 模板引擎` npm i ejs -S`
2. 使用 app.set() 配置默认的模板引擎 `app.set('view engine', 'ejs')`
3. 使用 app.set() 配置默认模板页面的存放路径 `app.set('views', './views')`
4. 使用 res.render() 来渲染模板页面`res.render('index.ejs', { 要渲染的数据对象 })`，注意，模板页面的 后缀名，可以省略不写！
### 使用 express 框架中提供的路由来分发请求
1. 什么叫做路由：前端请求的URL地址，都要对应一个后端的处理函数，那么 这种URL地址到 处理函数之间的对应关系，就叫做后端路由；
2. 在Express中，路由主要负责 分发请求处理的；
3. 在Express中，如何 定义并使用路由呢？
```
  // 1. 封装单独的 router.js 路由模块文件
  const express = require('express')
  // 创建路由对象
  const router = express.Router()

  router.get('/', (req, res)=>{})
  router.get('/movie', (req, res)=>{})
  router.get('/about', (req, res)=>{})

  // 导出路由对象
  module.exports = router
```
4. express创建的 app 服务器，如何使用 路由模块呢？
```
  // 导入自己的路由模块
  const router = require('./router.js')
  // 使用 app.use() 来注册路由
  app.use(router)
```



## Express 框架里 中间件的概念
### Express 框架中对中间件的5种分类
### 自己模拟一个解析表单数据的中间件


## Express 中进行数据库操作
### 配置 MySql 数据库环境
### mysql 第三方模块的介绍和基本配置
### 使用 mysql 第三方模块实现 CRUD


## 模块加载机制
### 优先从缓存中加载
### 核心模块的加载机制
### 用户模块的加载机制
### 第三方模块的加载机制


## 作业
1. 自己尝试着，把 资料中的`vue-cms`项目，使用express框架中的中间件，托管为静态资源服务器；
2. 去 使用 Express + 模板引擎，恶搞一下 高老师、付老师、我
3. 在恶搞以上几位老师的同时， 把 express 中的路由用起来，练熟！


## 相关文章
[art-template 官方文档](https://aui.github.io/art-template/zh-cn/docs/index.html)