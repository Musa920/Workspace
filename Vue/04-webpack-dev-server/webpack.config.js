var path = require('path')

module.exports = {
    // 入口文件配置
    entry: "./src/app.js",

    // 输出配置
    output: {
        // 输出的路径
        path: path.join(__dirname, 'dist'),
        // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/bundle.js访问到服务器中的bundle.js文件
        publicPath: '/dist',
        // 输出文件名字
        filename: "bundle.js"
    }
}