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
  plugins: [
    new VueLoaderPlugin(),
  ],
  externals: {
  },
}