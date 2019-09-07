// 1. 导入 moment 模块
const moment = require('moment')

// console.log(moment instanceof Function)
//    2012-12-12 12:12:12
// console.log(moment())

const dtStr = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(dtStr)


// 疑问：moment 这个模块，能不能叫做一个包？
//  npm i 模块名称

// 包的查找规则：
// 1. 会根据包的名称，直接在当前项目的根目录中，去查找一个叫做 `node_modules` 的文件夹；
// 2. 如果有，则在 `node_modules` 中，继续查找，一个叫做 模块引用名称的文件夹；
// 3. 如果有，则 在 模块对应的文件夹中，查找一个叫做 `package.json` 的文件；
// 4. 如果有 `package.json`， 则查找 其中的 `main` 属性，并尝试加载 main 指定的文件作为入口；
// 5. 如果能正常加载 `main` 属性中指定的文件，则模块/包加载成功！
// 6. 如果 在 `package.json` 文件中，没有 main 属性，则会依次尝试加载 包根目录中的 `index.js`, `index.json`, `index.node`
// 7. 如果在 包的根目录中，根本没有 `package.json` 文件，或者 在 node_modules 目录中没有 index 相关的文件，或者，根本没有对应的包文件夹，或者在项目根目录中根本没有`node_modules`, 则会向上层目录中，去查找`node_modules`， 查找规则同上；
// 8. 如果在上一层目录中还是没有找到对应的模块，则继续向上翻，直到翻到项目所在的磁盘根目录位置；
// 9. 如果翻到了磁盘的根目录中，还没有找到，此时，会报错！`cannot find module ***`