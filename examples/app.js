import Vue from 'vue'
import App from './App.vue'

import DUI from 'dui'

Vue.use(DUI)

new Vue({
    render: (h) => h(App)
}).$mount('#app')