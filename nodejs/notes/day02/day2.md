## Javascript 是单线程的一门语言
1. 什么是单线程：用户无法主动开启子线程，对于JS的运行来说，永远是主线程在执行关键代码；
2. 什么是多线程：用户可以主动开启子线程；    Thread  td = new Thread()
3. 在Node中，操作文件和网络都是比较耗时的操作；


## Node中为什么大量使用异步方法
1. 为什么要使用 异步方法呢： 因为 异步方法，不会阻塞CPU去执行其它任务；
2. 为什么在Node中不推荐使用同步呢： 因为 同步，需要一个一个执行，耗时的操作会阻碍CPU执行后续任务，因此，效率慢；


## CommonJS 模块规范和模块的使用
Node.js 实现了 CommonJS 模块化规范；
1. 什么是 CommonJS 规范？
    +  CommonJS 是**为了实现 Javascript 的模块化**，而制定的一套规范；
2. 为什么 Javascript 需要模块化？
    + 浏览器中的Javascript有没有实现模块化？（在一个JS文件中，能不能引用另外JS文件中的方法）
    + 因为有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。
3. 如何实现 Javascript 的模块化？
    + 为了统一大家编写模块时候的规则，方便各模块之间的依赖和调用，于是 CommonJS 规范就应运而生了。
4. 那么，CommonJS 模块化规范，到底是个什么东西？？
    + 定义了什么是模块
    + 一个JS模块中，如何引入其它的JS模块
    + 一个JS模块中，如何向外暴露一些成员，供其它模块调用；
    + 如果没有类似于 CommonJS 的规范，行不行？
    + 只有大家遵守同样的规范，才能够协作开发，方便别人，同时也方便自己；


## 全局作用域和模块作用域
1. 每个JS文件，就是一个独立的模块，在这个JS文件中，所定义的任何方法、属性、变量、常量、对象，默认都属于 模块作用域，并不会属于 全局作用域；
2. 如果在某个模块内部，想为 全局的 global 作用域挂载一些属性，需要显示的调用`global.***`来挂载；
### global（全局作用域）
### require（模块引用）
每一个实现了 CommonJS 规范的模块，必须定义一个 require() 函数，使用这个 require 函数，就能够 很方便的导入其它 模块中的成员，供自己使用；
### exports（模块定义）
每一个模块中，如果想要把自己的一些私有成员，暴露给别人使用，那么，必须实现一个 exports 对象，这个对象，将来，如果你想把自己的成员，暴露给别人使用，只需要把自己的成员，挂载到 exports 上就行了
### module（模块标识）
这个 module 也是Common JS 规定的，它表示一个具体的模块，也是一个对象；


## module.exports 和 exports 的关系


## Node 中的 Javascript 由几部分组成
1. ECMAScript 核心
2. 全局成员
3. 模块系统成员
    + 模块系统成员，根据一些区别，又可以分为三大类： 核心模块、第三方模块、用户自定义模块


## 模块分类
### 核心模块
1. 什么是核心模块：由Node官方提供的好用的模块，叫做核心模块；只要大家在计算机中，安装了Node这个应用程序，那么，我们的计算机中就已经安装了所有的 核心模块；
2. 如何使用核心模块：`require('核心模块标识符')`
### 第三方模块
1. 什么是第三方模块：一些非官方提供的模块，叫做第三方模块；注意，第三方模块，并不在我们的计算机上，如果大家需要使用某些第三方模块，必须去一个叫做 `NPM` 的网站上搜索并下载才能使用；
2. 如何使用第三方模块：
    + 先从 npm 官网上下载指定的第三方模块
    + 使用 `require('第三方模块的名称标识符')`来导入这个模块
    + 根据 第三方模块的 官方文档，尝试使用
### 用户自定义模块
1. 什么是用户模块：程序员自己写的JS文件，就叫做 用户自定义模块；
2. 如何使用用户模块：`require('路径标识符')`



## 包
### 什么是包
1. 英文名叫做 `Packages`，包是在模块基础上更深一步的抽象，目的是：方便分发推广基于 CommonJS 规范实现的 应用程序 或 类库；
2. 包可以看作是 模块、代码 和 其它资源 组合起来形成的 **独立作用域**；
### 规范的包结构
1. **包都要以一个单独的目录而存在**；
2. **`package.json` 必须在包的顶层目录下**；
3. **`package.json` 文件必须符合 JSON 格式，并且必须包含如下三个属性：`name`, `version`, `main`**
    + name:  包的名字
    + version: 包的版本号
    + main: 表示包的入口文件
