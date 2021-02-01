// ====> 旧的写法,手动添加组件
// import header from './components/header'
// export default {
//   install(Vue) {
//     Vue.use(header)
//   },
// }

// ====> 新的写法，自动扫描目录注册
// 扫描components目录下的组件
const requireComponent = require.context(
  // 其组件目录的相对路径
  '@com',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\index\.js$/
)

// 自动注册全局组件
const install = (Vue) => {
  requireComponent.keys().forEach((fileName) => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)
    Vue.use(componentConfig.default)
  })
}

export default { install }
