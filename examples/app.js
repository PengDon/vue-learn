import Vue from 'vue'
import App from './App.vue'

// 以下四种方式都可用

// import DUI from 'dui'
// Vue.use(DUI)

import DUI from '@'
Vue.use(DUI)

// import Commheader from '@/header'
// Vue.use(Commheader)

// import DUI from '../lib/index'
// Vue.use(DUI)




new Vue({
    render: (h) => h(App)
}).$mount('#app')