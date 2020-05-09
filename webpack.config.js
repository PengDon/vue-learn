const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './app.ts'),
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js','.ts', '.json', '.css', '.vue'],
    modules: ["node_modules", path.resolve(__dirname, 'app')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', // 模版路径
      filename: 'index.html', // 生成的文件名称
      inject: 'body' // 指定插入的<script>标签在body底部
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    host: '127.0.0.1',
    port: '8899',
    // contentBase:__dirname,
    compress: true, // enable gzip compression
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    disableHostCheck: true
  }
}