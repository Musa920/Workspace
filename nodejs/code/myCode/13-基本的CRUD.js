const mysql = require('mysql');
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'newnode'
});

const person = {
  id: 4,
  name: 'musa',
  age: 23,
  sex: '男',
  address: '长安大学'
};
//
// // 写入数据的Sql语句
// const sqlStr = `insert into users set ?`;
// conn.query(sqlStr, person, (err, results) => {
//   // 执行失败
//   if (err) return console.log(err);
//   // 执行OK
//   if (results.affectedRows === 1) {
//     console.log('写入OK')
//   } else {
//     console.log('写入失败！')
//   }
// });

/*删除SQL语句*/
// const sqlStr = 'delete from users where id = ?';
// conn.query(sqlStr, 5, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

/*更新SQL语句*/
// const sqlStr = 'update users set? where id=?';
// conn.query(sqlStr, [person, person.id], (err, result) => {
//   if (err) throw err;
//   console.log('更新成功');
// });



/*软删除*/
const sqlStr = 'update users set isdel=1 where id=?';
conn.query(sqlStr, 4, (err, result) => {
  if (err) throw err;
  console.log('更新成功');
});









