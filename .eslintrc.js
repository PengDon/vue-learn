module.exports = {
  parser: 'vue-eslint-parser', // 解析 .vue 文件
  extends: [
    'plugin:vue/recommended', // 这里也可以启用其他规则，如默认的 vue/essential
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint', // 优先 prettier 中的样式规范
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser' // 解析 .ts 文件
  }
}