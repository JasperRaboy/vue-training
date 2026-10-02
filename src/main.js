import Vue from 'vue'
import App from './components/LogIn.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
