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
  },
  {
    path: '/count',
    component: () => import('../views/Count.vue')
  }
]

export default new VueRouter({
  routes
})