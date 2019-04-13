import Vue from 'vue'
import App from './App.vue'
import store from './store' //index.js is automatically assumed if you don't put the file

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')