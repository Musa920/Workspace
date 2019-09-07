const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydb_12_9'
})

// 写入数据的Sql语句
/* const p1 = {
  username: '娃哈哈',
  age: 30,
  gender: '男'
}
const sqlStr = 'insert into users (username, age, gender) values("' + p1.username + '", ' + p1.age + ', "' + p1.gender + '")'
conn.query(sqlStr, (err, results) => {
  // 执行失败
  if (err) return console.log(err)
  // 执行OK
  if(results.affectedRows === 1){
    console.log('写入OK')
  }else{
    console.log('写入失败！')
  }
}) */



/* const p1 = {
  username: '娃哈哈123',
  age: 30,
  gender: '男'
}

// 下面的这条Sql语句，仅限于 在 Node中的 mysql 中使用，PHP 不能这么写
const sqlStr = 'insert into users set ?'  // ? 表示 占位符，将来，需要使用具体的参数来填充这个问号
conn.query(sqlStr, p1, (err, results) => {
  console.log(err)
  console.log(results)
}) */


// 删除数据
/* const sqlStr = 'delete from users where id=?'
conn.query(sqlStr, 5, (err, results) => {
  console.log(err)
  console.log(results)
}) */


/* const p2 = {
  id: 4,
  username: '小黑黑',
  age: 20,
  gender: '女'
}

const sqlStr = 'update users set ? where id=?'
conn.query(sqlStr, [p2, p2.id], (err, results) => {
  console.log(err)
  console.log(results)
}) */


// 在企业级的项目开发中，如果要从数据库中删除数据了，一般，不要使用 delete 语句
// 在企业中，推荐为没一张表的数据字段中，添加一个 isdel 数据，来标记删除（软删除）


const sqlStr = 'update users set isdel=1 where id=2'
conn.query(sqlStr, (err, results) => {
  console.log(err)
  console.log(results)
})