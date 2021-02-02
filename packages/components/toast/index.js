/*
 * @Author: don
 * @Date: 2021-02-01 14:53:34
 * @LastEditors: don
 * @LastEditTime: 2021-02-02 12:57:29
 * @Description: 
 */
import index from './src/toast'
import toast from './src'
index.install = (Vue) => {
    Vue.prototype.$toast = toast
    Vue.component(index.name, index)
}
export default index