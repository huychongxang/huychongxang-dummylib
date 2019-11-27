import DummyButton from './components/DummyButton.vue';
export default DummyButton;
export default {
  install (Vue) {
    Vue.component('dummy-button', DummyButton)
  }
}