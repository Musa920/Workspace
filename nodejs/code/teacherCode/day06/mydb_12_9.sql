/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : mydb_12_9

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-12-12 16:12:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `ctime` varchar(255) NOT NULL,
  `authorId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '1', '111', '2017-12-12 10:55:34', '2');
INSERT INTO `articles` VALUES ('2', '1', '# 111', '2017-12-12 10:57:05', '2');
INSERT INTO `articles` VALUES ('3', '2', '22222', '2017-12-12 11:14:51', '2');
INSERT INTO `articles` VALUES ('4', '3', '333', '2017-12-12 11:16:08', '2');
INSERT INTO `articles` VALUES ('5', '4', '444', '2017-12-12 11:17:33', '2');
INSERT INTO `articles` VALUES ('6', '5', '555', '2017-12-12 11:20:18', '2');
INSERT INTO `articles` VALUES ('7', '6', '666', '2017-12-12 11:20:36', '5');
INSERT INTO `articles` VALUES ('8', 'Node.js - day6（黑马博客案例）', '## 学完这个黑马博客以后可以做什么\r\n1. 可以自己尝试着买一个月的阿里 ECS 服务器（不要买虚拟主机）\r\n2. 可以使用Node，利用黑马博客的一些技术点，自己做一个 完整的、带有前后台交互的网站\r\n3. 把做好的网站，部署到自己的 阿里云 ECS 服务器中\r\n4. 这样，只要你把 自己服务器的IP地址，以 80 端口暴露出来，这样，别人就能随时访问你的网站了；\r\n5. 对于网站开发来说，前端是颜值， 后端是灵魂；\r\n\r\n\r\n\r\n## 使用模板引擎处理公共部分\r\n在PHP中，抽取公共的区域，直接使用PHP语法就行；\r\n但是，在Express的框架中，并没有抽取页面公共部分的语法，需要模板引擎提供这样的语法；\r\n\r\n\r\n\r\n## 添加文章并跳转到文章详情\r\n1. 发表文章之前，需要使用 第三方的插件，叫做 `markdown + editor` => `mditor`\r\n2. 注意：`mditor`这个第三方模块，提供了两个功能：\r\n + 功能1： 可以当作一个纯粹的MarkDown编辑器插件，在前端页面中使用；\r\n + 功能2： 在Node端，我们可以`require(\'mditor\')`，使用这个模块，提供的方法，把`markdown`文本，解析转换为`HTML`内容；\r\n\r\n\r\n## 设计文章表的字段\r\n![文章字段设计](./文章表字段设计.png)\r\n\r\n\r\n## 完成文章编辑功能\r\n\r\n\r\n## 首页文章列表渲染\r\n\r\n\r\n## 使用Sql语句进行联表查询\r\n\r\n\r\n## 首页文章列表分页功能的实现\r\n\r\n\r\n## 相关文章\r\n1. [node.js中express-session配置项详解](http://blog.csdn.net/liangklfang/article/details/50998959)\r\n2. [MD5在线生成器1](http://www.cmd5.com/)\r\n3. [MD5在线生成器2](http://pmd5.com/)\r\n4. [JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5)', '2017-12-12 11:32:04', '1');
INSERT INTO `articles` VALUES ('9', '移动App第1天', '## 什么是移动App开发\r\n同学们用的手机有安卓机，苹果机，咱们的手机中安装了各种各样的软件，那么，大家有没有考虑过这么两个问题：\r\n\r\n+ 这些软件是如何开发出来的？\r\n+ 安卓和苹果共有的软件，又是如何开发出来的？\r\n\r\n关于移动App开发，我们需要知道的几个概念：\r\n\r\n+ 原生开发：\r\n+ 混合开发：\r\n+ 什么是`移动App`，和我们之前学的`移动Web`有什么区别？\r\n - App是`Application`的缩写，含义为：`“可安装的应用程序”`；\r\n    + 常见的App，按照`平台`分为两部分：\r\n     - 一部分是PC端的可执行程序：\r\n       + 浏览器、WebStorm、Sublime、VSCode、电脑QQ、电脑游戏\r\n     - 一部分为移动端的应用程序：\r\n       + 手机浏览器、手机QQ、手机微信、支付宝、手机游戏\r\n    + 常见的App，按照`功能`，分为`应用`和`游戏`两部分；\r\n+ 什么是Web：特指基于浏览器开发的网站（说白了就是运行在浏览器中的网页）；\r\n+ Web特点：Web网站是由好多页面组成的，基于Http协议的请求响应模型，运行在浏览器之中；\r\n\r\n## 为什么要学混合App开发\r\n### 从程序员的角度分析：\r\n1.  挣钱多多\r\n2. 对于找工作来说：市场需求量大，好找工作，提高我们的行业竞争力\r\n     + HTML+CSS+JS\r\n     + 就业班 前端基本功，给我学习前端打基础的\r\n     + H5C3+服务器Ajax， 只能说，前端开发人员【标配的技能】，你已经掌握的差不多了\r\n     + 面向对象高级【但是很重要 + 如果你不会面向对象高级，那么你要学习前端一些流行框架和流行概念的时候，根本学不懂】\r\n     + 流行框架 + Node.js + Vue.js【这些都是提高我们行业竞争力的技术】\r\n     + 混合App开发 【把我们前端行业竞争力，提高到了另一个层次】\r\n3. 能接触到前端流行的技术和框架\r\n    + 前端是一个永恒的行业???\r\n    + 屌丝的崛起之路：`只能做页面` -> `Ajax前后台数据交互` -> `Jquery、Bootstrap` -> `可以做手机混合App/桌面应用` -> `可以做手机原生App` -> `将来或许可以发射火箭发射卫星发射导弹` -> `终极目标：统一全宇宙`\r\n4. 能够购置一批牛逼的设备\r\n\r\n### 从企业的角度分析:(选择合适自身的移动App开发方式)【重点】\r\n1. 市面上常见的App开发方式\r\n    - WebApp：基于浏览器实现的，有特定功能的App\r\n      + 例如：`百度脑图`、`https://m.jd.com/`、`https://m.taobao.com/#index`\r\n      + 优点：基于浏览器，跨平台性能卓越\r\n      + 缺点：受网速影响巨大，有白屏效果，用户体验不稳定\r\n    - NativeApp：用android和Object-C等原生语言开发的应用\r\n      + 优点：运行效率高，用户体验好，适合用原生做游戏开发\r\n      + 缺点：无法跨平台，开发周期长，语言复杂度高\r\n    - HybirdApp：利用前端所学的知识去开发移动端App，兼具2者的优势\r\n      + 优点：跨平台，运行效率高，用户体验好\r\n      + 缺点：不适合做游戏开发\r\n2. 三种开发方式的原理和对比\r\n![三种开发方式的原理](images/三种开发类型的原理.png)\r\n<hr/>\r\n![三种开发类型的对比](images/三种开发类型的对比.png)\r\n\r\n## 企业如何选择合适自己的App开发方式\r\n1. 一些用原生语言开发的旧项目，由于后期维护的原因，需要招聘原生开发人员去维护更新；\r\n2. 在开发新项目的时候，企业优先考虑使用混合App开发的方式；\r\n + 优先占领市场，裤衩更新，快速迭代产品；\r\n3. 混合app的开发方式是未来的主流趋势；\r\n\r\n## 企业中项目开发流程\r\n+ 需求调研：开发价值、市场需求、产品定位、受众群体；【产出物：需求文档】\r\n+ 产品设计：功能模块、流程逻辑；【产出物：设计文档，交互稿】，确定项目的基本功能；\r\n+ 项目开发：项目架构、美工、前端、后台、测试【产品的把控】**要理解前后端分离的概念**\r\n+ 运营维护：上线试运行、调Bug、微调功能模块、产品迭代\r\n\r\n## 企业技术选型 - 几大主流技术之间的关系\r\n1. Angular.js 和 Ionic\r\n + [Angular1官网](https://angularjs.org/)\r\n + [Angular2官网](https://angular.io/)\r\n + [Ionic 中文网](http://www.ionic.wang/)\r\n + [Ionic 英文官网](http://ionicframework.com/getting-started/)\r\n2. Vue.js 和 Weex\r\n + [Vue.js官网](https://cn.vuejs.org/)\r\n + [Weex文档](http://weex.apache.org/cn/references/index.html)\r\n + [Weex - github地址 - 新](https://github.com/apache/incubator-weex)\r\n + [Weex - github地址 - 旧](https://github.com/alibaba/weex)\r\n3. React.js 和 React-Native\r\n + [React.js英文官网](https://facebook.github.io/react/)\r\n + [ReactNative中文网](http://reactnative.cn/)\r\n + [ReactNative英文网](http://facebook.github.io/react-native/)\r\n\r\n## 前端混合App开发框架\r\n1. Html5+、ReactNative、Weex、Ionic\r\n3. [认识HTML5+](http://www.html5plus.org/#home)\r\n4. [HBuilder官网](http://www.dcloud.io/)\r\n\r\n## 使用HBuilder生成安卓应用\r\n1. HBuilder是在线进行打包的，所以，本地不用配置任何打包的环境；\r\n2. 只需把开发好的HTML项目，通过在线的方式即可实现打包，最终将打包好的项目，下载到本地。\r\n\r\n## 环境变量的使用\r\n1. 注意：修改了环境变量，一定要重启命令行窗口，重新读取修改过后的环境变量；\r\n2. 环境变量分为“用户环境变量”和“系统环境变量”：用户环境变量是局部的，仅限当前登录用户实用；系统环境变量是全局的，任何一位用户都可以使用全局的环境变量；\r\n3. 当我们在命令行窗口输入可执行命令的时候，系统会先查找环境变量，看当前环境变量中，有没有可运行此命令的可执行程序，如果有，则运行命令，如果没有呢，就提示不是可用的执行程序；\r\n\r\n## 移动App开发环境配置\r\n由于在线打包必须联网，所以在没有网络的情况下就无法正常进行打包；所以我们需要配置一下本地的打包环境，实现在本机上对混合App项目进行打包构建；\r\n\r\n### 安装最新版本的java jdk\r\n1. 修改环境变量，新增`JAVA_HOME`的系统环境变量，值为`C:\\Program Files (x86)\\Java\\jdk1.8.0_112`，也就是安装JDK的根目录\r\n2. 修改系统环境变量`Path`，在`Path`之后新增`%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;`\r\n3. 新建**系统环境变量**`CLASSPATH`，值为`.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;`\r\n4. 保存所有的系统环境变量，同时退出系统环境变量配置窗口，然后运行cmd命令行工具，输入`javac`，如果能出现javac的命令选项，就表示配置成功！\r\n\r\n### 安装Node.js环境\r\n注意：需要安装最新的长期稳定版本，不要实验版本；安装完毕之后的node.js会自动配置到全局系统环境变量中\r\n安装完毕后，可以输入`node -v`查看node版本号；\r\n\r\n### 安装C++环境\r\n大多数情况下操作系统自带C\\++环境，不需要手动安装C\\++环境；\r\n如果运行报错，则需要手动安装visual studio中的C\\++环境；\r\n\r\n### 安装Git环境\r\nGit安装完毕后，会自动配置到系统环境变量中；\r\n可以通过运行`git --version`来检查是否正确安装和配置了Git的环境变量；\r\n\r\n### 安装Python环境\r\n1. 注意：安装Python时候，只能**安装2.×的版本**，注意勾选安装界面上的`Add Python to path`，这样才能自动将Python安装到系统环境变量中；\r\n2. 安装完毕之后，可以在命令行中运行`python`，检查是否成功安装了python。\r\n\r\n### 配置安卓环境\r\n1. 安装`installer_r24.3.4-windows.exe`，最好手动选择安装到C盘下的android目录\r\n\r\n2. 打开安装的目录，将`android-25`、`android-23`(react-native必须依赖这个)解压后，放到`platforms`文件夹下\r\n\r\n3. 解压`platform-tools`，放到`platform-tools`文件夹下\r\n\r\n4. **tools文件夹不解压覆盖也行；**~~解压`tools`，放到`tools`文件夹下~~\r\n\r\n5. 解压`build-tools_r23.0.1-windows.zip(react-native必须依赖这个)`、`build-tools_r23.0.2-windows.zip(weex必须依赖这个)`和`build-tools_r23.0.3-windows.zip`，并将解压出来的文件夹，分别改名为版本号`23.0.1`、`23.0.2`和`23.0.3`；在安装目录中新建文件夹`build-tools`，并将改名为版本号之后的文件夹，放到新创建出来的`build-tools`文件夹下\r\n\r\n6. 在安装目录中，新建`extras`文件夹，在`extras`文件夹下新建`android`文件夹；解压`m2responsitory`文件夹和`support`文件夹，放到新建的`extras -> android`文件夹下\r\n\r\n7. 配置安装环境变量：在系统环境变量中新建`ANDROID_HOME`，值为android SDK Manager的安装路径`C:\\Users\\liulongbin\\AppData\\Local\\Android\\android-sdk`，紧接着，在Path中新增`;%ANDROID_HOME%\\tools;%ANDROID_HOME%\\platform-tools;`\r\n\r\n## [ReactNative快速打包](http://reactnative.cn/docs/0.42/getting-started.html)\r\n1. 安装完node后建议**设置npm镜像**以加速后面的过程（或使用科学上网工具）。注意：**不要使用cnpm！**cnpm安装的模块路径比较奇怪，packager不能正常识别！\r\n > npm config set registry https://registry.npm.taobao.org --global<br/>\r\n > npm config set disturl https://npm.taobao.org/dist --global\r\n2. Yarn、React Native的命令行工具（react-native-cli）\r\n + Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。\r\n 	> npm install -g yarn react-native-cli\r\n + 安装完yarn后同理也要设置镜像源：\r\n     > yarn config set registry https://registry.npm.taobao.org --global<br/>\r\n     > yarn config set disturl https://npm.taobao.org/dist --global\r\n3. 运行`react-native init AwesomeProject`创建React-Native项目\r\n4. 运行`cd AwesomeProject`切换到项目根目录中\r\n5. 运行`react-native run-android`打包编译安卓项目，并部署到模拟器或开发机中\r\n6. 运行上一条命令之前，要确保有设备连接到了电脑上，可以运行`adb devices`查看当前接入的设备列表\r\n7. [入坑指南](http://www.open-open.com/lib/view/open1477469117948.html)\r\n  > **问题1：开启悬浮框权限；**<br/>\r\n  > **问题2：Could not get BatchedBridge, make sure your bundle is packaged correctly**<br/>\r\n  > 解决方案：在终端中，进入到项目的根目录，执行下面这段命令行：<br/>\r\n  > `react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`<br/>\r\n  > 运行之前，需要确保`android/app/src/main/`目录下有`assets`文件夹，如果没有，手动创建之~，再运行上面的命令；<br/>\r\n  > **问题3：could not connect to development server**<br/>\r\n  > 解决方案：晃动手机，唤起设置属性窗口，点击“Dev settings”，再点击Debuug server host 出现设置ip地址窗口，填写Ip地址和端口号8081，例如`192.168.1.111:8081`\r\n\r\n## [Weex快速打包](http://weex.apache.org/cn/references/index.html)\r\n1. 安装依赖:Weex 官方提供了 weex-toolkit 的脚手架工具来辅助开发和调试。首先，你需要最新稳定版的 Node.js 和 Weex CLi。\r\n2. 运行`cnpm install -g weex-toolkit`安装Weex 官方提供的 `weex-toolkit` 脚手架工具到全局环境中\r\n3. 运行`weex create project-name`初始化Weex项目\r\n4. 进入到项目的根目录中，打开cmd窗口，运行`weex platform add android`安装android模板，首次安装模板时，等待时间较长，建议fq安装模板\r\n5. 打开`android studio`中的`安卓模拟器`，或者将`启用USB调试的真机`连接到电脑上，运行`weex run android`，打包部署weex项目\r\n6. 部署完成，查看项目效果', '2017-12-12 11:40:21', '2');
INSERT INTO `articles` VALUES ('10', '这是李四发表的文章1', '李四啊1', '2017-12-12 11:45:57', '2');
INSERT INTO `articles` VALUES ('11', '为什么活得这么累', '+ 因为穷？\r\n+ 因为长的太帅了，长的帅的人，总要比别人多承受一些东西；所以活得累；\r\n+ 你哪儿来的自信？？？', '2017-12-12 15:10:41', '1');