4. 二进制文件应该在**bin目录**下;
5. javaScript代码应该在**lib目录**下;
6. 文档应该在**doc目录**下;
7. 单元测试应该在**test目录**下;
8. Node.js对包要求并没有那么严格，只要顶层目录下有`package.json`，并**符合基本规范**即可;
### 包描述文件 package.json
```
name：包的名称，必须是唯一
description：包的简要说明
version：符合语义化版本识别规范的版本字符串
keywords：关键字数据，通常用于搜索
maintainers：维护者数组，每个元素要包含name、email、web可选字段
contributors：贡献者数组，格式与maintainers相同。包的坐着应该是贡献者数据的第一个元素
bugs：提交bug的地址，可以是网址或者电子邮件地址
licenses：许可证数组，每个元素要包含type和url字段
repositories：仓库托管地址数组，每个元素要包含type、url和path字段
dependencies：包的依赖，一个关联数组，由包名称和版本号组成。
devDependencies：开发依赖项，表示一个包在开发期间用到的依赖项
```
### 自己尝试定义一个包含 加减乘除的 calc 计算器包


## npm
### npm 的两层含义
1. NPM 是一个 第三方模块的托管网站，指的就是`https://www.npmjs.com/`；
2. NPM 是Node的包管理工具（全名叫做  Node package manager），在我们安装Node时候，就已经顺便也安装了 NPM 这个管理工具；
### 安装和卸载全局包
1. 什么是全局的包：通过  `npm install  包名  -g` 方式安装的包，都安装到了全局；一般全局的安装目录是`C:\Users\自己的用户文件夹\AppData\Roaming\npm`
2. 带大家演示如何安装一个全局的包：`npm install i5ting_toc -g`， 注意：这里的`-g`表示全局安装包的意思；
3. 注意：一般，只有一些工具，才有全局安装的必要性；
4. 如果要全局卸载某个包，比如要卸载 `i5ting_toc`了，直接运行`npm uninstall i5ting_toc -g`就可以全局卸载包了！
5. i5ting_toc -f .\day2.md -o
### 安装和卸载本地包
1. 什么是本地的包：跟着项目安装的包，叫做本地包；
2. 如果拿到一个空项目，必须先初始化一个`package.json`的配置文件，`npm init`或者`npm init -y`
3. 运行`npm i 包名 --save`去安装指定的包，本地安装的包，都安装到了`node_modules`的目录下
4. 如果大家用的是npm 5.x的版本，可以不指定`--save`命令，如果用的是 npm 3.x 的版本，则需要手动指定 `--save`, 同时，`--save`有缩写形式，是：`-S`
5. `package-lock.json`文件中记录了曾经装过的包的下载地址，方便下次直接下载包；
### 其它常用命令
1. `--save-dev`它的缩写是`-D`
2. 注意：`dependencies`节点，表示项目上线部署时候需要的依赖项；`devDependencies`节点，表示项目在开发阶段需要的依赖项，但是当项目要部署上线了，`devDependencies`节点中的包，就不再需要了！
3. 注意：当使用`npm i`快速装包的时候，npm会检查`package.json`文件中，所有的依赖项，然后都为我们安装到项目中
4. `--production` 表示只安装 `dependencies` 节点下，记录的包，不安装`devDependencies`节点下的包；当项目要上线了，才会使用`--production`命令
### 解决 npm 下载慢问题
1. 默认，NPM在下载包的时候，连接的是国外的服务器，所以，有时候如果网速不是特别好，可能下载不下来包；此时，大家可以安装一个工具，叫做`nrm`，里面记录了好多下载NPM包的服务器地址，可以让我们方便的切换下载包时候请求的服务器；
2. 运行`npm i nrm -g`（注意：只要是工具，一般都是全局 -g 安装）
3. 当装完 nrm 之后，可以运行`nrm ls` 查看所有可用的服务器列表
4. 可使用`nrm use 服务器名称`来切换下载包时候的服务器地址

## 构建web应用
Apache 是一个PHP的服务器，当我们把做好的网站，丢到 WWW 目录下，就能够使用 IP地址 + 端口号 访问我们的网站了；
+ IP地址的作用，是为了表示当前网络中这台计算机唯一身份的；
+ 端口号：端口号和应用程序有关联，每一个应用程序，只能独占一个端口号，不能说多个应用程序公用一个端口；
疑问：Node中，有没有类似于 Apache 这样的服务器软件，来提供对应的网站服务呢？注意：Node中，并没有现成的 类似于 Apache 的服务器软件，如果我们想通过Node，来对外托管一个网站的话，需要自己手写一个 类似于 Apache 的服务器；
### BS 交互模型
1. HTTP 协议是基于 `请求 - 处理 - 响应` 通信模型的
### 实现静态资源服务器
### 在 Node 中使用模板引擎


## 作业
1. 练习自定义 `calc` 计算器包，并尝试向 `calc` 包中，添加 mod 求余数的方法


## 相关文章
+ [js模块化编程之彻底弄懂CommonJS和AMD/CMD！](https://www.cnblogs.com/chenguangliang/p/5856701.html)
+ [wiki 对于 Modules的描述](http://wiki.commonjs.org/wiki/Modules/1.1)
+ [wiki 对于 Packages的描述](http://wiki.commonjs.org/wiki/Packages/1.1)
+ [nodejs模块与包](http://blog.csdn.net/williamfan21c/article/details/54901974)