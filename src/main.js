import Vue from 'vue';
import App from './App.vue';
import DummyButton from './plugin.js';
Vue.use(DummyButton);

new Vue({
    el:'#app',
    render: h => h(App)
});