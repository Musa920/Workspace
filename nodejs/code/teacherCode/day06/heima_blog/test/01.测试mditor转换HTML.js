const mditor = require('mditor')
const parser = new mditor.Parser()
const html = parser.parse('+ 这是一级标题') // unorder list    orderlist
console.log(html)