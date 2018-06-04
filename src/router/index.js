import Vue from 'vue'
import Router from 'vue-router'

import LoginPage from '@/components/pages/LoginPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'app-page-login',
      component: LoginPage
    }
  ]
})
