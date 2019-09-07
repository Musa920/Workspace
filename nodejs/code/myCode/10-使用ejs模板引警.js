const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const person = {
  name: 'jack',
  age: 26,
  sex: 'man',
  hobby: ['踢球', '阅读', '看电影', '敲代码']
};

app.get('/', (req, res) => {
  res.render('index', person);
});

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
});