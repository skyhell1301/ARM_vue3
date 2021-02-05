const state = ()=> ({
    ControllerConnectionStatus: false
})
const mutations = {
    updateControllerConnectionStatus (state, payload) {
        state.windowsList.push(payload)
    },
}
const getters = {
}
const actions = {

    updateControllerConnectionStatus ({commit}, payload) {
        commit('updateControllerConnectionStatus', payload)
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
