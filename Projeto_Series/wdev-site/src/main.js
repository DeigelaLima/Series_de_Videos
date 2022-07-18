import { createApp, VueElement } from 'vue'
import './styles/global.css'
// import Vue from 'vue'
import App from './App.vue'
import router from './routes/router.js'

createApp(App).use(router).mount('#app');
// Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
 