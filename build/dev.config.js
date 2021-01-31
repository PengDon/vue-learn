const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app.js',
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
        exclude: path.resolve(__dirname, 'node_modules')
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
    new HtmlWebpackPlugin({
      template: 'index.html', // 模版路径
      filename: 'index.html', // 生成的文件名称
      inject: 'body' // 指定插入的<script>标签在body底部
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    disableHostCheck: true
  }
}