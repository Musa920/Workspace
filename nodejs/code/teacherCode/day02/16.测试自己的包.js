// 包的导入规则：
// 1. 当我们导入一个包的时候，会先在 包的根目录中，查找一个叫做 `package.json` 的文件
// 2. 如果有 `package.json` 文件，则会继续查找这个文件中的，一个叫做 `main` 的属性
// 3. 如果能找到 `main` 属性，则尝试加载 main 属性所指向的那个文件
// 4. 如果这个文件，加载成功，则这个包，就已经被正常 require 进来了，就可以正常使用了
const calc = require('./mycalc')
// console.log(calc)

// const result = calc.add(3, 4)
// console.log(result)
console.log(calc.multiply(5, 5))