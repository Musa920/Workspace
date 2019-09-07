const a = 10
const b = 20

// 每一个模块中，都可以把  要暴露出去的成员，挂载到  exports 对象上

// console.log(exports) // exports 默认是一个空对象
module.exports.a = a
module.exports.b = b

// console.log(exports)