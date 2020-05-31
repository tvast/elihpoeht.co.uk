import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueAgile from 'vue-agile'

import AudioVisual from 'vue-audio-visual'

Vue.use(AudioVisual)

Vue.use(VueAgile)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
