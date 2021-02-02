const path = require('path')

module.exports = {
  "stories": [
    "../packages/stories/**/*.stories.mdx",
    "../packages/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    // 添加less
    config.module.rules.push({
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../packages/components'),
    })
    // 添加路径别名
    config.resolve.alias = {
      ...config.resolve.alias,
      '@com': path.resolve(__dirname, '../packages/components'),
    }
    return config
  },
}