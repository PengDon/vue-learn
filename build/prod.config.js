const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: utils.resolve('packages/index'),
    ...utils.getEntries('./packages')
  },
  output: {
    path: utils.resolve('lib'),
    filename: '[name]/index.js',
    library: 'dui', // 组件库名称
    libraryExport: "default",
    libraryTarget: 'umd', // 打包类库的发布格式
  },
  module: {
    rules: [{
        test: /.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
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