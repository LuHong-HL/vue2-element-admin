import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/utils/request'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/router/permission.js'

import '@/styles/index.scss' // global css

import '@/icons' // icon

// simple mock
import { mockXHR } from '../mock'
mockXHR()

// 挂载axios到原型上
Vue.prototype.$axios = axios

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
