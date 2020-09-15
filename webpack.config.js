//导入path模块
const path = require('path')

//引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    //打包入口
    entry: './src/main.js',
    //打包出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    //打包规则
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                limit:50000
            }
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    //插件
    plugins:[
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue':'vue/dist/vue.js'
        }
    }
}