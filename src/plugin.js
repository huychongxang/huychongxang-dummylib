import DummyButton from "./components/DummyButton.vue";
import Other from './components/Other.vue';
// import store from "./store/index.js";
export default {
    install(Vue, options) {
        if (!options || !options.store) {
            throw new Error("Please initialise plugin with a Vuex store");
        }

        // options.store.registerModule("huychongxang-dummylib", store);
        Vue.component("dummy-button", DummyButton);
        Vue.component("dummy-other", Other);
    }
};
