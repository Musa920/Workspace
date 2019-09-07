class HttpException extends Error {
  constructor(msg = '服务器异常', code = 400, errorCode = 10001) {
    super();
    this.msg = msg;
    this.code = code;
    this.errorCode = errorCode;
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || '参数错误';
    this.code = 400;
    this.errorCode = errorCode || 10000;
  }
}

module.exports = {
  HttpException,
  ParameterException
};