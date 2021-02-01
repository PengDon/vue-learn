/*
 * @Author: don
 * @Date: 2021-02-01 15:04:57
 * @LastEditors: don
 * @LastEditTime: 2021-02-01 15:05:31
 * @Description: 
 */
import Vue from 'vue'
import toast from './index'

const ToastConstructor = Vue.extend(toast)

const instance = new ToastConstructor({
  el: document.createElement('div'),
})

ToastConstructor.prototype.closeToast = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
  typeof this.callback === 'function' && this.callback()
}

const Toast = (options = {}) => {
  instance.mes = options.mes
  instance.icon = options.icon
  instance.timeout = ~~options.timeout || 2000
  instance.callback = options.callback

  document.body.appendChild(instance.$el)

  const timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeToast()
  }, instance.timeout + 100)
}

export default Toast
