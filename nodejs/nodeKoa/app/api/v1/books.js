const Router = require('koa-router');
const router = new Router({
  prefix: '/v1/book'
});
const { HotBook } = require('@models/hot-list');
const { PositiveIntegerValidator, SearchValidator, AddShortCommentValidator } = require('@validator');
const { Auth } = require('../../../middlewares/auth');
const { Book } = require('@models/book');
const { Favor } = require('@models/favor');
const { Comment } = require('@models/book-comment');
const { success } = require('../../lib/helper')

router.get('/hot_list', new Auth().m, async ctx => {
  const books = await HotBook.getAll();
  ctx.body = books
});

router.get('/:id/detail', new Auth().m, async ctx => {
  const v = await new PositiveIntegerValidator().validate(ctx);
  const book = new Book();
  ctx.body = await book.detail(v.get('path.id'))
});

// 图书搜索
router.get('/search', new Auth().m, async ctx => {
  const v = await new SearchValidator().validate(ctx);
  const result = await Book.searchFromYuShu(v.get('query.q'), v.get('query.start'), v.get('query.count'));
  ctx.body = result
})

// 获取我喜欢书籍的数量
router.get('/favor/count', new Auth().m, async ctx => {
  const count = await Book.getMyFavorBookCount(ctx.auth.uid);
  ctx.body = {
    count
  };
})

// 获取书籍点赞情况
router.get('/:book_id/favor', new Auth().m, async ctx => {
  const v = await new PositiveIntegerValidator().validate(ctx, {
    id: 'book_id'
  });

  const favor = await Favor.getBookFavor(v.get('path.book_id'), ctx.auth.uid);
  ctx.body = favor
})

// 新增短评
router.post('/add/short_comment', new Auth().m, async ctx => {
  const v = await new AddShortCommentValidator().validate(ctx, {
    id: 'book_id'
  })
  Comment.addComment(v.get('body.book_id'), v.get('body.content'));
  success();
})

// 获取书籍短评
router.get('/:book_id/short_comment', new Auth().m, async ctx => {
  const v = await new PositiveIntegerValidator().validate(ctx, {
    id: 'book_id'
  });

  const comments = await Comment.getComments(v.get('path.book_id'));
  comments.forEach(item => {
    item.exclude = ['book_id', 'id'];
  });
  ctx.body = {
    comments
  }
})

module.exports = router;
