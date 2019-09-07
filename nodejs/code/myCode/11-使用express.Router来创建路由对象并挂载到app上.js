const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const router = require('./router.js');
app.use(router);

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
});