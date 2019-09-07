var path = require('path');

module.exports = {
    // 配置入口文件
    entry: './src/app.js',
    // 配置输出文件
    output: {
        // 表示输出文件的路径
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}