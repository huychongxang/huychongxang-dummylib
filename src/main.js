import Vue from 'vue'
import App from './App.vue'
import DummyButton from './plugin.js';
Vue.config.productionTip = false



Vue.use(DummyButton);
new Vue({
  render: h => h(App),
}).$mount('#app')