import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const A = {template: '<div>aaa</div>'}
const B = {template: '<div>bbb</div>'}

const routes = [
  {
    path: '/',
    component: A 
  },
  {
    path: '/b',
    component: B
  }
]

export default new VueRouter({
  routes
})