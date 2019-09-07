const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'mydb_12_9'
})


module.exports = conn