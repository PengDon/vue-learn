const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Glob = require('glob');
const PurifyCssWebpack = require('purifycss-webpack');
const IsProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(__dirname, './src/app.js'),
  mode: 'development',
  // 源码映射,参考：https://webpack.docschina.org/configuration/dev-server/#devserver
  devtool: IsProduction ? 'source-map' : 'eval-source-map',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 在css-loader 之后指定1个数量的loader（即 postcss-loader）来处理import进来的资源
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            // url-loader封装了file-loader
            // 1.文件大小小于limit参数，url-loader将会把文件转为DataURL（Base64格式）；
            // 2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader
            loader: 'url-loader',
            options: {
              // 把小于500000B的文件打成Base64的格式。
              limit: 500000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.vue'],
    modules: ["node_modules", path.resolve(__dirname, 'app')]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'home',
        template: './public/index.html', // 模版路径
        filename: 'index.html', // 生成的文件名称
        inject: 'body' // 指定插入的<script>标签在body底部
      }
    ),
    new VueLoaderPlugin(),
    new PurifyCssWebpack({
      paths: Glob.sync(path.join(__dirname, '*.html'))
    })
  ],
  devServer: {
    disableHostCheck: true
  }
}
