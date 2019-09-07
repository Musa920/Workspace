const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydb_12_9',
  multipleStatements: true // 开启执行多条Sql语句的能力
})
// 注意： mysql 模块中，默认，没有开启执行多条Sql语句的能力；


module.exports = conn