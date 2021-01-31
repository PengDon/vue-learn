const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: utils.resolve('../packages/index'),
    ...utils.getEntries('./packages')
  },
  output: {
    path: utils.resolve('../lib'),
    filename: '[name]/index.js',
    library: 'library', // 配置这里 支持script标签引入
    libraryTarget: 'umd', // umd支持通用的模块化引入方法（cmd、amd、esmodule）
  },
  module: {
    rules: [{
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: utils.resolve('node_modules')
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        use: [{
          loader: "url-loader",
          options: {
            // 单位是b 512000b = 500kb
            limit: 512000,
            name: '[name]-[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  externals: {
  },
}