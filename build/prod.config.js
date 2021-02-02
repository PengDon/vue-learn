const utils = require('./utils')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: utils.resolve('packages/index'),
    ...utils.getEntries('./packages/components')
  },
  output: {
    path: utils.resolve('lib'),
    filename: '[name]/index.js',
    library: 'dui', // 组件库名称
    libraryExport: "default",
    libraryTarget: 'umd', // 打包类库的发布格式
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
    new VueLoaderPlugin(),
  ],
  externals: {
  },
}