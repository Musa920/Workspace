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

class Success extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || 'ok';
    this.code = 201;
    this.errorCode = errorCode || 0;
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || '资源未找到';
    this.code = 404;
    this.errorCode = errorCode || 10000;
  }
}

class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '授权失败'
    this.errorCode = errorCode || 10004
    this.code = 401
  }
}

class Forbbiden extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.msg = msg || '禁止访问'
    this.errorCode = errorCode || 10006
    this.code = 403
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed,
  Forbbiden
};