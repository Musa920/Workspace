const Router = require('koa-router');
const router = new Router();

router.get('/book/latest', (ctx, next) => {
  ctx.body = {
    name: "book",
    age: 22
  };
});

module.exports = router;
