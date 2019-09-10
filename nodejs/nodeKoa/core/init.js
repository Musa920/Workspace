const requireDirectory = require('require-directory'); //
const Router = require('koa-router');

class InitManager {
  static initCore(app) {
    // 入口文件
    this.app = app;
    this.loadConfig();
    this.initLoadRouters();
  }

  static loadConfig(path = '') { 
    const configPath = path || `${process.cwd()}/config/config`;
    const config = require(configPath);
    global.config = config;
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`;
    requireDirectory(module, apiDirectory, {
      visit: obj => {
        if (obj instanceof Router) {
          this.app.use(obj.routes());
        }
      }
    })
  }
}

module.exports = InitManager;