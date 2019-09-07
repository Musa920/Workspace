const Router = require('koa-router');
const router = new Router();
const { ParameterException } = require('../../../core/http-exception');
router.post('/v1/:id/classic/latest', (ctx, next) => {
  const path = ctx.params;
  const query = ctx.request.query;
  const headers = ctx.request.header;
  const body = ctx.request.body;

  if (true) {
    const error = new ParameterException;
    throw error;
  }

  // ctx.body = {
  //   name: 'classic',
  //   age: 22
  // }; 
});

module.exports = router;
