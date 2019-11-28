const state = {
    count: 0,
}

const getters = {
    getCount: state =>{
        return `I have been clicked ${state.count} roi ne`;
    }
}

const mutations = {
    SET_COUNT(state){
        state.count += 1;
    }
}

const actions = {

}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions,
};  