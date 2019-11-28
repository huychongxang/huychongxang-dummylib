import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import App from './App.vue';
import DummyButton from './plugin.js';

Vue.use(Vuex);
Vue.use(DummyButton,{
    store
});

new Vue({
    el:'#app',
    store,
    render: h => h(App)
});