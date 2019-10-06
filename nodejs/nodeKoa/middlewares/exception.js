const { HttpException } = require('../core/http-exception');
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // 生产环境
    // 开发环境 不是HttpException
    const isHttpException = error instanceof HttpException;
    const isDev = global.config.environment === 'dev';
    if (isDev && !isHttpException) {
      throw error
    }

    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    }
  }
}

module.exports = catchError;