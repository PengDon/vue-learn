import Vue from 'vue'
import store from './store'
// import App from './App.vue'
import router from './router'
import './assets/css/index.css'

new Vue({
    store,
    router,
    // render: (h) => h(App)
}).$mount('#app')
