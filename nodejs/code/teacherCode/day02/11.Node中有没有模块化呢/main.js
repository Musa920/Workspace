// 使用 CommonJS 规范定义的 require 函数，来导入 1.js 模块
require('./1.js')
// 使用 CommonJS 规范定义的 require 函数，来导入 2.js 模块
require('./2.js')

// 注意：Node中没有 window 的概念
// 在Node中，有一个类似于window的对象，叫做  global        
// console.log(window)

// 经过打印，发现， 每个模块中，的成员，默认都是私有的，不会挂载到 全局的 global 上
// 如果想要为 global 挂载属性，那么必须显示的 为 global 追加自定义属性
console.log(global.a)
console.log(global.b)