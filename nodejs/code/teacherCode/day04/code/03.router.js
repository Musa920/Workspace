const express = require('express')
const routerObj = express.Router()


routerObj.get('/', (req, res) => {
  res.send('首页')
})

routerObj.get('/movie', (req, res) => {
  res.send('dianying')
})


// 1. 中间件是一个函数
// 2. 中间件这个函数，是一个 路由的处理函数
// 3. 中间件这个函数，不但是一个 路由处理函数，而且，在参数列表中，还有一个很重要的形参，叫做 next
// 4. 这个 next 是一个函数，因此，将来，我们可以在中间件中，调用这个 next() 函数
// 5. 中间件的表现形式：只要这个函数的形参列表中，有一个 next 函数，他就是中间件
function myMiddleWare(req, res, next) {

}


module.exports = routerObj