const state = () => ({
    ARM1Status: 'none',
    ARM2Status: 'none',
})
const mutations = {
    setARM1Status(state, payload) {
        state.ARM1Status = payload
    },
    setARM2Status(state, payload) {
        state.ARM2Status = payload

    },
}
const getters = {}
const actions = {
    setARM1Status({commit}, payload) {
        commit('setARM1Status', payload)
    },
    setARM2Status({commit}, payload) {
        commit('setARM2Status', payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
