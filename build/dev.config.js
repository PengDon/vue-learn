const utils = require('./utils')

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { util } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './examples/app.js',
  output: {
    filename: 'index.js',
    path: utils.resolve('dist')
  },
  module: {
    rules: utils.rules
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': utils.resolve('packages'),
      '@com': utils.resolve('packages/components'),
      'dui': utils.resolve('packages/index.js') // 便于app.js中进行开发调试
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // 模版路径
      filename: 'index.html', // 生成的文件名称
      inject: 'body' // 指定插入的<script>标签在body底部
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    disableHostCheck: true,
    port: 8091,
    hot: true,
    open: 'Google Chrome'
  },
  devtool:'cheap-module-eval-source-map',
  // devtool: 'eval-source-map',
}