-- ----------------------------
-- Table structure for heros
-- ----------------------------
DROP TABLE IF EXISTS `heros`;
CREATE TABLE `heros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `ctime` varchar(255) NOT NULL,
  `isdel` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 表示未删除； 1 表示已删除；',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of heros
-- ----------------------------
INSERT INTO `heros` VALUES ('1', '小乔', '男', '2012-12-12 12:12:12', '0');
INSERT INTO `heros` VALUES ('2', '鲁班250', '女', '2013-12-12 12:12:12', '0');
INSERT INTO `heros` VALUES ('3', '安吉拉宝贝', '女', '2016-12-12 1:12:30', '0');
INSERT INTO `heros` VALUES ('4', '王昭君', '女', '2017-12-09 17:50:15', '0');
INSERT INTO `heros` VALUES ('5', '太乙真人', '男', '2017-12-10 17:42:30', '0');
INSERT INTO `heros` VALUES ('13', '1', '女', '2017-12-11 09:56:30', '1');
INSERT INTO `heros` VALUES ('14', '333', '女', '2017-12-11 10:12:55', '1');
INSERT INTO `heros` VALUES ('15', '白起', '男', '2017-12-11 10:14:55', '1');
INSERT INTO `heros` VALUES ('11', '333', '女', '2017-12-11 09:50:59', '1');
INSERT INTO `heros` VALUES ('12', 'ooo', '女', '2017-12-11 09:51:42', '1');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `isdel` varchar(255) NOT NULL DEFAULT '0' COMMENT '是否删除；  0 表示未删除； 1表示已经删除',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '王多多', '19', '男', '0');
INSERT INTO `users` VALUES ('2', '许三多', '38', '男', '1');
INSERT INTO `users` VALUES ('3', '钱多多', '35', '男', '0');
INSERT INTO `users` VALUES ('4', '小黑黑', '20', '女', '0');

-- ----------------------------
-- Table structure for users2
-- ----------------------------
DROP TABLE IF EXISTS `users2`;
CREATE TABLE `users2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `isdel` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0表示未删除； 1 表示已删除',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users2
-- ----------------------------
INSERT INTO `users2` VALUES ('1', 'zs', '123', '高婆婆', '0');
INSERT INTO `users2` VALUES ('2', 'ls', '123', '泥巴巴', '0');
INSERT INTO `users2` VALUES ('3', '1', '1', '1', '0');
INSERT INTO `users2` VALUES ('4', 'qqq', '123', '鹅场QQ', '0');
