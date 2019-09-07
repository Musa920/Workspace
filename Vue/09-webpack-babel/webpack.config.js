var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件配置
    entry: "./src/app.js",

    // 输出配置
    output: {
        // 输出的路径
        path: path.join(__dirname, 'dist'),
        // 静态资源在服务器上运行时的访问路径，可以直接http://localhost:8080/dist/bundle.js访问到服务器中的bundle.js文件
        // publicPath: '/dist',
        // 输出文件名字
        filename: "bundle.js"
    },
    module: {
        rules: [
            // 配置的是用来解析.css文件的loader(style-loader和css-loader)
            {
                // 1.0 用正则匹配当前访问的文件的后缀名是  .css
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //webpack底层调用这些包的顺序是从右到左
            },
            {
                test: /\.less$/,
                use:
                    [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
            },
            {
                test: /\.scss$/,
                use:
                    [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
            },
            {
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // limit表示如果图片大于50000byte，就以路径形式展示，小于的话就用base64格式展示
                        limit: 50000
                    }
                }]
            },
            {
                test: /\.js$/,
                // Webpack2建议尽量避免exclude，更倾向于使用include
                // exclude: /(node_modules)/, // node_modules下面的.js文件会被排除
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    // options里面的东西可以放到.babelrc文件中去
                    // options: {
                    //     presets: ['env']
                    // }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html',
            title: 'webpack-html'
        })
    ]
}