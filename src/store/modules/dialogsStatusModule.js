const state = ()=> ({
    antennaSystemStatus: false
})
const mutations = {
    changeAntennaSystemStatus (state, payload) {
        state.antennaSystemStatus = payload
    }
}
const getters = {
}
const actions = {
    changeAntennaSystemStatus ({commit}, payload) {
        commit('changeAntennaSystemStatus', payload)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
