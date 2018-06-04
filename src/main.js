// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'semantic-ui-css/semantic.min.js';
import axios from 'axios';

import config from './config'

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    title: 'EEPF | IEEE ODTÜ',
    axiosInstance: undefined
  },
  created () {
    this.$watch('title', (title) => {
      document.title = title
    })

    this.initAxios()
  },
  methods: {
    initAxios () {
      this.axiosInstance = axios.create({
        baseURL: config.api_uri
      })
    }
  }
})
