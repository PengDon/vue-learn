import Vue from 'vue'
import App from './App.vue'
import {CommHeader} from 'd-ui'

Vue.use(CommHeader)

new Vue({
    render: (h) => h(App)
}).$mount('#app')