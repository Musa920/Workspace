require('./m1.js')
require('./m2.js')

const a = '哈哈'

console.log(global.a)

// 问题： 使用 global 这个全局对象，固然在模块中可以向外暴露一些成员，但是， 会造成全局变量的污染；
// 所以， 今后在编程的时候，不推荐大家使用  global 向外暴露成员；
// 今后，推荐大家使用 CommonJS 规范中，定义的模块化机制，来向外暴露成员
//    +  require   导入其它模块中成员的
//    + exports    向外暴露成员的
//    + module   表示一个模块