const express = require('express');
const router = express.Router();

const xiaoming = {
  name: '小明',
  age: 26,
  sex: 'man',
  hobby: ['踢球', '阅读', '看电影', '敲代码']
};

const xiaoyang = {
  name: '小杨',
  age: 26,
  sex: 'man',
  hobby: ['踢球', '看电影', '敲代码']
};

router.get('/xiaoming', (req, res) => {
  res.render('xiaoming', xiaoming);
});

router.get('/xiaoyang', (req, res) => {
  res.render('xiaoyang', xiaoyang);
});

module.exports = router;