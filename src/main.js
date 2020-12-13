import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCookies)

new Vue({
  render: h => h(App),
  router: router.router
}).$mount('#app')
