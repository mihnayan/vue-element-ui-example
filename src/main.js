import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import appStore from './store/appStore'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes
})

const store = new Vuex.Store(appStore)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
