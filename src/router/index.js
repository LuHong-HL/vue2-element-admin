import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../layout/index.vue'

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: { title: 'Home' }
      }
    ]
  }
]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
