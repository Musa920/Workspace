const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'newnode'
});

conn.connect();

const sqlStr = 'select * from users';
conn.query(sqlStr, (error, result) => {
  if (error) throw error;
  console.log(result);
});