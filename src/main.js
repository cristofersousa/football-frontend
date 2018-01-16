import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
