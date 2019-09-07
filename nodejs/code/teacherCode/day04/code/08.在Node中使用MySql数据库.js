// 安装一个 mysql 模块  第三方的模块
//  npm i mysql -S
const mysql = require('mysql')

// 怎么用？？？

// 1. 创建数据库的连接对象
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydb_12_9'
})

// 2. 调用 connect() 连接上数据库服务器
// conn.connect()

// 3. 调用 conn.query() 方法来执行指定的Sql语句
const sqlStr = 'select * from users'

// 注意：如果，并没有显示的调用 conn.connect() 方法，则 在 执行 conn.query 的时候，会先建立到数据库的连接，然后，在去执行 Sql语句；
conn.query(sqlStr, (err, results) => {
  console.log(err)
  console.log(results)
})